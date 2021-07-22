export const getUser = () => {
    return JSON.parse(localStorage.getItem("profile"));
}
export const getToken = () => {
    return localStorage.getItem("token");
}
export const addUser = (user) => {
    localStorage.setItem("profile", JSON.stringify(user));
}
export const removeUser = () => {
    localStorage.removeItem("profile");
}
