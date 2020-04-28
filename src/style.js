import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  '@global': {
    '*::-webkit-scrollbar': {
      width: '0.7em',
    },
    '*::-webkit-scrollbar-track': {
      boxShadow: 'inset 0 0 10px rgba(0,0,0,.5)',
    },
    '*::-webkit-scrollbar-thumb': {
      backgroundColor: 'rgba(0,0,0,.4)',
      outline: '1px solid slategrey',
    },
  },
  root: {
    display: 'flex',
    width: '100%',
    height: '100%',
  },
  // necessary for content to be below app bar
  appBarSpacer: theme.mixins.toolbar,
  navigationContent: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    height: '100%',
  },
}));

export default useStyles;
