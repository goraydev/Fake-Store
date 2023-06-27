import { configureStore } from '@reduxjs/toolkit'
import { authSlice } from './auth'
import { appstoreSlice } from './appstore/appstoreSlice'

export const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        appstore: appstoreSlice.reducer,
    },
})