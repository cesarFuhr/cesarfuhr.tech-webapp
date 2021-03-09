import { Container } from "./styles";

interface FooterProps {
  creatorName: string;
}

const Footer = (props: FooterProps) => {
  return (
    <Container>
      <p style={{ textAlign: "center" }}>
        created by{" "}
        <a
          style={{ color: "#89A5C6" }}
          href="https://www.linkedin.com/in/c%C3%A9sar-car%C3%A1-36102a178/"
          target="blank"
        >
          {props.creatorName}
        </a>
      </p>
    </Container>
  );
};

export default Footer;
