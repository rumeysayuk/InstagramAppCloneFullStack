import React, {useEffect, useState} from 'react';
import {AppBar, Avatar, Button, IconButton, InputBase, Menu, MenuItem, Toolbar, Typography} from "@material-ui/core";
import {FavoriteBorder, HomeOutlined, ModeCommentOutlined, Search} from "@material-ui/icons";
import styles from "./styles";
import "../../style.css"
import {Link, useHistory} from "react-router-dom";
import logo from "../../assets/images/instagram.png"
import {useDispatch, useSelector} from "react-redux";
import {logOut} from "../../store/actions/auths"
import * as ROUTES from "../../constants/routes";

const Navbar = () => {
   const classes = styles();
   const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
   };
   const handleClose = () => {
      setAnchorEl(null);
   };
   const dispatch = useDispatch();
   const history = useHistory();
   const [anchorEl, setAnchorEl] = useState(null);
   const {authData} = useSelector(state => state.auth);

   const handleLogout = (e) => {
      e.preventDefault();
      dispatch(logOut())
      handleClose();
      history.push(ROUTES.AUTH);
   }

   return (
      <AppBar className={classes.appBar} position={"static"} color={"inherit"}>
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
               <>
                  <IconButton color="inherit">
                     <HomeOutlined/>
                  </IconButton>
                  <IconButton color="inherit">
                     <ModeCommentOutlined/>
                  </IconButton>
                  <IconButton className={classes.rightSearch} color="inherit">
                     <Search/>
                  </IconButton>
                  <IconButton color="inherit">
                     <FavoriteBorder/>
                  </IconButton>
                  <IconButton>
                     <div>
                        <Avatar onClickCapture={() => history.push(ROUTES.PROFILE)} aria-controls="simple-menu" aria-haspopup="true"
                                onClick={(event) => handleClick(event)}
                                src={"https://i2.milimaj.com/i/milliyet/75/0x0/6009348055427e21f0dcd3b8.jpg"}>
                        </Avatar>
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
                     </div>
                  </IconButton>
               </>
            ) : (
               <Button component={Link} to={ROUTES.AUTH} variant={"contained"} color={"primary"}>Giriş yap</Button>
            )}
         </Toolbar>
      </AppBar>
   )
}

export default Navbar;
