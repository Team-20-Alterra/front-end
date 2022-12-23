import React from 'react'
import SuccessChangePassword from '../assets/image/Auth/Success-Change-Password.png';

const SuccessChangePasswordPage = () => {
    return (
        <div className="Wrap">
            <div className="containerForget d-flex flex-column justify-content-center">
                <p className='textGinap text-center'> Ginap</p>
                <div className='d-flex justify-content-center w-100'>
                    <img src={SuccessChangePassword} alt="SuccessChangePassword" />
                </div>
                <div className="textForgetPass">Kata sandi berhasil diubah! Silahkan masuk menggunakan kata sandi yang baru.</div>
                <a href='/login' className="successChange btn-primary mt-2 text-center">Masuk</a>
            </div>
        </div >
    )
}

export default SuccessChangePasswordPage