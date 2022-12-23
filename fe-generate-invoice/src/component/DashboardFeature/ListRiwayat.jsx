import React, { useState, useEffect } from 'react'
import ButtonFilter from '../../component/DashboardFeature/ButtonFilter'
import { initialName } from '../../utils/initialName'
import { randomColor } from '../../utils/randomColor'
import { Link } from "react-router-dom";
import Moment from 'react-moment';
import { statusBadge } from './StatusBadge'
import { Pagination } from '../../utils/Pagination'
import { useDispatch } from 'react-redux'
import { handleAllStatus, handleBerhasilInvoice, handleDalamProsesInvoice, handleGagalInvoice, handleMenungguKonfirmasinvoice } from '../../store/riwayat'

const ListRiwayat = ({ riwayats, status }) => {

  const [riwayatSlice, setRiwayatSlice] = useState([])
  const [search, setSearch] = useState("")
  const dispatch = useDispatch()

  const handleAllStatusInvoice = () => {
    dispatch(handleAllStatus())
  }

  const handleFilterBerhasil = () => {
    dispatch(handleBerhasilInvoice())
  }
  const handleFilterGagal = () => {
    dispatch(handleGagalInvoice())
  }
  const handleFilterMenungguKonfirmasi = () => {
    dispatch(handleMenungguKonfirmasinvoice())
  }
  const handleFilterDalamProses = () => {
    dispatch(handleDalamProsesInvoice())
  }

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
    if (status === "success") {
      const startIndex = paginationState.currentPage * paginationState.pageSize

      const lastIndex = startIndex + paginationState.pageSize > riwayats.length ?
        startIndex + (startIndex + paginationState.pageSize - riwayats.length) :
        startIndex + paginationState.pageSize

      if (search === "") {
        setRiwayatSlice(riwayats.slice(startIndex, lastIndex))
      } else {
        setRiwayatSlice(
          riwayats.filter(value => {
            return value.customer.name.toLowerCase().includes(search.toLowerCase())
          }).slice(startIndex, lastIndex)
        )
      }
    }
  }, [paginationState.pageSize, paginationState.currentPage, search, riwayats, status])

  return (
    <>
      <div className='riwayat-page__navbar'>
        <ul>
          <li>
            <div onClick={handleAllStatusInvoice} style={{ cursor: 'pointer' }}>Semua</div>
          </li>
          <li>
            <div onClick={handleFilterBerhasil} style={{ cursor: 'pointer' }}>Selesai</div>
          </li>
          <li>
            <div onClick={handleFilterDalamProses} style={{ cursor: 'pointer' }}>Dalam Proses</div>
          </li>
          <li>
            <div onClick={handleFilterMenungguKonfirmasi} style={{ cursor: 'pointer' }}>Menunggu Konfirmasi</div>
          </li>
          <li>
            <div onClick={handleFilterGagal} style={{ cursor: 'pointer' }}>Gagal</div>
          </li>
        </ul>
      </div>
      <div className='riwayat-page__searchbar'>
        <input
          type="text"
          placeholder='Cari'
          onChange={(event) => {
            setSearch(event.target.value);
          }} />
        <ButtonFilter />
      </div>
      <div className='d-flex flex-column'>
        <div className="head d-flex flex-row" >
          <div className='list'>Kepada</div>
          <div className='list'>ID Invoice</div>
          <div className='list'>Tanggal Bayar</div>
          <div className='list text-center'>Total Item</div>
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
                <div className='datas text-center'>{riwayat?.Checkout.length === 0 ? "-" : (
                  <Moment format='DD MMMM YYYY , hh:mm a '>{riwayat.Checkout[0].CreatedAt}</Moment>
                )
                }
                </div>
                <div className='datas text-center'>{riwayat.Item.length}</div>
                <div className='datas'>{riwayat.total.toLocaleString('id-ID', { currency: 'IDR', style: 'currency' })}</div>
                <div className='datas d-flex justify-content-center'>{statusBadge(riwayat.status)}</div>
              </div>
            </Link>
          </div>
        ))
        }
      </div >
      <div className='d-flex mt-5 justify-content-center'>
        <Pagination currentPage={paginationState.currentPage} onPageChange={onPageChange}
          pageCount={Math.ceil(riwayats.filter((value) => {
            if (search === "") {
              return value
            } else if (
              value.customer.name.toLowerCase().includes(search.toLowerCase())
            ) {
              return value
            }
          }).length / paginationState.pageSize)} />
      </div>
    </>
  )
}

export default ListRiwayat