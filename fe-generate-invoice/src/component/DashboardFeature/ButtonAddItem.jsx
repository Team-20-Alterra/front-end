import React from 'react'
import { HiPlus } from 'react-icons/hi'

const ButtonAddItem = () => {
  return (
      <>
          <button className='add-item_button d-flex'  type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" style={{width: "10%"}}><HiPlus style={{ fontSize: "24px", marginRight: "4px", color: "#E4EDEB" }}/>Item</button>
          <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Tambah Item</h1>
                        </div>
                        <div className="modal-body">
                          <form>
                              <div className='item-modal__container d-flex flex-column gap-3'>
                              <input type="text" placeholder='Item' />
                              <input type="number" placeholder='Jumlah' />
                              <input type="text" placeholder='Harga Satuan'/>
                              <input type="text" placeholder='Total Harga'/>
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