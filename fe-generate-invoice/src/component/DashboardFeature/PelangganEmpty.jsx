import React from 'react'
import ImgEmpty from '../../assets/image/Admin/Pelanggan-Kosong.png'
import ButtonAddPelanggan from '../ButtonAddPelanggan'

const PelangganEmpty = () => {
    return (
        <div className="container">
            <div className="containerHeader">
                <p className='textHeader'>Pelanggan</p>
            </div>
            <div className="d-flex justify-content-center align-items-center flex-column">
                <img src={ImgEmpty} alt="emptyData" />
                <ButtonAddPelanggan />
            </div>
        </div>
    )
}

export default PelangganEmpty