import {makeStyles} from "@material-ui/core/styles";

export const useStyles = makeStyles(theme => ({
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
    },
    rightSubMenu: {
        display: 'flex',
        alignItems: 'center',
    },
    userPageLink: {
        color: 'white',
        textDecoration: 'none',
    }
}));
