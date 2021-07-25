import React from 'react';
import {Redirect, Route} from 'react-router-dom';
import {useSelector} from "react-redux";
import Auth from "../components/Auth/Auth";
import * as ROUTES from "../constants/routes";

const ProtectedRoute = ({component: Component, ...rest}) => {
   const {authData} = useSelector(state => state.auth);

   return (
      <Route
         {...rest}
         render={(props) => {
            if (rest.path === ROUTES.AUTH && authData) {
               return (
                  <Redirect to={{
                     pathname: ROUTES.HOMEPAGE,
                     state: {from: props.location}
                  }}/>
               )
            }
            return (
               !authData ? <Auth/> : <Component {...rest} {...props}/>
            );
         }}
      />
   );
}

export default ProtectedRoute;
