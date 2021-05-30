import apiAxios from "../axios/apiAxios";

export const signUpWithGoogle = (user) => apiAxios.post("/users/signup-with-google", user);

