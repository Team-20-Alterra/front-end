import { AiOutlineCheck, AiOutlinePlus } from "react-icons/ai";
import { BiPencil } from "react-icons/bi"
import HeaderDashboard from "../../component/DashboardFeature/HeaderDashboard";

export default function PengaturanPage() {
    return (
        <>
            <div className="container">
                <HeaderDashboard name="Pengaturan Bisnis" />
            </div>
            <form className="container mb-4">
                <div className="d-flex flex-row form-content">
                    <div className="form d-flex flex-column">
                        <label className="d-flex flex-column fs-5">
                            Nama Bisnis
                            <input
                                className="fs-6 p-2 mt-3 rounded"
                                type="text"
                                placeholder="Nama Bisnis"
                                id="namabisnis"
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
                                    />
                                </label>
                                <label className="d-flex flex-column mb-4 fs-5">
                                    No.Telp Bisnis
                                    <input
                                        className="fs-6 p-2 mt-3 rounded"
                                        type="number"
                                        placeholder="Nomor Telp"
                                        id="nomorBisnis"
                                    />
                                </label>
                                <label className="d-flex flex-column mb-4 fs-5">
                                    Jenis Bisnis
                                    <select
                                        name="jenisBisnis"
                                        id="jenisBisnis"
                                        className="fs-6 p-2 mt-3 rounded">
                                        <option value="individual">Individual Freelancing</option>
                                        <option value="individual">Individual Freelancing</option>
                                        <option value="individual">Individual Freelancing</option>
                                        <option value="individual">Individual Freelancing</option>
                                    </select>
                                </label>
                                <label className="d-flex flex-column mb-4 fs-5">
                                    Alamat
                                    <textarea
                                        name="alamat"
                                        id="alamat"
                                        rows="6"
                                        className="rounded"
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
                                        className="fs-6 p-2 mt-3 rounded">
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
                                        className="fs-6 p-2 mt-3 rounded">
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
                        <img className="p-profil mb-4" src="" alt="" />
                        <div className="profil-edit rounded p-3 text-center">
                            <BiPencil className="me-2" />Edit
                        </div>
                    </div>
                </div>
                <div className="form-submit rounded p-3">
                    <div onSubmit=""><AiOutlineCheck className="me-2" />Simpan</div>
                </div>
            </form>
        </>
    )
}