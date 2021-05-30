import * as actionTypes from "../constants/actionTypes"
import LocalStorage from "../services/localStorageService"

const authReducer = (state = {authData: null}, action) => {
    const local =LocalStorage();
    switch (action.type) {
        case actionTypes.AUTH:
            local.addUser("profile", JSON.stringify({...action?.data}))
          //  localStorage.setItem("profile", JSON.stringify({...action?.data}))
            return {...state, authData: action.data}
        case actionTypes.LOG_OUT:
            local.removeUser("profile")
          //  localStorage.removeItem("profile")
            return {...state,authData: null}
        default:

            return state
    }
}
export default authReducer;
