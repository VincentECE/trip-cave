var Service = require("node-windows").Service;

// Create a new service object
var svc = new Service({
  name: "TripCave App",
  description: "The coolest projection mapping app.",
  script:
    "C:\\Users\\KioskMode\\Documents\\TripCave\\dist\\pi-server\\src\\index.js",
  nodeOptions: ["--harmony", "--max_old_space_size=4096"],
  //, workingDirectory: '...'
  //, allowServiceLogon: true
});

// Listen for the "install" event, which indicates the
// process is available as a service.
svc.on("install", function () {
  svc.start();
  console.log("Installation complete");
});

svc.install();
