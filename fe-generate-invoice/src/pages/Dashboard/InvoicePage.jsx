import React from 'react'
import HeaderDashboard from '../../component/DashboardFeature/HeaderDashboard'
import logoPerusahaan from '../../assets/image/Admin/Logo-Perusahaan.png'

const InvoicePage = () => {
    return (
        <div className="container-content">
            <div className="containerHeader">
                <HeaderDashboard name="Buat Invoice" />
            </div>
            <div className="headerInvoice d-flex align-items-center justify-content-between">
                <img src={logoPerusahaan} alt="Logo" />
                <div className='flex-column text-end'>
                    <h1 className='textHeader'>Invoice</h1>
                    <h2 className='textSubHeader'>#0111110</h2>
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
                                    <td className='data'>: Nama Perusahaan</td>
                                </tr>
                                <tr>
                                    <td>Email</td>
                                    <td className='data'>: Email@Perusahaan.com</td>
                                </tr>
                                <tr>
                                    <td>No.Telepon</td>
                                    <td className='data'>: 082837646464</td>
                                </tr>
                                <tr>
                                    <td>Tanggal</td>
                                    <td className='data'>: 22/11/2022</td>
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
                                    <td className='data'>: 10192838</td>
                                </tr>
                                <tr>
                                    <td>Email</td>
                                    <td className='data'>: Email Perusahaan</td>
                                </tr>
                                <tr>
                                    <td>No.Telepon</td>
                                    <td className='data'>: 082837646464</td>
                                </tr>
                                <tr>
                                    <td>Tanggal</td>
                                    <td className='data'>: 22/11/2022</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

        </div >
    )
}

export default InvoicePage