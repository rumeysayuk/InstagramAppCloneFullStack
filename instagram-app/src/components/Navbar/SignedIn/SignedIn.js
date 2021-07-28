import React from 'react';
import {Avatar} from "@material-ui/core";
import * as ROUTES from "../../../constants/routes";
import {useHistory} from "react-router-dom";
import Icons from "./Icons";
import {useSelector} from "react-redux";

const SignedIn = ({handleClick}) => {
   const history = useHistory()

   const handleAvatarClick = (e) => {
      handleClick(e);
      history.push(ROUTES.PROFILE)
   }
    const {authData} = useSelector(state => state.auth);
   return (
      <>
         <Icons/>
         <Avatar onClick={handleAvatarClick} aria-controls="simple-menu"
                 aria-haspopup="true"
                 src={authData.imageUrl}/>
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
