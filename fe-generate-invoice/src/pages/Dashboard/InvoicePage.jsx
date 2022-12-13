import React from 'react'
import HeaderDashboard from '../../component/DashboardFeature/HeaderDashboard'
import logoPerusahaan from '../../assets/image/Admin/Logo-Perusahaan.png'
import ListItem from '../../component/DashboardFeature/ListItem'
import { HiPlus } from 'react-icons/hi'
import ButtonAddItem from '../../component/DashboardFeature/ButtonAddItem'
import { useState } from 'react'
import { axiosInstance } from '../../config/axiosInstance'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Cookies from 'js-cookie'
const InvoicePage = () => {
    const {ID} = useParams()

    const [businessData, setBusinessData] = useState()
    const [customerData, setCustomerData] = useState()

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

    console.log(businessData)
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
                <div className="from">
                    <div className="header">Diterbitkan oleh :</div>
                    <div className="detailInvoice">
                        <table>
                            <tbody>
                                <tr>
                                    <td>Penjual</td>
                                    <td className='data'>:{businessData?.data?.Businnes?.name}</td>
                                </tr>
                                <tr>
                                    <td>Email</td>
                                    <td className='data'>:{businessData?.data?.Businnes?.email}</td>
                                </tr>
                                <tr>
                                    <td>No.Telepon</td>
                                    <td className='data'>:{businessData?.data?.Businnes?.no_telp}</td>
                                </tr>
                                <tr>
                                    <td>Tanggal</td>
                                    <td className='data'>: {getTodayDate()}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="to">
                    <div className="header">Untuk :</div>
                    <div className="detailInvoice">
                        <table>
                            <tbody>
                                <tr>
                                    <td>User ID</td>
                                    <td className='data'>: {businessData?.data?.User?.ID}</td>
                                </tr>
                                <tr>
                                    <td>Email</td>
                                    <td className='data'>: {businessData?.data?.User?.email}</td>
                                </tr>
                                <tr>
                                    <td>No.Telepon</td>
                                    <td className='data'>: {businessData?.data?.User?.phone}</td>
                                </tr>
                                <tr>
                                    <td>Tanggal</td>
                                    <td className='data'>: {getTodayDate()}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div className='invoice-item__container'>
                <ListItem />
                <ButtonAddItem />
            </div>

            <div className='invoice-item__summary mt-5 d-flex justify-content-between'>
                <div className='invoice-item__note'>
                    <h5>Catatan:</h5>
                    <textarea name="" id="" cols="55" rows="5"></textarea>
                </div>

                <div className='invoice-item__pricing d-flex justify-content-end flex-column gap-3'>
                    <div className='invoice-item__subtotal'>
                        <h6>Subtotal</h6>
                        <h6>Rp.XXXXXX</h6>
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