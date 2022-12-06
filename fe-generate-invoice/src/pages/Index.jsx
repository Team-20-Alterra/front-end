import Header from "../component/Header"
import { useState } from "react"
import { Link } from "react-router-dom";
import heroImg from '../assets/image/hero.png'
import Admin from "../component/Admin";
import Client from "../component/Client";

export default function Home() {
    const tipeUser = ["klien", "admin"];
    const [myShow, setShow] = useState('klien')
    return (
        <>
            <Header name="Ginap" />
            <div className="hero container d-flex flex-row justify-content-between">
                <div className="hero-left">
                    <h1 className="mb-4">Get Invoice Get Ginap</h1>
                    <div className="hero-subjudul">
                        <h3>Ginap ada untuk memudahkan anda menuliskan tagihan kepada pelanggan.</h3>
                        <div className="hero-detail">Tuliskan Tagihanmu, sehatkan keuangan bisnismu</div>
                    </div>
                    <div className="hero-button d-flex flex-row ">
                        <Link to="/register"><div className="navLink signup">Daftar</div></Link>
                        <Link to="/getapp"><div className="navLink login">Dapatkan Aplikasi</div></Link>
                    </div>
                </div>
                <img src={heroImg} alt="hero" />
            </div>
            <div className="main" id="fitur">
                <div className="container-fluid bg-fitur text-center">
                    <div className="title-main">Ginap</div>
                    <div className="desc-title-main container">
                        {myShow === "admin" && "Bagi para kamu admin, aplikasi ini memberikan kemudahan bagi kamu untuk menuliskan tagihan kepada para pelanggan kamu. Hanya dengan memasukkan nomer ID pelanggan, kamu sudah mendapatkan data dari para pelangganmu... Gampang kan..."}
                        {myShow === "klien" && "Bagi kamu para pengguna aplikasi pinjaman online, Aplikasi ini akan memberikan kamu metode pembayaran baru sesuai tanggal tanpa harus terlilit hutang, jadi kamu bisa beli barang apapun yang kamu mau tanpa harus nunggu gajian dan tanpa terlilit hutang."}
                    </div>
                    <div className="options-tab container">
                        {tipeUser.map(tipeUser => (
                            <button
                                type="button"
                                key={tipeUser}
                                className={tipeUser === myShow ? "client-admin active" : "client-admin"}
                                onClick={() => setShow(tipeUser)}
                            >
                                {tipeUser.toLocaleUpperCase()}
                            </button>
                        ))}
                    </div>
                </div>
                <div>
                    {myShow === "admin" && (<Admin />)}
                    {myShow === "klien" && (<Client />)}
                </div>
            </div>
        </>
    )
}