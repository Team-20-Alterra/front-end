import React from 'react'
import HeaderDashboard from '../../component/DashboardFeature/HeaderDashboard';
import { HiOutlineTag } from "react-icons/hi";
import { useEffect, useState } from 'react';
import { axiosInstance } from '../../config/axiosInstance';
import ButtonAddPelanggan from '../../component/DashboardFeature/ButtonAddPelanggan';
import ChartComponent from '../../component/DashboardFeature/ChartComponent';


const BerandaPage = () => {
    const [total, setTotal] = useState(0)
    const [berhasil, setBerhasil] = useState(0)
    const [gagal, setGagal] = useState(0)
    const [invoiceAktif, setInvoiceAktif] = useState([])


    useEffect(() => {
        axiosInstance.get('/invoices/count/berhasil')
            .then((response) => {
                setBerhasil(response.data.data)
            })
    }, [])

    useEffect(() => {
        axiosInstance.get('/invoices/count/gagal')
            .then((response) => {
                setGagal(response.data.data)
            })
    }, [])

    useEffect(() => {
        axiosInstance.get('/invoices/count')
            .then((response) => {
                setTotal(response.data.data)
            })
    }, [])

    useEffect(() => {
        axiosInstance.get('/invoices/status')
            .then((response) => {
                const dataFilter = response.data.data.filter((invoice) => invoice.status === "Dalam Proses"
                    || invoice.status === "Menunggu Konfirmasi")
                setInvoiceAktif(dataFilter)
            })
    }, [])

    return (
        <>
            <div className="container-content">
                <div className='d-flex'>
                    <HeaderDashboard name="Dashboard" />
                </div>
                <div className='dashboard-all'>
                    <div className='dashboard-satu'>
                        <div className='total-balance'>
                            <div className='total-balance-top'>
                                <div className='box-total-balance-top'>
                                    <div className='tagihan-judul'>Total Tagihan</div>
                                    <div className='tagihan-total'>
                                        <div className='tagihan-count'>{total.toLocaleString('id-ID', { currency: 'IDR', style: 'currency' })}</div>
                                        <HiOutlineTag size={24} />
                                    </div>
                                </div>
                            </div>
                            <div className='total-balance-bottom'>
                                <div className='box-total-balance-bottom-1'>
                                    <div className='tagihan-judul'>Gagal Terbayar</div>
                                    <div className='tagihan-total'>
                                        <div className='tagihan-count'>{gagal.toLocaleString('id-ID', { currency: 'IDR', style: 'currency' })}</div>
                                    </div>
                                </div>
                                <div className='box-total-balance-bottom-2'>
                                    <div className='tagihan-judul'>Sudah Terbayar</div>
                                    <div className='tagihan-total'>
                                        <div className='tagihan-count'>{berhasil.toLocaleString('id-ID', { currency: 'IDR', style: 'currency' })}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <ChartComponent />
                    </div>
                    <div className='history-inv w-50'>
                        <div className='box-history-inv'>
                            <div className="text-beranda">Invoice Aktif</div>
                            <div className='history-ket'>
                                <div className='history-list'>Kepada</div>
                                <div className='history-list'>ID Invoice</div>
                                <div className='history-list'>Type</div>
                                <div className='history-list'>Status</div>
                            </div>
                            {invoiceAktif.map((invoice) => (
                                <div className='history-ket-isi' key={invoice.ID}>
                                    <div className='history-detail flex-column'>
                                        <div>{invoice?.customer?.name}</div>
                                        <div># {invoice?.customer?.ID}</div>
                                    </div>
                                    <div className='history-detail'>#{invoice?.ID}</div>
                                    <div className='history-detail'>{invoice.type}</div>
                                    <div className='history-ket-status'>
                                        <div className='text-history-status'
                                            style={invoice.status === 'Dalam Proses' ?
                                                { backgroundColor: '#84BBF3' }
                                                :
                                                { backgroundColor: '#EEC555' }}>
                                            {invoice.status}
                                        </div>
                                    </div>

                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BerandaPage;