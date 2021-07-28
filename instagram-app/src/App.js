import React, {useEffect, } from 'react';
import {getAllPosts} from "./store/actions/posts";
import {useDispatch, } from "react-redux";
import {BrowserRouter, Route, Switch} from "react-router-dom"
import {Container} from "@material-ui/core";
import * as actionTypes from "./store/actionTypes/actionTypes";
import * as ROUTES from "./constants/routes";
import {ToastContainer, Flip} from "react-toastify";
import Profile from "./pages/profile/Profile";
import ProtectedRoute from "./helpers/ProtectedRoute";
import {getTokenFromLocalStorage, getUserFromLocalStorage} from "./services/localStorageService";
import {Auth, BackToTop, Navbar, NotFound, PostAdd, Posts} from "./components";

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
