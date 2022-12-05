import React from 'react'
import RegisterBusinessImage from '../assets/image/Auth/Bisnis-Register.png'
import { useForm } from "react-hook-form";
import { useState, useEffect } from 'react';
const RegisterBusiness = () => {
  const [selectedFile, setSelectedFile] = useState()
  const [preview, setPreview] = useState()
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();
  const onSubmit = (data) => {
    alert(JSON.stringify(data))
  };

  // create a preview as a side effect, whenever selected file is changed
  useEffect(() => {
      if (!selectedFile) {
          setPreview(undefined)
          return
      }

      const objectUrl = URL.createObjectURL(selectedFile)
      setPreview(objectUrl)

      // free memory when ever this component is unmounted
      return () => URL.revokeObjectURL(objectUrl)
  }, [selectedFile])

  const onSelectFile = e => {
      if (!e.target.files || e.target.files.length === 0) {
          setSelectedFile(undefined)
          return
      }

      // I've kept this example simple by using the first image instead of multiple
      setSelectedFile(e.target.files[0])
  }
    return (
      <>
        <div className="register-business_container" style={{ backgroundColor: "#70A096", height: "120vh" }}>
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

                  <form className="mt-3" onSubmit={handleSubmit(onSubmit)}>
                    <div class="register-business_input">
                      <input type="text" placeholder="Nama Bisnis"
                        {...register("NamaBisnis", { required: true })}
                        
                      />
                    </div>
                    <div className='register-business_error'>
                        {errors?.NamaBisnis?.type === "required" && <p><i className="bi bi-exclamation-circle"></i> This field is required!</p>}
                    </div>
                    <div class="register-business_input">
                      <input type="text" placeholder="Alamat Bisnis"
                        {...register("AlamatBisnis", { required: true})}
                      />
                    </div>
                    <div className='register-business_error'>
                        {errors?.AlamatBisnis?.type === "required" && <p><i className="bi bi-exclamation-circle"></i> This field is required!</p>}
                    </div>
                    <div class="register-business_input">
                      <input type="text" placeholder="Nomor Telepon"
                        {...register("NomorTelepon", { required: true})}
                      />
                    </div>
                    <div className='register-business_error'>
                        {errors?.NomorTelepon?.type === "required" && <p><i className="bi bi-exclamation-circle"></i> This field is required!</p>}
                    </div>
                    <div class="register-business_input">
                      <select name="" id="" placeholder="Jenis Bisnis"
                      {...register("JenisBisnis", { required: true})}>
                        <option value="" disabled selected hidden>
                          Jenis Bisnis
                        </option>
                        <option value="">Makanan</option>
                        <option value="">Minuman</option>
                        <option value="">Elektronik</option>
                        <option value="">Finance</option>
                        <option value="">Fashion</option>
                      </select>
                      <div className='register-business_error'>
                        {errors?.NomorTelepon?.type === "required" && <p><i className="bi bi-exclamation-circle"></i> This field is required!</p>}
                    </div>
                    </div>
                    <div class="register-business_input-image">
                      <div className="label-input_image">
                        <label htmlFor="file">Tambah Logo</label>
                        <span style={{marginTop: "10px"}}>
                          <i class="bi bi-plus"></i>
                        </span>
                      </div>
                      <input type="file" accept="image/*" className="image-input" onChange={onSelectFile}
                      />
                    </div>
                    {selectedFile && <img src={preview} alt={preview} style={{ width: "250px", height: "150px", display:"block", marginLeft:"auto", marginRight:"auto", marginTop:"5px" }} />}
                    <div className='register-business_error'>
                        {errors?.TambahLogo?.type === "required" && <p><i className="bi bi-exclamation-circle"></i> This field is required!</p>}
                    </div>
                    <button className="register-business_button" type="submit" id="ButtonMulai">
                    Mulai
                  </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
}

export default RegisterBusiness