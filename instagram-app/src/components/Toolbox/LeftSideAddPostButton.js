import React from 'react';
import {IconButton, Typography, useMediaQuery} from "@material-ui/core";
import {AddCircleOutlined} from "@material-ui/icons";
import {makeStyles} from "@material-ui/core/styles";
import {useSelector} from "react-redux";

const useStyles = makeStyles(() => ({
   addPostDiv: (props) => ({
      display: props?.authData ? "flex" : "none",
      alignItems: "center",
      position: "fixed",
      bottom: "33px",
      marginLeft: "10px"
   })
}));

const LeftSideAddPostButton = ({handleModalOpen, show}) => {
   const {authData} = useSelector(state => state.auth);
   const classes = useStyles({authData});
   const matches = useMediaQuery(theme => theme.breakpoints.down('sm'));

   return (
      <div className={classes.addPostDiv}>
         <IconButton color="inherit" onClick={handleModalOpen}>
            <AddCircleOutlined style={{fontSize: 40}}/>
         </IconButton>
         <Typography style={{display: matches && "none"}} variant="body1">Yeni Post Ekle</Typography>
      </div>
   )
}

export default LeftSideAddPostButton;
