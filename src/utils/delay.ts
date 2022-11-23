const delay = (n: number) =>
  new Promise<void>(resolve => setTimeout(resolve, n));

export default delay;
