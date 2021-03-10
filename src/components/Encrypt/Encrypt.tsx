import { ChangeEventHandler, FunctionComponent } from "react";

import { Container, Result } from "./style";

interface EncryptProps {
  result: string;
  change: ChangeEventHandler;
  click: () => void;
}

const Encrypt: FunctionComponent<EncryptProps> = (props: EncryptProps) => {
  return (
    <Container>
      <h3>Encrypt</h3>
      <textarea
        placeholder="Put here the text to encrypt..."
        style={{ width: "90%", resize: "none", height: "10rem" }}
        onChange={props.change}
      />
      <button style={{ width: "90%" }} onClick={props.click}>
        Encrypt!!
      </button>
      <Result>{props.result}</Result>
    </Container>
  );
};

export default Encrypt;
