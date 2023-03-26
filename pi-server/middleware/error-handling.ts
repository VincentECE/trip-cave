export const exitOnException = (err: any, req: any, res: any, next: any) => {
  //todo: Log app restart here
  console.log("PROCESS EXIT HIT");
  console.error(err.stack);
  process.exit(1); // This causes pm2 to restart the app when thrown. This needs to be run with pm2 start (something) --watch
};
