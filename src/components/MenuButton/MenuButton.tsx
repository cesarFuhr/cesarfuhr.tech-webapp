import { Button } from "./styles";

interface MenuButtonProps {
  text: string;
}

const MenuButton = (props: MenuButtonProps) => {
  return <Button>{props.text}</Button>;
};

export default MenuButton;
