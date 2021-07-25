import React from 'react';
import {Button} from "@material-ui/core";
import {Link} from "react-router-dom";
import * as ROUTES from "../../../constants/routes";

const SignedOut = () => {
   return (
      <Button component={Link} to={ROUTES.AUTH} variant={"contained"} color={"primary"}>Giriş yap</Button>
   )
}

export default SignedOut;
