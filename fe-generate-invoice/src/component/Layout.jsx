import React from 'react'
import Sidebar from '../component/Sidebar'
import Navbar from '../component/Navbar'
import { Outlet } from 'react-router-dom'

const Layout = () => {
    return (
        <div className="container-fluid p-0">
            <div className="d-flex">
                <Sidebar />
                <div className="flex-column w-100">
                    <Navbar />
                    <Outlet/>
                </div>
            </div>
        </div>
    )
}

export default Layout;