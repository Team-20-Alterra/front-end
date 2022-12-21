import React, { useCallback } from 'react'
import HeaderDashboard from '../../component/DashboardFeature/HeaderDashboard'
import ListItem from '../../component/DashboardFeature/ListItem'
import { HiPlus } from 'react-icons/hi'
import { useState } from 'react'
import { axiosInstance } from '../../config/axiosInstance'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { toast } from 'react-toastify'

const InvoicePage = () => {
    const { ID } = useParams()
    const [businessData, setBusinessData] = useState()
    const [APIData, setAPIData] = useState([])
    const [searchTerm, setSearchTerm] = useState("");
    const [selected, setSelected] = useState("")
    const [searchResults, setSearchResults] = useState([]);
    const [subTotal, setSubTotal] = useState()
    const [discount, setDiscount] = useState({ discount: 0 })
    const [total, setTotal] = useState(0)
    const [btnDiscount, setbtnDiscount] = useState(true)
    const [itemData, setItemData] = useState()
    const [noteAndNotif, setNoteAndNotif] = useState({
        note: "",
        title: "",
        body: ""
    })

    const convertDiscount = Object.values(discount)
    const convert = convertDiscount[0]?.toString()

    const values = {
        user_id: selected.id,
        discount: convert,
        total: Number(total),
        sub_total: subTotal,
        snote: noteAndNotif.note,
        title: noteAndNotif.title,
        body: noteAndNotif.body
    }


    useEffect(() => {
        axiosInstance.get('/add-customer/businness')
            .then((response) => {
                setAPIData(response.data.data);
            })
    }, [])

    const searchItems = (e) => {
        setSearchTerm(e);
    }

    useEffect(() => {
        const results = APIData?.filter(data =>
            data.customer.id.toString().concat(data.customer.name).toLowerCase().includes(searchTerm)
        );
        setSearchResults(results);
    }, [searchTerm, APIData]);

    const handleSelected = (e) => {
        setSearchTerm(e.target.innerText)
        const filterSelectedData = APIData.filter(data => data.customer.id === e.target.value)
        setSelected(filterSelectedData[0].customer)
    }

    const handleDiscount = (e) => {
        setDiscount({
            [e.target.name]: +e.target.value
        })
    }

    const handleNoteAndNotif = (e) => {
        setNoteAndNotif({
            ...noteAndNotif,
            [e.target.name]: e.target.value
        })
    }

    const getBusinessData = useCallback(() => {
        axiosInstance.get(`/invoices/${ID}`)
            .then((response) => {
                setBusinessData(response.data)
            })
            .catch((error) => {
                toast.error((error.response.data.message), {
                    position: "top-right",
                    autoClose: 1000
                })
            })
    }, [ID])

    useEffect(() => {
        getBusinessData()
    }, [getBusinessData, itemData])

    const getTodayDate = () => {
        let today = new Date();
        const dd = String(today.getDate()).padStart(2, '0');
        const mm = String(today.getMonth() + 1).padStart(2, '0');
        const yyyy = today.getFullYear();

        return today = mm + '/' + dd + '/' + yyyy
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const getSubTotal = () => {
        const gettingSubTotal = businessData?.data.Item.map((item) => item.total_price).reduce((a, b) => a + b, 0)
        setSubTotal(gettingSubTotal)
    }
    const getTotal = useCallback(() => {
        const converting = Object.values(discount)
        const gettingTotal = Number(subTotal - (converting[0] / 100) * subTotal)
        setTotal(gettingTotal)
    }, [subTotal, discount])

    useEffect(() => {
        getSubTotal()
    }, [getSubTotal])

    useEffect(() => {
        getTotal()
    }, [getTotal, discount])

    const updateInvoice = () => {
        axiosInstance.put(`/invoices/${ID}`, {
            user_id: +values.user_id,
            discount: values.discount,
            total: values.total,
            sub_total: subTotal,
            title: values.title,
            body: values.body
        }
        ).then((response) => {
            toast.success(response.data.message, {
                position: "top-right",
                autoClose: 1000
            })
        })
            .catch((error) => {
                toast.error('Pastikan Semua Input Sudah Terisi', {
                    position: "top-right",
                    autoClose: 2000
                })
            })
    }

    const handleBtnDiscount = () => {
        setbtnDiscount(false)
    }

    return (
        <div className="container-content mb-5-content">
            <HeaderDashboard name="Buat Invoice" />
            <div className="headerInvoice d-flex align-items-center justify-content-between">
                <img src={businessData?.data.Businnes.logo} alt="Logo" />
                <div className='flex-column text-end'>
                    <h1 className='textHeader'>Invoice</h1>
                    <h2 className='textSubHeader'>#{businessData?.data?.ID}</h2>
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
                            <h6 className='judul'>{businessData?.data?.Businnes?.name}</h6>
                            <h6 className='judul'>{businessData?.data?.Businnes?.email}</h6>
                            <h6 className='judul'>{businessData?.data?.Businnes?.no_telp}</h6>
                            <h6 className='judul'>{getTodayDate()}</h6>
                        </div>
                    </div>
                </div>
                <div className='w-50'>
                    <div className="header">Untuk :</div>
                    <div className="d-flex">
                        <div className="head-invoice w-40">
                            <h6 className='judul mb-2 mt-1'>User ID </h6>
                            <h6 className='judul mb-2 mt-1'>No. Telepon</h6>
                            <h6 className='judul mb-2 mt-1'>Alamat</h6>
                        </div>
                        <div className="head-invoice w-3">
                            <h6 className='judul mb-3 mt-1'>:</h6>
                            <h6 className='judul mb-2 mt-1'>:</h6>
                            <h6 className='judul mb-2 mt-1'>:</h6>
                        </div>
                        <div className="head-invoice w-50">
                            <input type="text" className="input-riwayat" placeholder="User Id" value={searchTerm} onChange={(e) => searchItems(e.target.value)} name='userid' required />
                            {searchTerm ? (
                                <div className="card" >
                                    <ul className="list-group list-group-flush">
                                        {searchResults.map((data) => (
                                            <li className="list-group-item"
                                                value={data.customer.id}
                                                onClick={(e) => handleSelected(e)}
                                                key={data.customer.id}>
                                                {data.customer.name} (#{data.customer.id} )                                            </li>
                                        ))
                                        }
                                    </ul>
                                </div>
                            ) : null}
                            <input type="text" className="input-riwayat mt-2" value={selected.phone || ''} placeholder="No.Telepon" disabled />
                            <textarea className="input-riwayat mt-2 mb-3" rows="3" value={selected.address || ''} disabled></textarea>
                        </div>
                    </div>
                </div>
            </div>
            <div className='invoice-item__container'>
                <ListItem itemData={itemData} setItemData={setItemData} />
            </div>

            <div className='invoice-item__summary mt-5 d-flex justify-content-between '>
                <div className='invoice-item__note d-flex flex-column'>
                    Catatan :
                    <textarea name="catatan" className='input-textarea' cols="45" rows="5" onChange={handleNoteAndNotif} required></textarea>
                </div>

                <div className='invoice-item__notif d-flex justify-content-center flex-column gap-2 w-25'>
                    <h6 className='fw-bold'>Send Notification</h6>
                    Title :
                    <input type="text" className='input-riwayat' style={{ fontSize: '13px' }} name='title' onChange={handleNoteAndNotif} />

                    Body :
                    <textarea name="body" className='input-textarea' cols="30" rows="5" onChange={handleNoteAndNotif}></textarea>

                </div>

                <div className='invoice-item__pricing d-flex justify-content-end flex-column gap-2'>
                    <div className='invoice-item__subtotal'>
                        <div className='fw-bold'>Subtotal</div>
                        <div>{subTotal?.toLocaleString('id-ID', { currency: 'IDR', style: 'currency' }) || ''}</div>
                    </div>
                    {btnDiscount ? (
                        <div className='invoice-item__diskon align-self-end'>
                            <button className='btn-diskon w-100' onClick={handleBtnDiscount}><HiPlus /> Diskon</button>
                        </div>
                    ) : (
                        <div className="invoice-input_diskon d-flex justify-content-between align-items-center ms-2 me-2">
                            <div className='fw-bold'>Diskon</div>
                            <div class="w-25">
                                <input type="number" className='input-diskon w-75' name='diskon' onChange={handleDiscount} />
                                <span className="input-diskon-text w-25">%</span>
                            </div>
                        </div>
                    )}
                    <div className='invoice-item__total'>
                        <div className='fw-bold'>Total</div>
                        <div>{total?.toLocaleString('id-ID', { currency: 'IDR', style: 'currency' })}</div>
                    </div>
                    <button type='submit' className='btn-primary align-self-end w-75 mt-2' onClick={updateInvoice}>Kirim Invoice</button>
                </div>
            </div>
        </div >
    )
}

export default InvoicePage