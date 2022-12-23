import React from 'react'
import ImgEmpty from '../../assets/image/Admin/Pelanggan-Kosong.png'
import ButtonAddPelanggan from './ButtonAddPelanggan'

const PelangganEmpty = () => {
    return (
        <div className="d-flex justify-content-center align-items-center flex-column">
            <img src={ImgEmpty} alt="emptyData" />
            <p className='pelanggan-empty'>
                <span>Belum Ada Invoice Yang Dibuat</span>
                Buat invoice untuk bertransaksi dengan pelangganmu!
            </p>
            <ButtonAddPelanggan />
        </div>
    )
}

export default PelangganEmpty