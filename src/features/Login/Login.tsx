import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

// material core
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { useTypeSafeTranslation } from 'hooks/useTypeSafeTranslation';
import AuthProviderButton from 'components/atoms/AuthProviderButton';
import { Facebook, GitHub } from '@material-ui/icons';
import { Grid, Hidden, Tab, Tabs } from '@material-ui/core';

import { localLogin, localRegister } from 'apis/auth.api';
import { loginAction } from 'redux/actions/auth.action';
import { PATH_NAME } from 'configs';
import useStyles from './styles';
import LoginForm from './components/loginForm';
import RegisterForm from './components/RegisterForm';

enum tabs {
  LOGIN,
  REGISTER,
}

export default function SignIn() {
  const [activeTab, setActiveTab] = useState<tabs>(tabs.LOGIN);
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  const { translate } = useTypeSafeTranslation();

  const handleLoginSubmit = async ({ username, password }: { username: string; password: string }) => {
    const { token, refreshToken } = await localLogin({ username, password });
    await dispatch(loginAction(token, refreshToken));
    history.push(PATH_NAME.DASHBOARD);
  };

  const handleRegisterSubmit = (values: any) => {
    return localRegister(values);
  };

  return (
    <Grid container className={classes.container}>
      <CssBaseline />
      <Hidden mdDown>
        <Grid item xs={6} className={classes.background} />
      </Hidden>

      <Grid item xs={12} md={6}>
        <div className={classes.login}>
          <Typography component="h1" variant="h1" className={classes.title}>
            {translate('LOGIN')}
          </Typography>
          {/* oauth login providers */}
          <Grid container justifyContent="center">
            <Grid item>
              <AuthProviderButton icon={<GitHub fontSize="large" />} />
            </Grid>
            <Grid item>
              <AuthProviderButton icon={<Facebook fontSize="large" />} />
            </Grid>
            <Grid item>
              <AuthProviderButton icon={<Facebook fontSize="large" />} />
            </Grid>
          </Grid>

          {/* local login register */}
          <Tabs value={activeTab} onChange={(_, newValue) => setActiveTab(newValue)}>
            <Tab label="Login" key={tabs.LOGIN} />
            <Tab label="Register" key={tabs.REGISTER} />
          </Tabs>
          <br />
          {activeTab === tabs.LOGIN && <LoginForm onSubmit={handleLoginSubmit} />}
          {activeTab === tabs.REGISTER && <RegisterForm onSubmit={handleRegisterSubmit} />}
        </div>
      </Grid>
    </Grid>
  );
}
