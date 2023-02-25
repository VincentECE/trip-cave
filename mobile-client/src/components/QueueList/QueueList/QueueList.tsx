import { Container } from "./QueueList.style";
import { toast } from "react-toastify";

export type QueueListProps = {};

export const QueueList = (props: QueueListProps): JSX.Element => {
  const checkPiServer = () => {
    toast.success("Pinging server! Looks healthy!");
  };
  return (
    <Container>
      <button onClick={checkPiServer}>Ping</button>
    </Container>
  );
};
