import {makeStyles} from "@material-ui/core/styles";

export const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        width: '100%',
        height: '100%'
    },
    // necessary for content to be below app bar
    appBarSpacer: theme.mixins.toolbar,
    navigationContent: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        height: '100%'
    }
}));
