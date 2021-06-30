import apiAxios from "../axios/apiAxios";

export const getAllPosts = () => apiAxios.get("posts");

export const signIn = (formData) => apiAxios.post("users/signin",formData);
export const signUp = (formData) => apiAxios.post("users/signup",formData);

export const addPost=(description,image)=>apiAxios.post("posts/addpost",description,image)



//export const getUser= (form)=> apiAxios.get(form)
//export const addUser= (form)=> apiAxios.get(form)
//export const removeUser= ()=> {}



