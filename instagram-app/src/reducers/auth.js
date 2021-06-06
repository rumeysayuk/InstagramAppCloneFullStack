import * as actionTypes from "../constants/actionTypes";


const authReducer = (state = {authData: null, token: null}, action) => {
    switch (action.type) {
        case actionTypes.AUTH:
            localStorage.setItem("profile", JSON.stringify(action.data.result));
            localStorage.setItem("token", action.data.token);
            // local.addUser("profile", JSON.stringify(action.data.result));
            // local.addUser("token", action.data.token);
            return {...state, authData: action.data.result, token: action.data.token};
        case actionTypes.LOG_OUT:
             localStorage.removeItem("profile");
           // local.removeUser("profile");
            return {...state, authData: null}

        default:
            return state;
    }
}

export default authReducer;
