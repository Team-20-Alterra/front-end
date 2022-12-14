import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { axiosInstance } from '../../config/axiosInstance'
import { HiChevronLeft } from 'react-icons/hi'
import { toast } from 'react-toastify'
import { statusBadge } from '../../component/DashboardFeature/StatusBadge'

const DetailsInvoicePage = () => {
    const { id } = useParams()
    const [invoices, setInvoices] = useState([])
    const [handleDisabled, setHandleDisabled] = useState(true)
    const navigate = useNavigate()

    useEffect(() => {
        axiosInstance.get(`/invoices/${id}`)
            .then((response) => {
                setInvoices(response.data.data)
            })
    }, [id])

    const handleGoBack = () => {
        navigate(-1)
    }

    const handleStatus = async (e) => {
        if (e.target.value === 'Review') {
            setHandleDisabled(false)
        } else {
            await axiosInstance.put(`/invoices/update-status/${id}`, {
                status: e.target.value
            })
                .then((response) => {
                    toast.success('Pembayaran anda ' + e.target.value, {
                        position: "top-right",
                        autoClose: 1000
                    })
                    setHandleDisabled(true)
                    navigate(`/admin/send-email/${id}`)
                })
                .catch((error) => {
                    console.log(error)
                })
        }

    }
    return (
        <div className="container-content mb-5-content" >
            <div className='text-kembali' onClick={handleGoBack}><HiChevronLeft size={24} /> Kembali</div>
            <div className='mt-3'>{statusBadge(invoices.status)}</div>
            <div className="headerInvoice d-flex align-items-center justify-content-between">
                <img src={invoices?.Businnes?.logo} alt="Logo" />
                <div className='flex-column text-end'>
                    <h1 className='textHeader'>Invoice</h1>
                    <h2 className='textSubHeader'># {id}</h2>
                </div>
            </div>
            <div className="detailHeader d-flex">
                <div className='row-detail w-55'>
                    <div className="header">Diterbitkan oleh :</div>
                    <div className="d-flex">
                        <div className="head-invoice w-40">
                            <h6 className='judul'>Penjual </h6>
                            <h6 className='judul'>Email</h6>
                            <h6 className='judul'>No. Telepon</h6>
                            <h6 className='judul'>Tanggal</h6>
                        </div>
                        <div className="head-invoice w-3">
                            <h6 className='judul'>:</h6>
                            <h6 className='judul'>:</h6>
                            <h6 className='judul'>:</h6>
                            <h6 className='judul'>:</h6>
                        </div>
                        <div className="head-invoice">
                            <h6 className='judul'>{invoices?.Businnes?.name}</h6>
                            <h6 className='judul'>{invoices?.Businnes?.email}</h6>
                            <h6 className='judul'>{invoices?.Businnes?.no_telp}</h6>
                            <h6 className='judul'>{invoices?.CreatedAt?.slice(0, 10)}</h6>
                        </div>
                    </div>
                </div>
                <div className='w-50'>
                    <div className="header">Untuk :</div>
                    <div className="d-flex">
                        <div className="head-invoice w-40">
                            <h6 className='judul'>User ID </h6>
                            <h6 className='judul'>No. Telepon</h6>
                            <h6 className='judul'>Alamat</h6>
                        </div>
                        <div className="head-invoice w-3">
                            <h6 className='judul'>:</h6>
                            <h6 className='judul'>:</h6>
                            <h6 className='judul'>:</h6>
                        </div>
                        <div className="head-invoice w-50">
                            <h6 className='judul'>{invoices?.customer?.name} (# {invoices?.customer?.ID})</h6>
                            <h6 className='judul'>{invoices?.customer?.phone}</h6>
                            <h6 className='judul h-100'>{invoices?.customer?.address}</h6>
                        </div>
                    </div>
                </div>
            </div>
            <div className='invoice-item__container'>
                <table className='table-invoice text-center' cellPadding="12px">
                    <thead>
                        <tr>
                            <th>Nama Item</th>
                            <th>Jumlah</th>
                            <th>Harga Satuan</th>
                            <th>Total Harga</th>
                        </tr>
                    </thead>
                    <tbody>
                        {invoices?.Item?.map((item) => (
                            <tr key={item.ID}>
                                <td>{item.name}</td>
                                <td>{item.amount}</td>
                                <td>{item.unit_price.toLocaleString('id-ID', { currency: 'IDR', style: 'currency' })}</td>
                                <td>{item.total_price.toLocaleString('id-ID', { currency: 'IDR', style: 'currency' })}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className='invoice-item__summary mt-5 d-flex justify-content-between'>
                <div className='invoice-item__note'>
                    Catatan :
                    <div> {invoices.note} </div>
                </div>

                <div className='d-flex justify-content-end flex-column gap-2'>
                    <div className='invoice-item__subtotal'>
                        <div>Subtotal</div>
                        <div>{invoices?.sub_total?.toLocaleString('id-ID', { currency: 'IDR', style: 'currency' })}</div>
                    </div>
                    <div className='invoice-item__diskon d-flex justify-content-between'>
                        <div>Diskon</div>
                        <div>{invoices.discount} %</div>
                    </div>
                    <div className='invoice-item__total'>
                        <div>Total</div>
                        <div>{invoices?.total?.toLocaleString('id-ID', { currency: 'IDR', style: 'currency' })}</div>
                    </div>
                    <button type='button' value={'Review'} className='btn-review' onClick={handleStatus}>Review</button>
                    <button type='button' value={'Berhasil'} className='btn-lunas' onClick={handleStatus} disabled={handleDisabled}>Lunas</button>
                    <button type='button' value={'Gagal'} className='btn-gagal' onClick={handleStatus} disabled={handleDisabled}>Gagal</button>
                </div>
            </div>
        </div>
    )
}

export default DetailsInvoicePage