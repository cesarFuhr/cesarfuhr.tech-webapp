import { Container } from "./styles";
import MenuButton from "../../components/MenuButton/MenuButton";

interface entry {
  id: string;
  name: string;
}

interface MenuProps {
  entries: entry[];
  click: (id: string) => () => void;
}

const Menu = (props: MenuProps) => {
  return (
    <Container>
      {props.entries.map((e) => (
        <MenuButton key={e.id} text={e.name} click={props.click(e.id)} />
      ))}
    </Container>
  );
};

export default Menu;
