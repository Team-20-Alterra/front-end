import React from "react";
import DatePicker from "react-datepicker";
import { HiFilter } from "react-icons/hi";
import { useState } from "react";

const ButtonFilter = () => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <>
      <button
        type="button"
        className='filter-icon'
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        <HiFilter size={24} /> Filter
      </button>
      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Filtering
              </h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body date-picker__filter">
              <h6>Tanggal</h6>
              <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} className='date-picker' />
            </div>
            <div className="modal-body min-max__filter">
              <h6>Harga</h6>
              <div className="min-max">
                <input type="text" placeholder="RP Jumlah Minimum" />
                <input type="text" placeholder="RP Jumlah Maksimum" />
              </div>
            </div>
            <div className="btn-modal filtering-button__container">
              <button type="button" className="btn filtering-button__batal" data-bs-dismiss="modal">Batal</button>
              <button className='btn-primary' type="submit">Simpan</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ButtonFilter;
