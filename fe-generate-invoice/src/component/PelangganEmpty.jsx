import React from 'react'
import ImgEmpty from '../assets/image/Admin/Pelanggan-Kosong.png'

const PelangganEmpty = () => {
    return (
        <div className="container pt-2">
            <h5>Pelanggan</h5>
            <div className="d-flex justify-content-center align-items-center">
                <img src={ImgEmpty} alt="emptyData" />
            </div>
        </div>
    )
}

export default PelangganEmpty