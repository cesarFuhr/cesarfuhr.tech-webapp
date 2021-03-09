import { ChangeEventHandler, FunctionComponent } from "react";
import { Selector, Container } from "./styles";

interface key {
  id: string;
}

interface KeyProps {
  keys: key[];
  click: () => void;
  change: ChangeEventHandler;
}

const Key: FunctionComponent<KeyProps> = (props: KeyProps) => {
  return (
    <Container>
      <h3>Select a key</h3>
      <Selector onChange={props.change}>
        {props.keys.map((k) => (
          <option key={k.id} value={k.id}>
            Key {k.id}
          </option>
        ))}
      </Selector>
      <h3>or create a new key:</h3>
      <button onClick={props.click}>Create Key</button>
    </Container>
  );
};

export default Key;
