import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  wrapper: {
    position: 'absolute',
    right: '10px',
    top: parseInt(String(theme.mixins.toolbar.minHeight), 10) - 10,
  },
}));

export default useStyles;
