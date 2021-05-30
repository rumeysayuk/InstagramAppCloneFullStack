export const getUser = () => {
    return JSON.parse(localStorage.getItem("profile"));
}

export const addUser = (user) => {
    localStorage.setItem("profile", JSON.stringify(user));
}
export const removeUser = (user) => {
    localStorage.removeItem("profile");
}

