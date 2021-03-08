import { Component } from "react";
import { Container } from "./styles";
import Content from "../Content/Content";

class Main extends Component {
  state = {
    menuOptions: [
      { id: "jwe", name: "JWE" },
      { id: "about", name: "About" },
    ],
  };

  render() {
    return (
      <Container>
        <Content />
      </Container>
    );
  }
}

export default Main;
