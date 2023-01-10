import express from "express";
import { contentMap } from "../../../content-map";
export const userRouter = express.Router();

// import controllers here

/* === Routes === */
userRouter.get("/", (req, res) => {
  console.log("home route entered. This goes nowhere right now");
  res.send("O.o what are you doing here?");
});

userRouter.get("/scenes", (req, res) => {
  res.send(contentMap);
});
