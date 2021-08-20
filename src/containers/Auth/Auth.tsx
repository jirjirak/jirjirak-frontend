import LoadingPage from 'containers/LoadingPage';
import type { FC } from 'react';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
// actions
import { getUserInfoAction, tokensAction } from 'redux/actions/auth.action';
// services
import authService from 'services/authService';

const Auth: FC = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    async function initAuth() {
      const { token, refreshToken } = authService.getActiveSession();
      if (token && refreshToken) {
        dispatch(tokensAction(token, refreshToken));
        await dispatch(getUserInfoAction());
      }
      setLoading(false);
    }
    initAuth();
  }, [dispatch]);

  if (loading) return <LoadingPage />;
  return <>{children}</>;
};

export default Auth;
