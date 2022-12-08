import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosInstance } from "../config/axiosInstance";
import Auth from "../utils/Auth/Auth";


export const registerAdminSecStep = createAsyncThunk('admin/register-sec', async ({ data }) => {
    try {
        const payload = new FormData()
        payload.append('data', data)
        await axiosInstance.post('/business', payload)
            .then((response) => {
            console.log(response)
        })
    } catch (error) {
        console.log(error)
    }
})

const initialState = {
    error: null,
    success: false,
    loading: false,
}

const secRegisterSlice = createSlice({
    name: 'secondRegister',
    initialState,
    extraReducers(builder) {
        builder
            .addCase(registerAdminSecStep.pending, (state) => {
            state.loading = true
            })
            .addCase(registerAdminSecStep.fulfilled, (state) => {
                state.success = true
                state.loading = false
            })
            .addCase(registerAdminSecStep.rejected, (state, {payload}) => {
                state.loading = false
                state.error = payload
            })
    }
})

export default secRegisterSlice.reducer