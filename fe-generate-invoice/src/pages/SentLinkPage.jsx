import React from 'react'
import { useLocation } from 'react-router-dom';
import forgetPasswordImage from '../assets/image/Auth/forget-password.png';
import { hiddenEmail } from '../utils/hiddenEmail';

const SentLinkPage = () => {
    const { state } = useLocation();

    return (
        <div className="Wrap">
            <div className="containerForget d-flex flex-column justify-content-center">
                <p className='textGinap text-center'> Ginap</p>
                <div className='d-flex justify-content-center w-100'>
                    <img src={forgetPasswordImage} alt="forgetPasswordImage" />
                </div>
                <div className="textForgetPass">Link untuk mengubah kata sandi sudah dikirim ke <strong>{hiddenEmail(state.email)}</strong></div>

            </div>
        </div >
    )
}

export default SentLinkPage