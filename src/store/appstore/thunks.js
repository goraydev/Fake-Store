import { fakeStoreAPI } from "../../API/fakeStoreAPI";
import { getProducts, loadingProducts } from "./appstoreSlice";

export const startGetProducts = () => {
    return async (dispatch, getState) => {
        dispatch(loadingProducts());
        
        const { data } = await fakeStoreAPI.get("/products");
        dispatch(getProducts(data));

    }
}
