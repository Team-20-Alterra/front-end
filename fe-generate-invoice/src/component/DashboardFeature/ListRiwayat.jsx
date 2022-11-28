import React from 'react'

const ListRiwayat = () => {
    return (
    <table className='riwayat-list' cellPadding="15px">
    <thead>
          <tr>
              <th>Kepada</th>
              <th>ID Invoice</th>
              <th>Jatuh Tempo</th>
              <th>Tanggal Bayar</th>
              <th>Bayar</th>      
              <th>Status</th>
                </tr>
    </thead>
          <tbody>
              <tr>
                  <td>John Doe</td>
                  <td>#0000001</td>
                  <td>30/11/22</td>
                  <td>12/12/22</td>
                  <td>Rp. 200.000</td>
                  <td>Selesai</td>
              </tr>
          </tbody>
    </table>
  )
}

export default ListRiwayat