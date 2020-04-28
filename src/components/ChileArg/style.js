import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  formControl: {
    minWidth: '120px',
  },
  checkBoxFormControlLabel: {
    marginTop: theme.spacing(1.5),
  },
}));

export default useStyles;
