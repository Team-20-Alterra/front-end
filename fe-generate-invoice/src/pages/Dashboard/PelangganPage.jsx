import React, { useState } from 'react'
import ListPelanggan from '../../component/DashboardFeature/ListPelanggan'
import PelangganEmpty from '../../component/DashboardFeature/PelangganEmpty'
import HeaderDashboard from '../../component/DashboardFeature/HeaderDashboard'
import ButtonAddPelanggan from '../../component/DashboardFeature/ButtonAddPelanggan'
import { useEffect } from 'react'
import { axiosInstance } from '../../config/axiosInstance'
import { toast } from 'react-toastify'

const PelangganPage = () => {
  const [empty, setEmpty] = useState(false)
  const [pelanggan, setPelanggan] = useState([])
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState("")

  useEffect(() => {
    axiosInstance.get('/add-customer/businness')
      .then((response) => {
        if (response.data.data === null) {
          setEmpty(true)
        } else {
          setPelanggan(response.data.data)
        }
      })
  }, [loading])
  console.log(pelanggan)

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
        empty ? (
          <PelangganEmpty />
        ) : (
          <>
            <div className="subHeader d-flex align-items-center justify-content-between">
              <input 
                type="text" 
                className="search w-25" 
                placeholder="Cari"
                onChange={(event) => {
                  setSearch(event.target.value);
                }} 
              />
              <ButtonAddPelanggan setLoading={setLoading} />
            </div>
            <ListPelanggan search={search} pelanggan={pelanggan} handleDeleteUser={handleDeleteUser} />
          </>
        )
      }
    </div>

  )
}

export default PelangganPage