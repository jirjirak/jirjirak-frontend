import type { IAppState } from './IAppState';
import type { IAuthState } from './IAuthState';

type IRootState = {
  app: IAppState;
  auth: IAuthState;
};

export default IRootState;
