import lihatInvoices from "../assets/image/Klien/Akses.png"
import payInvoices from "../assets/image/Klien/Bayar.png"
import notifedInvoices from "../assets/image/Klien/Diberitahu.png"

export default function Client(){
    return(
        <>
        <div className="client-header d-flex flex-row justify-content-center">
            <figure>
                <img src={lihatInvoices} alt="" className="icon-header" />
                <figcaption className="name-icon text-center mt-3">Lihat Invoices</figcaption>
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
        <div className="lihat-invoices invoices d-flex flex-row justify-content-between">
            <div className="img-post">
                
            </div>
            <div className="link-lihat">
                <h2 className="title-lihat">Lihat Invoices</h2>
                <h4 className="desc">Lihat semua invoice hanya dari genggaman tangan mu! Dari invoice yang perlu dibayar hingga yang sudah terbayar.</h4>
            </div>
        </div>
        <div className="bayar-invoices invoices d-flex flex-row justify-content-between">
            <div className="link-bayar">
                <h2 className="title-bayar">Bayar Invoices</h2>
                <h4 className="desc">Bayar invoice mu langsung dari satu aplikasi. Pembayaran dapat dilakukan secara manual atau otomatis!.</h4>
            </div>
            <div className="img-post">

            </div>
        </div>
        <div className="notif-invoices invoices d-flex flex-row justify-content-between">
            <div className="img-post">

            </div>
            <div className="link-notif">
                <h2 className="title-notif">Selalu Diberitahu</h2>
                <h4 className="desc">Ketahui apabila ada invoice baru, tenggat waktu dan yang lainnya!.</h4>
            </div>
        </div>
        </div>
        </>
    )
}