import { FunctionComponent } from "react";
import { Container } from "./styles";

const Main: FunctionComponent = (props) => {
  return <Container>{props.children}</Container>;
};

export default Main;
