// configs
import { getUserInfo } from 'apis/auth.api';
import { IAuthActionTypes } from 'models/IAuthState';
import type { Dispatch } from 'redux';
// services
import authService from 'services/authService';

export const tokensAction = (token: string, refreshToken: string) => {
  authService.setSession(token, refreshToken);
  return {
    type: IAuthActionTypes.SET_TOKEN,
    payload: { token, refreshToken },
  };
};

export const getUserInfoAction = () => async (dispatch: any) => {
  const userInfo = await getUserInfo();
  dispatch({
    type: IAuthActionTypes.SET_USER,
    payload: { user: userInfo },
  });
};

export const loginAction = (token: string, refreshToken: string) => async (dispatch: Dispatch<any>) => {
  dispatch(tokensAction(token, refreshToken));
  await dispatch(getUserInfo);
};

export const logout = () => (dispatch: Dispatch<any>) => {
  authService.logOut();
  dispatch({ type: IAuthActionTypes.LOGOUT });
};

export const setUserData = (user: string, role: string) => (dispatch: Dispatch<any>) => {
  dispatch({
    type: IAuthActionTypes.SILENT_LOGIN,
    payload: { user, role },
  });
};
