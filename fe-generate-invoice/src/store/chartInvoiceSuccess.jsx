import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosInstance } from "../config/axiosInstance";

export const getInvoiceBerhasil = createAsyncThunk("chart/berhasil", async() => {
    const apiURL = "/invoices/count/berhasil"
    const response = await axiosInstance.get(process.env.REACT_APP_BASE_API_URL + apiURL)
    return response.data.data
})

const initialState = {
    data: {},
    status: "idle"
}

export const chartInvoiceSuccess = createSlice({
    name: 'chart_invoice',
    initialState: initialState,
    extraReducers(builder){
        builder
            .addCase(getInvoiceBerhasil.fulfilled, (state, action) => {
                state.data = action.payload
                state.status = "success"
            })
            .addCase(getInvoiceBerhasil.pending, (state) => {
                state.data = {}
                state.status = "loading"
            })
    }
})

export const selectInvoiceDataSuccess = (state) => state.chartInvoiceDataSuccess.data;
export const getInvoiceStatusSuccess = (state) => state.chartInvoiceDataSuccess.status;

export default chartInvoiceSuccess.reducer