import * as services from "../services";
import * as actionTypes from "../constants/actionTypes"

export const getAllPosts = () => async (dispatch) => {
    const response = await services.getAllPosts();
    dispatch({
        type: actionTypes.GET_ALL, payload: response.data.data
    })
}
export const addPost = (description,image) => async (dispatch) => {
    const {data}=await services.addPost(description,image)
    dispatch({type:actionTypes.ADD_POST,data})
}
