import { CircularProgress } from '@material-ui/core';
import type { ReactElement } from 'react';
import React from 'react';

import useStyles from './styles';

function LoadingPage(): ReactElement {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <CircularProgress />
    </div>
  );
}

export default LoadingPage;
