import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  horizontalContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1,
  },
}));

export default useStyles;
