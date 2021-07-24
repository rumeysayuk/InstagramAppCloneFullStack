import {makeStyles} from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    form: {
        width: '100%',
        marginTop: theme.spacing(6),
    },
    title:{
        padding:'17px',
        textAlign:"center"
    },
    submit: {
        margin: theme.spacing(6, "auto", 2, "auto"),
        width: "60%",
    },
}));
