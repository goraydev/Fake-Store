import { configureStore } from '@reduxjs/toolkit'
import { authSlice } from './auth'
import { journalSlice } from './journal'
import { appstoreSlice } from './appstore/appstoreSlice'

export const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        journal: journalSlice.reducer,
        appstore: appstoreSlice.reducer,
    },
})