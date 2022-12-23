import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { axiosInstance } from '../../config/axiosInstance'
import { HiChevronLeft } from 'react-icons/hi'
import { toast } from 'react-toastify'
import emailjs from '@emailjs/browser';
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

    const sendEmail = (e) => {
        e.preventDefault();

        const templateParams = {
            email: invoices?.customer?.email,
            to_name: invoices?.customer?.name,
            admin_email: invoices?.Businnes?.email,
            from_name: invoices?.Businnes?.name,
            my_html: `
            <html>
            <head>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
            </head>
            <body>
            <div className="container-content mb-5-content">
            <div className="headerInvoice d-flex align-items-center justify-content-between">
                <img src=${invoices?.Businnes?.logo} alt="Logo" style="width: 100px; height: 100px;" />
                <div className='flex-column text-end'>
                    <h1 className='textHeader'>Invoice</h1>
                    <h2 className='textSubHeader'># ${id}</h2>
                </div>
            </div>
            <div className="detailHeader d-flex">
                <div className='row-detail w-55'>
                    <div className="header">Hai ada pemberitahuan nih dari Ginap, kayaknya kamu belum melakukan pembayaran deh.</div>
                    <div className="header" style="margin-bottom: 20px;">Yuk segera diproses..</div>
                    <div className="header">Diterbitkan oleh :</div>
                    <div className="d-flex" style="display:flex; font-size:18px;">
                        <div className="head-invoice w-40">
                            <h6 className='judul'>Penjual</h6>
                            <h6 className='judul'>Email</h6>
                            <h6 className='judul'>No. Telepon</h6>
                            <h6 className='judul'>Tanggal</h6>
                        </div>
                        <div className="head-invoice w-3" style="margin-right: 10px;">
                            <h6 className='judul'>:</h6>
                            <h6 className='judul'>:</h6>
                            <h6 className='judul'>:</h6>
                            <h6 className='judul'>:</h6>
                        </div>
                        <div className="head-invoice">
                            <h6 className='judul'>${invoices?.Businnes?.name}</h6>
                            <h6 className='judul'>${invoices?.Businnes?.email}</h6>
                            <h6 className='judul'>${invoices?.Businnes?.no_telp}</h6>
                            <h6 className='judul'>${invoices?.CreatedAt?.slice(0, 10)}</h6>
                        </div>
                    </div>
                </div>
                <div className='w-50'>
                    <div className="header">Untuk :</div>
                    <div className="d-flex" style="display:flex; font-size:18px;">
                        <div className="head-invoice w-40">
                            <h6 className='judul'>User ID </h6>
                            <h6 className='judul'>No. Telepon</h6>
                            <h6 className='judul'>Alamat</h6>
                        </div>
                        <div className="head-invoice w-3" style="margin-right: 10px;">
                            <h6 className='judul'>:</h6>
                            <h6 className='judul'>:</h6>
                            <h6 className='judul'>:</h6>
                        </div>
                        <div className="head-invoice w-50">
                            <h6 className='judul'>${invoices?.customer?.name} (# ${invoices?.customer?.ID})</h6>
                            <h6 className='judul'>${invoices?.customer?.phone}</h6>
                            <h6 className='judul h-100'>${invoices?.customer?.address}</h6>
                        </div>
                    </div>
                </div>
                <div>
                </div>
            </div>
            <div>Berikut isi dari invoicenya ya, mohon di cek kembali : </div>
            <div className='invoice-item__container' style="margin-top: 30px; margin-bottom: 30px">
                <table className='table-invoice text-center' cellPadding="12px">
                    <thead>
                        <tr>
                            <th style="padding: 6px;">Item</th>
                            <th style="padding: 6px;">Jumlah</th>
                            <th style="padding: 6px;">Harga Satuan</th>
                            <th style="padding: 6px;">Total</th>
                        </tr>
                    </thead>
                </table>
                <ul>
                    ${invoices.Item.map((item) => (
                <li>{item.name}</li>
            ))}
                </ul>
            </div>
            <div className='invoice-item__summary mt-5 d-flex justify-content-between'>
                <div className='invoice-item__note' style="font-size: 20px; margin-bottom: 10px">
                    Catatan:
                </div>

                <div className='d-flex' style="font-size: 20px;">
                    <div className='invoice-item__subtotal' style="display: flex;">
                        <div style="margin-right: 10px">Subtotal :</div>
                        <div>Rp. ${invoices.sub_total}</div>
                    </div>
                    <div className='invoice-item__diskon' style="display: flex;">
                        <div style="margin-right: 10px">Diskon :</div>
                        <div>${invoices.discount}%</div>
                    </div>
                    <div className='invoice-item__total'  style="display: flex;">
                        <div style="margin-right: 10px">Total :</div>
                        <div>Rp. ${invoices.total}</div>
                    </div>
                </div>
            `
        }

        emailjs.send('service_5kk2tek', 'template_39ozxp2', templateParams, '1GBjYQKzmcCzyWl_X')
            .then((result) => {
                console.log(templateParams.my_html)
            }, (error) => {
                console.log(error);
            });
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
            <div className='send-email__button'>
                <form onSubmit={sendEmail}>
                    <button type='submit' id='kirimEmail'>Kirim Email!</button>
                </form>
            </div>
        </div>
    )
}

export default DetailsInvoicePage