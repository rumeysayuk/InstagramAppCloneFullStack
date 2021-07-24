import React, {useState} from "react";
import {Button, Grid, Paper, TextField, Typography} from "@material-ui/core";
import styles from "./styles";
import {useHistory} from "react-router-dom";
import * as postService from "../../../services/postService";
import * as ROUTES from "../../../constants/routes";
import {useSelector} from "react-redux";

const PostAdd = ({handleClose}) => {
   const classes = styles();
   const [image, setImage] = useState({});
   const [description, setDescription] = useState("");
   const history = useHistory();
   const {authData} = useSelector(state => state.auth)
   let formData = new FormData();

   const handleChange = (e) => {
      let uploadedImage = e.target.files[0]
      if (uploadedImage) {
         setImage(uploadedImage);
      }
   }

   const handleUpload = (e) => {
      e.preventDefault();
      formData.append("imageUrl", image);
      formData.append("description", description);
      formData.append("postedBy", authData._id)
      postService.addPost(formData).then(() => {
         handleClose();
         history.push(ROUTES.HOMEPAGE);
      })
   }
   return (
      <Paper
         elevation={6}
         style={{width: "100%", height: "100%", display: "flex", alignItems: "center"}}>
         <Grid container spacing={6}>
            <div style={{
               display: "flex",
               flexDirection: "column",
               alignItems: "center",
               margin: "auto",
               width: "60%",
            }}>
               <Typography component={"h2"} variant={"h5"} className={classes.title}>Post Ekle</Typography>
               <TextField fullWidth value={description} variant="outlined" label="Açıklamayı Giriniz"
                          onChange={(e) => {
                             setDescription(e.target.value)
                          }}/>
               <input style={{paddingTop: "20px", width: "100%"}} type="file" onChange={handleChange}/>
            </div>
            <Button className={classes.submit} type={"submit"}  variant={"contained"}
                    color={"primary"} onClick={handleUpload}>Paylaş</Button>
         </Grid>
      </Paper>
   )
}


export default PostAdd;
