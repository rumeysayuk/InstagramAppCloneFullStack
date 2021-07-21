import {makeStyles} from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    root: {
        boxShadow: theme.palette.boxShadows.medium,
        borderRadius: theme.customs.borderRadius.medium,
        maxWidth: '100%',
        width: '100%'
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        color: "purple",

    },
    cardFooter: {
        display: "flex",
        justifyContent: "space-between"
    },
}));
