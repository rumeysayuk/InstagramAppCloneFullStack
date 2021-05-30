import apiAxios from "../axios/apiAxios";

export const getAllPosts = () => apiAxios.get("posts");

export const signIn=(formData)=> apiAxios.post("users/signIn",formData);
export const singUp = (formData) => apiAxios.post("users/signUp",formData);

export const getUser= (form)=> apiAxios.get(form)
export const addUser= (form)=> apiAxios.get(form)
export const removeUser= ()=> {}








