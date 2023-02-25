import express from "express";
import { contentMap } from "../../../content-map";
import path from "path";
export const piClientRouter = express.Router();
// import controllers here

/* === Routes === */
piClientRouter.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/", "index.html"));
});

piClientRouter.get("/scenes", (req, res) => {
  res.send(contentMap);
});
