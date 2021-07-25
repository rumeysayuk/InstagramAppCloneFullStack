import axios from "axios";
import {toast} from "react-toastify"
import React from "react";
import {getTokenFromLocalStorage, getUserFromLocalStorage} from "../../services/localStorageService";

const apiAxios = axios.create({
    baseURL: "http://localhost:5000/api/",
});

//Global Error Handler
apiAxios.interceptors.response.use((response) => response, (error) => {
    toast.error(error?.response?.data?.message)
    return Promise.reject(error);
});

apiAxios.interceptors.request.use((req) => {
    const token = getTokenFromLocalStorage();
    if (token) {
        req.headers.Authorization = `Bearer ${token}`;
    }
    return req;
});

apiAxios.interceptors.request.use((req) => {
    const profile = getUserFromLocalStorage();

    if (profile) {
        req.user = profile;
    }
    return req;
});


export default apiAxios
