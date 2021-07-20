import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import NotFoundBgSvg1 from "../Toolbox/NotFoundBgSvg3";
import {Typography} from "@material-ui/core";

const NotFound = () => {
   const styles = makeStyles((theme) => ({
      main: {
         display: "flex",
         alignItems: "center",
         flexDirection: "column",
         justifyContent: "space-between",
         width: "60%",
         maxWidth: 500,
         top: "50%",
         left: "50%",
         position: "absolute",
         transform: "translate(-50%, -50%)",
         [theme.breakpoints.down('sm')]: {
            top: "60%",
         },
      },
      typography: {
         paddingTop: 50,

      }
   }))

   const classes = styles();
   return (
      <div className={classes.main}>
         <NotFoundBgSvg1 color="purple"/>
         <Typography className={classes.typography} variant="h5" >
            Aradığınız Sayfa Bulunamadı..
         </Typography>
      </div>
   )
}

export default NotFound;
