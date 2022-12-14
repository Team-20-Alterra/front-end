import React from 'react'
import loginImage from '../assets/image/Auth/login-image.png';
import { FcGoogle } from 'react-icons/fc'
import { useState } from 'react';
import Auth from '../utils/Auth/Auth';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useForm } from "react-hook-form";
import { AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/ai'
import { axiosInstance } from '../config/axiosInstance';




const Login = () => {
    const navigate = useNavigate()
    const [showPassword, setShowPassword] = useState(false);
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        axiosInstance.post('/login/admin', {
            email: data.email,
            password: data.password
        })
            .then((response) => {
                    Auth.storeUserInfoToCookie(response.data.data.token)
                    navigate('/admin') 
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
                <h2 className='textGinap text-center mb-4'> Ginap</h2>
                <div className='d-flex justify-content-center w-100' style={{ marginBottom: "32px" }}>
                    <img src={loginImage} alt="loginImage" />
                </div>
                <form className="containerInput" onSubmit={handleSubmit(onSubmit)}>
                    <input
                        type="email"
                        placeholder="Email"
                        className="input"
                        name='email'
                        {...register("email", { required: true, pattern: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/ })}
                    />
                    <div className='input_error'>
                        {errors?.email?.type === "required" && <p><i className="bi bi-exclamation-circle"></i> No Empty Email Required!</p>}
                        {errors?.email?.type === "pattern" && <p><i className="bi bi-exclamation-circle"></i> Alamat Email Tidak Valid!</p>}
                    </div>
                    <div className="inputChangePassword">
                        <span className="icon" style={{ marginTop: "12px" }}
                            onClick={() => setShowPassword(prev => !prev)}>{showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
                        </span>
                        <input
                            type={showPassword ? "text" : "password"}
                            placeholder="Password"
                            className="register mt-7"
                            {...register("password", { required: true })}
                        />
                    </div>
                    <div className='input_error mb-2'>
                        {errors?.password?.type === "required" && <p><i className="bi bi-exclamation-circle"></i> No Empty Password Required!</p>}
                    </div>
                    <a href='/forget-password' className='forgetPassword mt-1' >Lupa kata sandi?</a>
                    <button type="submit" className="btn-primary" id='ButtonMasuk'>Masuk</button>
                </form>
                <div className="text-divider">Atau masuk dengan</div>
                <button type="button" className="btn-secondary" id='ButtonGoogle'><FcGoogle /> Google</button>
                <a href='/register' className='textRegister text-center' >Belum punya akun?</a>
            </div>
        </div >
    )
}

export default Login