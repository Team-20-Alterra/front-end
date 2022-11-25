import React from 'react'
import RegisterImage from '../assets/image/Auth/Login-Register.png'
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';

const RegisterPage = () => {
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();
  const onSubmit = () => {
    navigate("/register-business")
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
                  <div class="register-input">
                    <input
                      type="text"
                      placeholder="Nama Lengkap"
                      {...register("NamaLengkap", { required: true, maxLength: 20, pattern: /^[A-Z a-z]+$/i })}
                    />
                  </div>
                  <div className='register-input_error'>
                    {errors?.NamaLengkap?.type === "required" && <p><i className="bi bi-exclamation-circle"></i> This field is required!</p>}
      {errors?.NamaLengkap?.type === "maxLength" && (
        <p><i className="bi bi-exclamation-circle"></i> First name cannot exceed 20 characters!</p>
                    )}
                    {errors?.NamaLengkap?.type === "pattern" && <p><i className="bi bi-exclamation-circle"></i> Nama Lengkap Harus Berupa Huruf!</p>}
                    </div>
                  <div className="register-input">
                    <input
                      type="email"
                      placeholder="Email"
                      {...register("Email", { required: true, pattern: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/ })}
                    />
                  </div>
                  <div className='register-input_error'>
                    {errors?.Email?.type === "required" && <p><i className="bi bi-exclamation-circle"></i> This field is required!</p>}
                    {errors?.Email?.type === "pattern" && <p><i className="bi bi-exclamation-circle"></i> Alamat Email Tidak Valid!</p>}
                    </div>
                  <div className="register-input"> 
                    <input
                      type="password"
                      placeholder="Password"
                      {...register("Password", { required: true, minLength : 8, maxLength: 20})}
                    />
                  </div>
                  <div className='register-input_error'>
                    {errors?.Password?.type === "required" && <p><i className="bi bi-exclamation-circle"></i> This field is required!</p>}
                    {errors?.Password?.type === "minLength" && <p><i className="bi bi-exclamation-circle"></i> Password length should be at least 8 characters</p>}
                    {errors?.Password?.type === "maxLength" && <p><i className="bi bi-exclamation-circle"></i> Password cannot exceed more than 20 characters</p>}
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