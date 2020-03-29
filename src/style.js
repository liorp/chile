import {makeStyles} from "@material-ui/core/styles";

const drawerWidth = 240;
const defaultPadding = '16px';

export const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        width: '100%',
        height: '100%'
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
        display: 'flex',
        flexDirection: 'column'
    },
    drawerPaper: {
        width: drawerWidth,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
    // necessary for content to be below app bar
    appBarSpacer: theme.mixins.toolbar,
    navigationContent: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        height: '100%'
    },
    chileLogo: {
        "& span": {
            fontSize: '100px',
        }
    },
    chileName: {
        "& span": {
            fontSize: '30px',
            textTransform: 'none',
            fontFamily: ['"Pacifico"', 'cursive'].join(', ')
        }
    },
    chileTable: {
        padding: Array(4).fill(defaultPadding).join(' '),
    },
    chileLoading: {
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    infoCard: {
        width: '50%',
        height: 'fit-content',
        marginTop: defaultPadding
    }
}));
