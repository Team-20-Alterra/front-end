import React from 'react'
import RegisterBusinessImage from '../assets/image/Auth/Bisnis-Register.png'
const RegisterBusiness = () => {
    return (
      <>
        <div className="register-business_container" style={{ backgroundColor: "#70A096", height: "100vh" }}>
          <div className="container py-5 h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-xl-4 col-sm-6 col-md-5">
                <div className="card rounded-5">
                  <h2 className="app-name_registerbusiness">Ginap</h2>
                  <img
                    src={RegisterBusinessImage}
                    alt="register"
                    style={{ width: "220px", height: "220px", margin: "0 auto", marginTop: "15px", marginBottom:"20px" }}
                  />

                  <form className="mt-3">
                    <div class="register-business_input">
                      <input type="text" placeholder="Nama Bisnis" />
                    </div>
                    <div class="register-business_input">
                      <input type="text" placeholder="Alamat Bisnis" />
                    </div>
                    <div class="register-business_input">
                      <input type="email" placeholder="Nomor Telepon" />
                    </div>
                    <div class="register-business_input">
                      <select name="" id="" placeholder="Jenis Bisnis">
                        <option value="" disabled selected hidden>
                          Jenis Bisnis
                        </option>
                        <option value="">Makanan</option>
                        <option value="">Minuman</option>
                      </select>
                    </div>
                    <div class="register-business_input-image">
                      <div className="label-input_image">
                        <label htmlFor="file">Tambah Logo</label>
                        <span style={{marginTop: "10px"}}>
                          <i class="bi bi-plus"></i>
                        </span>
                      </div>
                      <input type="file" accept="image/*" className="image-input" />
                    </div>
                  </form>
                  <button className="register-business_button" type="button" id="ButtonMulai">
                    Mulai
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
}

export default RegisterBusiness