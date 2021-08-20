// configs
import { PATH_NAME } from 'configs';
import type { FC } from 'react';
import React from 'react';
import { Redirect } from 'react-router';
// services
import authService from 'services/authService';

const AuthGuard: FC = ({ children }) => {
  const isAuth = authService.getAccessToken();

  if (!isAuth) return <Redirect to={PATH_NAME.LOGIN} />;

  return <>{children}</>;
};

export default AuthGuard;
