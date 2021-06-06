import React, {useState} from "react";
import {Card, CardActions, CardContent, CardMedia, IconButton, Typography, CardHeader, Avatar, TextField, Button} from "@material-ui/core";
import useStyles from "./styles";
import {BookmarkBorderOutlined, ChatBubbleOutlineRounded, FavoriteBorder, MoreHoriz, SendRounded} from "@material-ui/icons";
import {useDispatch} from "react-redux";
const Post = ({post}) => {
    const classes = useStyles();
    const dispatch = useDispatch();
   post.name ="Rümeysa Yük";
    const [comment, setComment] = useState(null);
    const postComment = (e) => {
        e.preventDefault();
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
                title="Rümeysa Yük"
            />
            <CardMedia
                className={classes.media}
                image="https://hergunbiryildiz.files.wordpress.com/2017/12/stars-alnilam-mintaka-in-orion-celestial-image-picture-co.jpg?w=900"
                title="stars"
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
                <div style={{display:"flex"}}>
                    <Typography style={{marginRight:"15px"}} variant="body2" color="textPrimary" component="p">{post.name}  </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">{post.title}</Typography>
                </div>

                <Typography variant="body2" color="textSecondary" component="p">{post.description}</Typography>
            </CardContent>
            <CardContent>
                        <form>

                            <TextField type="text" placeholder={"Yorum yap"}
                                       onChange={handleChange}
                                        fullWidth multiline/>
                            <br/>
                            <Button type={"submit"} onClick={postComment}
                                    style={{float: "right", margin: "5px"}}>Gönder</Button>
                        </form>

            </CardContent>
        </Card>
    )
}

export default Post;
