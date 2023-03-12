export const delay = (seconds: number) => {
  const timeMs = seconds * 1000;

  return new Promise((res, rej) => {
    setTimeout(() => {
      res(undefined);
    }, timeMs);
  });
};
