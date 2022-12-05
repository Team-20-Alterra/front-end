import React from 'react'
import { HiOutlineHome, HiOutlinePencil, HiOutlineUser, HiClock } from 'react-icons/hi'
import { HiOutlineCog6Tooth } from 'react-icons/hi2'
import { Link, NavLink } from 'react-router-dom'

const sidebar = () => {
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
                    to={"invoice"}
                    className={({ isActive }) =>
                        isActive ? 'nav-link active' : 'nav-link'
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
                    to={"pengaturan"}
                    className={({ isActive }) =>
                        isActive ? 'nav-link active mt-auto' : 'nav-link mt-auto'
                    }
                >
                    <div className="containerMenu d-flex align-items-center">
                        <HiOutlineCog6Tooth className='iconMenu' /> <span>Pengaturan</span>
                    </div>
                </NavLink>
            </div>
        </div>
    )
}

export default sidebar