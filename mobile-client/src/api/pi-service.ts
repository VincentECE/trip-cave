import axios from "axios";

const url = "http://localhost:3001/";

type PlayVideoRequestPayload = {};

type PlayVideoResponsePayload = {
  title: string;
  imageUrl: string;
  videoUrl: string;
  tags: string[];
  categories: string[];
};

const playVideo = (payload: PlayVideoRequestPayload): void => {
  //todo: this will eventually take in a string and may become a play/pause button
};
