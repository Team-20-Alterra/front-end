import React, { useCallback } from 'react'
import HeaderDashboard from '../../component/DashboardFeature/HeaderDashboard'
import logoPerusahaan from '../../assets/image/Admin/Logo-Perusahaan.png'
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
    const [discount, setDiscount] = useState(0)
    const [total, setTotal] = useState()

    const convertDiscount = Object.values(discount)
    const convert = convertDiscount[0]?.toString()

    const values = {
        user_id: selected.id,
        discount: convert,
        total: Number(total),
        sub_total: subTotal,
        title: "Judul Notifikasi",
        body: "Body Notifikasi"
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
        const results = APIData.filter(data =>
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
            ...discount,
            [e.target.name]: +e.target.value
        })
    }

    const getBusinessData = () => {
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
    }

    useEffect(() => {
        getBusinessData()
    }, [])

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
    const getTotal = () => {
        const converting = Object.values(discount)
        const gettingTotal = Number(subTotal - (converting[0] / 100) * subTotal).toFixed(2)
        console.log(gettingTotal)
        setTotal(gettingTotal)
    }


    useEffect(() => {
        getSubTotal()
    }, [getSubTotal])
    useEffect(() => {
        getTotal()
    }, [])

    const updateInvoice = () => {

        axiosInstance.put(`/invoices/${ID}`, {
            user_id: +values.user_id,
            discount: values.discount,
            total: values.total,
            sub_total: values.sub_total,
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
                console.log(error)
            })
    }

    return (
        <div className="container-content mb-5-content">
            <HeaderDashboard name="Buat Invoice" />
            <div className="headerInvoice d-flex align-items-center justify-content-between">
                <img src={logoPerusahaan} alt="Logo" />
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
                            <input type="text" className="input-riwayat" placeholder="User Id" value={searchTerm} onChange={(e) => searchItems(e.target.value)} name='userid' />
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
                <ListItem />
            </div>

            <div className='invoice-item__summary mt-5 d-flex justify-content-between'>
                <div className='invoice-item__note'>
                    <h5>Catatan:</h5>
                    <textarea name="catatan" id="" cols="55" rows="5"></textarea>
                </div>

                <div className='invoice-item__pricing d-flex justify-content-end flex-column gap-3'>
                    <div className='invoice-item__subtotal'>
                        <h6>Subtotal</h6>
                        <input onChange={getSubTotal} value={subTotal?.toLocaleString('id-ID', { currency: 'IDR', style: 'currency' })} disabled name='sub_total' />
                    </div>
                    <div className='invoice-item__diskon align-self-end'>
                        <h6 style={{ fontWeight: "bolder", color: "#297061" }}><HiPlus />Diskon</h6><input type="number" name='diskon' onChange={handleDiscount} /><span>%</span>
                    </div>
                    <div className='invoice-item__total'>
                        <h6>Total</h6>
                        <input onChange={getTotal} value={discount ? total?.toLocaleString('id-ID', { currency: 'IDR', style: 'currency' }) : 0} disabled name='total' />
                    </div>
                    <button type='submit' className='justify-content-end' onClick={updateInvoice}>Kirim Invoice</button>
                </div>
            </div>
        </div >
    )
}

export default InvoicePage