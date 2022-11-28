import React from 'react'
import Sidebar from '../component/Sidebar'
import Navbar from '../component/Navbar'
import BerandaPage from '../pages/Dashboard/BerandaPage';
import PelangganPage from '../pages/Dashboard/PelangganPage';
import PengaturanPage from '../pages/Dashboard/Pengaturan';
import { Outlet, Route, Routes } from 'react-router-dom'
import RiwayatPage from '../pages/Dashboard/RiwayatPage';
import InvoicePage from '../pages/Dashboard/InvoicePage';

const Layout = () => {
    return (
        <div className="container-fluid p-0">
            <div className="d-flex">
                <Sidebar />
                <div className="flex-column w-100">
                    <Navbar />
                    <Outlet />
                    <Routes>
                        <Route path='beranda' element={<BerandaPage />} />
                        <Route path='invoice' element={<InvoicePage />} />
                        <Route path='pelanggan' element={<PelangganPage />} />
                        <Route path='pengaturan' element={<PengaturanPage />} />
                        <Route path='riwayat' element={<RiwayatPage />} />
                    </Routes>
                </div>
            </div>
        </div>
    )
}

export default Layout;