import React from 'react'
import RegisterImage from '../assets/image/register-image.png'

const RegisterPage = () => {
    return (
      <div className="register-container" style={{ backgroundColor: "#297061", height: "100vh" }}>
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-xl-4">
              <div className="card rounded-5">
                <img src={RegisterImage} alt="register" style={{ width: "220px", height: "220px", margin: "0 auto", marginTop: "20px"}} />

                <form className="mt-3">
                  <div class="register-input input-group mb-3 ms-3" style={{ width: "90%" }}>
                    <span  className="input-group-text"><input type="checkbox" className='register-input-checkbox'/></span> 
                    <input
                    
                      type="text"
                      class="form-control"
                      placeholder="Nama Lengkap"
                      aria-label="Username"
                      aria-describedby="basic-addon1"
                    />
                  </div>

                  <div class="register-input input-group mb-3 ms-3" style={{ width: "90%" }}>
                    <span  className="input-group-text"><input type="checkbox" className='register-input-checkbox'/></span> 
                    <input
                    
                      type="text"
                      class="form-control"
                      placeholder="Nomor Telepon"
                      aria-label="Username"
                      aria-describedby="basic-addon1"
                    />
                  </div>

                  <div class="register-input input-group mb-3 ms-3" style={{ width: "90%" }}>
                    <span  className="input-group-text"><input type="checkbox" className='register-input-checkbox'/></span> 
                    <input
                    
                      type="text"
                      class="form-control"
                      placeholder="Email"
                      aria-label="Username"
                      aria-describedby="basic-addon1"
                    />
                  </div>

                  <div class="register-input input-group mb-3 ms-3" style={{ width: "90%" }}>
                    <span className="input-group-text"><input type="checkbox" className='register-input-checkbox'/></span> 
                    <input
                    
                      type="text"
                      class="form-control"
                      placeholder="Password"
                      aria-label="Username"
                      aria-describedby="basic-addon1"
                    />
                  </div>

                  <div class="register-input input-group mb-3 ms-3" style={{ width: "90%" }}>
                    <span  className="input-group-text"><input type="checkbox" className='register-input-checkbox'/></span> 
                    <input
                    
                      type="text"
                      class="form-control"
                      placeholder="Konfirmasi Password"
                      aria-label="Username"
                      aria-describedby="basic-addon1"
                    />
                  </div>
                </form>
                <button className='register-button'>Buat Akun</button>
                <h6 style={{textAlign:"center", marginTop:"40px", marginBottom:"50px"}}>Sudah punya akun? <a href="/login" style={{color:"#297061", fontWeight:"bold"}}>Masuk</a></h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default RegisterPage