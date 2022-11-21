import React from 'react'
import RegisterImage from '../assets/image/register-image.png'

const RegisterPage = () => {
    return (
      <div className="register-container" style={{ backgroundColor: "#297061", height: "100vh" }}>
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-xl-4 col-sm-6 col-md-5">
              <div className="card rounded-5">
                <img src={RegisterImage} alt="register" style={{ width: "220px", height: "220px", margin: "0 auto", marginTop: "20px"}} />

                <form className="mt-3">
                  <div class="register-input">
                    <span><i class="bi bi-person-fill"></i></span> 
                    <input
                      type="text"
                      placeholder="Nama Lengkap"
                    />
                  </div>
                  <div class="register-input">
                    <span><i class="bi bi-telephone-fill"></i></span> 
                    <input
                      type="text"
                      placeholder="Nomor Telepon"
                    />
                  </div>
                  <div class="register-input">
                    <span><i class="bi bi-envelope-open-fill"></i></span> 
                    <input
                      type="email"
                      placeholder="Email"
                    />
                  </div>
                  <div class="register-input">
                    <span><i class="bi bi-key-fill"></i></span> 
                    <input
                      type="password"
                      placeholder="Password"
                    />
                  </div>
                  <div class="register-input">
                    <span><i class="bi bi-key-fill"></i></span> 
                    <input
                      type="password"
                      placeholder="Konfirmasi Password"
                    />
                  </div>
                </form>
                <button className='register-button' type='button'>Buat Akun</button>
                <h6 style={{textAlign:"center", marginTop:"40px", marginBottom:"50px", fontSize:"12px"}}>Sudah punya akun? <a href="/login" style={{color:"#297061", fontWeight:"bold"}}>Masuk</a></h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default RegisterPage