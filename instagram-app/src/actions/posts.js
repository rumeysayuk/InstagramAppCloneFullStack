import * as services from "../services";
import * as actionTypes from "../constants/actionTypes"

export const getAllPosts = () => async (dispatch) => {
    const response = await services.getAllPosts();
    dispatch({
        type: actionTypes.GET_ALL, payload: response.data.data
    })
}
export const addPost = (postItem) => async (dispatch) => {
    console.log(postItem)
    const {data: {message, post: {items}}} = await services.addPost(postItem);
    dispatch({type: actionTypes.ADD_POST, items})
}


