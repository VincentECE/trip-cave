import { PI_CLIENT_HOST_IP, MOBILE_CLIENT_IP } from "../app-values";

export type Scene = {
  title: string;
  imageUrl: string;
  videoUrl: string;
  tags: string[];
  categories: string[];
  sceneId: number;
  mood?: string[];
};

export const contentMap: Scene[] = [
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
  {
    title: "Electric Warehouse",
    imageUrl: `${MOBILE_CLIENT_IP}ElectricWarehouse.png`,
    videoUrl: `${PI_CLIENT_HOST_IP}ElectricWarehouse.mov`,
    tags: ["electric", "turnup", "night"],
    categories: ["party", "scene"],
    sceneId: 6,
  },
  {
    title: "Natural Sky",
    imageUrl: `${MOBILE_CLIENT_IP}NaturalSky.png`,
    videoUrl: `${PI_CLIENT_HOST_IP}NaturalSky.mov`,
    tags: ["sky", "peaceful", "nature"],
    categories: ["party", "scene"],
    sceneId: 7,
  },
  {
    title: "Fast Particle Tunnel",
    imageUrl: `${MOBILE_CLIENT_IP}FastParticleTunnel.png`,
    videoUrl: `${PI_CLIENT_HOST_IP}FastParticleTunnel.mov`,
    tags: ["electric", "turnup", "night", "space"],
    categories: ["party", "scene", "trip"],
    sceneId: 8,
  },
  {
    title: "Galaxy",
    imageUrl: `${MOBILE_CLIENT_IP}Galaxy.png`,
    videoUrl: `${PI_CLIENT_HOST_IP}Galaxy.mov`,
    tags: ["electric", "relaxing", "night", "space"],
    categories: ["party", "scene", "trip"],
    sceneId: 9,
  },
  {
    title: "Network Fast",
    imageUrl: `${MOBILE_CLIENT_IP}NetworkFast.png`,
    videoUrl: `${PI_CLIENT_HOST_IP}NetworkFast.mov`,
    tags: ["electric", "relaxing", "night", "space"],
    categories: ["party", "scene", "trip"],
    sceneId: 10,
  },
  {
    title: "Blue Network",
    imageUrl: `${MOBILE_CLIENT_IP}BlueNetwork.png`,
    videoUrl: `${PI_CLIENT_HOST_IP}BlueNetwork.mov`,
    tags: ["electric", "relaxing", "night", "space"],
    categories: ["party", "scene", "trip"],
    sceneId: 11,
  },
  {
    title: "City Particles",
    imageUrl: `${MOBILE_CLIENT_IP}CityParticles.png`,
    videoUrl: `${PI_CLIENT_HOST_IP}CityParticles.mov`,
    tags: ["electric", "relaxing", "night", "space"],
    categories: ["party", "scene", "trip"],
    sceneId: 12,
  },
  {
    title: "Darker City Particles",
    imageUrl: `${MOBILE_CLIENT_IP}DarkerCityParticles.png`,
    videoUrl: `${PI_CLIENT_HOST_IP}DarkerCityParticles.mov`,
    tags: ["electric", "relaxing", "night", "space"],
    categories: ["party", "scene", "trip"],
    sceneId: 13,
  },
  {
    title: "Weird Water",
    imageUrl: `${MOBILE_CLIENT_IP}WeirdWater.png`,
    videoUrl: `${PI_CLIENT_HOST_IP}WeirdWater.mov`,
    tags: ["electric", "relaxing", "night", "space"],
    categories: ["party", "scene", "trip"],
    sceneId: 14,
  },
  {
    title: "Slow Particle Tunnel",
    imageUrl: `${MOBILE_CLIENT_IP}SlowParticleTunnel.png`,
    videoUrl: `${PI_CLIENT_HOST_IP}SlowParticleTunnel.mov`,
    tags: ["electric", "relaxing", "night", "space"],
    categories: ["party", "scene", "trip"],
    sceneId: 15,
  },
];
