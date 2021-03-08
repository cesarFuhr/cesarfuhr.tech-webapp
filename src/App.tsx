import { Component } from "react";
import Footer from "./components/Footer/Footer";
import Main from "./containers/Main/Main";
import Menu from "./containers/Menu/Menu";
import { Container } from "./styles";

class App extends Component {
  state = {
    menuOptions: [
      { id: "jwe", name: "JWE" },
      { id: "about", name: "About" },
    ],
  };

  render() {
    return (
      <Container>
        <Menu entries={this.state.menuOptions} />
        <Main />
        <Footer creatorName="César Führ" />
      </Container>
    );
  }
}
export default App;
