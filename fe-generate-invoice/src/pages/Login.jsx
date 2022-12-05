import React from 'react'
import loginImage from '../assets/image/Auth/login-image.png';
import { FcGoogle } from 'react-icons/fc'
import { useState } from 'react';
import axios from 'axios'
import Auth from '../utils/Auth/Auth';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import CONST from '../utils/constant/constant';


const Login = () => {
    const navigate = useNavigate()
    const [values, setValues] = useState({
        email: "",
        password: "",
        showPassword: false
    })

    const handleLoginButton = async (event) => {
        event.preventDefault()
        // eslint-disable-next-line no-unused-expressions

        axios.post(`${CONST.BASE_API_URL}/login`, {
            email: values.email,
            password: values.password
        }).then((response) => {
                Auth.storeUserInfoToCookie(response.data.data.token)
                navigate("/admin")
        })
            .catch((error) => {
                toast.error(error.response.data.message, {
                    position: "top-right",
                    autoClose: 3000,
                })
          })
    }

    return (
        <div className="Wrap">
            <div className="containerLogin d-flex flex-column justify-content-center">
                <p className='textGinap text-center'> Ginap</p>
                <div className='d-flex justify-content-center w-100' style={{ marginBottom: "32px" }}>
                    <img src={loginImage} alt="loginImage" />
                </div>
                <form className="containerInput" onSubmit={handleLoginButton}>
                    <input type='email' className="input" placeholder="User ID" onChange={(e) => setValues({ ...values, email: e.target.value })} />
                    <input type="password" className="input mt-1" placeholder="Kata Sandi" onChange={(e) => setValues({ ...values, password: e.target.value })} />
                    <a href='/forget-password' className='forgetPassword' >Lupa kata sandi?</a>
                    <button type="submit" className="btn-primary" id='ButtonMasuk'>Masuk</button>
                </form>
                <div className="text-divider">Atau masuk dengan</div>
                <button type="button" className="btn-secondary" id='ButtonGoogle'><FcGoogle /> Google</button>
                <div className="containerTextRegister">
                    <a href='/register' className='textRegister' >Belum punya akun?</a>
                </div>
            </div>
        </div >
    )
}

export default Login