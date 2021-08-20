import Cookies from 'js-cookie';

class AuthService {
  TOKEN_KEY = 'JWT_TOKEN';

  REFRESH_TOKEN_KEY = 'REFRESH_TOKEN';

  setSession = (token: string, refreshToken?: string) => {
    Cookies.set(this.TOKEN_KEY, token);
    if (refreshToken) {
      Cookies.set(this.REFRESH_TOKEN_KEY, refreshToken);
    }
  };

  getActiveSession = () => {
    return {
      token: Cookies.get(this.TOKEN_KEY),
      refreshToken: Cookies.get(this.REFRESH_TOKEN_KEY),
    };
  };

  logOut = () => {
    localStorage.clear();
    Cookies.remove(this.TOKEN_KEY);
    Cookies.remove(this.REFRESH_TOKEN_KEY);
  };

  handleAuthentication = () => {
    const accessToken = this.getAccessToken();
    if (!accessToken || !this.isValidToken(accessToken)) return;
    this.setSession('accessToken', accessToken);
  };

  loginWithAuth0 = async (username: string, roleUser: string) => {
    const accessToken = '1929312831903129321';
    this.setSession('accessToken', accessToken);
    const userStringify = JSON.stringify({ username, roleUser });
    this.setSession('user', userStringify);
    return {
      user: username,
      role: roleUser,
    };
  };

  loginWithToken = async () => {
    return {
      user: 'tonynguyen',
    };
  };

  getUser = () => {
    const user = localStorage.getItem('user') || '';
    return user;
  };

  getAccessToken = () => Cookies.get(this.TOKEN_KEY);

  isAuthenticated = () => !!this.getAccessToken();

  isValidToken = (accessToken: string | null) => {
    const expireTime = 1606275140.897;
    if (!accessToken) return false;

    const currentTime = Date.now() / 1000;

    return expireTime < currentTime;
  };
}

const authService = new AuthService();

export default authService;
