import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    width: '100%',
    height: '100%',
  },
  formControl: {
    minWidth: '120px',
  },
  checkBoxFormControlLabel: {
    marginTop: theme.spacing(1.5),
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
