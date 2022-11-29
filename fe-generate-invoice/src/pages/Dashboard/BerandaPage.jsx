import React from 'react'
import HeaderDashboard from '../../component/DashboardFeature/HeaderDashboard';
import ChartImage from '../../assets/image/Chart.png';
import { BsFillTagFill } from "react-icons/bs";


const BerandaPage = () => {
    return (
        <>
            <div className="container">
                <HeaderDashboard name="Dashboard" />
                <div className='dashboard-all'>
                    <div className='dashboard-satu'>
                        <div className='total-balance'>
                            <div className='total-balance-top'>
                                <div className='box-total-balance-top'>
                                    <p className='tagihan-judul'>Total Tagihan</p>
                                    <div className='tagihan-total'>
                                        <p className='tagihan-count'>Rp 1.000.000</p>
                                        <button><BsFillTagFill /></button>
                                    </div>
                                </div>
                            </div>
                            <div className='total-balance-bottom'>
                                <div className='box-total-balance-bottom-1'>
                                    <p className='invoice-total'>Belum Terbayar</p>
                                    <div className='tagihan-total'>
                                        <p className='tagihan-count'>Rp 1.000.000</p>
                                    </div>
                                </div>
                                <div className='box-total-balance-bottom-2'>
                                    <p className='invoice-total'>Sudah Terbayar</p>
                                    <div className='tagihan-total'>
                                        <p className='tagihan-count'>Rp 1.000.000</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='box-balance-2'>
                            <p>Total Invoice & Balance</p>
                            <div className='chart-to-bal'>
                                <img src={ChartImage} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className='history-inv'>

                        <div className='box-history-inv'>
                            <p>History Invoice</p>
                            <div className='history-ket'>
                                <p>Kepada</p>
                                <p>ID Invoice</p>
                                <p>Jatuh Tempo</p>
                                <p>Status</p>
                            </div>
                            <div className='history-ket-isi'>
                                <div className='history-ket-isi-nama'>
                                    <p>Nama</p>
                                    <p>Fulan</p>
                                </div>
                                <p>#456788</p>
                                <p>30/12/22</p>
                                <div className='history-ket-status'>
                                    <p>pending</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BerandaPage;