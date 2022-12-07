import React, { useState, useEffect } from 'react'
import { HiPlus } from 'react-icons/hi'
import { axiosInstance } from '../../config/axiosInstance';


const ButtonAddPelanggan = () => {
    const [APIData, setAPIData] = useState([])
    const [searchInput, setSearchInput] = useState('');
    const [filteredResults, setFilteredResults] = useState([]);

    useEffect(() => {
        axiosInstance.get('/role/user')
            .then((response) => {
                setAPIData(response.data.data);
            })
    }, [])
    const searchItems = (e) => {
        setSearchInput(e)
        if (searchInput !== '') {
            const filteredData = APIData.filter((item) => {
                return Object.values(item).join('').toLowerCase().includes(searchInput.toLowerCase())
            })
            setFilteredResults(filteredData)
        }
        else {
            setFilteredResults(APIData)
        }
    }
    console.log(filteredResults)

    const handleTambahPelanggan = () => {

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
                                <input type="text" className='inputModal' placeholder="User ID" onChange={(e) => searchItems(e.target.value)} />
                                {searchInput.length >= 1 ? (
                                    filteredResults.map((item) => {
                                        return (
                                            <div class="card">
                                                <div class="card-body">
                                                    {item.ID}
                                                    {item.name}
                                                </div>
                                            </div>
                                        )
                                    })
                                
                                ) : ""
                                }
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