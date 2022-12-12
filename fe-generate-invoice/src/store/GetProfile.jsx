// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import { axiosInstance } from "../config/axiosInstance";

// export const getProfile = createAsyncThunk('get-profile', async () => {
//     try {
//         axiosInstance.get('users/profile')
//             .then((response) => {
//             console.log(response.data)
//         })
//     } catch (error) {
//         console.log(error)
//     }
// })

// const initialState = {
//     error: null,
//     loading: false,
// }

// const profileSlice = createSlice({
//     name: 'profile',
//     initialState,
// })

// export default profileSlice.reducer