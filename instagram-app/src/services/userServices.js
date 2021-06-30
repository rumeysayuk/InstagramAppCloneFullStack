import {getUser} from "./localStorageService";

export const getUserFromLocalStorage = () => {
   let activeUser = getUser;

   const setActiveUser = () => {
      activeUser = getUser();
   }

   return {user: activeUser, setActiveUser};
}
