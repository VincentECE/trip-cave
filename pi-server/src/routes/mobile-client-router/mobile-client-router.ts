import express from "express";
import { contentMap } from "../../../content-map";
import path from "path";
export const mobileClientRouter = express.Router();
// import controllers here

/* === Routes === */
mobileClientRouter.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/", "index.html"));
});

mobileClientRouter.get("/scenes", (req, res) => {
  res.send(contentMap);
});
