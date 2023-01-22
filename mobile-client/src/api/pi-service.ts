import axios, { ResponseType } from "axios";
import { MOBILE_CLIENT_IP } from "../../../app-values";

// const url = "http://localhost:3002/scenes";
const url = `${MOBILE_CLIENT_IP}scenes`;

type PlayVideoRequestPayload = {};

export type Scene = {
  title: string;
  imageUrl: string;
  videoUrl: string;
  tags: string[];
  categories: string[];
  sceneId: number;
};

export const getScenes = async (): Promise<Scene[]> => {
  const options = {
    url: url,
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json;charset=UTF-8",
    },
  };

  const { data } = await axios.request<Scene[]>(options);

  return data;
};
