import React from 'react'
import { initialName } from '../../utils/initialName'
import { HiOutlineTrash } from 'react-icons/hi'
import { sliceAlamat } from '../../utils/sliceAlamat'
import { randomColor } from '../../utils/randomColor'
import { axiosInstance } from '../../config/axiosInstance'

const ListPelanggan = ({ pelanggan, handleDeleteUser }) => {

  return (
    <div className='d-flex flex-column'>
      <div className="head-pelanggan d-flex flex-row" >
        <div className='list'>Nama</div>
        <div className='list'>User ID</div>
        <div className='list'>Alamat</div>
        <div className='list'>No. Telp</div>
        <div >Hapus</div>
      </div>
      {pelanggan.map((user) => (
        <div className="container-list d-flex flex-row align-items-center" key={user.ID} >
          <div className='pelanggan d-flex align-items-center'>
            <div className='box' style={{ background: `#${randomColor()}` }}>
              {initialName((user?.customer?.name))}
            </div>
            {user?.customer?.name}
          </div>
          <div className='pelanggan'># {user?.user_id}</div>
          <div className='pelanggan'>{sliceAlamat((user?.customer?.address))}</div>
          <div className='pelanggan'>{user?.customer?.phone}</div>
          <div className='pelanggan-hapus'>
            <i
              className='bi bi-trash3-fill delete-icon__item'
              style={{ color: "red", fontSize: "24px" }}
              size={24}
              value={user.ID}
              onClick={(e) => handleDeleteUser(e)}></i>
          </div>
        </div>
      ))}
    </div>
  )
}

export default ListPelanggan