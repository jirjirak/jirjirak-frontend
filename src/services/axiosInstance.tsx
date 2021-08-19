import axios, { AxiosRequestConfig } from 'axios';

export type IConfig = AxiosRequestConfig & {
  showSpinner?: boolean;
};

const requestConfig: IConfig = {
  baseURL: process.env.REACT_APP_ENDPOINT_URL,
  timeout: 5000,
  showSpinner: false,
};

export default axios.create(requestConfig);
