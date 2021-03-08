import { Container } from "./styles";
import MenuButton from "../../components/MenuButton/MenuButton";

interface entry {
  id: string;
  name: string;
}

interface MenuProps {
  entries: entry[];
}

const Menu = (props: MenuProps) => {
  return (
    <Container>
      {props.entries.map((e) => (
        <MenuButton text={e.name} />
      ))}
    </Container>
  );
};

export default Menu;
