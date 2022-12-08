import React from 'react'
import { HiFilter } from "react-icons/hi"
import { initialName } from '../../utils/initialName'
import { hargaFormat } from '../../utils/hargaFormat'
import { randomColor } from '../../utils/randomColor'

const ListRiwayat = () => {
  return (
    <>
      <div className='riwayat-page__navbar'>
        <ul>
          <li>
            <a href="" >Semua</a>
          </li>
          <li>
            <a href="/">Selesai</a>
          </li>
          <li>
            <a href="/">On Proses</a>
          </li>
          <li>
            <a href="/">Pending</a>
          </li>
          <li>
            <a href="/">Gagal</a>
          </li>
        </ul>
      </div>
      <div className='riwayat-page__searchbar'>
        <input type="text" placeholder='Cari' />
        <button className='filter-icon'><HiFilter size={24} />Filter</button>
      </div>
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
            <td className='d-flex align-items-center'><div className='box' style={{ background: `#${randomColor()}` }}>{initialName('john doe')}</div>John Doe</td>
            <td>#0000001</td>
            <td>30/11/2022</td>
            <td>12/12/2022</td>
            <td>Rp. {hargaFormat(100000)}</td>
            <td>Selesai</td>
          </tr>
        </tbody>
      </table>
    </>
  )
}

export default ListRiwayat