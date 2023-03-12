export const PI_CLIENT_PORT = 3001;
export const MOBILE_CLIENT_PORT = 3002;

/* 
    Comment one of these out. It controls where all 3 repos are looking as host
*/

// export const CURRENT_HOST_IP = "http://192.168.86.232:"; //Mini PC
// export const CURRENT_HOST_IP = "http://192.168.86.34:"; //desktop PC

export const CURRENT_HOST_IP = "http://localhost:";

/************************/
//the PI_Client host ip needs to change when hosting in prod
export const PI_CLIENT_HOST_IP = `${"http://localhost:" + PI_CLIENT_PORT}/`;
export const MOBILE_CLIENT_IP = `${CURRENT_HOST_IP + MOBILE_CLIENT_PORT}/`;

//todo: change this file to a .env if needed
