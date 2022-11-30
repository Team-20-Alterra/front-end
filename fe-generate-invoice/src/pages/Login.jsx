import React from 'react'
import loginImage from '../assets/image/Auth/login-image.png';
import { FcGoogle } from 'react-icons/fc'
import { useState } from 'react';
import axios from 'axios'


const Login = () => {
    const [values, setValues] = useState({
        email: "",
        password: "",
        showPassword: false
    })

    const handleLoginButton = async (event) => {
        event.preventDefault()
        // eslint-disable-next-line no-unused-expressions

        axios.post("http://ec2-18-181-241-210.ap-northeast-1.compute.amazonaws.com:8000/api/v1/login", {
            email: values.email,
            password: values.password
        }).then((response) => response.data)
            .catch((error) => console.log(error))
    }

    return (
        <div className="loginWrap">
            <div className="containerLogin d-flex flex-column justify-content-center">
                <p className='logoLogin text-center'> Ginap</p>
                <div className='loginImage d-flex justify-content-center'>
                    <img src={loginImage} alt="loginImage" />
                </div>
                <form className="containerInput" onSubmit={handleLoginButton}>
                    <div className="input">
                        <span className="icon"><i className="bi bi-person-fill"></i></span>
                        <input type='email' id="login" placeholder="User ID" onChange={(e) => setValues({...values, email : e.target.value})}/>
                    </div>
                    <div className="input">
                        <span className="icon"><i className="bi bi-lock-fill"></i></span>
                        <input type="password" id="login" placeholder="Kata Sandi" onChange={(e) => setValues({...values, password : e.target.value})} />
                    </div>
                    <input type="submit" />
                </form>
                <a href='/' className='forgetPassword' >Lupa kata sandi?</a>
                <button type="button" className="btn-primary" id='ButtonMasuk'>Masuk</button>
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