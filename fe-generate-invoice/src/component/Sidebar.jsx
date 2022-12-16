/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react'
import { HiOutlineHome, HiOutlinePencil, HiOutlineUser, HiClock } from 'react-icons/hi'
import { HiOutlineCog6Tooth } from 'react-icons/hi2'
import { Link, NavLink, useParams } from 'react-router-dom'
import { axiosInstance } from '../config/axiosInstance';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import InvoicePage from '../pages/Dashboard/InvoicePage';
import PengaturanPage from '../pages/Dashboard/Pengaturan';
import Cookies from 'js-cookie';
import { toast } from 'react-toastify';

const sidebar = () => {
    const navigate = useNavigate()
    const handleAddInvoice = () => {
        const config = {
            headers: {
            Authorization: `Bearer ${Cookies.get("cookiename")}`
        }
    }
        axiosInstance.post('/invoices', config)
            .then((response) => {
                navigate(`invoice/${response.data.IdInvoice}`)
                return <InvoicePage />
            })
            .catch((error) => {
                toast.error(error.response.data.message, {
                    position: "top-right",
                    autoClose: "3000"
            })
        })
    }
    return (
        <div className="d-flex flex-column align-items-center sticky-top containerSidebar" >
            <span className="adminLogo">Ginap</span>
            <div className="d-flex flex-column nav nav-pills w-100 h-100" >
                <NavLink
                    to={"beranda"}
                    className={({ isActive }) =>
                        isActive ? 'nav-link active' : 'nav-link'
                    }
                >
                    <div className="containerMenu d-flex align-items-center">
                        <HiOutlineHome className='iconMenu text-light' /> <span className='text-light'>Beranda</span>
                    </div>
                </NavLink>
                <NavLink
                    onClick={handleAddInvoice}
                    className={({ isActive }) =>
                        isActive ?
                            'nav-link active' : 'nav-link'
                    }
                >
                    <div className="containerMenu d-flex align-items-center">
                        <HiOutlinePencil className='iconMenu' /> <span>Invoice</span>
                    </div>
                </NavLink>
                <NavLink
                    to={"pelanggan"}
                    className={({ isActive }) =>
                        isActive ? 'nav-link active' : 'nav-link'
                    }
                >
                    <div className="containerMenu d-flex align-items-center">
                        <HiOutlineUser className='iconMenu text-light' /> <span className='text-light'>Pelanggan</span>
                    </div>
                </NavLink>
                <NavLink
                    to={"riwayat"}
                    className={({ isActive }) =>
                        isActive ? 'nav-link active' : 'nav-link'
                    }
                >
                    <div className="containerMenu d-flex align-items-center">
                        <HiClock className='iconMenu' /> <span>Riwayat</span>
                    </div>
                </NavLink>
                <NavLink
                    to={'pengaturan'}
                    className={({ isActive }) =>
                        isActive ? 'nav-link active mt-auto' : 'nav-link mt-auto'
                    }
                >
                    <div className="containerMenu d-flex align-items-center">
                        <HiOutlineCog6Tooth className='iconMenu' /> <span>Pengaturan</span>
                    </div>
                </NavLink>
            </div>
        </div >
    )
}

export default sidebar