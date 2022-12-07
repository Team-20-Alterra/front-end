import { configureStore } from '@reduxjs/toolkit'
import firstRegisterSlice from './RegisterFirstStep'
import adminLoginSlice from './LoginSlice'

const store = configureStore({
    reducer: {
        first: firstRegisterSlice,
        login: adminLoginSlice
    }
})

export default store