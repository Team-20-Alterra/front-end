import React from 'react'
import forgetPasswordImage from '../assets/image/Auth/forget-password.png';
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';
import axios from 'axios'


const ForgetPasswordPage = () => {
    const { register, handleSubmit, setError, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        if (data.email !== data.confirmEmail) {
            setError("confirmEmail", {
                type: "match",
                message: "Email Tidak Sama"
            });
        } else {
            axios.post("http://ec2-18-181-241-210.ap-northeast-1.compute.amazonaws.com:8000/api/v1/forgot-password", {
                email: data.email,
            })
                .then((res) => {
                    console.log(res)
                    toast.success('success add product to cart', {
                        position: "top-center",
                        autoClose: 3000,
                    })
                })
                .catch((error) => console.log(error))
        }
    };
    console.log(errors);

    return (
        <div className="Wrap">
            <div className="containerForget d-flex flex-column justify-content-center">
                <p className='textGinap text-center'> Ginap</p>
                <div className='d-flex justify-content-center w-100'>
                    <img src={forgetPasswordImage} alt="forgetPasswordImage" />
                </div>
                <div className="textForgetPass">Masukkan email yang terdaftar untuk mendapatkan link untuk mengganti password.</div>
                <form className="containerInput" onSubmit={handleSubmit(onSubmit)}>
                    <input
                        type="email"
                        placeholder="Email"
                        className="input"
                        {...register("email", { required: true, pattern: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/ })}
                    />
                    <div className='input_error'>
                        {errors?.email?.type === "required" && <p><i className="bi bi-exclamation-circle"></i> This field is required!</p>}
                        {errors?.email?.type === "pattern" && <p><i className="bi bi-exclamation-circle"></i> Alamat Email Tidak Valid!</p>}
                    </div>
                    <input
                        type="email"
                        placeholder="Konfirmasi Email"
                        className="input mt-1"
                        {...register("confirmEmail", { required: true, pattern: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/ })}
                    />
                    <div className='input_error'>
                        {errors?.confirmEmail?.type === "required" && <p><i className="bi bi-exclamation-circle"></i> This field is required!</p>}
                        {errors?.confirmEmail?.type === "pattern" && <p><i className="bi bi-exclamation-circle"></i> Alamat Email Tidak Valid!</p>}
                        {errors?.confirmEmail?.type === "match" && <p><i className="bi bi-exclamation-circle"></i> {errors.confirmEmail.message}</p>}
                    </div>
                    <button type="submit" className="btn-primary mt-3" id>Lanjut</button>
                </form>
            </div>
        </div >
    )
}

export default ForgetPasswordPage