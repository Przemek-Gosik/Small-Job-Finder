import React from "react";
import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
} from "./FooterStyles";
  
const Footer = () => {
  return (
    <Box>
      <h1 style={{ color: "white", 
                   textAlign: "center", 
                   marginTop: "-50px" }}>
        Informacje o autorze
      </h1>
      <Container>
        <Row>
          <Column>
            <Heading>O mnie</Heading>
            <FooterLink href="#">Przemysław Gosik</FooterLink>
            <FooterLink href="#">Grupa I.O 6.2</FooterLink>
            <FooterLink href="#">Szkielety programistyczne</FooterLink>
          </Column>
          <Column>
            <Heading>Serwis</Heading>
            <FooterLink href="https://github.com/Przemek-Gosik">Github</FooterLink>
            <FooterLink href="https://www.facebook.com/prememek/">Facebook</FooterLink>
          </Column>
          <Column>
            <Heading>Kontakt</Heading>
            <FooterLink href="#">Email: pregosik322@gmail.com</FooterLink>
            <FooterLink href="#">Tel: 502182206</FooterLink>
            <FooterLink href="#">Politechnika Lubelska</FooterLink>
            
          </Column>
         
        </Row>
      </Container>
    </Box>
  );
};
export default Footer;