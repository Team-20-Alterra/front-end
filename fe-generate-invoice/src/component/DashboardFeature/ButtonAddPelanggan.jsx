import React from 'react'
import { HiPlus } from 'react-icons/hi'
import { useForm } from 'react-hook-form';

const ButtonAddPelanggan = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    console.log(errors);

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
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <input type="text" className='inputModal' placeholder="User ID" {...register("User ID", { required: true })} />
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