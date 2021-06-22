import axios from "axios";
//import { getToken } from "../actions/auths";

const apiAxios = axios.create({
    baseURL: "http://localhost:5000/api/",
});
//
// apiAxios.interceptors.request.use(async config => {
//     const token = getToken();
//
//     if (token) {
//         config.headers.Authorization = `Bearer ${token}`;
//     }
//     return config;
// });


export default apiAxios
