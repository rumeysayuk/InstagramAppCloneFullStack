import apiAxios from "../axios/apiAxios";

export const getAllPosts = () => apiAxios.get("posts");

export const signIn = (formData) => apiAxios.post("users/signin",formData);
export const signUp = (formData) => apiAxios.post("users/signup",formData);

export const addPost=(postItem)=>apiAxios.post("posts/addpost",postItem)

export const getUser= (form)=> apiAxios.get(form)
export const addUser= (form)=> apiAxios.get(form)
export const removeUser= ()=> {}



