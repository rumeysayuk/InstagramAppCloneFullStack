
import React from 'react';
import Post from "./Post/Post";
import {CircularProgress, Grid} from "@material-ui/core";
import useStyles from "./styles";
import {useSelector} from "react-redux";

const Posts = () => {
    const classes = useStyles();
    const posts = useSelector((state) => state.posts);

    return !posts.length ? <CircularProgress/> : (
        <main className={classes.content}>
            <div className={classes.toolbar}/>
            <Grid container justify={"center"} spacing={3}
                  className={classes.container} item xs={12} sm={12} md={12} lg={12}>
                {
                    posts.map((post) => (
                        <Grid key={post._id} item className={classes.postList}>
                            <Post post={post} key={post._id} />
                        </Grid>
                    ))
                }
            </Grid>
        </main>
    )
}
export default Posts;
