export const getUserFromLocalStorage = () => {
   return JSON.parse(localStorage.getItem("profile"));
}
export const getTokenFromLocalStorage = () => {
   return localStorage.getItem("token");
}
export const addUserToLocalStorage = (user) => {
   if (!getUserFromLocalStorage()) {
      localStorage.setItem("profile", JSON.stringify(user));
   }
}
export const removeUserFromLocalStorage = () => {
   if (getUserFromLocalStorage()) {
      localStorage.removeItem("profile");
   }
}
