import { spawn } from "child_process";
import os from "os";

// Define the commands to be executed

let commands;

if (os.platform() === "win32") {
  // Current OS is Windows
  console.log("Windows detected");

  commands = [
    "taskkill /f /im chrome.exe",
    "cd ..",
    "cd pi-server",
    "yarn start",
    "start chrome",
  ];
} else {
  // Current OS is Unix (Linux, macOS, etc.)
  console.log("Unix detected");
  commands = [
    "pkill chrome",
    "cd ..",
    "cd pi-server",
    "yarn start",
    "start chrome",
  ];
}

//in windows, the first command should be replaced with "taskkill /f /im chrome.exe" because pkill is only for unix based systems
// Spawn a child process for each command
for (const command of commands) {
  const child = spawn(command, { shell: true });
  child.stdout.on("data", (data) => {
    console.log(`stdout: ${data}`);
  });
  child.stderr.on("data", (data) => {
    console.error(`stderr: ${data}`);
  });
  child.on("error", (error) => {
    console.error(`error: ${error.message}`);
  });
  child.on("close", (code) => {
    console.log(`child process exited with code ${code}`);
  });
}

//the idea of making this script is to run it to start the server every time the RBPi reboots
// This can be run from the dist folder because that's where this typescript is transpiled

/*

an array of commands is defined, and then a child process is spawned for each command using the spawn function. The shell option is set to true, which allows us to execute shell commands directly. Each child process is configured to log its stdout and stderr output to the console, and also to log any errors or exit codes.

Note that when executing multiple commands in sequence, it's important to wait for each command to complete before starting the next one. In this example, each command is executed in a separate child process, which ensures that they are executed in order.

Again, be careful when automating terminal commands, as incorrect usage can cause data loss or other problems. Always test your automation script thoroughly before running it in a production environment.
*/
