import aksesInvoice from "../assets/image/Klien/Akses.png"
import payInvoices from "../assets/image/Klien/Bayar.png"
import notifedInvoices from "../assets/image/Klien/Diberitahu.png"
import aksesInvoiceImg from '../assets/image/Klien/akses-img.png'
import bayarInvoiceImg from '../assets/image/Klien/bayar-img.png'
import selaluDiberitahuImg from '../assets/image/Klien/diberitahu-img.png'

export default function Client() {
    return (
        <>
            <div className="client-header d-flex flex-row justify-content-center">
                <figure>
                    <img src={aksesInvoice} alt="" className="icon-header" />
                    <figcaption className="name-icon text-center mt-3">Akses Invoices</figcaption>
                </figure>
                <figure>
                    <img src={payInvoices} alt="" className="icon-header" />
                    <figcaption className="name-icon text-center mt-3">Bayar Invoices</figcaption>
                </figure>
                <figure>
                    <img src={notifedInvoices} alt="" className="icon-header" />
                    <figcaption className="name-icon text-center mt-3">Selalu Diberitahu</figcaption>
                </figure>
            </div>
            <div className="container">
                <div className="container-fitur-page d-flex flex-row justify-content-around align-items-center">
                    <img src={aksesInvoiceImg} alt="aksesInvoiceImg" />
                    <div className="link-lihat">
                        <h2 className="title">Akses Invoices</h2>
                        <h4 className="desc">Lihat semua invoice hanya dari genggaman tangan mu! Dari invoice yang perlu dibayar hingga yang sudah terbayar.</h4>
                    </div>
                </div>
                <div className="container-fitur-page d-flex flex-row justify-content-around align-items-center">
                    <div className="link-lihat">
                        <h2 className="title">Bayar Invoices</h2>
                        <h4 className="desc">Bayar invoice mu langsung dari satu aplikasi. Pembayaran dapat dilakukan secara manual atau otomatis!.</h4>
                    </div>
                    <img src={bayarInvoiceImg} alt="bayarInvoiceImg" />
                </div>
                <div className="container-fitur-page d-flex flex-row justify-content-around align-items-center">
                    <img src={selaluDiberitahuImg} alt="selaluDiberitahuImg" />
                    <div className="link-lihat">
                        <h2 className="title">Selalu Diberitahu</h2>
                        <h4 className="desc">Ketahui apabila ada invoice baru, tenggang waktu dan yang lainnya melalui aplikasi atau email!.</h4>
                    </div>
                </div>
            </div>
        </>
    )
}