import type { IUser } from './IUser';

export enum IAuthActionTypes {
  SET_TOKEN = 'AUTH/SET_TOKEN',
  SET_USER = 'AUTH/SET_USER',
  LOGOUT = 'AUTH/LOGOUT',
  REGISTER = 'AUTH/REGISTER',
  LOGIN_REQUEST = 'AUTH/LOGIN_REQUEST',
  LOGIN_SUCCESS = 'AUTH/LOGIN_SUCESS',
  LOGIN_FAILURE = 'AUTH/LOGIN_FAILURE',
  SILENT_LOGIN = 'AUTH/SILENT_LOGIN',
}

export type IAuthState = {
  user?: IUser | null;
  token?: string | null;
  refreshToken?: string | null;
  role?: string | null;
};

export type IAuthActionCreator = {
  type: string;
  payload: IAuthState;
};
