import { collection, deleteDoc, doc, setDoc } from "firebase/firestore/lite";
import { fakeStoreAPI } from "../../API/fakeStoreAPI";
import {
    getCategories,
    getOnlyProduct,
    getProducts,
    loadingProducts,
    setProductsCart,
    setSaving,
    startDeleteProductCart,
    startUpdateProduct
} from "./appstoreSlice";
import { FirebaseDB } from "../../firebase/config";
import { loadProductsCart } from "../../helpers/loadProductsCart";

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



export const startProductById = (id) => {
    return async (dispatch, getSate) => {
        dispatch(loadingProducts());
        const { data } = await fakeStoreAPI.get(`/products/${id}`);
        dispatch(getOnlyProduct(data));
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



export const startLoadingProductsCart = () => {
    return async (dispatch, getState) => {
        const { uid } = getState().auth;

        const resp = await loadProductsCart(uid);

        dispatch(setProductsCart({ resp }));

    }
};

export const startSavingProduct = () => {
    return async (dispatch, getState) => {
        dispatch(setSaving());
        const { uid } = getState().auth;
        const { productActive } = getState().appstore;


        const productToFireStore = { ...productActive }
        delete productToFireStore.id;

        const docRef = doc(FirebaseDB, `${uid}/fakestore/productsCart/${productActive.id}`);
        await setDoc(docRef, productToFireStore, { merge: true });
        dispatch(startUpdateProduct(productActive));

    }
}


export const startDeletingProductCart = (id) => {
    return async (dispatch, getState) => {
        const { uid } = getState().auth;

        const docRef = doc(FirebaseDB, `${uid}/fakestore/productsCart/${id}`)
        await deleteDoc(docRef);

        dispatch(startDeleteProductCart(id))


    }
};


export const startPaymentSuccessfull = () => {
    return async (dispatch, getState) => {
        const { uid } = getState().auth;
        const resp = await loadProductsCart(uid);
        resp.forEach(async product => {
            const productDocRef = doc(FirebaseDB, `${uid}/fakestore/productsCart/${product.id}`);
            await deleteDoc(productDocRef);
        })

        console.log(resp)
        //dispatch(setProductsCart({ resp }));
    }
}