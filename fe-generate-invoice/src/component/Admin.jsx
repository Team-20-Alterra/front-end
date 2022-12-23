import buatInvoice from "../assets/image/Admin/Buat.png"
import aturInvoice from "../assets/image/Admin/Beritahu.png"
import aturPelanggan from "../assets/image/Admin/Buat.png"
import buatInvoiceImg from '../assets/image/Admin/Buat-Invoice.png'
import aturInvoiceImg from '../assets/image/Admin/Atur-Invoice.png'
import aturPelangganImg from '../assets/image/Admin/Atur-Pelanggan.png'

export default function Admin() {
    return (
        <>
            <div className="admin-header d-flex flex-row justify-content-center">
                <figure>
                    <img src={buatInvoice} alt="buatInvoice" className="icon-header" />
                    <figcaption className="name-icon text-center mt-3">Buat Invoices</figcaption>
                </figure>
                <figure>
                    <img src={aturInvoice} alt="aturInvoice" className="icon-header" />
                    <figcaption className="name-icon text-center mt-3">Atur invoice</figcaption>
                </figure>
                <figure>
                    <img src={aturPelanggan} alt="aturPelanggan" className="icon-header" />
                    <figcaption className="name-icon text-center mt-3">Atur Pelanggan</figcaption>
                </figure>
            </div>
            <div className="container">
                <div className="container-fitur-page d-flex flex-row justify-content-around align-items-center">
                    <img src={buatInvoiceImg} alt="aksesInvoiceImg" />
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
                    <img src={aturInvoiceImg} alt="bayarInvoiceImg" />
                </div>
                <div className="container-fitur-page d-flex flex-row justify-content-around align-items-center">
                    <img src={aturPelangganImg} alt="aturPelanggan" />
                    <div className="link-lihat">
                        <h2 className="title">Selalu Diberitahu</h2>
                        <h4 className="desc">Ketahui apabila ada invoice baru, tenggat waktu dan yang lainnya melalui aplikasi atau email!.</h4>
                    </div>
                </div>
            </div>
        </>
    )
}