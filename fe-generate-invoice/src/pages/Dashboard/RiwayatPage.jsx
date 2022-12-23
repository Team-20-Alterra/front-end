import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import RiwayatEmpty from '../../component/DashboardFeature/RiwayatEmpty'
import HeaderDashboard from '../../component/DashboardFeature/HeaderDashboard'
import ListRiwayat from '../../component/DashboardFeature/ListRiwayat'
import { axiosInstance } from '../../config/axiosInstance'
import {
    getRiwayat,
    selectRiwayatInvoice,
    getStatusRiwayatInvoice
} from '../../store/riwayat'

const RiwayatPage = () => {
    const dispatch = useDispatch()
    const [loading, setLoading] = useState(true)

    //riwayat redux
    const riwayatData = useSelector(selectRiwayatInvoice)
    const riwayatStatus = useSelector(getStatusRiwayatInvoice)

    useEffect(() => {
        dispatch(getRiwayat())
    }, [dispatch])

    return (
        <div className='container-content'>
            <HeaderDashboard name="Riwayat" />
            {riwayatStatus === "success" ?
                <div>
                    {
                        riwayatData.length === 0 ? (<RiwayatEmpty />) :
                            (
                                <div className='riwayat-list__container'>
                                    <ListRiwayat riwayats={riwayatData} status={riwayatStatus} />
                                </div>
                            )
                    }
                </div> : loading
            }

        </div>
    )
}

export default RiwayatPage