import React from "react";
import {
    Card,
    CardActions,
    CardContent,
    CardMedia,
    IconButton,
    Typography,
    CardHeader,
    Avatar,
    TextField
} from "@material-ui/core";
import useStyles from "./styles";
import {
    BookmarkBorderOutlined,
    ChatBubbleOutlineRounded, EmojiEmotionsOutlined,
    FavoriteBorder,
    MoreHoriz,
    SendRounded
} from "@material-ui/icons";

const Post = ({post}) => {
    const classes = useStyles();
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
                title="Yıldız kümesi"
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
                <Typography variant="body2" color="textSecondary" component="p">{post.description}
                </Typography>
            </CardContent>
            <CardContent>
                <div style={{display: "flex", alignItems: "center", justifyContent: "space-between"}}>
                    <EmojiEmotionsOutlined/>
                    <TextField
                        id="filled-multiline-static"
                        label="Yorum yap"
                        multiline
                        style={{flex: 1, marginBottom: "25px"}}
                    />
                </div>

            </CardContent>

        </Card>
    )
}

export default Post;
