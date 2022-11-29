import React from 'react'
import { initialName } from '../../utils/initialName'
import { hargaFormat } from '../../utils/hargaFormat'

const ListRiwayat = () => {
  return (
    <table className='table-list' cellPadding="15px">
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
          <td className='d-flex align-items-center'><div className='box'>{initialName('john doe')}</div>John Doe</td>
          <td>#0000001</td>
          <td>30/11/2022</td>
          <td>12/12/2022</td>
          <td>Rp. {hargaFormat(100000)}</td>
          <td>Selesai</td>
        </tr>
      </tbody>
    </table>
  )
}

export default ListRiwayat