import Backdrop from '@material-ui/core/Backdrop';
import LinearProgress from '@material-ui/core/LinearProgress';
import type { Theme } from '@material-ui/core/styles';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import React from 'react';
import { useSelector } from 'react-redux';
// selectors
import { isLoadingSelector } from 'redux/selectors/app.selector';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '20%',
      backgroundColor: theme.palette.primary.light,
      padding: '8px 16px',
      '& span': {
        display: 'block',
      },
      '& > * + *': {
        marginTop: theme.spacing(1),
      },
    },
    backdrop: {
      zIndex: theme.zIndex.drawer + 1,
      color: '#fff',
    },
  }),
);

export default function DefaultPage() {
  const classes = useStyles();
  const isLoading = useSelector(isLoadingSelector);

  return (
    <Backdrop className={classes.backdrop} open={isLoading}>
      <div className={classes.root}>
        <span>Loading...</span>
        <LinearProgress />
      </div>
    </Backdrop>
  );
}
