/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { BiBell } from 'react-icons/bi'
import { HiOutlineArrowRightOnRectangle, HiOutlineClock } from 'react-icons/hi2'
import DefaultProfile from '../assets/image/defaultProfile.png'

const Navbar = () => {
    return (
        <>
            <nav className="navbar sticky-top">
                <div className="container">
                    <a className="navbar-brand d-flex align-items-center justify-content-center">
                        <img src={DefaultProfile} alt="Logo" className="imgNavbar d-inline-block align-text-top" />
                        <p className='TextNavbar m-0'>Nama Perusahaan</p>
                    </a>
                    <div className="d-flex">
                        <div className="dropdown me-3">
                            <a className="text-white m-0" id="dropdownUser1" data-bs-toggle="dropdown">
                                <BiBell className="IconNotif" />
                                <span className="badge rounded-pill badge-notification bg-danger">1</span>
                            </a>
                            <ul className="dropdown-menu dropdown-menu-light shadow mt-3 navNotif">
                                <li className="headerNotif">Notifikasi</li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><a className="dropdown-item">
                                    <p className='unreadNotif m-0'>Ada tagihan yang perlu direview! (Unread)</p>
                                    <p className='bodyNotif text-wrap'>Tagihan dari Nama Pengguna dengan No. Invoice telah melakukan pembayaran. Segera lakukan review!</p>
                                    <p className='footerNotif m-0'><HiOutlineClock /> 24 Feb 2022, 13.20 WIB</p>
                                </a></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><a className="dropdown-item">
                                    <p className='unreadNotif m-0'>Ada tagihan yang perlu direview! (Unread)</p>
                                    <p className='bodyNotif text-wrap'>Tagihan dari Nama Pengguna dengan No. Invoice telah melakukan pembayaran. Segera lakukan review!</p>
                                    <p className='footerNotif m-0'><HiOutlineClock /> 24 Feb 2022, 13.20 WIB</p>
                                </a></li>
                            </ul>
                        </div>
                        <div className="dropdown me-3">
                            <a className=" text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown">
                                <img src={DefaultProfile} alt="Profile" className="imgNavbar rounded-circle me-1" />
                                <strong className='TextNavbar me-2'>Admin</strong>
                            </a>
                            <ul className="dropdown-menu dropdown-menu-light text-small shadow mt-3 navProfile">
                                <li><a className="dropdown-item">Akun</a></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><a className="dropdown-item">Sign out <HiOutlineArrowRightOnRectangle className='iconLogout' /> </a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar