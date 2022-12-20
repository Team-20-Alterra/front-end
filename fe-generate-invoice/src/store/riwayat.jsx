import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosInstance } from "../config/axiosInstance";

export const getRiwayat = createAsyncThunk("riwayat/invoice", async() => {
    const apiURL = "/invoices/status"
    const response = await axiosInstance.get(process.env.REACT_APP_BASE_API_URL + apiURL)
    return response.data.data
})

const initialState = {
    data: {},
    status: "idle"
}

export const riwayatInvoice = createSlice({
    name: 'riwayat_invoice',
    initialState: initialState,
    extraReducers(builder){
        builder
            .addCase(getRiwayat.fulfilled, (state, action) => {
                state.data = action.payload
                state.status = "success"
            })
            .addCase(getRiwayat.pending, (state) => {
                state.data = {}
                state.status = "loading"
            })
    }
})

export const selectRiwayatInvoice = (state) => state.riwayatInvoiceData.data;
export const getStatusRiwayatInvoice = (state) => state.riwayatInvoiceData.status;

export default riwayatInvoice.reducer