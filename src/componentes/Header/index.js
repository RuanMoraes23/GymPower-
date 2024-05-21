import React from "react";
import styled from "styled-components";
import logoimg from "../../imagens/GYMPOWERLOGO.png";
import { NavLink } from "react-router-dom";

const StyledNavLink = styled(NavLink)`
  color: #ffffff;
  text-decoration: none;
  &:focus, &:visited, &:link, &:active {
    text-decoration: none;
  }
  &:hover {
    color: #2ecc71; /* Cor ao passar o mouse */
  }
`;

const HeaderContainer = styled.header`
  background-color: #2c3e50;
  padding: 10px 0;

  @media (max-width: 768px) {
    padding: 5px 0;
  }
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Logo = styled.img`
  width: 100px;

  @media (max-width: 768px) {
    width: 80px;
  }

  @media (max-width: 480px) {
    width: 60px;
  }
`;

const LogoText = styled.span`
  color: #ffffff;
  font-size: 1.5rem;
  margin-left: 10px;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
    margin-left: 5px;
  }
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const NavLinks = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
  }
`;

const NavLinkItem = styled.li`
  margin-right: 20px;
  position: relative;

  &:hover ul {
    display: block;
  }

  @media (max-width: 768px) {
    margin-right: 0;
    width: 100%;
    text-align: center;
  }
`;

const SubMenu = styled.ul`
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  background-color: #2c3e50;
  list-style: none;
  padding: 10px;
  margin: 0;
  border-radius: 5px;

  @media (max-width: 768px) {
    position: static;
    width: 100%;
  }
`;

const SubMenuItem = styled.li`
  margin: 0;
  &:hover {
    background-color: #34495e;
  }

  @media (max-width: 768px) {
    padding: 10px 0;
  }
`;

const Btn = styled.a`
  background-color: #27ae60;
  color: #ffffff;
  padding: 7px 14px;
  text-decoration: none;
  border-radius: 5px;
  margin-right: 15px;
  &:hover {
    background-color: #2ecc71; /* Cor ao passar o mouse */
  }

  @media (max-width: 768px) {
    margin-right: 0;
    width: 100%;
    text-align: center;
    padding: 10px;
  }
`;

const Header = () => (
  <HeaderContainer>
    <div className="container">
      <Nav>
        <LogoContainer>
          <Logo src={logoimg} alt="GymPower+" />
          <LogoText>GymPower+</LogoText>
        </LogoContainer>
        <NavLinks>
          <NavLinkItem>
            <StyledNavLink to="/home">Início</StyledNavLink>
          </NavLinkItem>
          <NavLinkItem>
            <StyledNavLink to="#">Cadastrar</StyledNavLink>
            <SubMenu>
              <SubMenuItem>
                <StyledNavLink to="/exercicios">Exercícios</StyledNavLink>
              </SubMenuItem>
              <SubMenuItem>
                <StyledNavLink to="/treinos">Treinos</StyledNavLink>
              </SubMenuItem>
              <SubMenuItem>
                <StyledNavLink to="/cronogramas">Cronograma</StyledNavLink>
              </SubMenuItem>
            </SubMenu>
          </NavLinkItem>
          <NavLinkItem>
            <StyledNavLink to="/meu-cronograma">Meu Cronograma</StyledNavLink>
          </NavLinkItem>
          <NavLinkItem>
            <StyledNavLink to="#sobre">Sobre</StyledNavLink>
          </NavLinkItem>
          <NavLinkItem>
            <StyledNavLink to="#contato">Contato</StyledNavLink>
          </NavLinkItem>
        </NavLinks>
        <Btn href="#login">Login/Registro</Btn>
      </Nav>
    </div>
  </HeaderContainer>
);

export default Header;
