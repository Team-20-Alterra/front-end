import React, { useState, useEffect } from 'react'
import { HiPlus } from 'react-icons/hi'
import { axiosInstance } from '../../config/axiosInstance';
import { toast } from 'react-toastify';


const ButtonAddBank = ({ values }) => {
    const [APIData, setAPIData] = useState([])
    const [searchTerm, setSearchTerm] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedID, setSelectedID] = useState()
    const [searchResults, setSearchResults] = useState([]);

    useEffect(() => {
        axiosInstance.get('/banks')
            .then((response) => {
                setAPIData(response.data.data);
            })
    }, [loading])

    const searchItems = (event) => {
        setSearchTerm({
            ...searchTerm,
            [event.target.name]: event.target.value
        })
    }

    useEffect(() => {
        const results = APIData.filter(data =>
            data.name.toLowerCase().includes(searchTerm.name)
        );
        setSearchResults(results);
    }, [searchTerm, APIData]);

    const handleSelected = (e) => {
        setSearchTerm({
            ...searchTerm,
            [e.target.name]: e.target.innerText,
        })
        setSelectedID(e.target.value)
    }
    const handleTambahBank = (event) => {
        event.preventDefault()
        axiosInstance.post('/list-bank', {
            owner: values.admin.name,
            account_number: searchTerm.no_rek,
            bank_id: +selectedID
        }
        ).then((response) => {
            toast.success('Rekening Berhasil Ditambahkan', {
                position: "top-right",
                autoClose: 2000
            })
            setLoading((prev) => !prev);
            document.getElementById('closeModal').click();
        }).catch((error) => {
            console.log(error)
        })
    }

    return (
        <>
            <button type='button' className='add-rekening' data-bs-toggle="modal" data-bs-target="#exampleModal"><HiPlus /> Daftar Rekening</button>
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Tambah Rekening</h1>
                        </div>
                        <div className="modal-body">
                            <h6>Nama Bank</h6>
                            <form>
                                <input type="text" className='inputModal' name='name' placeholder="Masukkan Nama Bank.." value={searchTerm.name || ''} onChange={searchItems} />
                                {searchTerm ? (
                                    <div className="card" >
                                        {searchResults.map((data) => (
                                            <ul className="list-group list-group-flush" key={data.id}>
                                                <button type='button' className="list-group-item text-start" value={data.id} name='name' onClick={handleSelected}>{data.code} - {data.name}</button>
                                            </ul>
                                        ))
                                        }
                                    </div>
                                ) : null}
                                <h6 className='mt-4'>Nomor Rekening</h6>
                                <input type="text" className='inputModal' placeholder="No Rekening..." name='no_rek' value={searchTerm.no_rek} onChange={searchItems} />
                                <div className="btn-modal">
                                    <button type="button" id='closeModal' className="btn btn-secondary" data-bs-dismiss="modal">Batal</button>
                                    <button className='btn-primary' type="submit" onClick={handleTambahBank}>Tambahkan</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ButtonAddBank