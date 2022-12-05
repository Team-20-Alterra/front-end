import React from 'react'
import RegisterBusinessImage from '../assets/image/Auth/Bisnis-Register.png'
import { useForm } from "react-hook-form";
import { useState, useEffect } from 'react';
import { HiOutlinePlus } from 'react-icons/hi'

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
      <div className="Wrap">
        <div className="containerLogin d-flex flex-column justify-content-center">
          <h2 className="textGinap text-center mb-4">Ginap</h2>
          <div className='d-flex justify-content-center w-100' style={{ marginBottom: "32px" }}>
            <img src={RegisterBusinessImage} alt="RegisterBusinessImage" />
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input type="text" placeholder="Nama Bisnis" className='input'
              {...register("NamaBisnis", { required: true })}

            />
            <div className='input_error'>
              {errors?.NamaBisnis?.type === "required" && <p><i className="bi bi-exclamation-circle"></i> This field is required!</p>}
            </div>
            <input type="text" placeholder="Alamat Bisnis" className='input mt-7'
              {...register("AlamatBisnis", { required: true })}
            />
            <div className='input_error'>
              {errors?.AlamatBisnis?.type === "required" && <p><i className="bi bi-exclamation-circle"></i> This field is required!</p>}
            </div>
            <input type="text" placeholder="Nomor Telepon" className='input mt-7'
              {...register("NomorTelepon", { required: true })}
            />
            <div className='input_error'>
              {errors?.NomorTelepon?.type === "required" && <p><i className="bi bi-exclamation-circle"></i> This field is required!</p>}
            </div>
            <select name="" id="" placeholder="Jenis Bisnis" className='input mt-7'
              {...register("JenisBisnis", { required: true })}>
              <option value="" disabled selected hidden>
                Jenis Bisnis
              </option>
              <option value="">Makanan</option>
              <option value="">Minuman</option>
            </select>
            <div className='input_error'>
              {errors?.NomorTelepon?.type === "required" && <p><i className="bi bi-exclamation-circle"></i> This field is required!</p>}
            </div>
            <div className="register-business_input-image">
              <div className="label-input_image">
                <label htmlFor="file">Tambah Logo</label>
                <span style={{ marginTop: "3px", color: "#BABABA" }}>
                  <HiOutlinePlus />
                </span>
              </div>
              <input type="file" accept="image/*" className="image-input" onChange={onSelectFile}
              />
            </div>
            {selectedFile && <img src={preview} alt={preview} style={{ width: "250px", height: "150px", display: "block", marginLeft: "auto", marginRight: "auto", marginTop: "5px" }} />}
            <div className='input_error'>
              {errors?.TambahLogo?.type === "required" && <p><i className="bi bi-exclamation-circle"></i> This field is required!</p>}
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