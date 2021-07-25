import apiAxios from "../lib/axios/apiAxios";

export const signIn = (formData) => apiAxios.post("users/signin", formData);
export const signUp = (formData) => apiAxios.post("users/signup", formData);
