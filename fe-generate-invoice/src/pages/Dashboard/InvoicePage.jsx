import React, { useCallback } from 'react'
import HeaderDashboard from '../../component/DashboardFeature/HeaderDashboard'
import logoPerusahaan from '../../assets/image/Admin/Logo-Perusahaan.png'
import ListItem from '../../component/DashboardFeature/ListItem'
import { HiPlus } from 'react-icons/hi'
import { useState } from 'react'
import { axiosInstance } from '../../config/axiosInstance'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'

const InvoicePage = () => {
    const { ID } = useParams()
    const [businessData, setBusinessData] = useState()
    const [APIData, setAPIData] = useState([])
    const [searchTerm, setSearchTerm] = useState("");
    const [selected, setSelected] = useState("")
    const [searchResults, setSearchResults] = useState([]);

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

    const getBusinessData = () => {
        axiosInstance.get(`/invoices/${ID}`)
            .then((response) => {
                setBusinessData(response.data)
            })
            .catch((error) => {
                console.log(error)
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

    const getSubTotal = useCallback(() => {
        const subTotal = businessData?.data?.Item.map((item) => item.total_price).reduce((a, b) => a + b, 0)
        return subTotal
    }, [businessData?.data?.Item])

    useEffect(() => {
        getSubTotal()
    }, [])

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
                            <input type="text" className="input-riwayat" placeholder="User Id" value={searchTerm} onChange={(e) => searchItems(e.target.value)} />
                            {searchTerm ? (
                                <div className="card" >
                                    <ul className="list-group list-group-flush">
                                        {searchResults.map((data) => (
                                            <li className="list-group-item"
                                                value={data.customer.id}
                                                onClick={(e) => handleSelected(e)}
                                                key={data.customer.id}>
                                                {data.customer.name} (#{data.customer.id} )
                                            </li>
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
                {/* <ButtonAddItem /> */}
            </div>

            <div className='invoice-item__summary mt-5 d-flex justify-content-between'>
                <div className='invoice-item__note'>
                    <h5>Catatan:</h5>
                    <textarea name="catatan" id="" cols="55" rows="5"></textarea>
                </div>

                <div className='invoice-item__pricing d-flex justify-content-end flex-column gap-3'>
                    <div className='invoice-item__subtotal'>
                        <h6>Subtotal</h6>
                        <h6>{getSubTotal()}</h6>
                    </div>
                    <div className='invoice-item__diskon align-self-end'>
                        <h6 style={{ fontWeight: "bolder", color: "#297061" }}><HiPlus />Diskon</h6>
                    </div>
                    <div className='invoice-item__total'>
                        <h6>Total</h6>
                        <h6>Rp.XXXXXX</h6>
                    </div>
                    <button type='submit' className='justify-content-end'>Kirim Invoice</button>
                </div>
            </div>
        </div >
    )
}

export default InvoicePage