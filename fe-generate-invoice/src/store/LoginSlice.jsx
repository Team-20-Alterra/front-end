import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { Navigate, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { axiosInstance } from '../config/axiosInstance'
import Auth from '../utils/Auth/Auth'


export const loginAdmin = createAsyncThunk('admin/login', async ({ email, password }) => {
    try {
       const response = await axiosInstance.post('/login/admin',
           { email, password })
        Auth.storeUserInfoToCookie(response.data.data.token)
    } catch(error) {
        toast.error(error.response.data.message, {
            position: "top-right",
            autoClose: 3000,
        })
    }
})

const initialState = {
    error: null,
    success: false,
    loading: false,
}

const adminLoginSlice = createSlice({
    name: 'login',
    initialState,
    extraReducers(builder) {
        builder
        .addCase(loginAdmin.pending, (state) => {
            state.loading = true
            state.error = null
            })
            .addCase(loginAdmin.fulfilled, (state, {payload}) => {
                state.loading = false
                state.adminInfo = payload
                state.success = true
            })
            .addCase(loginAdmin.rejected, (state, { payload }) => {
                state.loading = false
                state.error = payload
            })
    }
})

export default adminLoginSlice.reducer