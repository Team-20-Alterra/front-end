import React from 'react'
import ImgEmpty from '../../assets/image/Admin/Pelanggan-Kosong.png'
import ButtonAddPelanggan from './ButtonAddPelanggan'
import HeaderDashboard from './HeaderDashboard'

const PelangganEmpty = () => {
    return (
        <div className="container">
            <div className="containerHeader">
                <HeaderDashboard name="Pelanggan" />
            </div>
            <div className="d-flex justify-content-center align-items-center flex-column">
                <img src={ImgEmpty} alt="emptyData" />
                <ButtonAddPelanggan />
            </div>
        </div>
    )
}

export default PelangganEmpty