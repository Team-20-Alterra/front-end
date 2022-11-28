import React from 'react'
import { HiFilter } from "react-icons/hi"
import RiwayatEmpty from '../../component/DashboardFeature/RiwayatEmpty'

const RiwayatPage = () => {
  return (
      <div className='riwayat-page__container'>
          <h2 className='riwayat-heading'>Riwayat</h2>
          <div className='riwayat-page__navbar'>
              <ul>
                  <li>
                      <a href="/">Semua</a>
                  </li>
                  <li>
                      <a href="/">Selesai</a>
                  </li>
                  <li>
                      <a href="/">On Proses</a>
                  </li>
                  <li>
                      <a href="/">Pending</a>
                  </li>
                  <li>
                      <a href="/">Gagal</a>
                  </li>
              </ul>
          </div>
          <div className='riwayat-page__searchbar'>
              <input type="text" placeholder='Cari' />
              <button><HiFilter className='filter-icon'/>Filter</button>
          </div>
          <div className='riwayat-page__empty'>
              <RiwayatEmpty/>
          </div>
      </div>
  )
}

export default RiwayatPage