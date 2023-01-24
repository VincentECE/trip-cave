import { PI_CLIENT_HOST_IP, MOBILE_CLIENT_IP } from "../app-values";

export type ContentInfo = {
  //TODO: RENAME THIS to "scene" TO MATCH THE MOBILE CLIENT TYPE
  title: string;
  imageUrl: string;
  videoUrl: string;
  tags: string[];
  categories: string[];
  sceneId: number;
  mood?: string[];
};

export const contentMap: ContentInfo[] = [
  {
    title: "Expresso Machine",
    imageUrl: `${MOBILE_CLIENT_IP}Coffee.png`,
    videoUrl: `${PI_CLIENT_HOST_IP}Coffee.mp4`,
    tags: ["coffee", "relaxing", "homey"],
    categories: ["chill", "peaceful"],
    sceneId: 0,
  },
  {
    title: "Dots Flying Through Space",
    imageUrl: `${MOBILE_CLIENT_IP}DotsBackground.png`,
    videoUrl: `${PI_CLIENT_HOST_IP}DotsBackground.mp4`,
    tags: ["flying", "trippy", "space"],
    categories: ["space", "trippy"],
    sceneId: 1,
  },
  {
    title: "Neon Tunnel Flying through space",
    imageUrl: `${MOBILE_CLIENT_IP}Holy.png`,
    videoUrl: `${PI_CLIENT_HOST_IP}Holy.mp4`,
    tags: ["flying", "trippy", "intense", "visuals"],
    categories: ["flying", "trip"],
    sceneId: 2,
  },
  {
    title: "Flying through Skyscrapers",
    imageUrl: `${MOBILE_CLIENT_IP}Skyscrapers.png`,
    videoUrl: `${PI_CLIENT_HOST_IP}Skyscrapers.mp4`,
    tags: ["flying", "city", "buildings"],
    categories: ["peaceful", "scene"],
    sceneId: 3,
  },
  {
    title: "4k Aurora",
    imageUrl: `${MOBILE_CLIENT_IP}Aurora.png`,
    videoUrl: `${PI_CLIENT_HOST_IP}Aurora.mp4`,
    tags: ["sky", "nature", "night"],
    categories: ["peaceful", "scene"],
    sceneId: 4,
  },
  {
    title: "4k Magic Butterflies",
    imageUrl: `${MOBILE_CLIENT_IP}MagicButterflies.png`,
    videoUrl: `${PI_CLIENT_HOST_IP}MagicButterflies.mp4`,
    tags: ["woods", "nature", "night"],
    categories: ["peaceful", "scene"],
    sceneId: 5,
  },
];
