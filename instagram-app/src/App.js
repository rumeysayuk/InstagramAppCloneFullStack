import React, {useEffect, } from 'react';
import {getAllPosts} from "./store/actions/posts";
import {useDispatch, } from "react-redux";
import Navbar from "./components/Navbar/Navbar";
import {BrowserRouter, Route, Switch} from "react-router-dom"
import {Container} from "@material-ui/core";
import Auth from "./components/Auth/Auth";
import * as actionTypes from "./store/actionTypes/actionTypes";
import Posts from "./components/Posts/Posts";
import * as ROUTES from "./constants/routes";
import NotFound from "./components/NotFound/NotFound";
import PostAdd from "./components/Posts/post-add/Post-add";
import {ToastContainer, Flip} from "react-toastify";
import Profile from "./pages/profile/Profile";
import BackToTop from "./components/Toolbox/BackToTop";
import ProtectedRoute from "./helpers/ProtectedRoute";
import {getTokenFromLocalStorage, getUserFromLocalStorage} from "./services/localStorageService";

const App = () => {
   const dispatch = useDispatch();
   const token = getTokenFromLocalStorage();
   const user = getUserFromLocalStorage();

   useEffect(() => {
      dispatch(getAllPosts())
   }, [dispatch]);

   useEffect(() => {
      dispatch({type: actionTypes.AUTH, data: {result: user, token: token}});
   }, [])

   return (
      <BrowserRouter>
         <ToastContainer position="bottom-right" transition={Flip}/>
         <Container maxWidth={"lg"}>
            <Navbar/>
            <div id="back-to-top-anchor"/>
            <Switch>
               <ProtectedRoute path={ROUTES.HOMEPAGE} exact component={Posts}/>
               <ProtectedRoute path={ROUTES.PROFILE} exact component={Profile}/>
               <ProtectedRoute path={ROUTES.ADD_POST} exact component={PostAdd}/>
               <ProtectedRoute path={ROUTES.AUTH} exact component={Auth}/>
               <Route component={NotFound}/>
            </Switch>
            <BackToTop/>
         </Container>
      </BrowserRouter>
   )
}

export default App;
