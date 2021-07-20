import apiAxios from "../lib/axios/apiAxios";

export const getAllPosts = () => apiAxios.get("posts");

export const signIn = (formData) => apiAxios.post("users/signin", formData)
export const signUp = (formData) => apiAxios.post("users/signup", formData);

export const addPost = (formData) => apiAxios.post("posts/addpost", formData)
export const addComment = (formData) => apiAxios.post("posts/addcomment", formData);
export const likeUndoLikeComment = (data) => apiAxios.post("posts/likeundolikecomment", data);

//export const getUser= (form)=> apiAxios.get(form)
//export const addUser= (form)=> apiAxios.get(form)
//export const removeUser= ()=> {}
