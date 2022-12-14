import React from 'react'
import RiwayatKosong from '../../assets/image/Admin/History-Empty.png'
import { HiPencil } from "react-icons/hi"
import { HiFilter } from "react-icons/hi"

const RiwayatEmpty = () => {
  return (
    <>
      <div className='riwayat-page__navbar'>
        <ul>
          <li>
            <a>Semua</a>
          </li>
          <li>
            <a>Selesai</a>
          </li>
          <li>
            <a>On Proses</a>
          </li>
          <li>
            <a>Pending</a>
          </li>
          <li>
            <a>Gagal</a>
          </li>
        </ul>
      </div>
      <div className='riwayat-page__searchbar'>
        <input type="text" placeholder='Cari' disabled />
        <button className='filter-icon' disabled><HiFilter size={24} />Filter</button>
      </div>
      <div className="d-flex justify-content-center align-items-center flex-column riwayat-kosong__container">
        <img src={RiwayatKosong} alt="Riwayat Kosong" />
        <p className='riwayat-kosong__heading'><span>Belum Ada Invoice Yang Dibuat</span><br />Buat invoice untuk bertransaksi dengan pelangganmu!</p>
        <button className='invoice-icon'><HiPencil size={24} />Invoice</button>
      </div>
    </>
  )
}

export default RiwayatEmpty