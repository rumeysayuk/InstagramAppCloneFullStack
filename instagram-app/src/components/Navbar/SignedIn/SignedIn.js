import React from 'react';
import {Avatar} from "@material-ui/core";
import * as ROUTES from "../../../constants/routes";
import {useHistory} from "react-router-dom";
import Icons from "./Icons";

const SignedIn = ({handleClick}) => {
   const history = useHistory()

   const handleAvatarClick = (e) => {
      handleClick(e);
      history.push(ROUTES.PROFILE)
   }

   return (
      <>
         <Icons/>
         <Avatar onClick={handleAvatarClick} aria-controls="simple-menu"
                 aria-haspopup="true"
                 src={"https://i2.milimaj.com/i/milliyet/75/0x0/6009348055427e21f0dcd3b8.jpg"}/>
         {/*<Menu*/}
         {/*   anchorEl={anchorEl}*/}
         {/*   keepMounted*/}
         {/*   open={Boolean(anchorEl)}*/}
         {/*   onClose={handleClose}*/}
         {/*   className={classes.logout}*/}
         {/*>*/}
         {/*   <MenuItem>*/}
         {/*      <Typography className={classes.userName} variant={"h6"}>{authData?.username}</Typography>*/}
         {/*   </MenuItem>*/}
         {/*   <MenuItem component={Link} onClick={handleClose} to={ROUTES.ADD_POST}>Post ekle</MenuItem>*/}
         {/*   <MenuItem onClick={handleLogout}>Çıkış yap</MenuItem>*/}
         {/*</Menu>*/}
      </>
   )
}

export default SignedIn;
