/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from 'react'
import { BiBell } from 'react-icons/bi'
import { HiArrowRightOnRectangle, HiOutlineClock } from 'react-icons/hi2'
import { useNavigate, Link, useParams } from 'react-router-dom'
import Moment from 'react-moment'
import { axiosInstance } from '../config/axiosInstance'
import Auth from '../utils/Auth/Auth'
import defaultProfile from '../assets/image/defaultProfile.png'


const Navbar = ({ }) => {
    const navigate = useNavigate()
    const [profile, setProfile] = useState()
    const [countNotif, setCountNotif] = useState(0)
    const [notifikasi, setNotifikasi] = useState([])


    const getAdminData = () => {
        axiosInstance.get('/business/user')
            .then((response) => {
                const profileAdmin = response.data
                setProfile(profileAdmin)
            })
            .catch((error) => {
                console.log(error)
            })
    }

    useEffect(() => {
        getAdminData()
    }, [])

    useEffect(() => {
        axiosInstance.get('/notif/busines')
            .then((response) => {
                setNotifikasi(response.data.data)
                setCountNotif(response.data.data.filter((count) => count.is_readAmin === false))
            })
            .catch((error) => {
                console.log(error)
            })
    }, [])

    const handleClickNotif = (e) => {
        console.log(e)
    }

    const handleLogOut = () => {
        Auth.isLoggedOut()
        navigate("/")
    }
    console.log(profile)
    return (
        <>
            <nav className="dashboard-navbar navbar sticky-top">
                <a className="navbar-brand d-flex align-items-center justify-content-center">
                    {profile?.data?.logo ? <img src={profile?.data?.logo} alt="Logo" className="imgNavbar d-inline-block align-text-top rounded-circle" />: (
                        <img src={defaultProfile} alt="Logo" className='imgNavbar rounded-circle me-1' />
                    )}
                    <p className='TextNavbar m-0'>{profile?.data?.name}</p>
                </a>
                <div className="d-flex">
                    <div className="dropdown me-3">
                        <a className="text-white m-0" id="dropdownUser1" data-bs-toggle="dropdown">
                            <BiBell className="IconNotif" />
                            <span className="badge rounded-pill badge-notification bg-danger">{countNotif.length}</span>
                        </a>
                        <ul className="dropdown-menu dropdown-menu-light shadow navNotif">
                            <li className="headerNotif">Notifikasi</li>
                            <li><hr className="dropdown-divider" /></li>
                            <div className="wrap-notif">
                                {notifikasi.map((notif) => (
                                    <div value={notif.invoice_id} onClick={(e) => handleClickNotif(e.target.value)}>
                                        <li key={notif.ID}>
                                            <a className="dropdown-item" >
                                                <p className='unreadNotif m-0' style={notif.is_readAmin ? {} : { fontWeight: '700' }}>{notif.title}</p>
                                                <p className='bodyNotif text-wrap mb-2'>{notif.body}</p>
                                                <p className='footerNotif m-0'><HiOutlineClock /> <Moment fromNow>{notif.CreatedAt}</Moment></p>
                                            </a>
                                        </li>
                                    </div>
                                ))}
                            </div>
                        </ul>
                    </div>
                    <div className="me-3">
                        <a className=" text-white text-decoration-none">
                            {profile?.data?.admin?.photo ? (<img src={profile?.data?.admin?.photo} alt="Profile" className="imgNavbar rounded-circle me-1" />): (
                                <img src={defaultProfile} alt="Profile" className='imgNavbar rounded-circle me-1' />
                            )}
                            <strong className='TextNavbar me-2'>{profile?.data?.admin?.name}</strong>
                        </a>
                        <a><HiArrowRightOnRectangle size={24} style={{ color: "white", cursor: "pointer", marginLeft: "16px" }} onClick={handleLogOut} /></a>
                    </div>
                </div>
            </nav >
        </>
    )
}

export default Navbar