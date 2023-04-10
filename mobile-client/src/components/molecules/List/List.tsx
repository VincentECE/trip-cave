import { Container } from "./List.style";

type ListProps<T> = {
  // maybe showFirstNthChildren: number;
  height?: number;
  items: T[];
  renderItem: (item: T, index: number) => React.ReactNode;
};

export const List = <T extends {}>({
  height,
  items,
  renderItem,
}: ListProps<T>): JSX.Element => (
  <Container height={height}>
    {items.map((eachItem, index) => renderItem(eachItem, index))}
  </Container>
);
