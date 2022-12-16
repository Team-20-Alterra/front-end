import React from 'react'
import RegisterBusinessImage from '../assets/image/Auth/Bisnis-Register.png'
import { useState, useEffect } from 'react';
import { HiOutlinePlus } from 'react-icons/hi'
import Auth from '../utils/Auth/Auth';
import { useNavigate } from 'react-router-dom';
import { axiosInstance } from '../config/axiosInstance';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';

const RegisterBusiness = () => {
  const navigate = useNavigate()
  const { data } = useSelector((state) => state.register)
  const [values, setValues] = useState({
    Name: "",
    Address: "",
    No_Telp: "",
    Type: "",
    Logo: "",
    Account_Number: "",
    bank_id : ""
  })
  const [selectedFile, setSelectedFile] = useState()
  const [preview, setPreview] = useState()
  const [bankData, setBankData] = useState([])

  const handleChange = (event) => {
    setValues({
        ...values,
        [event.target.name] : event.target.value
    })
  }

  const getBankData = () => {
    axiosInstance.get('/banks')
      .then((response) => {
       const dataBank = response.data.data
       setBankData(dataBank)

      })
      .catch((error) => {
      console.log(error)
    })
  }

  useEffect(() => {
    getBankData()
  }, [])

  const onSubmit = (e) => {
    e.preventDefault()
    const registerFormData = new FormData()
    registerFormData.append("Name", values.Name)
    registerFormData.append("Address", values.Address)
    registerFormData.append("No_Telp", values.No_Telp)
    registerFormData.append("Type", values.Type)
    registerFormData.append("Logo", values.Logo)
    registerFormData.append("Account_Number", values.Account_Number)
    registerFormData.append("Owner", data?.newData.Owner)
    registerFormData.append("Email", data?.newData.Email)
    registerFormData.append("Password",data?.newData.Password)
    registerFormData.append("bank_id", values.bank_id)
    
    const config = {
      headers: {
        'Content-Type' : 'multipart/form-data'
      }
    }

     axiosInstance.post('/register/busines',
      registerFormData, 
      config
    ).then((response) => {
      toast.success(response.data.message, {
        position: 'top-right',
        autoClose: 3000
      })
      Auth.storeUserInfoToCookie(response.data.token)
      navigate("/admin")
    })
      .catch((error) => {
        toast.error(error.response.data.message, {
          position: "top-right",
          autoClose: 3000
      })
    })
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
          <form onSubmit={onSubmit} className='register-business__form'>
            <input type="text" placeholder="Nama Bisnis" className='input' name='Name'
            
            onChange={handleChange}
            />
            <input type="text" placeholder="Alamat Bisnis" className='input mt-7' name='Address'
              
              onChange={handleChange}
            />
            
            <input type="text" placeholder="Nomor Telepon" className='input mt-7' name='No_Telp'
              
              onChange={handleChange}
            />
            
            <select name="Type" id="" placeholder="Jenis Bisnis" className='input mt-7'
              
              onChange={handleChange}
            >
              <option value="" disabled selected hidden>
                Jenis Bisnis
              </option>
              <option value="Makanan">Makanan</option>
              <option value="Minuman">Minuman</option>
              <option value="Elektronik">Elektronik</option>
              <option value="Fashion">Fashion</option>
              <option value="Finance">Finance</option>
            </select>

            <select name="bank_id" id="" className='input mt-7'

              onChange={handleChange}
            >
              <option value="" disabled selected hidden>
                Bank
              </option>
              {bankData?.map((item) => (
                <option value={item.ID} key={item.ID}>{item.code} - {item.name}</option>
              ))}
            </select>
            
            
            <input type="text" placeholder="Rekening Bank" className='input mt-7' name='Account_Number'
             
              onChange={handleChange}
            />
            <input type="text" name='Owner' hidden onChange={handleChange}/>
            <input type="text" name='Email' hidden  onChange={handleChange}/>
            <input type="text" name='Password' hidden  onChange={handleChange}/>
           
            <div className="register-business_input-image">
              <div className="label-input_image">
                <label htmlFor="file">Tambah Logo</label>
                <span style={{ marginTop: "3px", color: "#BABABA" }}>
                  <HiOutlinePlus />
                </span>
              </div>
              <input type="file" accept="image/*" className="image-input" onClick={onSelectFile} name="Logo"
                onChange={handleChange}
              />
            </div>
            {selectedFile && <img src={preview} alt={preview} style={{ width: "250px", height: "150px", display: "block", marginLeft: "auto", marginRight: "auto", marginTop: "5px" }} />}
           
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