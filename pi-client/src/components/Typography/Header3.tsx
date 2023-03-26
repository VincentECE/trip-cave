import { Header3Text } from "./Typography.style";

export type Header3TextProps = {
  text: string;
};

export const Header3 = ({ text }: Header3TextProps) => {
  return <Header3Text>{text}</Header3Text>;
};
