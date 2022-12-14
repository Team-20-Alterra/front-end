import React, { useState, useEffect, useRef } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { axiosInstance } from '../../config/axiosInstance'
import { HiChevronLeft } from 'react-icons/hi'
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';

const SendEmailPage = () => {
  const { id } = useParams()
  const [invoices, setInvoices] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    axiosInstance.get(`/invoices/${id}`)
      .then((response) => {
        setInvoices(response.data.data)
      })
  }, [id])

  const handleGoBack = () => {
    navigate('/admin/riwayat')
  }
  console.log(invoices)
  
  const sendEmail = (e) => {
    e.preventDefault();

    const templateParams = {
        email : invoices?.customer?.email,
        to_name : invoices?.customer?.name,
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
                <tbody>
                <tr>
                    <td>${invoices?.Item?.map((item) => item.name)}</td>
                    <td>${invoices?.Item?.map((item) => item.amount)}</td>
                    <td>${invoices?.Item?.map((item) => item.unit_price)}</td>
                    <td>${invoices?.Item?.map((item) => item.total_price)}</td>
                </tr>
                </tbody>
            </table>
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
          toast.success('Email telah berhasil di kirim ke user!', {
            position: "top-right",
            autoClose: 1000
            })
        }, (error) => {
            console.log(error);
        });
}   

  
  return (
    <div className="container-content mb-5-content" >
      <div className="d-flex justify-content-between">
        <div className='text-kembali' onClick={handleGoBack}><HiChevronLeft size={24} /> Kembali</div>
        <div className='send-email__button'>
          <form onSubmit={sendEmail}>
            <button type='submit' id='kirimEmail' className='kirim-email'><i className="bi bi-envelope-fill me-2"></i>Kirim Email!</button>
          </form>
        </div>
      </div>
      <div className="headerInvoice d-flex align-items-center justify-content-between">
        <img src={invoices?.Businnes?.logo} alt="Logo" />
        <div className="watermark"
          style={invoices.status === 'Berhasil' ?
            { color: '#1b4b41', border: '20px solid #1b4b41' }
            : { color: '#952E19', border: '20px solid #952E19' }
          }
        >{invoices.status === 'Berhasil' ? 'Lunas' : 'Gagal'}</div>
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
        </div>
      </div>
    </div>
  )
}

export default SendEmailPage