import { createSlice } from '@reduxjs/toolkit'

const initialState = {

    isLoading: false,
    allProducts: undefined,
    allCategories: [],
    productActive: null,
    myCart: [],
    isSaving: false,
    message: ""
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

        setProductsCart: (state, { payload }) => {
            state.myCart = payload.resp;
        },

        startUpProducts: (state, { payload }) => {

            const exist = state.myCart.some(product => product.id === state.productActive.id);
            if (!exist) {

                state.myCart.push(payload);
            }
        },

        startShowProductCart: (state, { payload }) => {
            state.productActive = state.myCart.find(product => product.id === payload);
        },

        startUpdateProduct: (state, { payload }) => {
            state.isSaving = false;
            state.myCart = state.myCart.map(product => {
                if (product.id === payload.id) {
                    return payload;
                }

                return product;
            });
            state.message = "Actualizada correctamente"
        },

        startDeleteProductCart: (state, { payload }) => {
            state.myCart = state.myCart.filter(product => product.id !== payload);
            state.productActive = null;
        },
        setSaving: (state) => {
            state.isSaving = true;
            state.message = ""
        },

        clearAllAppStore: (state) => {
            state.isSaving = false;
            state.message = "";
            state.myCart = [];
            state.productActive = null;
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
    startShowProductCart,
    startUpdateProduct,
    startDeleteProductCart,
    setSaving,
    setProductsCart,
    clearAllAppStore
} = appstoreSlice.actions;