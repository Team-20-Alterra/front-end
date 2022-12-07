import React from 'react'
import { HiFilter } from "react-icons/hi"
import RiwayatEmpty from '../../component/DashboardFeature/RiwayatEmpty'
import HeaderDashboard from '../../component/DashboardFeature/HeaderDashboard'
import ListRiwayat from '../../component/DashboardFeature/ListRiwayat'

const RiwayatPage = () => {
    return (
        <div className='container-content'>
            <HeaderDashboard name="Riwayat" />
            <div className='riwayat-list__container'>
                <ListRiwayat />
            </div>
        </div>
    )
}

export default RiwayatPage