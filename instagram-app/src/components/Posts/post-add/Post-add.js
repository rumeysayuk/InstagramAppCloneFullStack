import React, {useState} from "react";
import {Button, Container, Grid, Paper, Typography} from "@material-ui/core";
import Input from "../../Toolbox/Input";
import {useHistory} from "react-router-dom";
import {useDispatch} from "react-redux";
import * as routes from "../../../constants/routes";
import {addPost} from "../../../actions/posts";
import styles from "./styles";

const PostAdd = () => {
    const classes = styles();
    const [isFill,setFill]=useState(null)
    const [form, setForm] = useState()
    const history = useHistory();
    const dispatch = useDispatch();
    const state={
        title:'',
        description:'',
        image:null,
    }
   const handleImageChange = (e) => {
        this.setState({ image: e.target.files[0] });
    }

   const handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    const switchMode = () => {
        setFill((prevIsSignUp) => !prevIsSignUp)
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
       const data= new FormData();
       data.append('image',this.state.imageUrl);
       data.append('title',this.state.title);
       data.append('description',this.state.description);


        history.push(routes.HOMEPAGE )
    }
    return (
        <Container component={"main"} maxWidth={"xs"}>
            <Paper elevation={6} >
                <Typography component={"h2"} variant={"h5"}>Post ekleme sayfası </Typography>
                <form onSubmit={handleSubmit} className={classes.form}>
                    <Grid container spacing={4}>
                        <Input name={"title"} label={"Post başlığı"}
                               type={"text"} handleChange={handleChange}/>
                        <Input name={"description"} type={"text"} label={"İçeriği"} handleChange={handleChange}/>
                        <Input type={"file"} name={"imageUrl"} label={"Resim"}   handleChange={handleChange}/>
                    </Grid>
                    <Button className={classes.submit} type={"submit"} fullWidth variant={"contained"} color={"primary"} onClick={switchMode}>Post ekle</Button>
                </form>
            </Paper>
        </Container>
    )
}

export default PostAdd;
