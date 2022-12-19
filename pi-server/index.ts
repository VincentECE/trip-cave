import express from "express";
import path from "path";
import { userRoutes } from "./routes";
import { crossOrigin } from "./middleware";
require("./db");
const app = express();

// app.use(express.static(path.resolve(__dirname, '../../client/build')));
app.use(crossOrigin); // uncomment this line if running the client and server separately
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", userRoutes);

let port = 3001;

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
