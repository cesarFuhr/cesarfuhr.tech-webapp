import { Component } from "react";
import Footer from "./components/Footer/Footer";
import Criptography from "./containers/Criptography/Cryptography";
import Main from "./containers/Main/Main";
import Menu from "./containers/Menu/Menu";
import { Container } from "./styles";

const pages = new Map([["crypto", <Criptography />]]);

class App extends Component {
  state = {
    menuOptions: [
      { id: "crypto", name: "Cryptography" },
      { id: "about", name: "About" },
    ],
    currentPage: "crypto",
  };

  changePage = (id: string) => {
    return () => {
      this.setState({ currentPage: id });
    };
  };

  selectPage = () => pages.get(this.state.currentPage);

  render() {
    return (
      <Container>
        <Menu entries={this.state.menuOptions} click={this.changePage} />
        <Main>{this.selectPage()}</Main>
        <Footer creatorName="César Führ" />
      </Container>
    );
  }
}
export default App;
