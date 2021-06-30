import React, {useEffect, useState} from 'react';
import {AppBar, Avatar, Button, IconButton, InputBase, Menu, MenuItem, Toolbar, Typography} from "@material-ui/core";
import {FavoriteBorder, HomeOutlined, ModeCommentOutlined, Search} from "@material-ui/icons";
import styles from "./styles";
import "../../style.css"
import {Link, useHistory} from "react-router-dom";
import logo from "../../assets/images/instagram.png"
import {useDispatch} from "react-redux";
import {logOut} from "../../store/actions/auths"
import {getUserFromLocalStorage} from "../../services/userServices";

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
   const {user} = getUserFromLocalStorage()

   useEffect(() => {
      if (user) {
         history.push("/")
      } else {
         history.push("/auth");
      }
   }, [])

   const handleSubmit = (e) => {
      e.preventDefault();
      dispatch(logOut())
      history.push("/auth");
   }

   return (
      <AppBar className={classes.appBar} position={"static"} color={"inherit"}>
         <Link className={classes.brandContainer} to={"/"}>
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
            {user ? (
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
                        <Avatar aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}
                                src={"https://i2.milimaj.com/i/milliyet/75/0x0/6009348055427e21f0dcd3b8.jpg"}>
                        </Avatar>
                        <Menu
                           id="simple-menu"
                           anchorEl={anchorEl}
                           keepMounted
                           open={Boolean(anchorEl)}
                           onClose={handleClose}
                           className={classes.logout}
                        >

                           <MenuItem>
                              <Typography className={classes.userName}
                                          variant={"h6"}>{user?.username}</Typography>
                           </MenuItem>
                           <MenuItem component={Link} onClick={handleClose} to={"/postadd"}>Post
                              ekle</MenuItem>
                           <MenuItem onClick={handleSubmit} onSubmit={handleClose}>Çıkış yap</MenuItem>
                        </Menu>
                     </div>
                  </IconButton>
               </>
            ) : (
               <Button component={Link} to={"/auth"} variant={"contained"} color={"primary"}>Giriş
                  yap</Button>
            )
            }
         </Toolbar>
      </AppBar>
   )
}

export default Navbar;
