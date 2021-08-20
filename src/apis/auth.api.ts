import { mockRequest } from './mock';

export function localLogin(data: { username: string; password: string }) {
  return mockRequest({
    token: 'ksldjfksjdfkjsdf',
    refreshToken: 'lskdjfklsjdfklsdjf',
  });
}

export function localRegister(data: { username: string; password: string }) {
  return Promise.resolve({
    token: 'ksldjfksjdfkjsdf',
    accessToken: 'lskdjfklsjdfklsdjf',
  });
}

export function getUserInfo() {
  return mockRequest({
    username: 'amir karimi',
  });
}

export function postRefreshToken(token: string) {
  return mockRequest({
    token: 'kljsdklfjsdfk',
  });
}
