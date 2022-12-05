import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import CONST from "../utils/constant/constant";
import { toast } from 'react-toastify';

export const registerAdminFirstStep = createAsyncThunk('admin/register-first', async ({name,email,password}) => {
    try {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        await axios.post(
            `${CONST.BASE_API_URL}/register/admin`,
            { name, email, password },
            config)
    }
    catch (error){
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

const firstRegisterSlice = createSlice({
    name: 'firstRegister',
    initialState,
    extraReducers(builder) {
        builder
            .addCase(registerAdminFirstStep.pending, (state) => {
            state.loading = true
            })
            .addCase(registerAdminFirstStep.fulfilled, (state) => {
                state.success = true
                state.loading = false
            })
            .addCase(registerAdminFirstStep.rejected, (state, { payload }) => {
                state.loading = false
                state.error = payload
            })
    }
})


export default firstRegisterSlice.reducer
