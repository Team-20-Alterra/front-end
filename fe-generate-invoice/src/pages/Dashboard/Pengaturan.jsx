import {  AiOutlineCheck } from "react-icons/ai";
import HeaderDashboard from "../../component/DashboardFeature/HeaderDashboard";
import { useState, useEffect } from "react";
import { axiosInstance } from "../../config/axiosInstance";
import { toast } from "react-toastify";
import ButtonAddBank from "../../component/DashboardFeature/ButtonAddBank";

export default function PengaturanPage() {
    const [values, setValues] = useState([])
    const [banks, setBanks] = useState([])

    useEffect(() => {
        axiosInstance.get('/business/user')
            .then((response) => {
                setValues(response.data.data)
            })
    }, [])

    useEffect(() => {
        axiosInstance.get('/list-bank/businness')
            .then((response) => {
                setBanks(response.data.data)
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
                        <div className="form d-flex flex-column mt-2">
                            <label className="d-flex flex-column judul">
                                Nama Bisnis
                            </label>
                            <input
                                className="input"
                                type="text"
                                name="name"
                                placeholder="Nama Bisnis"
                                id="namabisnis"
                                value={values.name}
                                onChange={handleChange}
                            />
                            <div className="mt-4 d-flex flex-row form-part">
                                <div className="form-part-left">
                                    <label className="d-flex flex-column judul">
                                        Email Bisnis
                                    </label>
                                    <input
                                        className="input"
                                        type="text"
                                        name="email"
                                        placeholder="Email Bisnis"
                                        id="emailBisnis"
                                        value={values.email}
                                        onChange={handleChange}
                                    />
                                    <label className="d-flex flex-column mt-4 judul">
                                        No.Telp Bisnis
                                    </label>
                                    <input
                                        className="input "
                                        type="number"
                                        name="no_telp"
                                        placeholder="Nomor Telp"
                                        id="nomorBisnis"
                                        value={values.no_telp}
                                        onChange={handleChange}
                                    />
                                    <label className="d-flex flex-column mt-4 judul">
                                        Jenis Bisnis
                                    </label>
                                    <select
                                        name="type"
                                        id="type"
                                        value={values.type}
                                        onChange={handleChange}
                                        className="input"
                                    >
                                        <option value="" disabled hidden selected>Jenis Bisnis</option>
                                        <option value="Makanan">Makanan</option>
                                        <option value="Minuman">Minuman</option>
                                        <option value="Elektronik">Elektronik</option>
                                        <option value="Finance">Finance</option>
                                    </select>
                                    <label className="d-flex flex-column mt-4 judul">
                                        Alamat
                                    </label>
                                    <textarea
                                        name="address"
                                        id="alamat"
                                        rows="4"
                                        className="rounded w-100"
                                        value={values.address}
                                        onChange={handleChange}
                                    >
                                    </textarea>
                                </div>
                                <div className="form-part-right">
                                    <label className="d-flex flex-column judul">
                                        Pengingat Otomatis
                                    </label>
                                    <select
                                        name="reminder"
                                        id="reminder"
                                        value={values.reminder}
                                        onChange={handleChange}
                                        className="input"
                                    >
                                        <option value="" disabled hidden selected>Pengingat Otomatis</option>
                                        <option value="1 Hari">1 Hari</option>
                                        <option value="5 Hari">5 Hari</option>
                                        <option value="10 Hari">10 Hari</option>
                                        <option value="20 Hari">20 Hari</option>
                                        <option value="30 Hari">30 Hari</option>
                                    </select>
                                    <label className="d-flex flex-column mt-4 judul">
                                        Jatuh Tempo
                                    </label>
                                    <select
                                        name="due_date"
                                        id="tempo"
                                        value={values.due_date}
                                        onChange={handleChange}
                                        className="input"
                                    >
                                        <option value="" disabled hidden selected>Jatuh Tempo</option>
                                        <option value="1 Hari">1 Hari</option>
                                        <option value="7 Hari">7 Hari</option>
                                        <option value="14 Hari">14 Hari</option>
                                        <option value="21 Hari">21 Hari</option>
                                        <option value="30 Hari">30 Hari</option>
                                    </select>
                                    <label className="d-flex flex-column mt-4 judul">
                                        Rekening Terdaftar
                                    </label>
                                    {banks.map((bank) => (
                                        <div className="rekening-content d-flex flex-rows align-items-center mb-4" key={bank.Bank.ID}>
                                            <img src={bank.Bank.logo} alt="" className="img-rekening" />
                                            <div className="rekening-data d-flex flex-column">
                                                <div className="head">{bank.Bank.name}</div>
                                                <div>{bank.account_number}</div>
                                            </div>
                                        </div>
                                    ))}
                                    <ButtonAddBank values={values} />
                                </div>
                            </div>
                        </div>
                        <div className="d-flex flex-column my-4">
                            <input type="file" accept="image/*" className="image-input" onChange={handleChange} name="logo" />
                        </div>
                    </div>
                    <div className="btn-simpan">
                        <button type="submit" className="btn-primary mt-4"><AiOutlineCheck className="me-2" />Simpan</button>
                    </div>
                </form>
            </div>
        </>
    )
}