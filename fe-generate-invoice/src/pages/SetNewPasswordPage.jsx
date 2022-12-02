import React, { useState } from 'react'
import forgetPasswordImage from '../assets/image/Auth/forget-password.png';
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/ai'
import axios from 'axios'


const SetNewPasswordPage = () => {
    const navigate = useNavigate()
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const { register, handleSubmit, setError, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        if (data.password !== data.passwordConfirm) {
            setError("passwordConfirm", {
                type: "match",
                message: "Password Tidak Sama"
            });
        } else {
            axios.patch("http://ec2-18-181-241-210.ap-northeast-1.compute.amazonaws.com:8000/api/v1//resetPassword/:resetToken", {
                password: data.password,
                passwordConfirm: data.passwordConfirm,
            })
                .then((res) => {
                    if (res.status === 200) {
                        toast.success(res.data.message, {
                            position: "top-right",
                            autoClose: 3000,
                        })
                        navigate("/sent-link")
                    } else {
                        toast.error(res.data.message, {
                            position: "top-right",
                            autoClose: 3000,
                        })
                    }

                })
                .catch((error) => {
                    console.log(error)
                })
        }
    };

    return (
        <div className="Wrap">
            <div className="containerNewPass d-flex flex-column justify-content-center">
                <p className='textGinap text-center'> Ginap</p>
                <div className='d-flex justify-content-center w-100'>
                    <img src={forgetPasswordImage} alt="forgetPasswordImage" />
                </div>
                <div className="textForgetPass">Masukkan kata sandi baru. Kata sandi minimal 8 karakter. Gunakan huruf kapital, huruf kecil dan angka numerik.</div>
                <form className="containerInput" onSubmit={handleSubmit(onSubmit)}>
                    <div className="inputChangePassword">
                        <span className="icon" onClick={() => setShowPassword(prev => !prev)}>{showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}</span>
                        <input
                            type={showPassword ? "text" : "password"}
                            placeholder="Kata Sandi Baru"
                            className="register"
                            {...register("password", { required: true, minLength: 8, pattern: /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]/i })}
                        />
                    </div>
                    <div className='input_error mb-2'>
                        {errors?.password?.type === "required" && <p><i className="bi bi-exclamation-circle"></i> This field is required!</p>}
                        {errors?.password?.type === "minLength" && <p><i className="bi bi-exclamation-circle"></i> Harus minimal 8 karakter</p>}
                        {errors?.password?.type === "pattern" && <p><i className="bi bi-exclamation-circle"></i> Gunakan huruf kapital, huruf kecil dan angka numerik</p>}
                    </div>
                    <div className="inputChangePassword">
                        <span className="icon" onClick={() => setShowConfirmPassword(prev => !prev)}>{showConfirmPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}</span>
                        <input
                            type={showConfirmPassword ? "text" : "password"}
                            placeholder="Konfirmasi Kata Sandi Baru"
                            className="register"
                            {...register("passwordConfirm", { required: true })}
                        />
                    </div>
                    <div className='input_error'>
                        {errors?.passwordConfirm?.type === "required" && <p><i className="bi bi-exclamation-circle"></i> This field is required!</p>}
                        {errors?.passwordConfirm?.type === "pattern" && <p><i className="bi bi-exclamation-circle"></i> Password Tidak Valid!</p>}
                        {errors?.passwordConfirm?.type === "match" && <p><i className="bi bi-exclamation-circle"></i> {errors.passwordConfirm.message}</p>}
                    </div>
                    <button type="submit" className="btn-primary mt-3">Lanjut</button>
                </form>
            </div>
        </div >
    )
}

export default SetNewPasswordPage