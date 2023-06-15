import { createSlice } from '@reduxjs/toolkit'

const initialState = {

    isLoading: false,
    allProducts: undefined,
    allCategories: [],
    productActive: null,
    myCart: [],
    productCartActive: null
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
            state.productActive.amount = 1;
            state.productActive.total = state.productActive.price * state.productActive.amount;
        },

        getCategories: (state, { payload }) => {
            state.allCategories = payload;
            state.productActive = null;
        },

        increment: (state) => {
            state.productActive.amount += 1;
            state.productActive.total = state.productActive.price * state.productActive.amount;
        },

        decrement: (state) => {
            state.productActive.amount = state.productActive.amount > 1 ? state.productActive.amount - 1 : 1;
            state.productActive.total = state.productActive.price * state.productActive.amount;
        },

        startUpProducts: (state, { payload }) => {

            const exist = state.myCart.some(product => product.id === state.productActive.id);
            if (!exist) {
                state.myCart.push(state.productActive);
            }

        },

        startUpdateCart: (state, { payload }) => {
            state.productActive = state.myCart.find(product => product.id === payload);
        }


    }
});

export const { getProducts,
    loadingProducts,
    getCategories,
    getOnlyProduct,
    increment,
    decrement,
    startUpProducts,
    startUpdateCart
} = appstoreSlice.actions;