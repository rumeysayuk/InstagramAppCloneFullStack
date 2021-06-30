import * as actionTypes from "../constants/actionTypes";

export default (posts = {description: "", image: ""}, action) => {
    switch (action.type) {
        case actionTypes.GET_ALL :
            return action.payload
        case actionTypes.ADD_POST:
            return {posts: action.data};   //************
        default:
            return posts
    }

}
