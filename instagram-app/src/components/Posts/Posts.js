import React, {useState} from 'react';
import {CircularProgress, Grid, Modal} from "@material-ui/core";
import useStyles from "./styles";
import {useSelector} from "react-redux";
import LeftSideAddPostButton from "../Toolbox/LeftSideAddPostButton";
import {Post, PostAdd} from "../index";

const Posts = () => {
   const classes = useStyles();
   const posts = useSelector((state) => state.posts);
   const [open, setOpen] = useState(false);

   const handleModalOpen = () => setOpen(true)
   const handleModalClose = () => setOpen(false);

   return !posts.length ? <CircularProgress/> : (
      <main className={classes.content}>
         <Modal open={open} onClose={handleModalClose}>
            <div className={classes.modalPaper}>
               <PostAdd handleClose={handleModalClose}/>
            </div>
         </Modal>
         <LeftSideAddPostButton handleModalOpen={handleModalOpen}/>
         {/*<div className={classes.toolbar}/>*/}
         <Grid container spacing={3} className={classes.container} item xs={12} sm={12} md={12} lg={12}>
            {
               posts.map((post, index) => (
                  <Grid key={post._id} item className={classes.postList}>
                     <Post marginBottom={index === posts.length - 1 && true} post={post} key={post._id}/>
                  </Grid>
               ))
            }
         </Grid>
      </main>
   )
}
export default Posts;
