import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosInstance } from "../config/axiosInstance";

export const getInvoiceGagal = createAsyncThunk("chart/gagal", async() => {
    const apiURL = "/invoices/count/gagal"
    const response = await axiosInstance.get(process.env.REACT_APP_BASE_API_URL + apiURL)
    return response.data.data
})

const initialState = {
    data: {},
    status: "idle"
}

export const chartInvoiceFailed = createSlice({
    name: 'chart_invoice',
    initialState: initialState,
    extraReducers(builder){
        builder
            .addCase(getInvoiceGagal.fulfilled, (state, action) => {
                state.data = action.payload
                state.status = "success"
            })
            .addCase(getInvoiceGagal.pending, (state) => {
                state.data = {}
                state.status = "loading"
            })
    }
})

export const selectInvoiceDataFailed = (state) => state.chartInvoiceDataFailed.data;
export const getInvoiceStatusFailed = (state) => state.chartInvoiceDataFailed.status;

export default chartInvoiceFailed.reducer