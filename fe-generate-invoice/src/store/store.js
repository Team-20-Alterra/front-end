import { configureStore } from '@reduxjs/toolkit'
import firstRegisterSlice from './RegisterFirstStep'
import secRegisterSlice from './RegisterSecStep'

const store = configureStore({
    reducer: {
        first: firstRegisterSlice,
        second : secRegisterSlice
    }
})

export default store