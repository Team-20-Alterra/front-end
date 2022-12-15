import React, { useState } from 'react'
import { useEffect } from 'react'
import { HiPlus } from 'react-icons/hi'
import { useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import { axiosInstance } from '../../config/axiosInstance'
import InvoicePage from '../../pages/Dashboard/InvoicePage'

const ButtonAddItem = () => {
    const { ID } = useParams()
    const [invoiceID, setInvoiceID] = useState()
    const [loading, setLoading] = useState(false)
    const [values, setValues] = useState({
        name: "",
        amount: "",
        unit_price: "",
        total_price: "",
        invoice_id: ""
    })

    const getInvoiceID = () => {
        axiosInstance.get(`/invoices/${ID}`)
            .then((response) => {
                setInvoiceID(response.data)
            })
            .catch((error) => {
                console.log(error)
            })
    }

    useEffect(() => {
        getInvoiceID()
    }, [])

    const handleChange = (event) => {
        setValues({
            ...values,
            [event.target.name]: event.target.value
        })
    }

    const onAddItem = (e) => {
        e.preventDefault()
        axiosInstance.post('/item', {
            name: values.name,
            amount: +values.amount,
            unit_price: +values.unit_price,
            total_price: +values.total_price,
            invoice_id: +ID
        })
            .then((response) => {
                toast.success(response.data.message, {
                    position: "top-right",
                    autoClose: 3000
                })
            })
            .catch((error) => {
                toast.error(error.response.data.message, {
                    position: "top-right",
                    autoClose: 3000
                })
            })
    }

    return (
        <>
            <button className='add-item_button d-flex' type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" style={{ width: "10%" }}><HiPlus style={{ fontSize: "24px", marginRight: "4px", color: "#E4EDEB" }} />Item</button>
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Tambah Item</h1>
                        </div>
                        <div className="modal-body">
                            <form onSubmit={onAddItem}>
                                <div className='item-modal__container d-flex flex-column gap-3'>
                                    <input type="text" placeholder='Item' name='name' onChange={handleChange} />
                                    <input type="number" placeholder='Jumlah' name='amount' onChange={handleChange} />
                                    <input type="text" placeholder='Harga Satuan' name='unit_price' onChange={handleChange} />
                                    <input type="text" placeholder='Total Harga' name='total_price' onChange={handleChange} />
                                </div>
                                <div className="btn-modal d-flex justify-content-center">
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Batal</button>
                                    <button className='btn-primary' type="submit">Tambahkan</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ButtonAddItem