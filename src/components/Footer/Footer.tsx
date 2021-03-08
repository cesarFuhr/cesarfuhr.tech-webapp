import { Container } from "./styles";

interface FooterProps {
  creatorName: string;
}

const Footer = (props: FooterProps) => {
  return (
    <Container>
      <p style={{ textAlign: "center" }}>created by {props.creatorName}</p>
    </Container>
  );
};

export default Footer;
