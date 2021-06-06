import {makeStyles} from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(6),
    },
    submit: {
        margin: theme.spacing(8, 0, 2),
    },
    head:{
        marginTop:"10px",
        textAlign:"center"
    }

}));
