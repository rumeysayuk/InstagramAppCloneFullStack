import React, {useState} from 'react';
import {Button, Container, Grid, Paper, Typography} from "@material-ui/core";
import styles from "./styles";
import CustomInput from "../Toolbox/CustomInput";
import {useDispatch} from "react-redux";
import {useHistory} from "react-router-dom";
import {signIn, signUp} from "../../store/actions/auths"
import * as ROUTES from "../../constants/routes";
import * as authService from "../../services/authService";
import logo from "../../assets/images/instagram.png"

const initialState = {firstName: "", lastName: "", password: "", email: "", confirmPassword: "", username: "", imageUrl: ""}

const Auth = () => {
    const classes = styles();
    const [isSignUp, setIsSignUp] = useState(false)
    const [showPassword, setShowPassword] = useState(false)
    const [form, setForm] = useState(initialState);
    const [image, setImage] = useState({});
    const history = useHistory();
    const dispatch = useDispatch();
    const handleChange = (e) => setForm({...form, [e.target.name]: e.target.value});

    const handleImage = (e) => {
        let uploadedImage = e.target.files[0]
        if (uploadedImage) {
            console.log(uploadedImage)
            setImage(uploadedImage);
        }
    }
    const switchMode = () => {
        setForm(initialState)
        setIsSignUp((prevIsSignUp) => !prevIsSignUp)
        setShowPassword(false)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if (isSignUp) {
            authService.signUp(form)
                .then((res) => {
                    console.log(res.data)
                    dispatch(signUp(res.data))
                    history.push(ROUTES.HOMEPAGE);
                })
        } else {
            authService.signIn(form)
                .then((res) => {
                    console.log(res.data)
                    dispatch(signIn(res.data))
                    history.push(ROUTES.HOMEPAGE);
                })
        }
    }

    return (
        <>
            <Container component={"main"} maxWidth={"xs"}>
                <Paper className={classes.paper} elevation={6}>
                    <img height={"85"} className={classes.image}
                         src={logo} alt="instagram logo"/>
                    <Typography component={"h1"} variant={"h5"}>{isSignUp ? "Kayıt Ol" : "Giriş Yap"}</Typography>
                    <form className={classes.form} onSubmit={handleSubmit}>
                        <Grid container spacing={2}>
                            {isSignUp && (
                                <>
                                    <CustomInput name={"firstName"} label={"İsminiz"} handleChange={handleChange}
                                                 autoFocus half/>
                                    <CustomInput name={"lastName"} label={"Soyisminiz"} handleChange={handleChange}
                                                 half/>
                                    <CustomInput name={"username"} label={"KUllanıcı adınız"}
                                                 handleChange={handleChange}/>
                                    <input style={{paddingTop: "20px", width: "100%"}} type="file"
                                           onChange={handleImage}/>
                                </>
                            )}
                            <CustomInput name={"email"} label={"Email Adresiniz"} handleChange={handleChange}
                                         type={"email"}/>
                            <CustomInput name={"password"} label={"Şifre"} handleChange={handleChange}
                                         type={showPassword ? "text" : "password"}
                                         handleShowPassword={() => setShowPassword(!showPassword)}/>
                            {isSignUp && (
                                <CustomInput name={"confirmPassword"} label={"Şifre tekrarı"}
                                             handleChange={handleChange}
                                             type={"password"}/>
                            )}
                        </Grid>
                        <Button type={"submit"} fullWidth variant={"contained"} color={"primary"}
                                className={classes.submit}>
                            {isSignUp ? "Kayıt Ol" : "Giriş Yap"}
                        </Button>
                        <Grid container>
                            <Grid item>
                                <Button onClick={switchMode}>
                                    {isSignUp ? "Zaten hesabın mevcut mu? Giriş yap" : "Hesabın yok mu ?Kayıt ol"}
                                </Button>
                            </Grid>
                        </Grid>
                    </form>
                </Paper>
            </Container>
        </>
    )
}

export default Auth;
