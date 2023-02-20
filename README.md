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

- **cd pi-server**
- **yarn build**
- **yarn start**

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
