import * as actionTypes from "../constants/actionTypes";

export default (posts ={items: []}, action) => {
    switch (action.type) {
        case actionTypes.GET_ALL :
            return action.payload
        case actionTypes.ADD_POST:
            console.log(posts)
            console.log(action.items)
            return {posts: action.items};   //************
        default:
            return posts
    }

}
