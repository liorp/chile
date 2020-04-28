import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(3),

  },
  firstLine: {
    display: 'flex',
  },
}));

export default useStyles;
