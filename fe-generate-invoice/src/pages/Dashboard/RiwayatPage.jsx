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
    // const [empty, setEmpty] = useState(false)
    // const [riwayats, setRiwayats] = useState([])
    const [loading, setLoading] = useState(true)

    //riwayat redux
    const riwayatData = useSelector(selectRiwayatInvoice)
    const riwayatStatus = useSelector(getStatusRiwayatInvoice)

    useEffect(() =>{
        dispatch(getRiwayat())
    },[dispatch])

    // console.log(riwayatData)

    // useEffect(() => {
    //     axiosInstance.get('/invoices/status')
    //         .then((response) => {
    //             if (response.data.data.length === 0) {
    //                 setEmpty(true)
    //             } else {
    //                 setRiwayats(response.data.data)
    //             }
    //         })
    // }, [loading])

    return (
        <div className='container-content'>
            <HeaderDashboard name="Riwayat" />
            {riwayatStatus === "success" ? 
                <div>
                    {
                        riwayatData.legth === 0 ? (<RiwayatEmpty />) : 
                        (
                            <div className='riwayat-list__container'>
                                <ListRiwayat riwayats={riwayatData} status={riwayatStatus}/>
                            </div>
                        )
                    }
                </div> : loading
            }
            
        </div>
    )
}

export default RiwayatPage