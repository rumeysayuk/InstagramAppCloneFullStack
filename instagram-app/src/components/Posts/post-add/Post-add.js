import React, {useState} from "react";
import {Button, Container, Grid, Paper, Typography} from "@material-ui/core";
import styles from "./styles";
import {useDispatch} from "react-redux";
import {addPost} from "../../../actions/posts"
import {useHistory} from "react-router-dom";

const PostAdd = () => {
    const classes = styles();
    const [image, setImage] = useState("");
    const [description, setDescription] = useState("");
    const dispatch = useDispatch();
    const history = useHistory();

    const handleChange = (e) => {
        let image = e.target.files[0]
        if (image) {
            setImage(image);
        }
    }
    const handleUpload = (e) => {
        e.preventDefault();
        console.log(description)
        console.log(image)
        dispatch(addPost(description,image))

        history.push("/");
    }
    return (
        <Container component={"main"} maxWidth={"md"}>
            <Paper elevation={6}>
                <Typography component={"h2"} variant={"h5"} className={classes.title}>Post ekleme sayfası </Typography>
                    <Grid container spacing={6}>
                        <input value={description} placeholder="İçeriği yazınız" onChange={(e) => {
                          setDescription(e.target.value);}}
                               type={"text"}/>
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
