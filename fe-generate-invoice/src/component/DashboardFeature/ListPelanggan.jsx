import React from 'react'
import { initialName } from '../../utils/initialName'
import { HiOutlineTrash } from 'react-icons/hi'
import { sliceAlamat } from '../../utils/sliceAlamat'
import { randomColor } from '../../utils/randomColor'
import { axiosInstance } from '../../config/axiosInstance'

const ListPelanggan = ({ pelanggan, handleDeleteUser }) => {

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

      {pelanggan.map((user) => (
        < tbody key={user.ID}>
          <tr>
            <td className='d-flex align-items-center'>
              <div className='box' style={{ background: `#${randomColor()}` }}>{initialName(`{ user.User.name }`)}</div>{user.User.name}
            </td>
            <td># {user.User.ID}</td>
            <td>{sliceAlamat((user.User.address))}...</td>
            <td>{user.User.phone}</td>
            <td><HiOutlineTrash className='icon-delete' size={24} value={user.ID} onClick={(e) => handleDeleteUser(e)} /></td>
          </tr>
        </tbody>
      )
      )}
    </table >
  )
}

export default ListPelanggan