import React, {useState, useEffect} from 'react'
import ButtonFilter from '../../component/DashboardFeature/ButtonFilter'
import { initialName } from '../../utils/initialName'
import { hargaFormat } from '../../utils/hargaFormat'
import { randomColor } from '../../utils/randomColor'
import { Link } from "react-router-dom";
import { statusBadge } from './StatusBadge'
import { Pagination } from '../../utils/Pagination'

const ListRiwayat = ({ riwayats, status }) => {

  const [riwayatSlice, setRiwayatSlice] = useState([])

  const [paginationState, setPaginationState] = useState({
    pageCount: 0,
    currentPage: 0,
    pageSize: 5,
  });

  const onPageChange = (page) => {
    const currentPage = page.selected;
    setPaginationState({
      pageCount: paginationState.pageCount,
      currentPage: currentPage,
      pageSize: 5,
    });
  };

  useEffect(() => {
    if(status === "success"){
      const startIndex = paginationState.currentPage * paginationState.pageSize

      const lastIndex = startIndex + paginationState.pageSize > riwayats.length ? 
        startIndex + (startIndex + paginationState.pageSize - riwayats.length) :
        startIndex + paginationState.pageSize

      setRiwayatSlice(riwayats.slice(startIndex, lastIndex))
    }
  },[paginationState.pageSize, paginationState.currentPage, riwayats, status])

  return (
    <>
      <div className='riwayat-page__navbar'>
        <ul>
          <li>
            <a href="/" >Semua</a>
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
        {riwayatSlice.map((riwayat) => (
          <div key={riwayat.ID} >
            <Link to={`${riwayat.ID}`}>
              <div className="container-list d-flex flex-row align-items-center">
                <div className='datas d-flex align-items-center'>
                  <div className='box' style={{ background: `#${randomColor()}` }}>
                    {initialName((riwayat.customer.name))}
                  </div>
                  {riwayat.customer.name}
                </div>
                <div className='datas'># {riwayat.ID}</div>
                <div className='datas'>{riwayat?.billing_date?.slice(0, 19)}</div>
                <div className='datas'>{riwayat?.Checkout.length === 0 ? "-" : riwayat.Checkout[0].billing_date.slice(0, 10)}</div>
                <div className='datas'>Rp. {hargaFormat((riwayat.total))}</div>
                <div className='datas d-flex justify-content-center'>{statusBadge(riwayat.status)}</div>
              </div>
            </Link>
          </div>
        ))}
      </div>
      <div className='d-flex mt-5 justify-content-center'>
              <Pagination currentPage={paginationState.currentPage} onPageChange={onPageChange}
                          pageCount={Math.ceil(riwayats.length/ paginationState.pageSize)}/>
      </div>
    </>
  )
}

export default ListRiwayat