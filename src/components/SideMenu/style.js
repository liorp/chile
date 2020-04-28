import { makeStyles } from '@material-ui/core/styles';

const drawerWidth = 200;

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    display: 'flex',
    flexDirection: 'column',
  },
  drawerPaper: {
    width: drawerWidth,
  },
  // necessary for content to be below app bar
  appBarSpacer: theme.mixins.toolbar,
  navigationContent: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    height: '100%',
  },
  homePageButton: {
    backgroundColor: 'transparent',
    '& span': {
      fontSize: '30px',
      textTransform: 'none',
      fontFamily: ['"Pacifico"', 'cursive'].join(', '),
      transition: '1s',
      '&:hover :first-child:first-child': {
        transform: 'rotate(360deg)',
      },
    },
  },
}));

export default useStyles;
