// import axios from "axios";
import { LoginData, UserFormData } from "./types";

export const registerUser = async (data: UserFormData) => {
    // const response = await axios.post('api/auth/register', data)
    // return response.data
    return new Promise((resolve) => {
        setTimeout(()=> {
            resolve(data);
        }, 3000)
    })
}

export const loginUser = async (data: LoginData ) => {
    // const response = await axios.post('api/auth/login', data)
    // return response.data
    return new Promise((resolve) => {
        setTimeout(()=> {
            resolve(data);
        }, 3000)
    })
}
