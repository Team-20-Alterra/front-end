import React from 'react'
import Chart from 'react-apexcharts'
import { useState } from 'react'

const Grafik = () => {
    const [category, setCategory] = useState([1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999])
    const [data, setData] = useState([30, 40, 45, 50, 49, 60, 70, 91])

    return (
        <div className='box-balance-2'>
            <div className='fw-bold'>Total Invoice & Balance</div>
            <div className='chart-to-bal mt-3'>
                <Chart options={{
                    chart: {
                        id: 'apexchart-example'
                    },
                    xaxis: {
                        categories: category
                    },
                    stroke: {
                        curve: 'smooth'
                    },
                    dataLabels: {
                        enabled: false
                    },
                }}
                    series={[{
                        name: 'series-1',
                        data: data
                    }]} type="area" />
            </div>
        </div>
    )
}

export default Grafik