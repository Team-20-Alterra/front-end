import { AiOutlinePlus } from "react-icons/ai";
import HeaderDashboard from "../../component/DashboardFeature/HeaderDashboard";
import ButtonEditPengaturan from "../../component/DashboardFeature/ButtonEditPengaturan1";
import { useSelector } from "react-redux";
import { useEffect } from "react";
export default function PengaturanPage() {
    
    return (
        <>
            <div className="container-content">
                <HeaderDashboard name="Pengaturan Bisnis" />
            </div>
                <div className="d-flex flex-row form-content">
                    <div className="form d-flex flex-column">
                        <label className="d-flex flex-column fs-5">
                            Nama Bisnis
                        </label>
                    <p></p>
                        <div className="mt-4 d-flex flex-row form-part">
                            <div className="form-part-left">
                                <label className="d-flex flex-column mb-4 fs-5">
                                    Email Bisnis
                                </label>
                            <p>.</p>
                                <label className="d-flex flex-column mb-4 fs-5">
                                    No.Telp Bisnis
                                </label>
                            <p>.</p>
                                <label className="d-flex flex-column mb-4 fs-5">
                                    Jenis Bisnis
                                </label>
                            <p>.</p>
                                <label className="d-flex flex-column mb-4 fs-5">
                                    Alamat
                                </label>
                            <p>.</p>
                            </div>
                            <div className="form-part-right">
                                <label className="d-flex flex-column mb-4 fs-5">
                                    Pengingat Otomatis
                                </label>
                            <p>.</p>
                                <label className="d-flex flex-column mb-4 fs-5">
                                    Jatuh Tempo
                                </label>
                            <p>.t</p>
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
                            <img src="" alt="" />
                        </label>
                    </div>
                </div>
                <div className="form-submit rounded p-3">
                    <ButtonEditPengaturan/>
                </div>
        </>
    )
}