import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import logoimg from "../../imagens/GYMPOWERLOGO.png";
import { NavLink } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import { AuthContext } from '../autenticacao/AuthContext';

const UsuarioLogado = styled.p`
  font-size: 1.5em;
  margin-bottom: 30px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5); /* Adiciona contorno ao texto */
  color: white;

  @media (max-width: 768px) {
    font-size: 1.2em;
  }

  @media (max-width: 480px) {
    font-size: 1em;
  }
`;

const StyledNavLink = styled(NavLink)`
  color: #ffffff;
  text-decoration: none;
  &:focus,
  &:visited,
  &:link,
  &:active {
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

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;

  @media (max-width: 768px) {
    padding: 0 10px;
  }
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

const LogoLink = styled(NavLink)`
  display: flex;
  align-items: center;
  text-decoration: none;
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
    display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
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
  margin-right: 10px; /* Ajusta a margem para 10px */
  &:hover {
    background-color: #2ecc71; /* Cor ao passar o mouse */
  }

  @media (max-width: 768px) {
    margin-right: 0;
    width: 20%;
    text-align: center;
    padding: 3px;
    margin-bottom: 10px; /* Adiciona espaço entre os botões no mobile */
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: left;

  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
  }
`;

const MenuIcon = styled.div`
  display: none;
  font-size: 2rem;
  cursor: pointer;
  color: #ffffff;

  @media (max-width: 768px) {
    display: block;
  }
`;

const LogoutButton = styled.button`
  background-color: #c0392b;
  color: #ffffff;
  padding: 7px 14px;
  text-decoration: none;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  margin-left: 10px;
  &:hover {
    background-color: #e74c3c; /* Cor ao passar o mouse */
  }

  @media (max-width: 768px) {
    width: 20%;
    text-align: center;
    padding: 10px;
    margin-right: 10px;
  }
`;

const Header = () => {
  const { user, logout } = useContext(AuthContext); // Assuming logout is available from AuthContext
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <HeaderContainer>
      <Container>
        <Nav>
          <LogoLink to="/">
            <LogoContainer>
              <Logo src={logoimg} alt="GymPower+" />
              <LogoText>GymPower+</LogoText>
            </LogoContainer>
          </LogoLink>
          <MenuIcon onClick={toggleMenu}>
            {isOpen ? <FaTimes /> : <FaBars />}
          </MenuIcon>
          <NavLinks isOpen={isOpen}>
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
          {user ? (
            <>
              <UsuarioLogado>Bem-vindo, {user.usuario.nome}</UsuarioLogado>
              <LogoutButton onClick={logout}>Logout</LogoutButton>
            </>
          ) : (
            <ButtonContainer>
              <Btn href="/cadastrar">Cadastrar</Btn>
              <Btn href="/login">Login</Btn>
            </ButtonContainer>
          )}
        </Nav>
      </Container>
    </HeaderContainer>
  );
};

export default Header;
