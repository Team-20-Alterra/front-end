import { configureStore } from '@reduxjs/toolkit'
import registerAdmin from './registerAdmin'
import riwayatInvoice from './riwayat'
import chartInvoiceSuccess from './chartInvoiceSuccess'
import chartInvoiceFailed from './chartInvoiceFailed'

export const store = configureStore({
    reducer: {
        register : registerAdmin,
        riwayatInvoiceData: riwayatInvoice,
        chartInvoiceDataSuccess: chartInvoiceSuccess,
        chartInvoiceDataFailed: chartInvoiceFailed,
    }
})
