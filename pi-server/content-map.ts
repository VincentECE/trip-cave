import { PI_CLIENT_HOST_IP, MOBILE_CLIENT_IP } from "./app-values";

export interface contentInfo {
  title: string;
  imageUrl: string;
  videoUrl: string;
  tags: string[];
  categories: string[];
}

export const contentMap: contentInfo[] = [
  {
    title: "Expresso Machine",
    imageUrl: `${MOBILE_CLIENT_IP}Coffee.png`,
    videoUrl: `${PI_CLIENT_HOST_IP}Coffee.mp4`,
    tags: ["coffee", "relaxing", "homey"],
    categories: ["chill", "peaceful"],
  },
  {
    title: "Dots Flying Through Space",
    imageUrl: `${MOBILE_CLIENT_IP}DotsBackground.png`,
    videoUrl: `${PI_CLIENT_HOST_IP}DotsBackground.mp4`,
    tags: ["flying", "trippy", "space"],
    categories: ["space", "trippy"],
  },
  {
    title: "Neon Tunnel Flying through space",
    imageUrl: `${MOBILE_CLIENT_IP}Holy.png`,
    videoUrl: `${PI_CLIENT_HOST_IP}Holy.mp4`,
    tags: ["flying", "trippy", "intense", "visuals"],
    categories: ["flying", "trip"],
  },
  {
    title: "Flying through Skyscrapers",
    imageUrl: `${MOBILE_CLIENT_IP}Skyscrapers.png`,
    videoUrl: `${PI_CLIENT_HOST_IP}Skyscrapers.mp4`,
    tags: ["flying", "city", "buildings"],
    categories: ["peaceful", "scene"],
  },
];
