import * as services from "../services";
import {GET_ALL} from "../constants/actionTypes";
import * as actionTypes from "../constants/actionTypes"

export const getAllPosts = () => async (dispatch) => {
    const response = await services.getAllPosts();
    dispatch({
        type: actionTypes.GET_ALL, payload: response.data.data
    })

}

