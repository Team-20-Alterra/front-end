import Header from "../component/Header"
import dapatkanAplikasi from '../assets/image/Dapatkan-Aplikasi.png'
import { DiAndroid } from 'react-icons/di'
import Footer from "../component/Footer"

export default function GetApp() {
    return (
        <>
            <Header name="Ginap" />
            <div className="container mb-5">
                <div className="get-app d-flex flex-row">
                    <img src={dapatkanAplikasi} alt="dapatkanAplikasi" />
                    <div className="align-self-center">
                        <div className="d-flex flex-column" style={{ width: "80%", gap: "32px" }}>
                            <div className="title-getApp">
                                Dapatkan aplikasinya sekarang
                            </div>
                            <div className="button-getApp text-center d-flex flex-row align-items-center">
                                <div className="logo-android">
                                    <DiAndroid size={40} />
                                </div>
                                <p>Dapatkan Sekarang <span className="pstore">Playstore</span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}