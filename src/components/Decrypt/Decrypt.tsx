import { ChangeEventHandler, FunctionComponent } from "react";

import { Container, Result } from "./style";

interface DecryptProps {
  result: string;
  change: ChangeEventHandler;
  click: () => void;
}

const Decrypt: FunctionComponent<DecryptProps> = (props: DecryptProps) => {
  return (
    <Container>
      <h3>Decrypt</h3>
      <textarea
        placeholder="Put here the cypher to decrypt..."
        style={{ width: "90%", resize: "none", height: "10rem" }}
        onChange={props.change}
      />
      <button style={{ width: "90%" }} onClick={props.click}>
        Decrypt!!
      </button>
      <Result>{props.result}</Result>
    </Container>
  );
};

export default Decrypt;
