import React, { useEffect, FC, useState } from 'react';
import { useDispatch } from 'react-redux';

// services
import authService from 'services/authService';

// actions
import { getUserInfoAction, setUserData, tokensAction } from 'redux/actions/auth.action';
import LoadingPage from 'containers/LoadingPage';

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
