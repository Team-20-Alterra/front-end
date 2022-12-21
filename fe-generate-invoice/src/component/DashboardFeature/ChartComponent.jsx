import React from 'react'
import Chart from 'react-apexcharts'

const Grafik = ({ berhasil, gagal, belumBayar }) => {
  return (
    <div className="chart-container">
      <div className="fw-bold mb-5">Total Invoice & Balance</div>
      <Chart
        type="pie"
        width={600}
        height={250}
        series={[berhasil, gagal, belumBayar]}
        options={
          {
            chart: {
              type: 'pie'
            },
            labels: ['Sudah Bayar', 'Gagal Bayar', 'Belum Bayar'],
            colors: ['#7AD182', '#DC4747', '#EEC555']
          }
        }
      />
    </div>
  )
}

export default Grafik