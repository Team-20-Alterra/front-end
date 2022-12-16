import React, { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import { axiosInstance } from '../../config/axiosInstance'
import { HiPlus } from 'react-icons/hi'
import ButtonAddItem from './ButtonAddItem'
import { useCallback } from 'react'
const ListItem = ({getSubTotal}) => {
  const { ID } = useParams()
  const [itemData, setItemData] = useState()


  const getItemData = useCallback(() => {
    axiosInstance.get(`/invoices/${ID}`)
      .then((response) => {
        setItemData(response.data)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [ID])


  const deleteItem = (e) => {
    e.preventDefault()
    const id = e.target.getAttribute('value')
    axiosInstance.delete(`item/${id}`)
      .then((response) => {
        toast.success(response.data.message, {
          position: "top-right",
          autoClose: 1000
        })
        getSubTotal()
        window.location.reload()
        getItemData()
      })
      .catch((error) => {
        toast.error(error.response.data.message, {
          position: 'top-right',
          autoClose: 1000
        })
      })
  }
  useEffect(() => {
    getItemData()
  }, [])
  
  return (
    <>
    {
        itemData?.data?.Item.length > 0 ? (
          <>
        <table className='table-invoice text-center' cellPadding="15px">
        <thead>
          <tr>
            <th>Item</th>
            <th>Jumlah</th>
            <th>Harga Satuan</th>
            <th>Total Harga</th>
          </tr>
        </thead>
        <tbody>
          {itemData?.data.Item.map((item) => (
            <tr key={item.ID}>
              <td>{item.name}</td>
              <td>{item.amount}</td>
              <td>{item.unit_price.toLocaleString('id-ID', {currency: 'IDR', style: 'currency'})}</td>
              <td>{item.total_price.toLocaleString('id-ID', {currency: 'IDR', style: 'currency'})}</td>
              <i className="bi bi-trash3-fill delete-icon__item" onClick={deleteItem} value={item.ID} style={{color:"red", fontSize:"24px"}}></i>
            </tr>
          ))}
            </tbody>
          </table>
            </>
        ) : (
            <>
            <p style={{ textAlign: "center" }}>Please Add Your Item!</p>  
            </>
        )}
      <ButtonAddItem getItemData={getItemData} />
    </>
  )
}

export default ListItem