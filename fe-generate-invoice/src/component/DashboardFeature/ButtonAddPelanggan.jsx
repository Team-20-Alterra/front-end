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

            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="exampleModalLabel">Tambah Pelanggan</h1>
                        </div>
                        <div class="modal-body">
                            <h6>User ID</h6>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <input type="text" className='inputModal' placeholder="User ID" {...register("User ID", { required: true })} />
                                <div className="btn-modal">
                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Batal</button>
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