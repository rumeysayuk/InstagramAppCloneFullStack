import React, {useState} from "react";
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
import * as services from "../../../services";

const Post = ({post}) => {
   const classes = useStyles();
   const [comment, setComment] = useState("");

   const postComment = (e) => {
      e.preventDefault();
      const formValues = {text: comment, postedBy: "60dca06b8b6d5343ec652583", postId: post._id}

      services.addComment(formValues).then(response => {
         console.log(response);      })
   }
   const [form, setForm] = useState(null)
   const handleChange = (e) => setForm({...form, [e.target.name]: e.target.value})
   return (
      <Card className={classes.root}>
         <CardHeader
            avatar={
               <Avatar aria-label="recipe" className={classes.avatar}
                       src={"https://i2.milimaj.com/i/milliyet/75/0x0/6009348055427e21f0dcd3b8.jpg"}>
               </Avatar>
            }
            action={
               <IconButton aria-label="settings">
                  <MoreHoriz/>
               </IconButton>
            }
            title={post.username}
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
                           component="p">{post.username}  </Typography>
            </div>

            <Typography variant="body2" color="textSecondary" component="p">{post.description}</Typography>
         </CardContent>
         <CardContent>
            <TextField type="text" placeholder={"Yorum yap"}
                       onChange={({target}) => setComment(target.value)}
                       fullWidth multiline/>
            <br/>
            <Button type={"submit"} onClick={postComment}
                    style={{float: "right", margin: "5px"}}>Yorum yap</Button>
         </CardContent>
      </Card>
   )
}

export default Post;
