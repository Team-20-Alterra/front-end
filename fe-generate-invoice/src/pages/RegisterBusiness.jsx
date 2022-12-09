import React from 'react'
import RegisterBusinessImage from '../assets/image/Auth/Bisnis-Register.png'
import { useForm } from "react-hook-form";
import { useState, useEffect } from 'react';
import { HiOutlinePlus } from 'react-icons/hi'
import Auth from '../utils/Auth/Auth';
import { useNavigate } from 'react-router-dom';
import { axiosInstance } from '../config/axiosInstance';

const RegisterBusiness = () => {
  const navigate = useNavigate()
  const [values, setValues] = useState({
    name: "",
    address: "",
    no_telp: "",
    type: "",
    logo: "",
    owner: "",
    account_number: ""
    
  })
  const [selectedFile, setSelectedFile] = useState()
  const [preview, setPreview] = useState()
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();
  const onSubmit = () => {
    const registerFormData = new FormData()
    registerFormData.append("name", values.name)
    registerFormData.append("address", values.address)
    registerFormData.append("no_telp", values.no_telp)
    registerFormData.append("type", values.type)
    registerFormData.append("logo", values.logo)
    registerFormData.append("account_number", values.account_number)
    registerFormData.append("owner", values.owner)
    
    const config = {
      headers: {
        'Content-Type' : 'multipart/form-data'
      }
    }

     axiosInstance.post('/business',
      registerFormData, 
      config
    ).then((response) => {
      console.log(response)
    })
      .catch((error) => {
      console.log(error)
    })

    // navigate("/login")
  };

  useEffect(() => {
    if (!selectedFile) {
      setPreview(undefined)
      return
    }
    const objectUrl = URL.createObjectURL(selectedFile)
    setPreview(objectUrl)
    return () => URL.revokeObjectURL(objectUrl)
  }, [selectedFile])

  const onSelectFile = e => {
    if (!e.target.files || e.target.files.length === 0) {
      setSelectedFile(undefined)
      return
    }
    setSelectedFile(e.target.files[0])
  }
  return (
    <>
      <div className="Wrap">
        <div className="containerLogin d-flex flex-column justify-content-center">
          <h2 className="textGinap text-center mb-4">Ginap</h2>
          <div className='d-flex justify-content-center w-100' style={{ marginBottom: "32px" }}>
            <img src={RegisterBusinessImage} alt="RegisterBusinessImage" />
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input type="text" placeholder="Nama Bisnis" className='input' name='name'
              {...register("name", { required: true })}

            />
            <div className='input_error'>
              {errors?.name?.type === "required" && <p><i className="bi bi-exclamation-circle"></i> This field is required!</p>}
            </div>
            <input type="text" placeholder="Alamat Bisnis" className='input mt-7' name='address'
              {...register("address", { required: true })}
            />
            <div className='input_error'>
              {errors?.address?.type === "required" && <p><i className="bi bi-exclamation-circle"></i> This field is required!</p>}
            </div>
            <input type="text" placeholder="Nomor Telepon" className='input mt-7' name='no_telp'
              {...register("no_telp", { required: true })}
            />
            <div className='input_error'>
              {errors?.no_telp?.type === "required" && <p><i className="bi bi-exclamation-circle"></i> This field is required!</p>}
            </div>
            <select name="type" id="" placeholder="Jenis Bisnis" className='input mt-7' 
              {...register("type", { required: true })}>
              <option value="" disabled selected hidden>
                Jenis Bisnis
              </option>
              <option value="Makanan">Makanan</option>
              <option value="Minuman">Minuman</option>
              <option value="Elektronik">Elektronik</option>
              <option value="Fashion">Fashion</option>
              <option value="Finance">Finance</option>
            </select>
            <div className='input_error'>
              {errors?.type?.type === "required" && <p><i className="bi bi-exclamation-circle"></i> This field is required!</p>}
            </div>
            <input type="text" placeholder="Owner" className='input mt-7' name='owner'
              {...register("owner", { required: true })}
            />
            <div className='input_error'>
              {errors?.account_number?.type === "required" && <p><i className="bi bi-exclamation-circle"></i> This field is required!</p>}
            </div>
            <input type="text" placeholder="Rekening Bank" className='input mt-7' name='account_number'
              {...register("account_number", { required: true })}
            />
            <div className='input_error'>
              {errors?.account_number?.type === "required" && <p><i className="bi bi-exclamation-circle"></i> This field is required!</p>}
            </div>
            <input type="text" placeholder="Kode Bank" className='input mt-7' name='code'
              {...register("code", { required: true })}
            />
            <div className='input_error'>
              {errors?.code?.type === "required" && <p><i className="bi bi-exclamation-circle"></i> This field is required!</p>}
            </div>
            <div className="register-business_input-image">
              <div className="label-input_image">
                <label htmlFor="file">Tambah Logo</label>
                <span style={{ marginTop: "3px", color: "#BABABA" }}>
                  <HiOutlinePlus />
                </span>
              </div>
              <input type="file" accept="image/*" className="image-input" onClick={onSelectFile} {...register("logo", { required: false })} name="logo"
              />
            </div>
            {selectedFile && <img src={preview} alt={preview} style={{ width: "250px", height: "150px", display: "block", marginLeft: "auto", marginRight: "auto", marginTop: "5px" }} />}
            <div className='input_error'>
              {errors?.logo?.type === "required" && <p><i className="bi bi-exclamation-circle"></i> This field is required!</p>}
            </div>
            <button className="btn-primary" type="submit" id="ButtonMulai" style={{ marginTop: "26px" }}>
              Mulai
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default RegisterBusiness