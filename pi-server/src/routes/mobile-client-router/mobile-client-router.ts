import express from "express";
import { contentMap } from "../../../content-map";
import path from "path";
import { MOBILE_CLIENT_IP } from "../../../../app-values";

export const mobileClientRouter = express.Router();
// import controllers here

/* === Routes === */
mobileClientRouter.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/", "index.html"));
});

mobileClientRouter.get("/scenes", (req, res) => {
  res.send(contentMap);
});

mobileClientRouter.get("/shareLink", (req, res) => {
  res.send(MOBILE_CLIENT_IP);
});

mobileClientRouter.put("/throwError", (req, res) => {
  console.log("throwing error");
  res.send();
  throw new Error("Intentional error thrown by mobile client");
});
