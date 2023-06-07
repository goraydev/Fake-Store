import axios from "axios";
import { getEnvVariables } from "../helpers/getEnvVariables"


const { VITE_API_URL } = getEnvVariables();


export const fakeStoreAPI = axios.create({
    baseURL: VITE_API_URL,
});





