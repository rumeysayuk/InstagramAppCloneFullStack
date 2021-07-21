import * as actionTypes from "../actionTypes/actionTypes";

export const signIn = (data) => async (dispatch) => dispatch({type: actionTypes.AUTH, data})
export const signUp = (data) => async (dispatch) => dispatch({type: actionTypes.AUTH, data})

export const isAuthenticated = () => async (dispatch) => {
   dispatch({type: actionTypes.GET_USER})
}

export const logOut = () => async (dispatch) => {
   dispatch({type: actionTypes.LOG_OUT});
}
