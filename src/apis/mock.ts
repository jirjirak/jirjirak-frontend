export function mockRequest<T>(dataToReturn: T, timeout = 300) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(dataToReturn);
    }, timeout);
  }) as Promise<typeof dataToReturn>;
}
