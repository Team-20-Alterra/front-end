import React, { useState, useEffect, useRef } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { axiosInstance } from '../../config/axiosInstance'
import { HiChevronLeft } from 'react-icons/hi'
import { toast } from 'react-toastify'
import emailjs from '@emailjs/browser';

const DetailsInvoicePage = () => {
    const { id } = useParams()
    const [invoices, setInvoices] = useState([])
    const [loading, setLoading] = useState(true)
    const [handleDisabled, setHandleDisabled] = useState(true)
    const navigate = useNavigate()

    useEffect(() => {
        axiosInstance.get(`/invoices/${id}`)
            .then((response) => {
                setInvoices(response.data.data)
            })
    }, [loading])

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
                    toast.success(response.data.message, {
                        position: "top-right",
                        autoClose: 1000
                    })
                    setHandleDisabled(true)
                })
                .catch((error) => {
                    console.log(error)
                })
        }

    }

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_5kk2tek', 'template_39ozxp2', e.target, '1GBjYQKzmcCzyWl_X')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    }


    return (
        <div className="container-content mb-5-content">
            <div className='text-kembali' onClick={handleGoBack}><HiChevronLeft size={24} /> Kembali</div>
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
                            <th>Item</th>
                            <th>Jumlah</th>
                            <th>Harga Satuan</th>
                            <th>Total Harga</th>
                        </tr>
                    </thead>
                    <tbody>
                        {invoices?.Item?.map((invoice) => (
                            <tr>
                                <td>{invoice.name}</td>
                                <td>{invoice.unit_price}</td>
                                <td>{invoice.amount}</td>
                                <td>{invoice.total_price}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className='invoice-item__summary mt-5 d-flex justify-content-between'>
                <div className='invoice-item__note'>
                    Catatan:
                </div>

                <div className='d-flex justify-content-end flex-column gap-2'>
                    <div className='invoice-item__subtotal'>
                        <div>Subtotal</div>
                        <div>Rp. {invoices.sub_total}</div>
                    </div>
                    <div className='invoice-item__diskon d-flex justify-content-between'>
                        <div>Diskon</div>
                        <div>{invoices.discount}</div>
                    </div>
                    <div className='invoice-item__total'>
                        <div>Total</div>
                        <div>Rp. {invoices.total}</div>
                    </div>
                    <button type='button' value={'Review'} className='btn-review' onClick={handleStatus}>Review</button>
                    <button type='button' value={'Berhasil'} className='btn-lunas' onClick={handleStatus} disabled={handleDisabled}>Lunas</button>
                    <button type='button' value={'Gagal'} className='btn-gagal' onClick={handleStatus} disabled={handleDisabled}>Gagal</button>
                </div>
            </div>
            <div className='send-email__button'>
                    <form onSubmit={sendEmail}>
                        <input type="email" name="admin_email" value={invoices?.Businnes?.email} hidden/>
                        <input type="text" name="from_name" hidden value={invoices?.Businnes?.name}/>
                        <input type="email" name="email" hidden value={invoices?.customer?.email}/>
                        <input type="text" name="to_name" hidden value={invoices?.customer?.name}/>
                        <div name="message" value={'TESTING'} hidden></div>
                        <button type='submit' id='kirimEmail'>Kirim Email!</button>
                    </form>
                </div>
        </div>
    )
}

export default DetailsInvoicePage