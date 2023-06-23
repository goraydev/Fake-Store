import axios from "axios";
import { getEnvironments } from "../helpers/getEnvironments"


const { VITE_API_URL } = getEnvironments();


export const fakeStoreAPI = axios.create({
    baseURL: VITE_API_URL,
});




