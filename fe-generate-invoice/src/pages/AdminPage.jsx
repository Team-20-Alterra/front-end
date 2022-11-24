import React from 'react'
import Sidebar from '../component/Sidebar'
import Navbar from '../component/Navbar'
import PelangganEmpty from '../component/PelangganEmpty'

const AdminPage = () => {
    return (
        <div className="container-fluid p-0">
            <div className="d-flex">
                <Sidebar />
                <div className="flex-column w-100">
                    <Navbar />
                    <PelangganEmpty />
                </div>
            </div>
        </div>
    )
}

export default AdminPage;