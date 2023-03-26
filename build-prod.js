import { spawn } from "child_process";
import os from "os";

// Define the commands to be executed

/*
  This script builds all the files needed to be run on the raspberry pi in the production-build directory
**/

let commands;

if (os.platform() === "win32") {
  // Current OS is Windows
  console.log("Windows detected");

  commands = [
    "rmdir /s /q production-build", //deletes all contents inside the production-build directory
    "mkdir production-build",
    "cd pi-server && npx tsc",
    "cd mobile-client && yarn build",
    "cd pi-client && yarn build",
    "cd pi-server && cp -r dist ../production-build",
    "cd pi-server && cp -r private ../production-build/dist/pi-server/src",
    "cd pi-server && cp -r public ../production-build/dist/pi-server/src",
    "cd pi-server && cp -r node_modules ../production-build",
    "cd pi-server && cp -r prod-assets ../production-build/dist/pi-server",
    // "cd production-build && tar -czvf dist.zip dist",
    // "cd production-build && tar -czvf node_modules.zip node_modules",
  ];
} else {
  // Current OS is Unix (Linux, macOS, etc.)
  console.log(
    "Unix detected (These commands aren't tested for unix systems yet. Windows works tho)"
  );
  commands = [
    "rm -rf production-build", //deletes all contents inside the production-build directory
    "mkdir production-build",
    "cd pi-server && npx tsc",
    "cd mobile-client && yarn build",
    "cd pi-client && yarn build",
    "cd pi-server && cp -R dist ../production-build",
    "cd pi-server && cp -R private ../production-build/dist/pi-server/src",
    "cd pi-server && cp -R public ../production-build/dist/pi-server/src",
    "cd pi-server && cp -R node_modules ../production-build",
    "cd production-build && tar -czvf dist.zip dist",
    "cd production-build && tar -czvf node_modules.zip node_modules",
  ];
}

//in windows, the first command should be replaced with "taskkill /f /im chrome.exe" because pkill is only for unix based systems
// Spawn a child process for each command
const commandsLength = commands.length;
let currentCommand = 1;
let failed = 0;

async function runCommands() {
  for (const command of commands) {
    const child = spawn(command, { shell: true });
    await new Promise((resolve, reject) => {
      child.stdout.on("data", (data) => {
        console.log(`stdout: ${data}`);
      });
      child.stderr.on("data", (data) => {
        console.error(`stderr: ${data}`);
      });
      child.on("error", (error) => {
        console.error(`error: ${error.message}`);
        failed++;
        reject(error);
      });
      child.on("close", (code) => {
        console.log(`child process exited with code ${code}`);
        resolve();
      });
    });

    console.log(
      `Ran ${currentCommand}/${commandsLength} commands. Failed ${failed} commands `
    );

    if (currentCommand === commandsLength) {
      console.log("DONE! The zip files are ready to be tested on the pi");
    }

    currentCommand++;
  }
}

runCommands();

/*

an array of commands is defined, and then a child process is spawned for each command using the spawn function. The shell option is set to true, which allows us to execute shell commands directly. Each child process is configured to log its stdout and stderr output to the console, and also to log any errors or exit codes.

Note that when executing multiple commands in sequence, it's important to wait for each command to complete before starting the next one. In this example, each command is executed in a separate child process, which ensures that they are executed in order.

Again, be careful when automating terminal commands, as incorrect usage can cause data loss or other problems. Always test your automation script thoroughly before running it in a production environment.
*/
