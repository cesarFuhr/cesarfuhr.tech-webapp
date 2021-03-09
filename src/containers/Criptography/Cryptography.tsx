import { ChangeEvent, Component } from "react";
import * as uuid from "uuid";
import { Container } from "./styles";

import Key from "../../components/Key/Key";
import Encrypt from "../../components/Encrypt/Encrypt";
import Decrypt from "../../components/Decrypt/Decrypt";

import createKeyService from "../../services/createKey";

class Criptography extends Component {
  state = {
    keys: [],
    encrypt: {
      result: "Encrypt result...",
    },
    decrypt: {
      result: "Decrypt result...",
    },
    session: uuid.v4(),
  };

  keyChangeHandler = (e: ChangeEvent) => {
    console.log(e);
  };

  keyRequestHandler = async () => {
    const key = await createKeyService(this.state.session);
    const keys = [...this.state.keys];
    this.setState({ keys: [...keys, key] });
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
