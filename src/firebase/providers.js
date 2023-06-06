import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { FirebaseAuth } from './config'


const googleProvider = new GoogleAuthProvider();
export const signInWithGoogle = async () => {
    try {

        const result = await signInWithPopup(FirebaseAuth, googleProvider);
        const { displayName, email, photoURL, uid } = result.user;

        return {
            ok: true,
            displayName,
            email,
            photoURL,
            uid
        }


    } catch (error) {
        console.error(error);
        const errorMessage = error.message;
        return {
            ok: false,
            errorMessage
        }
    }
}


export const logoutFirebase = async () => {
    return await FirebaseAuth.signOut();
}
