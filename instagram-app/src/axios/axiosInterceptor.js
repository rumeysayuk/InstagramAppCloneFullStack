import axios from "axios";
import local from "../services/localStorageService"

const axiosInterceptor = axios.interceptors.request.use(
     async request => {
        if (request.headers.token) {
            const token=local.getItem();
            if(token){
                request.headers['Authorization']='Bearer ' + token;
                console.log(token)
            }
        }
        return request;
    },
    error => {
        return Promise.reject(error);
    }
);

export default axiosInterceptor
