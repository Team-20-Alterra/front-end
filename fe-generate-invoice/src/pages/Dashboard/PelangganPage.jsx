import React, { useState } from 'react'
import ListPelanggan from '../../component/DashboardFeature/ListPelanggan'
import PelangganEmpty from '../../component/DashboardFeature/PelangganEmpty'
import HeaderDashboard from '../../component/DashboardFeature/HeaderDashboard'
import ButtonAddPelanggan from '../../component/DashboardFeature/ButtonAddPelanggan'
import { useEffect } from 'react'
import { axiosInstance } from '../../config/axiosInstance'
import { toast } from 'react-toastify'

const PelangganPage = () => {
  const [pelanggan, setPelanggan] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    axiosInstance.get('/add-customer/businness')
      .then((response) => {
        setPelanggan(response.data.data)
      })
  }, [loading])

  const handleDeleteUser = (e) => {
    e.preventDefault()
    const id = e.target.getAttribute('value')
    axiosInstance
      .delete(`/add-customer/${id}`)
      .then((response) => {
        if (response.status === 200) {
          toast.success(response.data.message, {
            position: "top-right",
            autoClose: 3000,
          })
          setLoading((prev) => !prev)
        } else {
          toast.error(response.data.message, {
            position: "top-right",
            autoClose: 3000,
          })
        }
      })

  }


  return (
    <div className="container-content">
      <HeaderDashboard name="Pelanggan" />
      {
        pelanggan === [] ? (
          <PelangganEmpty />
        ) : (
          <>
            <div className="subHeader d-flex align-items-center justify-content-between">
              <input type="text" className="search w-25" placeholder="Cari" />
              <ButtonAddPelanggan setLoading={setLoading} />
            </div>
            <ListPelanggan pelanggan={pelanggan} handleDeleteUser={handleDeleteUser} />
          </>
        )
      }
    </div>

  )
}

export default PelangganPage