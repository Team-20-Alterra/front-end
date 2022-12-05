import React, { useState } from 'react'
import RegisterImage from '../assets/image/Auth/Login-Register.png'
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { registerAdminFirstStep } from '../store/RegisterFirstStep';
import { useEffect } from 'react';
import { AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/ai'


const RegisterPage = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const {loading, error, success} = useSelector((state) => state.first)
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors }
  } = useForm();

  // useEffect(() => {
  //   if (success) {
  //     navigate('/register-business')
  //   }
  // }, [navigate, success])

  const onSubmit = (data) => {
    dispatch(registerAdminFirstStep(data))
  };
  return (
    <div className="Wrap">
      <div className="containerLogin d-flex flex-column justify-content-center">
        <h2 className='textGinap text-center mb-4'>Ginap</h2>
        <div className='d-flex justify-content-center w-100' style={{ marginBottom: "32px" }}>
          <img src={RegisterImage} alt="RegisterImage" />
        </div>
        <form className="" onSubmit={handleSubmit(onSubmit)}>
          <input
            type="text"
            className='input'
            placeholder="Nama Lengkap"
            {...register("NamaLengkap", { required: true, maxLength: 20, pattern: /^[A-Z a-z]+$/i })}
          />
          <div className='input_error'>
            {errors?.NamaLengkap?.type === "required" && <p><i className="bi bi-exclamation-circle"></i> This field is required!</p>}
            {errors?.NamaLengkap?.type === "maxLength" && (
              <p><i className="bi bi-exclamation-circle"></i> First name cannot exceed 20 characters!</p>
            )}
            {errors?.NamaLengkap?.type === "pattern" && <p><i className="bi bi-exclamation-circle"></i> Nama Lengkap Harus Berupa Huruf!</p>}
          </div>
          <input
            type="email"
            className='input mt-7'
            placeholder="Email"
            {...register("Email", { required: true, pattern: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/ })}
          />
          <div className='input_error'>
            {errors?.Email?.type === "required" && <p><i className="bi bi-exclamation-circle"></i> This field is required!</p>}
            {errors?.Email?.type === "pattern" && <p><i className="bi bi-exclamation-circle"></i> Alamat Email Tidak Valid!</p>}
          </div>
          <div className="inputChangePassword">
            <span className="icon mt-1" onClick={() => setShowPassword(prev => !prev)}>{showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}</span>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Kata Sandi"
              className="input mt-7"
              {...register("password", { required: true, minLength: 8, pattern: /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]/i })}
            />
          </div>
          <div className='input_error mb-1'>
            {errors?.password?.type === "required" && <p><i className="bi bi-exclamation-circle"></i> This field is required!</p>}
            {errors?.password?.type === "minLength" && <p><i className="bi bi-exclamation-circle"></i> Harus minimal 8 karakter</p>}
            {errors?.password?.type === "pattern" && <p><i className="bi bi-exclamation-circle"></i> Gunakan huruf kapital, huruf kecil dan angka numerik</p>}
          </div>
          <h1 className='textDetailSandi m-0'>Kata sandi minimal 8 karakter. Gunakan huruf kapital, huruf kecil dan angka numerik.</h1>
          <button className='btn-primary mt-3' type='submit' id='ButtonBerikutnya'>Berikutnya</button>
        </form>
        <h6 style={{ textAlign: "center", marginTop: "32px", fontSize: "14px", marginBottom: "0" }}>Sudah punya akun? <a href="/login" style={{ color: "#297061", fontWeight: "bold", textDecoration: "underline" }}>Masuk</a></h6>
      </div >
    </div >
  );
}

export default RegisterPage