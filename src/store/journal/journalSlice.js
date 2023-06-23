import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isSaving: false,
    messageSaved: "",
    notes: [],
    active: null,
    /* 
    active: {
        id:"",
        title:"",
        body:"",
        date:""
        imgUrls: []
    }
     */
}

export const journalSlice = createSlice({
    name: "journal",
    initialState,
    reducers: {
        savingNewNote: (state) => {
            state.isSaving = true;
        },

        addNewEmptyNote: (state, action) => {
            state.notes.push(action.payload);
            state.isSaving = false;
        },
        setActiveNote: (state, action) => {
            state.active = action.payload;
            state.messageSaved = "";
        },
        setNotes: (state, { payload }) => {
            state.notes = payload.resp
        },
        setSaving: (state) => {
            state.isSaving = true;
            state.messageSaved = "";
        },

        updateNote: (state, action) => {
            state.isSaving = false;
            state.notes = state.notes.map(note => {
                if (note.id === action.payload.id) {
                    return action.payload;
                }
                return note;
            });

            state.messageSaved = `${action.payload.title}, actualizada correctamente`

        },

        setPhotosToActiveNote: (state, action) => {
            state.active.imageUrls = [...state.active.imageUrls, ...action.payload];
            state.isSaving = false;
        },
        clearNotesLogout: (state) => {
            state.isSaving = false;
            state.messageSaved = "";
            state.notes = [];
            state.active = null;
        },
        deleteNoteById: (state, action) => {
            state.notes = state.notes.filter(note => note.id !== action.payload);
            state.active = null;

        }



    }
});

export const {
    addNewEmptyNote,
    clearNotesLogout,
    deleteNoteById,
    savingNewNote,
    setActiveNote,
    setNotes,
    setPhotosToActiveNote,
    setSaving,
    updateNote,
} = journalSlice.actions