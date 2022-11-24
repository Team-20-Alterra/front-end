import React from 'react'
import { HiOutlineHome, HiOutlinePencil, HiOutlineUser, HiClock } from 'react-icons/hi'
import { HiOutlineCog6Tooth } from 'react-icons/hi2'

const sidebar = () => {
    return (
        <div className="d-flex flex-column align-items-center containerSidebar" >
            <div className="d-flex align-items-center text-decoration-none">
                <span className="adminLogo">Ginap</span>
            </div>
            <div className="menu w-100">
                <div className="d-flex flex-column nav nav-pills w-100 " id="v-pills-tab" role="tablist">
                    <button className="nav-link active"
                        id="v-pills-home-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#v-pills-home"
                        type="button"
                        role="tab"
                    >
                        <div className="containerMenu d-flex align-items-center">
                            <HiOutlineHome className='iconMenu' /> <span>Beranda</span>
                        </div>
                    </button>
                    <button className="nav-link"
                        id="v-pills-profile-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#v-pills-profile"
                        type="button"
                        role="tab"
                    >
                        <div className="containerMenu d-flex align-items-center">
                            <HiOutlinePencil className='iconMenu' /> <span>Invoice</span>
                        </div>
                    </button>
                    <button className="nav-link"
                        id="v-pills-disabled-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#v-pills-disabled"
                        type="button"
                        role="tab"
                    >
                        <div className="containerMenu d-flex align-items-center">
                            <HiOutlineUser className='iconMenu' /> <span>Pelanggan</span>
                        </div>
                    </button>
                    <button className="nav-link"
                        id="v-pills-messages-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#v-pills-messages"
                        type="button"
                        role="tab"
                    >
                        <div className="containerMenu d-flex align-items-center">
                            <HiClock className='iconMenu' /> <span>Riwayat</span>
                        </div>
                    </button>
                    <button className="nav-link align-self-end"
                        id="v-pills-settings-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#v-pills-settings"
                        type="button"
                        role="tab">
                        <div className="containerMenu d-flex align-items-center">
                            <HiOutlineCog6Tooth className='iconMenu' /> <span>Pengaturan</span>
                        </div>
                    </button>
                </div>
                <div className="tab-content" id="v-pills-tabContent">
                    <div className="tab-pane fade show active" id="v-pills-home" role="tabpanel" tabIndex="0"></div>
                    <div className="tab-pane fade" id="v-pills-profile" role="tabpanel" tabIndex="0"></div>
                    <div className="tab-pane fade" id="v-pills-disabled" role="tabpanel" tabIndex="0"></div>
                    <div className="tab-pane fade" id="v-pills-messages" role="tabpanel" tabIndex="0"></div>
                    <div className="tab-pane fade" id="v-pills-settings" role="tabpanel" tabIndex="0"></div>
                </div>
            </div>
        </div>
    )
}

export default sidebar