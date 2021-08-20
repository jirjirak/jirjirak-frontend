// material core
import CssBaseline from '@material-ui/core/CssBaseline';
// libs
import clsx from 'clsx';
// containers
import ErrorBoundary from 'containers/ErrorBoundary';
import type { FC } from 'react';
import React, { useCallback, useState } from 'react';

// components
import NavBar from './NavBar';
// styles
import useStyles from './styles';
import TopBar from './TopBar';

const MainLayout: FC = ({ children }) => {
  const classes = useStyles();
  const [isDrawer, setIsDrawer] = useState(true);

  const _handleToogleDrawer = useCallback(() => {
    setIsDrawer(!isDrawer);
  }, [isDrawer]);

  return (
    <div className={classes.root}>
      <CssBaseline />

      <TopBar isDrawer={isDrawer} handleToogleDrawer={_handleToogleDrawer} />

      <NavBar isDrawer={isDrawer} />

      <main
        className={clsx(classes.content, {
          [classes.contentShift]: isDrawer,
        })}
      >
        <div className={classes.toolbar} />
        <ErrorBoundary>{children}</ErrorBoundary>
      </main>
    </div>
  );
};

export default MainLayout;
