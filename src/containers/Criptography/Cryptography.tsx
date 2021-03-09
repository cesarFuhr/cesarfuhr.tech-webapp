import { ChangeEvent, Component } from "react";
import { Container } from "./styles";

import Key from "../../components/Key/Key";
import Encrypt from "../../components/Encrypt/Encrypt";
import Decrypt from "../../components/Decrypt/Decrypt";

class Criptography extends Component {
  state = {
    keys: [{ id: "1" }, { id: "2" }, { id: "3" }],
    encrypt: {
      result: "Encrypt result...",
    },
    decrypt: {
      result: "Decrypt result...",
    },
  };

  keyChangeHandler = (e: ChangeEvent) => {
    console.log(e);
  };

  keyRequestHandler = () => {
    console.log("Key requested");
  };

  encryptChangeHandler = (e: ChangeEvent) => {
    console.log(e);
  };

  encryptRequestHandler = () => {
    console.log("Encrypt requested");
  };

  decryptChangeHandler = (e: ChangeEvent) => {
    console.log(e);
  };

  decryptRequestHandler = () => {
    console.log("Decrypt requested");
  };

  render() {
    return (
      <Container>
        <Key
          keys={this.state.keys}
          change={this.keyChangeHandler}
          click={this.keyRequestHandler}
        />
        <Encrypt
          result={this.state.encrypt.result}
          change={this.encryptChangeHandler}
          click={this.encryptRequestHandler}
        />
        <Decrypt
          result={this.state.decrypt.result}
          change={this.decryptChangeHandler}
          click={this.decryptRequestHandler}
        />
      </Container>
    );
  }
}

export default Criptography;
