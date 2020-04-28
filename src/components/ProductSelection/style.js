import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  card: {
    margin: theme.spacing(2),
    padding: theme.spacing(2),
  },
  productsContainer: {
    display: 'flex',
    flexDirection: 'column',
  },
}));

export default useStyles;
