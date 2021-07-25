import React from 'react';
import {IconButton, useMediaQuery} from "@material-ui/core";
import * as ROUTES from "../../../constants/routes";
import {FavoriteBorder, HomeOutlined, ModeCommentOutlined, Search} from "@material-ui/icons";
import {useHistory} from "react-router-dom";

const Icons = () => {
   const history = useHistory()
   const matches = useMediaQuery(theme => theme.breakpoints.down('sm'));

   return (
      <>
         <IconButton color="inherit" onClick={() => history.push(ROUTES.HOMEPAGE)}>
            <HomeOutlined/>
         </IconButton>
         <IconButton color="inherit">
            <ModeCommentOutlined/>
         </IconButton>
         <IconButton style={{ display: matches ? "block" : "none" }} color="inherit">
            <Search/>
         </IconButton>
         <IconButton color="inherit">
            <FavoriteBorder/>
         </IconButton>
      </>
   )
}

export default Icons;
