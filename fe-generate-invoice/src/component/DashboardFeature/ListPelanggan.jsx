import React from 'react'
import { initialName } from '../../utils/initialName'
import { HiOutlineTrash } from 'react-icons/hi'
import { sliceAlamat } from '../../utils/sliceAlamat'

const ListPelanggan = () => {
  return (
    <table className='table-list text-center' cellPadding="15px">
      <thead>
        <tr>
          <th className='text-start'>Nama</th>
          <th>User ID</th>
          <th>Alamat</th>
          <th>No. Telp</th>
          <th>Hapus</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className='d-flex align-items-center'><div className='box'>{initialName('john doe')}</div>John Doe</td>
          <td>#0000001</td>
          <td>{sliceAlamat('Jl. Pangeran Diponegoro No.58, RT.1/RW.2, Menteng, Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta 10320, Indonesia')}...</td>
          <td> 083123310081118</td>
          <td> <HiOutlineTrash /></td>
        </tr>
      </tbody>
    </table>
  )
}

export default ListPelanggan