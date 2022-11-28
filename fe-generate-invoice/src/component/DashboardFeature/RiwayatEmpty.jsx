import React from 'react'
import  RiwayatKosong  from '../../assets/image/Admin/History-Empty.png'
import { HiPencil } from "react-icons/hi"

const RiwayatEmpty = () => {
  return (
      <>
          <div className="d-flex justify-content-center align-items-center flex-column riwayat-kosong__container">
              <img src={RiwayatKosong} alt="Riwayat Kosong" />
              <p className='riwayat-kosong__heading'><span>Belum Ada Invoice Yang Dibuat</span><br/>Buat invoice untuk bertransaksi dengan pelangganmu!</p>
             <button><HiPencil className='invoice-icon'/>Invoice</button>
            </div>
      </>
  )
}

export default RiwayatEmpty