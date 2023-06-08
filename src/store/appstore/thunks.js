import { fakeStoreAPI } from "../../API/fakeStoreAPI";
import { getCategories, getProducts, loadingProducts } from "./appstoreSlice";

export const startGetProducts = () => {
    return async (dispatch, getState) => {
        dispatch(loadingProducts());

        const { data } = await fakeStoreAPI.get("/products");
        dispatch(getProducts(data));

    }
}

export const startProductsByTitle = (query) => {
    return async (dispatch, getState) => {
        dispatch(loadingProducts());

        const { data } = await fakeStoreAPI.get("/products");
        const filterProducts = data.filter(product => product.title.toLowerCase().includes(query));
        dispatch(getProducts(filterProducts));

    }
}


export const startProductsByCategory = (category) => {
    return async (dispatch, getState) => {

        const { data } = await fakeStoreAPI.get(`/products/category/${category}`);
        dispatch(getProducts(data));

    }
}


export const startGetCategories = () => {
    return async (dispatch, getState) => {

        const { data } = await fakeStoreAPI.get("/products/categories");
        dispatch(getCategories(data));

    }
}


