import { AiOutlinePlus, AiOutlineCheck } from "react-icons/ai";
import HeaderDashboard from "../../component/DashboardFeature/HeaderDashboard";
import { BiPencil } from "react-icons/bi"
import { useState, useEffect } from "react";
import { axiosInstance } from "../../config/axiosInstance";
import { toast } from "react-toastify";

export default function PengaturanPage() {
    const [values, setValues] = useState([])

    useEffect(() => {
        axiosInstance.get('/business/user')
            .then((response) => {
                setValues(response.data.data)
            })
    }, [])


    const handleChange = (event) => {
        setValues({
            ...values,
            [event.target.name]: event.target.value
        })
    }


    const handleEdittingPengaturan = (e) => {
        e.preventDefault()
        const editFormData = new FormData()
        editFormData.append("name", values.name)
        editFormData.append("email", values.email)
        editFormData.append("no_telp", values.no_telp)
        editFormData.append("address", values.address)
        editFormData.append("reminder", values.reminder)
        editFormData.append("due_date", values.due_date)
        editFormData.append("type", values.type)
        editFormData.append("logo", values.logo)
        const config = {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }
        try {
            axiosInstance.put('/business',
                editFormData,
                config
            )
                .then((response) => {
                    toast.success(response.data.message, {
                        position: "top-right",
                        autoClose: 3000
                    })
                })
        } catch (error) {
            toast.error(error.response.data.message, {
                position: "top-right",
                autoClose: 3000
            })
        }
    }
    return (
        <>
            <div className="container-content">
                <HeaderDashboard name="Pengaturan Bisnis" />
                <form className="mb-4" onSubmit={handleEdittingPengaturan}>
                    <div className="d-flex flex-row form-content">
                        <div className="form d-flex flex-column">
                            <label className="d-flex flex-column fs-5">
                                Nama Bisnis
                                <input
                                    className="fs-6 p-2 rounded"
                                    type="text"
                                    name="name"
                                    placeholder="Nama Bisnis"
                                    id="namabisnis"
                                    value={values.name}
                                    onChange={handleChange}
                                />
                            </label>
                            <div className="mt-4 d-flex flex-row form-part">
                                <div className="form-part-left">
                                    <label className="d-flex flex-column mb-4 fs-5">
                                        Email Bisnis
                                        <input
                                            className="fs-6 p-2 rounded"
                                            type="text"
                                            name="email"
                                            placeholder="Email Bisnis"
                                            id="emailBisnis"
                                            value={values.email}
                                            onChange={handleChange}
                                        />
                                    </label>
                                    <label className="d-flex flex-column mb-4 fs-5">
                                        No.Telp Bisnis
                                        <input
                                            className="fs-6 p-2 rounded"
                                            type="number"
                                            name="no_telp"
                                            placeholder="Nomor Telp"
                                            id="nomorBisnis"
                                            value={values.no_telp}
                                            onChange={handleChange}
                                        />
                                    </label>
                                    <label className="d-flex flex-column mb-4 fs-5">
                                        Jenis Bisnis
                                        <select
                                            name="type"
                                            id="type"
                                            value={values.type}
                                            onChange={handleChange}
                                            className="fs-6 p-2 rounded"
                                        >
                                            <option value="" disabled hidden selected>Jenis Bisnis</option>
                                            <option value="Makanan">Makanan</option>
                                            <option value="Minuman">Minuman</option>
                                            <option value="Elektronik">Elektronik</option>
                                            <option value="Finance">Finance</option>
                                        </select>
                                    </label>
                                    <label className="d-flex flex-column mb-4 fs-5">
                                        Alamat
                                        <textarea
                                            name="address"
                                            id="alamat"
                                            rows="6"
                                            className="rounded"
                                            value={values.address}
                                            onChange={handleChange}
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
                                            value={values.reminder}
                                            onChange={handleChange}
                                            className="fs-6 p-2 rounded"
                                        >
                                            <option value="" disabled hidden selected>Pengingat Otomatis</option>
                                            <option value="1 Hari">1 Hari</option>
                                            <option value="5 Hari">5 Hari</option>
                                            <option value="10 Hari">10 Hari</option>
                                            <option value="20 Hari">20 Hari</option>
                                            <option value="30 Hari">30 Hari</option>
                                        </select>
                                    </label>
                                    <label className="d-flex flex-column mb-4 fs-5">
                                        Jatuh Tempo
                                        <select
                                            name="due_date"
                                            id="tempo"
                                            value={values.due_date}
                                            onChange={handleChange}
                                            className="fs-6 p-2 rounded"
                                        >
                                            <option value="" disabled hidden selected>Jatuh Tempo</option>
                                            <option value="1 Hari">1 Hari</option>
                                            <option value="7 Hari">7 Hari</option>
                                            <option value="14 Hari">14 Hari</option>
                                            <option value="21 Hari">21 Hari</option>
                                            <option value="30 Hari">30 Hari</option>
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
                            <input type="file" accept="image/*" className="image-input" onChange={handleChange} name="logo" />
                        </div>
                    </div>
                    <div className="container mb-4">
                        <button type="submit" className="button-pengaturan__simpan"><AiOutlineCheck className="me-2" />Simpan</button>
                    </div>
                </form>
            </div>
        </>
    )
}