import React from "react";
import styled from "styled-components";

const FooterContainer = styled.footer`
  background-color: #2C3E50;
  color: #FFFFFF;
  padding: 20px 0;
  text-align: center;
`;

const FooterLinks = styled.div`
  margin-bottom: 10px;
`;

const FooterLink = styled.a`
  color: #FFFFFF;
  text-decoration: none;
  margin: 0 10px;
`;

const FooterInfo = styled.div`
  margin-bottom: 10px;
`;

const FooterSocial = styled.div`
  margin-bottom: 10px;
`;

const FooterContact = styled.div`
  margin-top: 10px;
`;

const Footer = () => (
  <FooterContainer>
    <div className="container">
      <FooterLinks>
        <FooterLink href="#home">Home</FooterLink>
        <FooterLink href="#treinos">Treinos</FooterLink>
        <FooterLink href="#dieta">Dieta</FooterLink>
        <FooterLink href="#progresso">Progresso</FooterLink>
        <FooterLink href="#sobre">Sobre</FooterLink>
        <FooterLink href="#contato">Contato</FooterLink>
      </FooterLinks>
      <FooterInfo>
        <FooterLink href="#privacidade">Política de Privacidade</FooterLink> | 
        <FooterLink href="#termos">Termos de Serviço</FooterLink>
      </FooterInfo>
      <FooterSocial>
        <FooterLink href="#facebook">Facebook</FooterLink>
        <FooterLink href="#instagram">Instagram</FooterLink>
        <FooterLink href="#twitter">Twitter</FooterLink>
      </FooterSocial>
      <FooterContact>
        <p>Contato: email@example.com | (11) 1234-5678</p>
      </FooterContact>
    </div>
  </FooterContainer>
);

export default Footer;
