import { ChangeEvent, Component } from "react";
import * as uuid from "uuid";
import { Container } from "./styles";

import Key from "../../components/Key/Key";
import Encrypt from "../../components/Encrypt/Encrypt";
import Decrypt from "../../components/Decrypt/Decrypt";

import createKeyService from "../../services/createKey";
import encryptService from "../../services/encrypt";
import decryptService from "../../services/decrypt";

class Criptography extends Component {
  state = {
    keys: [{ id: "Select a key", expiration: "-" }],
    encrypt: {
      text: "Text to encrypt",
      cypher: "Cypher created...",
    },
    decrypt: {
      cypher: "Cypher to decrypt",
      text: "Open text...",
    },
    session: uuid.v4(),
    currentKey: "",
  };

  keyChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    this.setState({ currentKey: e.target.value });
  };

  keyRequestHandler = async () => {
    try {
      const key = await createKeyService(this.state.session);
      const keys = [...this.state.keys];
      this.setState({ keys: [...keys, key] });
    } catch (error) {
      alert(error);
    }
  };

  encryptChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    this.setState({
      encrypt: {
        text: e.target.value,
        cypher: this.state.encrypt.cypher,
      },
    });
  };

  encryptRequestHandler = async () => {
    try {
      const result = await encryptService(
        this.state.currentKey,
        this.state.encrypt.text
      );
      this.setState({
        encrypt: {
          text: this.state.encrypt.text,
          cypher: result?.cypher,
        },
      });
    } catch (error) {
      alert(error.message);
    }
  };

  decryptChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    this.setState({
      decrypt: {
        text: this.state.decrypt.text,
        cypher: e.target.value,
      },
    });
  };

  decryptRequestHandler = async () => {
    try {
      const result = await decryptService(
        this.state.currentKey,
        this.state.decrypt.cypher
      );
      this.setState({
        decrypt: {
          text: result?.text,
          cypher: this.state.decrypt.cypher,
        },
      });
    } catch (error) {
      alert(error.message);
    }
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
          result={this.state.encrypt.cypher}
          change={this.encryptChangeHandler}
          click={this.encryptRequestHandler}
        />
        <Decrypt
          result={this.state.decrypt.text}
          change={this.decryptChangeHandler}
          click={this.decryptRequestHandler}
        />
      </Container>
    );
  }
}

export default Criptography;
