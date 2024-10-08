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


___

# A quick braindump of my motivation (to be cleaned up later)
I'm particularly proud my personal project involving projection mapping. That project forced me to think outside the box and use web technologies in a way that I haven't seen anyone use it before. I was forced to think on my own before the days of AI and google didn't have any similar usages.

I'm a fan of decorating my space with lights and LEDs. One day, i thought it would be really cool to project a sky onto my ceiling where the sky would fit perfectly on my ceiling, and that i could control what is being projected by using my phone. 

I didn't find a product that was able to do this so I decided to make my own. I used my familiar web technologies in a new way. I started by figuring out what I needed to create a video that would perfectly fit my ceiling. I dove into the world of projection mapping and learned that there was specific software that allows you to bend and create videos into a shape that you need. The software also has tools to manage video loops as well. Its essentially software for Video Jockeys (VJ). I researched what software was out there and settled on Millumin because of it's capabilities and perpetual license.

In order to play videos on the ceiling, I needed a projector. Not just any projector would do. I learned the differences between LED, bulb, and laser projectors. I learned why a projector's throw was important and I made my selection (but didn't buy it yet).

I now need a PC to run my app and play videos (projections). The PC needs to be cheap (because I don't have a big budget) and the PC needs to be powerful enough to play 4k videos. At first, I saw that the raspberry pi 4 has a lot of praise for being able to play 4k videos so I started there. I quickly found out that it can play 4k videos but is very dependent on which OS you were running and you really had to have the right format and codec for that to work. It wasn't worth the effort so eventually I discovered that mini PCs were incredibly cheap nowadays compared to before and they were much better at handling 4k video so I went with that. 

Now I had to make my app. The tech stack I chose was simple and basic web technologies. I had a mono repo that had two seperate react apps and one express backend. The first react app was meant to be run on the mini pc. The mini PC would open the app in fullscreen and play a video in the loop. This would be the projection you see on the ceiling. I then created the server that runs on the PC. 

Next, I made my second react application. The second react application essentially serves as a menu for which video I could choose to display on my ceiling. This react application is opened in my browser on my phone to make the selection.

Finally, I made the server that would host the two react applications. This server runs plain express because I didn't need more features that would warrant a full fledged framework like NestJS. This server only serves two static pages and allows the two pages to communicate with each other using socket.io (which was another thing I needed to learn)

After I had my application made and tested, it was time to spend the big bucks on my projector to finally test everything end to end. The project worked fine when I had a mock projector (a secondary monitor) but now it's time to do it for real. after purchasing the projector and connecting all the pieces. I was surprised that everything worked as I had planned. The sky was being projected on my ceiling and I was able to change what was being projected with my phone! I felt like my mission was complete and was ecstatic. After awhile, when projecting videos on my ceiling lost some of it's appeal to me, I realized that my motivation didn't come from having cool toys (even though that was awesome). My motivation came from the journey of inventing a cool product and seeing it came to life
