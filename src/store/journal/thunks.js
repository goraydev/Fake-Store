import Context from "@mui/base/TabsUnstyled/TabsContext";
import { collection, deleteDoc, doc, setDoc } from "firebase/firestore/lite";
import { FirebaseDB } from "../../firebase/config";
import { loadNotes } from "../../helpers";
import {
    addNewEmptyNote,
    deleteNoteById,
    savingNewNote,
    setActiveNote,
    setNotes, setSaving,
    updateNote
} from "./journalSlice";
export const startNewNote = () => {
    return async (dispatch, getState) => {

        dispatch(savingNewNote());

        //uid del usuario
        const { uid } = getState().auth;

        const newNote = {
            title: "",
            body: "",
            date: new Date().getTime(),
            imageUrls: []
        }

        const newDoc = doc(collection(FirebaseDB, `${uid}/journal/notes`));
        await setDoc(newDoc, newNote);
        newNote.id = newDoc.id;

        //dispatch de la nueva nota
        dispatch(addNewEmptyNote(newNote));

        //dispatch para activar la nota
        dispatch(setActiveNote(newNote));
    }
};


export const startLoadingNotes = () => {
    return async (dispatch, getState) => {
        const { uid } = getState().auth;

        const resp = await loadNotes(uid);

        dispatch(setNotes({ resp }));

    }
};

export const startSavingNote = () => {
    return async (dispatch, getState) => {

        dispatch(setSaving());

        const { uid } = getState().auth;
        const { active: note } = getState().journal;



        const noteToFireStore = { ...note }
        delete noteToFireStore.id;
        const docRef = doc(FirebaseDB, `${uid}/journal/notes/${note.id}`);
        await setDoc(docRef, noteToFireStore, { merge: true });
        dispatch(updateNote(note));

    }
}

export const startDeletingNote = () => {
    return async (dispatch, getState) => {
        const { uid } = getState().auth;
        const { active: note } = getState().journal;
        console.log(getState())

        const docRef = doc(FirebaseDB, `${uid}/journal/notes/${note.id}`)
        await deleteDoc(docRef);
        dispatch(deleteNoteById(note.id));


    }
};
