import React, { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import { axiosInstance } from '../../config/axiosInstance'

const ListItem = () => {
  const { ID } = useParams()
  const [itemData, setItemData] = useState()
  const [loading, setLoading] = useState(false)


  const getItemData = () => {
    axiosInstance.get(`/invoices/${ID}`)
      .then((response) => {
        setItemData(response.data)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  const deleteItem = (e) => {
    e.preventDefault()
    const id = e.target.getAttribute('value')
    console.log(e.target.value)
    axiosInstance.delete(`item/${id}`)
      .then((response) => {
        toast.success(response.data.message, {
          position: "top-right",
          autoClose: 1000
        })
        setLoading(true)
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
  }, [loading])

  return (
    <>
      {
        itemData?.data?.Item.length > 0 ? (
          <table className='table-invoice text-center' cellPadding="15px">
            <thead>
              <tr>
                <th>Item</th>
                <th>Jumlah</th>
                <th>Harga Satuan</th>
                <th>Total Harga</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {itemData?.data.Item.map((item) => (
                <tr key={item.ID}>
                  <td>{item.name}</td>
                  <td>{item.amount}</td>
                  <td>{item.unit_price.toLocaleString('id-ID', { currency: 'IDR', style: 'currency' })}</td>
                  <td>{item.total_price.toLocaleString('id-ID', { currency: 'IDR', style: 'currency' })}</td>
                  <i className="bi bi-trash3-fill delete-icon__item" onClick={deleteItem} value={item.ID} style={{ color: "red", fontSize: "24px" }}></i>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p style={{ textAlign: "center" }}>Please Add Your Item!</p>
        )}
    </>
  )
}

export default ListItem