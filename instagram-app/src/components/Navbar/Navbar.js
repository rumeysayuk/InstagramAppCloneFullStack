import React, {useState} from 'react';
import {AppBar,InputBase, Toolbar} from "@material-ui/core";
import {Search} from "@material-ui/icons";
import styles from "./styles";
import {Link, useHistory} from "react-router-dom";
import logo from "../../assets/images/instagram.png"
import {useDispatch, useSelector} from "react-redux";
import {logOut} from "../../store/actions/auths"
import * as ROUTES from "../../constants/routes";
import SignedIn from "./SignedIn/SignedIn";
import SignedOut from "./SignedOut/SignedOut";

const Navbar = () => {
   const classes = styles();
   const dispatch = useDispatch();
   const history = useHistory();

   const handleClick = (event) => setAnchorEl(event.currentTarget);
   const handleClose = () => setAnchorEl(null);

   const {authData} = useSelector(state => state.auth);
   const [anchorEl, setAnchorEl] = useState(null);

   const handleLogout = (e) => {
      e.preventDefault();
      dispatch(logOut())
      handleClose();
      history.push(ROUTES.AUTH);
   }

   return (
      <AppBar className={classes.appBar} elevation={0} position={"static"} color={"inherit"}>
         <Link className={classes.brandContainer} to={ROUTES.HOMEPAGE}>
            <img height={"60"} className={classes.image}
                 src={logo}
                 alt=""/>
         </Link>
         <div className={classes.search}>
            <Search/>
            <InputBase
               placeholder="Search…"
               classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
               }}
               style={{marginLeft: "6px", display: "flex", alignItems: "center"}}
               inputProps={{'aria-label': 'search'}}
            />
         </div>
         <Toolbar className={classes.toolbar}>
            {authData ? (
               <SignedIn handleClick={handleClick}/>
            ) : (
               <SignedOut/>
            )}
         </Toolbar>
      </AppBar>
   )
}

export default Navbar;
