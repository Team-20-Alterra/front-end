import React from 'react'
import ListPelanggan from '../../component/DashboardFeature/ListPelanggan'
import PelangganEmpty from '../../component/DashboardFeature/PelangganEmpty'
import HeaderDashboard from '../../component/DashboardFeature/HeaderDashboard'
import ButtonAddPelanggan from '../../component/DashboardFeature/ButtonAddPelanggan'

const PelangganPage = () => {
  return (
    <div className="container">
      <HeaderDashboard name="Pelanggan" />
      <div className="subHeader d-flex align-items-center justify-content-between">
        <input type="text" className="search w-25" placeholder="Cari" />
        <ButtonAddPelanggan />
      </div>
      <ListPelanggan />
    </div>

  )
}

export default PelangganPage