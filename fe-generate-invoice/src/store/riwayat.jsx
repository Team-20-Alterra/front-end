import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosInstance } from "../config/axiosInstance";

export const getRiwayat = createAsyncThunk("riwayat/invoice", async() => {
    const apiURL = "/invoices/status"
    const response = await axiosInstance.get(process.env.REACT_APP_BASE_API_URL + apiURL)
    return response.data.data
})

const initialState = {
    data: {},
    dataStatus: {},
    status: "idle"
}

export const riwayatInvoice = createSlice({
    name: 'riwayat_invoice',
    initialState: initialState,
    reducers: {
        handleAllStatus: (state) => {
            state.data = state.dataStatus.map((invoice) => {
                return invoice
            })
        },

        handleBerhasilInvoice: (state) => {
            state.data = state.dataStatus.filter((invoice) => {
                return invoice.status === 'Berhasil'
            })
        },
        handleGagalInvoice: (state) => {
            state.data = state.dataStatus.filter((invoice) => {
                return invoice.status === 'Gagal'
            })
        },
        handleMenungguKonfirmasinvoice: (state) => {
            state.data = state.dataStatus.filter((invoice) => {
                return invoice.status === 'Menunggu Konfirmasi'
            })
        },
        handleDalamProsesInvoice: (state) => {
            state.data = state.dataStatus.filter((invoice) => {
                return invoice.status === 'Dalam Proses'
            })
        }
    },
    extraReducers(builder){
        builder
            .addCase(getRiwayat.fulfilled, (state, action) => {
                state.data = action.payload
                state.dataStatus = action.payload
                state.status = "success"
            })
            .addCase(getRiwayat.pending, (state) => {
                state.data = {}
                state.dataStatus = {}
                state.status = "loading"
            })
    }
})

export const selectRiwayatInvoice = (state) => state.riwayatInvoiceData.data;
export const getStatusRiwayatInvoice = (state) => state.riwayatInvoiceData.status;
export const {handleAllStatus, handleBerhasilInvoice, handleGagalInvoice, handleMenungguKonfirmasinvoice, handleDalamProsesInvoice} = riwayatInvoice.actions

export default riwayatInvoice.reducer