export default function Admin(){
    return(
        <>
        <div className="admin-header d-flex flex-row justify-content-center">
            <figure>
                <img src="" alt="" className="icon-header" />
                <figcaption className="name-icon text-center mt-3">Atur Invoices</figcaption>
            </figure>
            <figure>
                <img src="" alt="" className="icon-header" />
                <figcaption className="name-icon text-center mt-3">Atur Pelanggan</figcaption>
            </figure>
            <figure>
                <img src="" alt="" className="icon-header" />
                <figcaption className="name-icon text-center mt-3">Notif Pelanggan</figcaption>
            </figure>
        </div>
        <div className="atur-invoices invoices d-flex flex-row justify-content-between">
            <div className="img-post">

            </div>
            <div className="link-atur-invoices">
                <h2 className="title-atur-invoices">Atur Invoices</h2>
                <h4 className="desc">Buat, atur dan kirim semua invoice dari satu tempat saja!.</h4>
            </div>
        </div>
        <div className="atur-pelanggan invoices d-flex flex-row justify-content-between">
            <div className="link-atur-pelanggan">
                <h2 className="title-atur-pelanggan">Atur Pelanggan</h2>
                <h4 className="desc">Atur dan lacak semua pelanggan dan invoice mereka!.</h4>
            </div>
            <div className="img-post">

            </div>
        </div>
        <div className="notif-pelanggan invoices d-flex flex-row justify-content-between">
            <div className="img-post">

            </div>
            <div className="link-notif-pelanggan">
                <h2 className="title-notif-pelanggan">Beritahu Pelanggan</h2>
                <h4 className="desc">Pastikan pelanggan ketahui tentang invoice mereka!.</h4>
            </div>
        </div>
        </>
    )
}