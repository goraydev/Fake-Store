import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  status: 'not-authenticated',
  uid: null,
  email: null,
  displayName: null,
  photoURL: null,
  errorMessage: null
}

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {

    login: (state, { payload }) => {
      state.status = 'authenticated';
      state.uid = payload.uid;
      state.email = payload.email;
      state.displayName = payload.displayName;
      state.photoURL = payload.photoURL;
      state.errorMessage = null;
    },

    checkingCredentials: (state) => {
      state.status = "checking";
    },


    logout: (state, { payload }) => {
      state.status = 'not-authenticated';
      state.uid = null;
      state.email = null;
      state.displayName = null;
      state.photoURL = null;
      state.errorMessage = payload ? payload.errorMessage : null;
    },
  }
});

export const { login, checkingCredentials, logout } = authSlice.actions
