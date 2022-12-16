import React from 'react'

function Footer() {
    return (
        <div className="footer">
            <div className="container">
                <footer>
                    <div className="row justify-content-center">
                        <div className="col-md-3 d-flex align-items-center">
                            <div className="ginap-footer">Ginap</div>
                        </div>
                        <div className="col-6 col-md-2 me-3">
                            <ul className="nav flex-column">
                                <li className="nav-item mb-2 head-footer">Perusahaan</li>
                                <li className="nav-item mb-2">Tentang Kita</li>
                                <li className="nav-item mb-2">Hubungi Kita</li>
                            </ul>
                        </div>

                        <div className="col-6 col-md-2 me-4">
                            <ul className="nav flex-column">
                                <li className="mb-2 head-footer">Bantuan</li>
                                <li className="nav-item mb-2">FAQ</li>
                                <li className="nav-item mb-2">Customer Support</li>
                            </ul>
                        </div>

                        <div className="col-6 col-md-2">
                            <ul className="nav flex-column">
                                <li className="nav-item mb-2 head-footer">Product</li>
                                <li className="nav-item mb-2">Daftar Akun</li>
                                <li className="nav-item mb-2">Dapatkan Aplikasi</li>
                            </ul>
                        </div>
                    </div>

                    <div className="d-flex flex-column flex-sm-row justify-content-center border-top">
                        <p className="text-copy">&copy; Copyright GINAP 2022</p>
                    </div>
                </footer>
            </div>
        </div>
    )
}

export default Footer