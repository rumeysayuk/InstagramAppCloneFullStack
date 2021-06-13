import axios from "axios";
//import {getUser} from "../services";

const apiAxios = axios.create({
    baseURL: "http://localhost:5000/api/",
});

// apiAxios.interceptors.request.use(async request=>{
//     const token=localStorage.getItem("profile");
//     if(token){
//         request.headers.Authorization=`Bearer ${token}`
//         console.log(token);
//         console.log(request.headers.Authorization=`Bearer ${token}`)
//     }
//     else{
//         console.log("token yok ")
//     }
// })


export default apiAxios
