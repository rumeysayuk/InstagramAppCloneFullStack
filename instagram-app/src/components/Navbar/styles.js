import {makeStyles} from '@material-ui/core/styles';
import {deepPurple} from '@material-ui/core/colors';

export default makeStyles((theme) => ({
   paper: {
      marginRight: theme.spacing(2),
   },
   appBar: {
      borderRadius: 15,
      margin: '30px 0',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexDirection: "row",
      padding: '10px 20px',
      [theme.breakpoints.down('xs')]: {
         flexDirection: "column",
      },
   },

   search: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      [theme.breakpoints.down('sm')]: {
         display: "none"
      },
   },
   rightSearch: {
      display: "none",
      [theme.breakpoints.down('sm')]: {
         display: "block",
      },
   },
   image: {
      marginLeft: '10px',
      marginTop: '5px',
   },
   toolbar: {
      display: 'flex',
      alignItems: "center",
      justifyContent: "center",
      overflow: "hidden"
   },
   logout: {
      marginLeft: '20px',
   },
   userName: {
      display: 'flex',
      alignItems: 'center',
      textAlign: 'center',
   },
   brandContainer: {
      display: 'flex',
      alignItems: 'center',
   },
   purple: {
      color: theme.palette.getContrastText(deepPurple[500]),
      backgroundColor: deepPurple[500],
   }, inputRoot: {
      color: 'inherit',
   },
   inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
         width: '20ch',
      },
   },
}));
