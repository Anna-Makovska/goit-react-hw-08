import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios"


axios.defaults.baseURL = "https://connections-api.goit.global/";

const setAuthHeader = (value) => {
    axios.defaults.headers.common.Authorization = value;
}


export const register = createAsyncThunk("auth/register", async (values) => {
    const response = await axios.post("/users/signup", values);
    setAuthHeader(`Bearer ${response.data.token}`)
    return response.data;
})


export const logIn = createAsyncThunk("auth/login", async (values) => {
    const response = await axios.post("users/login", values);
    setAuthHeader(`Bearer ${response.data.token}`)
    return response.data;
})


export const logOut = createAsyncThunk("auth/logout", async () => {
    await axios.post("users/logout");
    setAuthHeader("");
    
})

