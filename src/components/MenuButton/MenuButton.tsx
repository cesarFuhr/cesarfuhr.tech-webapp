import { Button } from "./styles";

interface MenuButtonProps {
  text: string;
  click: () => void;
}

const MenuButton = (props: MenuButtonProps) => {
  return <Button onClick={props.click}>{props.text}</Button>;
};

export default MenuButton;
