import * as actionTypes from "../constants/actionTypes";
import * as services from "../services/index.js";


export const signIn = (formData, router) => async (dispatch) => {
    const {data} = await services.signIn(formData);
    dispatch({type: actionTypes.AUTH, data})
}
export const signUp = (formData, router) => async (dispatch) => {
    const {data} = await services.signUp(formData)
    dispatch({type: actionTypes.AUTH, data})
}
export const isAuthenticated = () => localStorage.getItem("profile") !== null;

export const logOut = () => {
    localStorage.removeItem("profile");
}
