import { createSlice } from '@reduxjs/toolkit'

const initialState = {

    isLoading: false,
    allProducts: [],
    allCategories: [],
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
        },

        getCategories: (state, { payload }) => {
            state.allCategories = payload;
        }


    }
});

export const { getProducts, loadingProducts, getCategories } = appstoreSlice.actions;