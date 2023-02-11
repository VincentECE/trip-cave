import express from "express";
import { contentMap } from "../../../content-map";
import path from "path";
export const userRouter = express.Router();
// import controllers here

/* === Routes === */
userRouter.get("/", (req, res) => {
  console.log("home route entered. This goes nowhere right now");
  res.sendFile(path.join(__dirname, "/", "index.html"));
});

userRouter.get("/scenes", (req, res) => {
  res.send(contentMap);
});
