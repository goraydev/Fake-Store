
import { logoutFirebase, signInWithGoogle } from "../../firebase/providers";
import { checkingCredentials, login, logout } from "./authSlice";

export const checkingAuthentication = (email, password) => {

    return async (dispatch, getState) => {
        dispatch(checkingCredentials());
    }
}


export const startGoogleSignIn = () => {

    return async (dispatch) => {
        dispatch(checkingCredentials());

        const result = await signInWithGoogle();
        if (!result.ok) return dispatch(logout(result.errorMessage));

        delete result.ok;
        dispatch(login(result));
    }
}

export const logoutAction = () => {
    return async (dispatch) => {
        await logoutFirebase();
        dispatch(logout());
    }
}
