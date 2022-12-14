import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    data: {}
}

const registerAdmin = createSlice({
    name: 'register',
    initialState,
    reducers: {
        addAdmin: (state, action) => {
            const newData = action.payload
            
            state.data = { ...state.data, newData }
        }
    }
})

export const { addAdmin } = registerAdmin.actions
export default registerAdmin.reducer