import React from 'react';
import {capitalizeFirstLetter} from "../../../helpers/capitalizeFirstLetter";
import {IconButton} from "@material-ui/core";
import {FavoriteBorder, FavoriteOutlined} from "@material-ui/icons";
import {useSelector} from "react-redux";

const CommentRow = ({comment, likeUndoLikeComment}) => {
   const {authData} = useSelector(state => state.auth)

   const Likes = () => {
      if (comment.likes.length > 0 && authData) {
         return comment.likes.find((like) => like.likedBy._id.toString() === authData._id.toString())
            ? (
               <FavoriteOutlined  color="error"/>
            ) : (
               <FavoriteBorder/>
            );
      }
      return <FavoriteBorder/>
   };
   return (
      <div
         style={{display: "flex", alignItems: "center", justifyContent: "space-between", height: 40, margin: 0}}>
         <div style={{display: "flex", alignItems: "center"}}>
            <strong style={{paddingRight: 8}}>{capitalizeFirstLetter(comment.postedBy.username)}</strong>
            <p style={{maxWidth: "100%", overflow: "hidden"}}>{comment.text}</p>
         </div>
         <IconButton onClick={(e) => likeUndoLikeComment(comment._id, e)}>
            <Likes/>
         </IconButton>
      </div>
   )
}

export default CommentRow;
