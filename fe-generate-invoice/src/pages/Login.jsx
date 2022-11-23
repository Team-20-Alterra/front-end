import React from 'react'
import loginImage from '../assets/image/login-image.png';
import { FcGoogle } from 'react-icons/fc'

const Login = () => {
    return (
        <div className="loginWrap">
            <div className="containerLogin d-flex flex-column justify-content-center">
                <p className='logoLogin text-center'> Ginap</p>
                <div className='loginImage d-flex justify-content-center'>
                    <img src={loginImage} alt="loginImage" />
                </div>
                <div className="containerInput">
                    <div className="input">
                        <span className="icon"><i className="bi bi-person-fill"></i></span>
                        <input type="text" id="login" placeholder="User ID" />
                    </div>
                    <div className="input">
                        <span className="icon"><i className="bi bi-lock-fill"></i></span>
                        <input type="text" id="login" placeholder="Kata Sandi" />
                    </div>
                </div>
                <a href='/' className='forgetPassword' >Lupa kata sandi?</a>
                <button type="button" className="btn-primary">Masuk</button>
                <div className="text-divider">Atau masuk dengan</div>
                <button type="button" className="btn-secondary"><FcGoogle /> Google</button>
                <div className="containerTextRegister">
                    <a href='/register' className='textRegister' >Belum punya akun?</a>
                </div>
            </div>
        </div >
    )
}

export default Login