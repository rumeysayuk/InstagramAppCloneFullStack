import React, {useEffect, useState} from 'react';
import {getAllPosts} from "./store/actions/posts";
import {useDispatch, useSelector} from "react-redux";
import Navbar from "./components/Navbar/Navbar";
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom"
import {Container, IconButton, Typography, Modal} from "@material-ui/core";
import Auth from "./components/Auth/Auth";
import * as actionTypes from "./store/actionTypes/actionTypes";
import Posts from "./components/Posts/Posts";
import * as ROUTES from "./constants/routes";
import NotFound from "./components/NotFound/NotFound";
import PostAdd from "./components/Posts/post-add/Post-add";
import {ToastContainer, Flip} from "react-toastify";
import Profile from "./pages/profile/Profile";
import BackToTop from "./components/Toolbox/BackToTop";
import {AddCircleOutlined} from "@material-ui/icons";
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
   paper: {
      position: 'absolute',
      width: 600,
      height: 300,
      backgroundColor: theme.palette.background.paper,
      boxShadow: theme.palette.boxShadows.medium,
      padding: theme.spacing(2, 4, 3),
   },
}));

const App = () => {
   const dispatch = useDispatch();
   const {authData} = useSelector(state => state.auth);
   const token = localStorage.getItem("token");
   const user = JSON.parse(localStorage.getItem("profile"));
   const [open, setOpen] = useState(false);
   const classes = useStyles();

   const handleOpen = () => {
      setOpen(true);
   };

   const handleClose = () => {
      setOpen(false);
   };


   useEffect(() => {
      dispatch(getAllPosts())
   }, [dispatch]);

   useEffect(() => {
      dispatch({type: actionTypes.AUTH, data: {result: user, token: token}});
   }, [])

   return (
      <BrowserRouter>
         <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
         >
            <div style={{top: `50%`, left: `50%`, transform: `translate(-50%, -50%)`}} className={classes.paper}>
               <PostAdd handleClose={handleClose}/>
            </div>
         </Modal>
         <ToastContainer position="bottom-right" transition={Flip}/>
         <Container maxWidth={"lg"}>
            <Navbar/>
            <div id="back-to-top-anchor"/>
            <div style={{display: "flex", alignItems: "center", position: "fixed", bottom: "33px", marginLeft: "10px"}}>
               <IconButton color="inherit" onClick={handleOpen}>
                  <AddCircleOutlined style={{fontSize: 40}}/>
               </IconButton>
               <Typography variant="body1">Yeni Post Ekle</Typography>
            </div>
            <Switch>
               {/*<ProtectedRoute authData={authData} path="/" exact component={Posts}/>*/}
               <Route path={ROUTES.HOMEPAGE} exact component={() => (!authData ? <Auth/> : <Posts/>)}/>
               <Route path={ROUTES.PROFILE} exact component={() => (!authData ? <Auth/> : <Profile/>)}/>
               <Route path={ROUTES.ADD_POST} exact component={() => (!authData ? <Auth/> : <PostAdd/>)}/>
               <Route path={ROUTES.AUTH} component={() => (!authData ? <Auth/> : <Redirect to={ROUTES.HOMEPAGE}/>)}/>
               <Route component={NotFound}/>
               {/*<Route component={() => <Redirect to="/"/>}/>*/}
               {/*<Route path={"/"} component={Posts} exact/>*/}
            </Switch>
            <BackToTop/>
         </Container>
      </BrowserRouter>
   )
}

export default App;
