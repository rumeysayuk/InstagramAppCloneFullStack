import React from 'react';
import {capitalizeFirstLetter} from "../../../helpers/capitalizeFirstLetter";
import {IconButton} from "@material-ui/core";
import {FavoriteBorder, FavoriteOutlined} from "@material-ui/icons";
import {useSelector} from "react-redux";
import {makeStyles} from "@material-ui/core/styles";

const styles = makeStyles((theme) => ({
   main: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      height: 40,
      margin: 0
   },
   leftSide:{
      display: "flex",
      alignItems: "center",
   },
   leftSideText: {
      maxWidth: "100%",
      overflow: "hidden"
   }
}))

const CommentRow = ({comment, likeUndoLikeComment}) => {
   const classes = styles();
   const {authData} = useSelector(state => state.auth)

   const Likes = () => {
      if (comment.likes.length > 0 && authData) {
         return comment.likes.find((like) => like.likedBy._id.toString() === authData._id.toString())
            ? (
               <FavoriteOutlined color="error"/>
            ) : (
               <FavoriteBorder/>
            );
      }
      return <FavoriteBorder/>
   };
   return (
      <div className={classes.main}>
         <div className={classes.leftSide}>
            <strong style={{paddingRight: 8}}>{comment.postedBy.username}</strong>
            <p className={classes.leftSideText}>{comment.text}</p>
         </div>
         <IconButton onClick={(e) => likeUndoLikeComment(comment._id, e)}>
            <Likes/>
         </IconButton>
      </div>
   )
}

export default CommentRow;
