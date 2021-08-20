import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  container: {
    height: '100vh',
  },
  login: {
    maxWidth: 400,
    height: '100%',
    margin: 'auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    padding: 15,
  },
  title: {
    marginBottom: theme.spacing(4),
  },
  background: {
    background: theme.palette.secondary.main,
    width: '100%',
    height: '100%',
    display: 'block',
  },
}));

export default useStyles;
