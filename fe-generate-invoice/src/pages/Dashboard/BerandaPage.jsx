import React from 'react'
import HeaderDashboard from '../../component/DashboardFeature/HeaderDashboard';


const BerandaPage = () => {
    return (
        <div className="flex-column w-100">
            <div className="container">
                <HeaderDashboard name="Dashboard" />
            </div>
            <div className='dashboard-all'>
                <div className='dashboard-satu'>
                    <div className='total-balance'>
                        <div className='box-total-balance'>
                            <p>Total Invoice</p>
                        </div>
                        <div className='box-total-balance'>
                            <p>Balance</p>
                        </div>
                    </div>
                    <div className='box-balance-2'>
                        <p>Balance</p>
                    </div>
                </div>
                <div className='box-history-inv'>
                    <p>History Invoice</p>
                </div>
            </div>
        </div>
    )
}

export default BerandaPage;