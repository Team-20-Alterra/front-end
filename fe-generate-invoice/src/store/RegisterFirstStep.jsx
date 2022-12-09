import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from 'react-toastify';
import { axiosInstance } from "../config/axiosInstance";
import Auth from "../utils/Auth/Auth";

export const registerAdminFirstStep = createAsyncThunk('admin/register-first', async ({Name,Email,password}) => {
    try {
        await axiosInstance.post('/register/admin',
            { Name, Email, password },
        ).then((response) => {
            console.log(response)
        })
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