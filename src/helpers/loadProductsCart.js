import { collection, getDocs } from "firebase/firestore/lite";
import { FirebaseDB } from "../firebase/config";

export const loadProductsCart = async (uid = "") => {
    if (!uid) throw new Error("El UID del usuario no existe");
    const collectionRef = collection(FirebaseDB, `${uid}/fakestore/productsCart`);
    const docs = await getDocs(collectionRef);

    const productsCart = [];

    docs.forEach(doc => {
        productsCart.push({ id: doc.id, ...doc.data() });
    })

    return productsCart;

}