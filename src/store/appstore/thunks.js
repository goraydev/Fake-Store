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
import { FirebaseDB, storage } from "../../firebase/config";
import { loadProductsCart } from "../../helpers/loadProductsCart";
import { deleteUser, getAuth, updateProfile } from "firebase/auth";
import { logoutAction } from "../auth/thunks";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";

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
    }
}


export const updateAccount = (name, photo) => {
    return async (dispatch, getState) => {
        const auth = getAuth();
        const { displayName, photoURL } = getState().auth;


        if (name === "" && photo !== "") {
            const refPhotoPerfil = ref(storage, photo.name);

            const metadata = {
                contentType: 'image/jpeg',
            }

            uploadBytes(refPhotoPerfil, photo, metadata).then((snapshot) => {
                getDownloadURL(snapshot.ref)
                    .then((url) => {



                        updateProfile(auth.currentUser, {
                            displayName: displayName, photoURL: url
                        }).then(() => {
                            console.log('actualizado')
                        }).catch((error) => {
                            console.error(error)
                        });


                    })
                    .catch((error) => {
                        // A full list of error codes is available at
                        // https://firebase.google.com/docs/storage/web/handle-errors
                        switch (error.code) {
                            case 'storage/object-not-found':
                                // File doesn't exist
                                break;
                            case 'storage/unauthorized':
                                // User doesn't have permission to access the object
                                break;
                            case 'storage/canceled':
                                // User canceled the upload
                                break;

                            // ...

                            case 'storage/unknown':
                                // Unknown error occurred, inspect the server response
                                break;
                        }
                    });
            });

            return;
        }

        if (name !== "" && photo !== "") {
            const refPhotoPerfil = ref(storage, photo.name);

            const metadata = {
                contentType: 'image/jpeg',
            }

            uploadBytes(refPhotoPerfil, photo, metadata).then((snapshot) => {
                getDownloadURL(snapshot.ref)
                    .then((url) => {



                        updateProfile(auth.currentUser, {
                            displayName: name, photoURL: url
                        }).then(() => {
                            console.log('actualizado')
                        }).catch((error) => {
                            console.error(error)
                        });


                    })
                    .catch((error) => {
                        // A full list of error codes is available at
                        // https://firebase.google.com/docs/storage/web/handle-errors
                        switch (error.code) {
                            case 'storage/object-not-found':
                                // File doesn't exist
                                break;
                            case 'storage/unauthorized':
                                // User doesn't have permission to access the object
                                break;
                            case 'storage/canceled':
                                // User canceled the upload
                                break;

                            // ...

                            case 'storage/unknown':
                                // Unknown error occurred, inspect the server response
                                break;
                        }
                    });
            });

            return;
        }

        if (name !== "" && photo === "") {
            updateProfile(auth.currentUser, {
                displayName: name, photoURL: photoURL
            }).then(() => {
                console.log('actualizado')
            }).catch((error) => {
                console.error(error)
            });

        }



    }
}


export const deleteAccount = () => {
    return async (dispatch, getState) => {
        const auth = getAuth();
        const user = auth.currentUser;

        deleteUser(user).then(() => {
            dispatch(logoutAction());
        }).catch((error) => {
            console.error(error)
        });
    }
}