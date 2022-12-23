import React, { useState, useEffect } from 'react'
import { HiPlus } from 'react-icons/hi'
import { axiosInstance } from '../../config/axiosInstance';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router';


const ButtonAddPelanggan = ({ setLoading }) => {
    const [APIData, setAPIData] = useState([])
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedID, setSelectedID] = useState("")
    const [searchResults, setSearchResults] = useState([]);

    useEffect(() => {
        axiosInstance.get('/role/user')
            .then((response) => {
                setAPIData(response.data.data);
            })
    }, [])

    const searchItems = (e) => {
        setSearchTerm(e);
    }

    useEffect(() => {
        const results = APIData.filter(data =>
            data.ID.toString().concat(data.name).toLowerCase().includes(searchTerm)
        );
        setSearchResults(results);
    }, [searchTerm, APIData]);

    const handleSelected = (e) => {
        setSearchTerm(e.target.innerText)
        setSelectedID(e.target.value)
    }

    const handleTambahPelanggan = (e) => {
        e.preventDefault()
        axiosInstance.post('/add-customer', {
            user_id: selectedID
        }).then((response) => {
            setLoading((prev) => !prev)
            if (response.status === 201) {

                toast.success(response.data.message, {
                    position: "top-right",
                    autoClose: 3000,
                })
            } else {
                toast.error(response.data.message, {
                    position: "top-right",
                    autoClose: 3000,
                })
            }
        }).catch((error) => {
            toast.error(error.response.data.message, {
                position: "top-right",
                autoClose: 3000,
            })
        })
    }


    return (
        <>
            <button className='btn-primary pelanggan' data-bs-toggle="modal" data-bs-target="#exampleModal"><HiPlus /> Customer</button>
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Tambah Pelanggan</h1>
                        </div>
                        <div className="modal-body">
                            <h6>User ID</h6>
                            <form onSubmit={handleTambahPelanggan}>
                                <input type="text" className='inputModal' placeholder="User ID" value={searchTerm} onChange={(e) => searchItems(e.target.value)} />
                                {searchTerm ? (
                                    <div className="card" >
                                        <ul className="list-group list-group-flush">
                                            {searchResults.map((data) => (
                                                <li className="list-group-item" value={data.ID} onClick={(e) => handleSelected(e)} key={data.ID}>{data.name} ( #{data.ID} )</li>
                                            ))
                                            }
                                        </ul>
                                    </div>
                                ) : null}
                                <div className="btn-modal">
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

export default ButtonAddPelanggan