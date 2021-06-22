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
export const isAuthenticated = () => async (dispatch)=>{
    console.log("action")

    dispatch({type:actionTypes.GET_USER})
}

export const logOut = () => async (dispatch) => {
    dispatch({type: actionTypes.LOG_OUT});
}
