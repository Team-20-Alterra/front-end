import { configureStore } from '@reduxjs/toolkit'
import firstRegisterSlice from './RegisterFirstStep'

const store = configureStore({
    reducer: {
        first : firstRegisterSlice
    }
})

export default store