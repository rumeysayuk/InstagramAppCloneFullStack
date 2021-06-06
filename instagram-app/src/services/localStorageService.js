const getUser = () => {
    return JSON.parse(localStorage.getItem("profile"));
}

const addUser = (user) => {
    localStorage.setItem("profile", JSON.stringify(user));
}
const removeUser = () => {
    localStorage.removeItem("profile");
}

export default {
    addUser,
    removeUser,
    getUser,
}
