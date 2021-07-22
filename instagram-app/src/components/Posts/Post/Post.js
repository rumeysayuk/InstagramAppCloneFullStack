import React, {useEffect, useState} from "react";
import {
   Avatar,
   Button,
   Card,
   CardActions,
   CardContent,
   CardHeader,
   CardMedia,
   IconButton,
   TextField,
   Typography
} from "@material-ui/core";
import useStyles from "./styles";
import {
   BookmarkBorderOutlined,
   ChatBubbleOutlineRounded,
   FavoriteBorder,
   MoreHoriz,
   SendRounded
} from "@material-ui/icons";
import * as postService from "../../../services/postService";
import {useSelector} from "react-redux";
import CommentRow from "./CommentRow";

const Post = ({post}) => {
   const classes = useStyles();
   const [comment, setComment] = useState("");
   const [comments, setComments] = useState([]);
   const {authData} = useSelector(state => state.auth)

   const postComment = (e) => {
      e.preventDefault();
      const formValues = {text: comment, postedBy: authData._id, postId: post._id}
      postService.addComment(formValues).then(response => {
         setComments(response.data.data);
         setComment("");
      })
   }

   const likeUndoLikeComment = (commentId, e) => {
      e.preventDefault()
      const data = {commentId: commentId, likedBy: authData._id, postId: post._id}

      postService.likeUndoLikeComment(data).then(response => {
         setComments(response.data.data)
      })
   }

   useEffect(() => {
      setComments(post.comments);
   }, [])

   return (
      <Card className={classes.root}>
         <CardHeader
            avatar={
               <Avatar aria-label="recipe" className={classes.avatar}
                       src={"https://i2.milimaj.com/i/milliyet/75/0x0/6009348055427e21f0dcd3b8.jpg"}>
               </Avatar>
            }
            action={
               post.postedBy.username === authData.username && (
                  <IconButton aria-label="settings">
                     <MoreHoriz/>
                  </IconButton>
               )
            }
            title={post.postedBy.username}
         />

         <CardMedia
            className={classes.media}
            image={post.imageUrl}
            // image={logo}
            // title="stars"
         />
         <CardActions disableSpacing className={classes.cardFooter}>
            <div>
               <IconButton aria-label="add to favorites">
                  <FavoriteBorder/>
               </IconButton>
               <IconButton>
                  <ChatBubbleOutlineRounded/>
               </IconButton>
               <IconButton>
                  <SendRounded/>
               </IconButton></div>
            <div>
               <IconButton>
                  <BookmarkBorderOutlined/>
               </IconButton></div>
         </CardActions>
         <CardContent>
            <div style={{display: "flex"}}>
               <Typography style={{marginRight: "15px", fontWeight: "bold"}} variant="body2" color="textPrimary"
                           component="p">{post.postedBy.username}  </Typography>
            </div>
            <Typography variant="body2" color="textSecondary" component="p">{post.description}</Typography>
         </CardContent>
         <div className="post__comments" style={{padding: 20}}>
            {comments.map((comment, index) => (
               index < 2 && (
                  <CommentRow key={comment._id} likeUndoLikeComment={likeUndoLikeComment} comment={comment}/>
               )
            ))}
         </div>
         <CardContent>
            <TextField type="text" placeholder={"Yorum yap"} fullWidth multiline value={comment} maxRows={4}
                       inputProps={{maxLength: 100}}
                       onChange={(e) => setComment(e.target.value)}
            />
            <br/>
            <Button type={"submit"} onClick={postComment} style={{float: "right", margin: "5px"}}>Yorum yap</Button>
         </CardContent>
      </Card>
   )
}
export default Post;
