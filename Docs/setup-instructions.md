# Running the application

Download picture / video assets from google drive and put them in the correct folders

- [Download resources from Google Drive](https://drive.google.com/drive/u/0/folders/1CBWWcQ9FJMytGCvTcu2CaVMeXUfO2DF6)
- Copy the video-loops content to pi-server -> private -> video-loops
- Copy the thumbnail-images content to pi-server -> public -> thumbnail-images

### Running the application from the pi-server only (development)

- Open three instances of the terminal because we're going to need to run yarn dev for all 3 directories
- **cd mobile-client** -> **yarn dev**
- **cd pi-server** -> **yarn dev**
- **cd pi-client** -> **yarn dev**
- vite should be providing a link in the terminals to access the clients

### Running the application from the pi-server only (production)

### This is the current way of building for prod

From the root trip-caves directory, run

- **node build-pi.js**

### This is what the above command does when building for prod

Build the files from pi-server

- **cd pi-server**
- **yarn build** to create build files in pi-server/dist

Build the static files from mobile-client into the pi-server

- **cd mobile-client** to navigate into the mobile-client directory
- run **yarn build** to build the production static files into pi-server/dist/pi-server/src/clients-static-files/mobile-client

Build the static files from pi-client into the pi-server

- **cd pi-client** to navigate into the pi-client directory
- run **yarn build** to build the production static files into pi-server/dist/pi-server/src/clients-static-files/pi-client

Start the pi-server

- **cd pi-server**
- **yarn start**

# Windows automatic launch on startup

Install PM2

- **npm install pm2 -g**

Create a shell startup shortcut

- Open run.exe
- Run **shell:startup**
- Right click -> new -> shortcut
- In the location field, enter the location of the command prompt. Ex: **%windir%\system32\cmd.exe**
- Click next and type in the name of the application or whatever u wanna name it. Ex: **TripCave**
- Click Finish
- Right click the new shortcut -> properties
- In the target field after what's already there, type in: "/k pm2 start (absolute path of the app) --watch" Ex: **/k pm2 start "C:\Users\vtran\Desktop\TripCave\dist\pi-server\src\index.js" --watch**
- In the start in field, fill in the absolute path of the application. Ex: **C:\Users\vtran\Desktop\TripCave\dist\pi-server\src**
- In the run dropdown, select minimized
- Click apply and then Ok

# Running the application on the pi

- make sure the pi-server directory has all the build files in there from all 3 directories
- run the startup-script from pi-server -> dist

## IMPORTANT! When running prod on the PI/Mini PC

- The folders that contain the video and image content (private and public folders) need to be in dist/pi-server/src
- The node modules need to be on the same level as the dist folder
