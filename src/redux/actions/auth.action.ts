import { Dispatch } from 'redux';
import { IAuthActionTypes } from 'models/IAuthState';

// services
import authService from 'services/authService';

// configs
import { getUserInfo } from 'apis/auth.api';

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
