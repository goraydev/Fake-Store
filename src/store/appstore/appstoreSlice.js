import { createSlice } from '@reduxjs/toolkit'

const initialState = {

    isLoading: false,
    allProducts: undefined,
    allCategories: [],
    productActive: null
}

export const appstoreSlice = createSlice({
    name: "appstore",
    initialState,
    reducers: {

        loadingProducts: (state, { payload }) => {
            state.isLoading = true;
            state.productActive = null;
        },

        getProducts: (state, { payload }) => {
            state.isLoading = false;
            state.allProducts = payload;
            state.productActive = null;
        },

        getOnlyProduct: (state, { payload }) => {
            state.isLoading = false;
            state.allProducts = undefined;
            state.productActive = payload;
        },

        getCategories: (state, { payload }) => {
            state.allCategories = payload;
            state.productActive = null;
        }


    }
});

export const { getProducts, loadingProducts, getCategories, getOnlyProduct } = appstoreSlice.actions;