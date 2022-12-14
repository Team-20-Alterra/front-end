import React from 'react'
import ButtonFilter from '../../component/DashboardFeature/ButtonFilter'
import { initialName } from '../../utils/initialName'
import { hargaFormat } from '../../utils/hargaFormat'
import { randomColor } from '../../utils/randomColor'
import { Link } from "react-router-dom";

const ListRiwayat = ({ riwayats }) => {
  const statusBadge = (props) => {
    switch (props) {
      case 'Berhasil':
        return (
          <div className='badge-berhasil'>
            {props}
          </div>
        );
      case 'Menunggu Konfirmasi':
        return (
          <div className='badge-tunggu'>
            {props}
          </div>
        );
      case 'Gagal':
        return (
          <div className='badge-gagal'>
            {props}
          </div>
        );
      case 'Dalam Proses':
        return (
          <div className='badge-proses'>
            {props}
          </div>
        );
      default:
        return null;
    }
  }

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
        <ButtonFilter />
      </div>
      <div className='d-flex flex-column'>
        <div className="head d-flex flex-row" >
          <div className='list'>Kepada</div>
          <div className='list'>ID Invoice</div>
          <div className='list'>Jatuh Tempo</div>
          <div className='list'>Tanggal Bayar</div>
          <div className='list'>Jumlah</div>
          <div className='list d-flex justify-content-center'>Status</div>
        </div>
        {riwayats.map((riwayat) => (
          <Link to={`${riwayat.ID}`}>
            <div className="container-list d-flex flex-row align-items-center" key={riwayat.ID} >
              <div className='datas d-flex align-items-center'>
                <div className='box' style={{ background: `#${randomColor()}` }}>
                  {initialName((riwayat.User.name))}
                </div>
                {riwayat.User.name}
              </div>
              <div className='datas'># {riwayat.ID}</div>
              <div className='datas'>{riwayat?.billing_date?.slice(0, 19)}</div>
              <div className='datas'>{riwayat.date_pay === "" ? "-" : riwayat.date_pay}</div>
              <div className='datas'>Rp. {hargaFormat((riwayat.total))}</div>
              <div className='datas d-flex justify-content-center'>{statusBadge(riwayat.status)}</div>
            </div>
          </Link>
        ))}
      </div>
    </>
  )
}

export default ListRiwayat