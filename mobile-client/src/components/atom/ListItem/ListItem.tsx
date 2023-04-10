import {
  BodyContainer,
  Container,
  HeadingContent,
  TrailingContent,
} from "./ListItem.style";

export type ListItemProps = {
  label: string;
  subtitle?: string;
  trailing?: React.ReactElement;
  heading?: React.ReactElement;
};

export const ListItem = ({
  subtitle,
  label,
  heading,
  trailing,
}: ListItemProps): JSX.Element => (
  <Container>
    <HeadingContent>{heading}</HeadingContent>
    <BodyContainer>
      {label}
      {subtitle}
    </BodyContainer>
    <TrailingContent>{trailing}</TrailingContent>
  </Container>
);
