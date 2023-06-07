import { createSlice } from '@reduxjs/toolkit'

const initialState = {

    allProducts: [],
    isLoading: false,
}

export const appstoreSlice = createSlice({
    name: "appstore",
    initialState,
    reducers: {

        loadingProducts: (state, { payload }) => {
            state.isLoading = true;
        },

        getProducts: (state, { payload }) => {
            state.isLoading = false;
            state.allProducts = payload;
        }


    }
});

export const { getProducts, loadingProducts } = appstoreSlice.actions;