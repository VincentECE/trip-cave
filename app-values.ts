export const PI_CLIENT_PORT = 3001;
export const MOBILE_CLIENT_PORT = 3002;

/* 
    Comment one of these out. It controls where all 3 repos are looking as host
*/

export const CURRENT_HOST_IP = "http://192.168.86.234:"; //todo: be sure to change this to the host's ipv4
// export const CURRENT_HOST_IP = "http://localhost:";

//pi IPV4: 192.168.86.234
//pi IPV6: fe80::362a:bd52:ae34:cf90

/************************/

export const PI_CLIENT_HOST_IP = `${"http://localhost:" + PI_CLIENT_PORT}/`;
export const MOBILE_CLIENT_IP = `${CURRENT_HOST_IP + MOBILE_CLIENT_PORT}/`;

//todo: change this file to a .env if needed
