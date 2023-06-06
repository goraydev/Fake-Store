import { configureStore } from '@reduxjs/toolkit'
import { appstoreSlice } from './appstore/appstoreSlice'
import { authSlice } from './auth/authSlice'

export const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        appstore: appstoreSlice.reducer
    },
})