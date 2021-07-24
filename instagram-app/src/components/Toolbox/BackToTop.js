import React from "react";
import {Fab, useScrollTrigger, Zoom} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import PropTypes from "prop-types";
import {KeyboardArrowUp} from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
   root: {
      bottom: theme.spacing(6),
      marginRight: 20,
      position: "sticky",
      float: "right",
   },
}));

const BackToTop = (props) => {
   const {window} = props;
   const classes = useStyles();
   const trigger = useScrollTrigger({
      target: window ? window() : undefined,
      disableHysteresis: true,
      threshold: 100,
   });

   const handleClick = (event) => {
      const anchor = (event.target.ownerDocument || document).querySelector(
         "#back-to-top-anchor"
      );

      if (anchor) {
         anchor.scrollIntoView({behavior: "smooth", block: "center"});
      }
   };

   return (
      <Zoom in={trigger}>
         <div onClick={handleClick} role="presentation" className={classes.root}>
            <Fab color="secondary" size="small" aria-label="scroll back to top">
               <KeyboardArrowUp/>
            </Fab>
         </div>
      </Zoom>
   );
};

BackToTop.propTypes = {
   window: PropTypes.func,
};
export default BackToTop;
