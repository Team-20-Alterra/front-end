import React from 'react'
import RiwayatEmpty from '../../component/DashboardFeature/RiwayatEmpty'
import HeaderDashboard from '../../component/DashboardFeature/HeaderDashboard'
import ListRiwayat from '../../component/DashboardFeature/ListRiwayat'
import { useState } from 'react'
import ButtonFilter from '../../component/DashboardFeature/ButtonFilter'


const RiwayatPage = () => {
    return (
        <div className='container-content'>
            <HeaderDashboard name="Riwayat" />
            <div className='riwayat-page__navbar'>
                <ul>
                    <li>
                        <a href="/">Semua</a>
                    </li>
                    <li>
                        <a href="/">Selesai</a>
                    </li>
                    <li>
                        <a href="/">On Proses</a>
                    </li>
                    <li>
                        <a href="/">Pending</a>
                    </li>
                    <li>
                        <a href="/">Gagal</a>
                    </li>
                </ul>
            </div>
            <div className='riwayat-page__searchbar'>
                <input type="text" placeholder='Cari' />
                <ButtonFilter/>
                </div>
            <div className='riwayat-list__container'>
                <ListRiwayat />
            </div>
        </div>
    )
}

export default RiwayatPage