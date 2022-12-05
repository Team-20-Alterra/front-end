import React from 'react'
import RegisterImage from '../assets/image/Auth/Login-Register.png'
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { registerAdminFirstStep } from '../store/RegisterFirstStep';
import { useEffect } from 'react';

const RegisterPage = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const {loading, error, success} = useSelector((state) => state.first)
  const {
    register,
    handleSubmit,
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
      <div className="register-container" style={{ backgroundColor: "#70A096", height: "100vh" }}>
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-xl-4 col-sm-6 col-md-5">
              <div className="card rounded-5">
                <h2 className='app-name_register'>Ginap</h2>
                <img src={RegisterImage} alt="register" style={{ width: "220px", height: "220px", margin: "0 auto", marginTop: "30px", marginBottom: "20px"}} />

                <form className="mt-3" onSubmit={handleSubmit(onSubmit)}>
                  <div className="register-input">
                    <input
                      type="text"
                      placeholder="Full Name"
                      {...register("name", { required: true, maxLength: 20, pattern: /^[A-Z a-z]+$/i })}
                    />
                  </div>
                  <div className='register-input_error'>
                    {errors?.name?.type === "required" && <p><i className="bi bi-exclamation-circle"></i> This field is required!</p>}
      {errors?.name?.type === "maxLength" && (
        <p><i className="bi bi-exclamation-circle"></i> Full Name cannot exceed 20 characters!</p>
                    )}
                    {errors?.name?.type === "pattern" && <p><i className="bi bi-exclamation-circle"></i> Nama Lengkap Harus Berupa Huruf!</p>}
                    </div>
                  <div className="register-input">
                    <input
                      type="email"
                      placeholder="Email"
                      {...register("email", { required: true, pattern: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/ })}
                    />
                  </div>
                  <div className='register-input_error'>
                    {errors?.email?.type === "required" && <p><i className="bi bi-exclamation-circle"></i> This field is required!</p>}
                    {errors?.email?.type === "pattern" && <p><i className="bi bi-exclamation-circle"></i> Alamat Email Tidak Valid!</p>}
                    </div>
                  <div className="register-input"> 
                    <input
                      type="password"
                      placeholder="Password"
                      {...register("password", { required: true, minLength : 8, maxLength: 20})}
                    />
                  </div>
                  <div className='register-input_error'>
                    {errors?.password?.type === "required" && <p><i className="bi bi-exclamation-circle"></i> This field is required!</p>}
                    {errors?.password?.type === "minLength" && <p><i className="bi bi-exclamation-circle"></i> password length should be at least 8 characters</p>}
                    {errors?.password?.type === "maxLength" && <p><i className="bi bi-exclamation-circle"></i> Password cannot exceed more than 20 characters</p>}
                  </div>
                <button className='register-button' type='submit' id='ButtonBerikutnya'>Berikutnya</button>
                </form>
                <h6 style={{textAlign:"center", marginTop:"40px", marginBottom:"50px", fontSize:"14px"}}>Sudah punya akun? <a href="/login" style={{color:"#297061", fontWeight:"bold"}}>Masuk</a></h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default RegisterPage