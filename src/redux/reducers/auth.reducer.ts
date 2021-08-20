import type { IAuthActionCreator, IAuthState } from 'models/IAuthState';
import { IAuthActionTypes } from 'models/IAuthState';

const initialState: IAuthState = {
  user: null,
  token: null,
  refreshToken: null,
  role: 'ADMIN',
};

const reducer = (state = initialState, { type, payload }: IAuthActionCreator) => {
  switch (type) {
    case IAuthActionTypes.SET_TOKEN:
      return {
        ...state,
        token: payload.token,
        refreshToken: payload.refreshToken,
      };

    case IAuthActionTypes.SET_USER:
      return {
        ...state,
        user: payload.user,
      };

    case IAuthActionTypes.LOGOUT:
      return initialState;

    default:
      return state;
  }
};

export default reducer;
