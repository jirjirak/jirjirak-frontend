import { postRefreshToken } from 'apis/auth.api';
import type { AxiosRequestConfig } from 'axios';
import axios from 'axios';
import { tokensAction } from 'redux/actions/auth.action';
import store from 'stores';

export type IConfig = AxiosRequestConfig & {
  showSpinner?: boolean;
};

const requestConfig: IConfig = {
  baseURL: process.env.REACT_APP_ENDPOINT_URL,
  timeout: 5000,
  showSpinner: false,
};

const axiosInstance = axios.create(requestConfig);

// interceptors
/**
 * add auth token to every request
 */
let tokenInterceptorID = 0;
export const addTokenInterceptor = (token: string) => {
  // eject the previous interceptor
  axiosInstance.interceptors.request.eject(tokenInterceptorID);
  tokenInterceptorID = axiosInstance.interceptors.request.use(
    (config) => {
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    (error) => {
      Promise.reject(error);
    },
  );
};

/**
 * if response status is 401 it means token is invalid we should go for new token using refresh token
 */
export const addRefreshTokenInterceptor = (refreshToken: string) => {
  axios.interceptors.response.use(
    (response) => {
      return response;
    },
    function (error) {
      const originalRequest = error.config;
      if (error.response.status === 401 && !originalRequest._retry) {
        originalRequest._retry = true;
        return postRefreshToken(refreshToken).then(({ token }) => {
          store.dispatch(tokensAction(token, refreshToken));
          return axiosInstance(originalRequest);
        });
      }
      return Promise.reject(error);
    },
  );
};

export default axiosInstance;
