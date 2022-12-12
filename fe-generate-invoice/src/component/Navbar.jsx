import React, { useState, useEffect } from 'react'
import { BiBell } from 'react-icons/bi'
import { HiArrowRightOnRectangle, HiOutlineClock } from 'react-icons/hi2'
import { useNavigate } from 'react-router-dom'
import DefaultProfile from '../assets/image/defaultProfile.png'
import { axiosInstance } from '../config/axiosInstance'
import Auth from '../utils/Auth/Auth'


const Navbar = () => {
    const navigate = useNavigate()
    const [profile, setProfile] = useState([])

    useEffect(() => {
        axiosInstance.get('/business/user')
            .then((response) => {
                setProfile(response.data.data)
            })
    }, [])

    const handleLogOut = () => {
        Auth.isLoggedOut()
        navigate("/")
    }
    return (
        <>
            <nav className="dashboard-navbar navbar sticky-top">
                <a className="navbar-brand d-flex align-items-center justify-content-center">
                    <img src={DefaultProfile} alt="Logo" className="imgNavbar d-inline-block align-text-top" />
                    <p className='TextNavbar m-0'>{profile.name}</p>
                </a>
                <div className="d-flex">
                    <div className="dropdown me-3">
                        <a className="text-white m-0" id="dropdownUser1" data-bs-toggle="dropdown">
                            <BiBell className="IconNotif" />
                            <span className="badge rounded-pill badge-notification bg-danger">1</span>
                        </a>
                        <ul className="dropdown-menu dropdown-menu-light shadow navNotif">
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
                    <div className="me-3">
                        <a className=" text-white text-decoration-none">
                            <img src={DefaultProfile} alt="Profile" className="imgNavbar rounded-circle me-1" />
                            <strong className='TextNavbar me-2'></strong>
                        </a>
                        <HiArrowRightOnRectangle size={24} style={{ color: "white", cursor: "pointer", marginLeft: "16px" }} onClick={handleLogOut} />
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar