import React from 'react'
import forgetPasswordImage from '../assets/image/Auth/forget-password.png';
import { useForm } from "react-hook-form";
import axios from 'axios'


const SetNewPasswordPage = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        axios.post("http://ec2-18-181-241-210.ap-northeast-1.compute.amazonaws.com:8000/api/v1/forgot-password", {
            password: data.newPassword,
        }).then((response) => response.data)
            .catch((error) => console.log(error))
    };
    console.log(errors);

    return (
        <div className="Wrap">
            <div className="containerNewPass d-flex flex-column justify-content-center">
                <p className='textGinap text-center'> Ginap</p>
                <div className='d-flex justify-content-center w-100'>
                    <img src={forgetPasswordImage} alt="forgetPasswordImage" />
                </div>
                <div className="textForgetPass">Masukkan kata sandi baru. Kata sandi minimal 8 karakter. Gunakan huruf kapital, huruf kecil dan angka numerik.</div>
                <form className="containerInput" onSubmit={handleSubmit(onSubmit)}>
                    <input
                        type="password"
                        placeholder="Kata Sandi Baru"
                        className="input"
                        {...register("password", { required: true })}
                    />
                    <div className='input_error'>
                        {errors?.email?.type === "required" && <p><i className="bi bi-exclamation-circle"></i> This field is required!</p>}
                        {errors?.email?.type === "pattern" && <p><i className="bi bi-exclamation-circle"></i> Password Tidak Valid!</p>}
                    </div>
                    <input
                        type="password"
                        placeholder="Konfirmasi Kata Sandi Baru"
                        className="input mt-1"
                        {...register("newPassword", { required: true })}
                    />
                    <div className='input_error'>
                        {errors?.confirmEmail?.type === "required" && <p><i className="bi bi-exclamation-circle"></i> This field is required!</p>}
                        {errors?.confirmEmail?.type === "pattern" && <p><i className="bi bi-exclamation-circle"></i> Password Tidak Valid!</p>}
                    </div>
                    <button type="submit" className="btn-primary mt-3" id>Lanjut</button>
                </form>
            </div>
        </div >
    )
}

export default SetNewPasswordPage