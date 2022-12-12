import { configureStore } from '@reduxjs/toolkit'
import registerAdmin from './registerAdmin'

export const store = configureStore({
    reducer: {
        register : registerAdmin
    }
})
