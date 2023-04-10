import { Img } from "./Image.style";

type ImageProps = {
  src: string;
};
export const Image = ({ src }: ImageProps) => <Img src={src} />;
