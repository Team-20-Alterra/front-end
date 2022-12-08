import { AiOutlineCheck, AiOutlinePlus } from "react-icons/ai";
import { BiPencil } from "react-icons/bi"
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";

export default function ButtonEditPengaturan() {

  const [selectedFile, setSelectedFile] = useState()
    const [preview, setPreview] = useState()
    
    const {
        register,
        handleSubmit,
        formState: { errors }
      } = useForm();
    
    
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

    const handleEdittingBusiness = (data) => {
        
    }
    return (
        <>
            <button className='btn-primary pelanggan' data-bs-toggle="modal" data-bs-target="#exampleModal"><BiPencil className="me-2" />Edit Data</button>
            <div className="modal fade modal-xl" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Edit Data Bussines</h1>
                        </div>
                        <div className="modal-body">
                            <h6>User ID</h6>
                            <form className="container mb-4" onSubmit={handleSubmit(handleEdittingBusiness)}>
                                <div className="d-flex flex-row form-content">
                                    <div className="form d-flex flex-column">
                                        <label className="d-flex flex-column fs-5">
                                            Nama Bisnis
                                            <input
                                                className="fs-6 p-2 mt-3 rounded"
                                                type="text"
                                                placeholder="Nama Bisnis"
                                                id="namabisnis"
                                                {...register("Name", { required: false})}
                                            />
                                        </label>
                                        <div className="mt-4 d-flex flex-row form-part">
                                            <div className="form-part-left">
                                                <label className="d-flex flex-column mb-4 fs-5">
                                                    Email Bisnis
                                                    <input
                                                        className="fs-6 p-2 mt-3 rounded"
                                                        type="text"
                                                        placeholder="Email Bisnis"
                                                        id="emailBisnis"
                                                        {...register("Email", { required: false})}
                                                    />
                                                </label>
                                                <label className="d-flex flex-column mb-4 fs-5">
                                                    No.Telp Bisnis
                                                    <input
                                                        className="fs-6 p-2 mt-3 rounded"
                                                        type="number"
                                                        placeholder="Nomor Telp"
                                                        id="nomorBisnis"
                                                        {...register("No_telp", { required: false})}
                                                    />
                                                </label>
                                                <label className="d-flex flex-column mb-4 fs-5">
                                                    Jenis Bisnis
                                                    <select
                                                        name="jenisBisnis"
                                                        id="jenisBisnis"
                                                        className="fs-6 p-2 mt-3 rounded"
                                                        {...register("Type", { required: false})}>
                                                        <option value="" disabled selected hidden>Jenis Bisnis</option>
                                                        <option value="Minuman"> Minuman</option>
                                                        <option value="Makanan"> Makanan</option>
                                                        <option value="Elektronik"> Elektronik</option>
                                                        <option value="Finance"> Finance</option>
                                                        <option value="Fashion">Fashion</option>
                                                    </select>
                                                </label>
                                                <label className="d-flex flex-column mb-4 fs-5">
                                                    Alamat
                                                    <textarea
                                                        name="alamat"
                                                        id="alamat"
                                                        rows="6"
                                                        className="rounded"
                                                        {...register("Address", { required: false})}
                                                    >
                                                    </textarea>
                                                </label>
                                            </div>
                                            <div className="form-part-right">
                                                <label className="d-flex flex-column mb-4 fs-5">
                                                    Pengingat Otomatis
                                                    <select
                                                        name="reminder"
                                                        id="reminder"
                                                        className="fs-6 p-2 mt-3 rounded"
                                                        {...register("Reminder", { required: false})}  
                                                    >
                                                        <option value="" disabled selected hidden>Pengingat Otomatis</option>
                                                        <option value="1">1 Hari</option>
                                                        <option value="5">5 Hari</option>
                                                        <option value="10">10 Hari</option>
                                                        <option value="20">20 Hari</option>
                                                        <option value="30">30 Hari</option>
                                                    </select>
                                                </label>
                                                <label className="d-flex flex-column mb-4 fs-5">
                                                    Jatuh Tempo
                                                    <select
                                                        name="tempo"
                                                        id="tempo"
                                                        className="fs-6 p-2 mt-3 rounded"
                                                        {...register("Due_Date", { required: false})}
                                                    >
                                                        <option value="" disabled selected hidden>Jatuh Tempo</option>
                                                        <option value="1">1 Hari</option>
                                                        <option value="7">7 Hari</option>
                                                        <option value="14">14 Hari</option>
                                                        <option value="21">21 Hari</option>
                                                        <option value="30">30 Hari</option>
                                                    </select>
                                                </label>
                                                <label className="d-flex flex-column mb-4 fs-5">
                                                    Rekening Terdaftar
                                                </label>
                                                <div className="rekening-content d-flex flex-rows mb-4">
                                                    <img src="" alt="" />
                                                    <div className="rekening-data d-flex flex-column">
                                                        <p>Nama Pemilik Rekening</p>
                                                        <p>091181515</p>
                                                    </div>
                                                </div>
                                                <div className="add-rekening"><AiOutlinePlus className="me-2" />Daftar Rekening</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="d-flex flex-column my-4">
                                    <label htmlFor="">Logo
                                            <input type="file" accept="image/*" className="image-input" {...register("Logo", { required: false})} onClick={onSelectFile}
                            />
                        </label>
                        {selectedFile && <img src={preview} alt={preview} style={{ width: "250px", height: "150px", display: "block", marginLeft: "auto", marginRight: "auto", marginTop: "5px" }} />}
                                    </div>
                                </div>
                                <div className="form-submit rounded p-3">
                                    <button type="submit" style={{border: "none", background:"transparent", color:"white"}}><AiOutlineCheck className="me-2" />Simpan</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}