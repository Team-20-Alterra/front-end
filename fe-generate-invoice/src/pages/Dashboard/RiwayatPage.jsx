import React, { useEffect, useState } from 'react'
import RiwayatEmpty from '../../component/DashboardFeature/RiwayatEmpty'
import HeaderDashboard from '../../component/DashboardFeature/HeaderDashboard'
import ListRiwayat from '../../component/DashboardFeature/ListRiwayat'
import { axiosInstance } from '../../config/axiosInstance'

const RiwayatPage = () => {
    const [empty, setEmpty] = useState(false)
    const [riwayats, setRiwayats] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        axiosInstance.get('/invoices/status')
            .then((response) => {
                if (response.data.data.length === 0) {
                    setEmpty(true)
                } else {
                    setRiwayats(response.data.data)
                }
            })
    }, [loading])

    return (
        <div className='container-content'>
            <HeaderDashboard name="Riwayat" />
            {
                empty ? (
                    <RiwayatEmpty />
                ) : (
                    <div className='riwayat-list__container'>
                        <ListRiwayat riwayats={riwayats} />
                    </div>
                )
            }
        </div>
    )
}

export default RiwayatPage