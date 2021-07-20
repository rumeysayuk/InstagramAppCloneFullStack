import React, {useState} from "react";
import {Button, Container, Grid, Paper, Typography} from "@material-ui/core";
import styles from "./styles";
import {useHistory} from "react-router-dom";
import * as services from "../../../services";
import {getUserFromLocalStorage} from "../../../services/userServices";
import * as ROUTES from "../../../constants/routes";

const PostAdd = () => {
   const classes = styles();
   const [image, setImage] = useState({});
   const [description, setDescription] = useState("");
   const history = useHistory();
   let formData = new FormData();

   const {user} = getUserFromLocalStorage();

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
      formData.append("username", user.username)
      services.addPost(formData).then(() => {
         history.push(ROUTES.HOMEPAGE);
      })
   }
   return (
      <Container component={"main"} maxWidth={"md"}>
         <Paper elevation={6}>
            <Typography component={"h2"} variant={"h5"} className={classes.title}>Post ekleme sayfası </Typography>
            <Grid container spacing={6}>
               <input value={description} placeholder="İçeriği yazınız" onChange={(e) => {
                  setDescription(e.target.value);
               }} type={"text"}/>
               <input type="file" onChange={handleChange}/>
               <Button className={classes.submit} type={"submit"} fullWidth variant={"contained"}
                       color={"primary"} onClick={handleUpload}
               >Post ekle</Button>
            </Grid>
         </Paper>
      </Container>
   )
}


export default PostAdd;
