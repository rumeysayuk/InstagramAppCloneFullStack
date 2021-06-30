import * as actionTypes from "../constants/actionTypes";

const authReducer = (state = {authData: null, token: null}, action) => {
    switch (action.type) {
        case actionTypes.AUTH:
            localStorage.setItem("profile", JSON.stringify(action.data.result));
            localStorage.setItem("token", action.data.token);
            return {...state, authData: action.data.result, token: action.data.token};
        case actionTypes.LOG_OUT:
            localStorage.clear();
            return {...state, authData: null}
        case actionTypes.GET_USER:
            localStorage.getItem("profile");
            localStorage.getItem("token")
            return {...state,authData: action.data}
        default:
            return state;
    }
}

export default authReducer;
