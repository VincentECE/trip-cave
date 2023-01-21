export const PI_CLIENT_PORT = 3001;
export const MOBILE_CLIENT_PORT = 3002;

/* 
    Comment one of these out. It controls where all 3 repos are looking as host
*/

export const CURRENT_HOST_IP = "http://192.168.86.34:";
// export const CURRENT_HOST_IP = "http://localhost:";

/************************/

export const PI_CLIENT_HOST_IP = `${CURRENT_HOST_IP + PI_CLIENT_PORT}/`;
export const MOBILE_CLIENT_IP = `${CURRENT_HOST_IP + MOBILE_CLIENT_PORT}/`;

//todo: change this file to a .env if needed
