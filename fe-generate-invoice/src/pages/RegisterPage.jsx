import React from 'react'
import RegisterImage from '../assets/image/Auth/Login-Register.png'
import { Link } from 'react-router-dom';

const RegisterPage = () => {
    return (
      <div className="register-container" style={{ backgroundColor: "#70A096", height: "100vh" }}>
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-xl-4 col-sm-6 col-md-5">
              <div className="card rounded-5">
                <h2 className='app-name_register'>Ginap</h2>
                <img src={RegisterImage} alt="register" style={{ width: "220px", height: "220px", margin: "0 auto", marginTop: "30px", marginBottom: "20px"}} />

                <form className="mt-3">
                  <div class="register-input"> 
                    <input
                      type="text"
                      placeholder="Nama Lengkap"
                    />
                  </div>
                  <div class="register-input">
                    <input
                      type="email"
                      placeholder="Email"
                    />
                  </div>
                  <div class="register-input"> 
                    <input
                      type="password"
                      placeholder="Password"
                    />
                  </div>
                </form>
                <Link to={'/register-business'}>
                <button className='register-button' type='button' id='ButtonBerikutnya'>Berikutnya</button>
                </Link>
                <h6 style={{textAlign:"center", marginTop:"40px", marginBottom:"50px", fontSize:"14px"}}>Sudah punya akun? <a href="/login" style={{color:"#297061", fontWeight:"bold"}}>Masuk</a></h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default RegisterPage