import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  spacer: {
    flexGrow: 2,
  },
  // necessary for content to be below app bar
  appBarSpacer: theme.mixins.toolbar,
}));

export default useStyles;
