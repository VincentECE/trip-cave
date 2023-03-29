import axios, { ResponseType } from "axios";
import { MOBILE_CLIENT_IP } from "../../../app-values";

// const url = "http://localhost:3002/scenes";
const url = MOBILE_CLIENT_IP;

type PlayVideoRequestPayload = {};

export type Scene = {
  title: string;
  imageUrl: string;
  videoUrl: string;
  tags: string[];
  categories: string[];
  sceneId: number;
  mood?: string[]; //We might use this in the future if it makes sense
};

export type SceneStatus = {
  scene: Scene;
  status: "playing" | "paused";
};

export const getScenes = async (): Promise<Scene[]> => {
  const options = {
    url: `${url}scenes`,
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json;charset=UTF-8",
    },
  };

  const { data } = await axios.request<Scene[]>(options);

  return data;
};

export const throwServerError = async (): Promise<number> => {
  console.log("trying to throw error to: ", `${url}throwError`);
  const options = {
    url: `${url}throwError`,
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json;charset=UTF-8",
    },
  };

  const { data } = await axios.request<number>(options);

  return data;
};

export const getCurrentStatus = async (): Promise<SceneStatus> => {
  const options = {
    url: `${url}scene-status`,
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json;charset=UTF-8",
    },
  };

  const { data } = await axios.request<SceneStatus>(options);

  return data;
};
