import * as postService from "../../services/postService";
import * as actionTypes from "../actionTypes/actionTypes"

export const getAllPosts = () => async (dispatch) => {
    const response = await postService.getAllPosts();
    dispatch({
        type: actionTypes.GET_ALL, payload: response.data.data
    })
}
export const addPost = (description,image) => async (dispatch) => {
    const {data}=await postService.addPost(description,image)
    dispatch({type:actionTypes.ADD_POST,data})
}
