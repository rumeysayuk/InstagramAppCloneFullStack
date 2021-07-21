import React, {useState} from "react";
import {Button, Container, Grid, Paper, Typography} from "@material-ui/core";
import styles from "./styles";
import {useHistory} from "react-router-dom";
import * as services from "../../../services";
import * as ROUTES from "../../../constants/routes";
import {useSelector} from "react-redux";

const PostAdd = () => {
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
      services.addPost(formData).then(() => {
         history.push(ROUTES.HOMEPAGE);
      })
   }
   return (
      <Container component={"main"} maxWidth={"md"}>
         <Paper elevation={6}>
            <Typography component={"h2"} variant={"h5"} className={classes.title}>Post ekleme sayfası</Typography>
            <Grid container spacing={6}>
               <input value={description} placeholder="İçeriği yazınız" type={"text"}
                      onChange={(e) => {setDescription(e.target.value)}} />
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
