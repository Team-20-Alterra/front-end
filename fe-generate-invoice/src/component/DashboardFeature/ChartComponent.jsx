import React from 'react'
import Chart from 'react-apexcharts'

const Grafik = ({berhasil,gagal}) => {
    return (
        <div className="chart-container" style={{marginLeft: 'auto', marginRight: 'auto'}}>
          <h2 className="text-centert mb-4">Total Invoice & Balance</h2>
          <Chart
            type="pie"
            width={600}
            height={250}
            series = {[berhasil, gagal]}
            options = {
                {
                    chart: {
                        type: 'pie'
                    },
                    labels: ['Sudah Bayar', 'Belum Bayar'],
                    colors:['#ADE792', '#F06292']
                }
            }
          />
        </div>
      )
}

export default Grafik