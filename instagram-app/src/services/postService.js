import apiAxios from "../lib/axios/apiAxios";

export const getAllPosts = () => apiAxios.get("posts");
export const addPost = (formData) => apiAxios.post("posts/addpost", formData)
export const addComment = (formData) => apiAxios.post("posts/addcomment", formData);
export const likeUndoLikeComment = (data) => apiAxios.post("posts/likeundolikecomment", data);
