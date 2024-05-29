import React from 'react';
import logo from '../../imagens/GYMPOWERLOGO.png';
import styled from 'styled-components';

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

const LogoLink = styled.a`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: inherit;
`;

const LogoImg = styled.img`
  margin-right: 10px;
  width: 10%;
`;

const LogoText = styled.p`
  margin: 0;
  font-size: 25px;
  color: white; /* Garantir que o texto seja branco */
`;

function Logo() {
  return (
    <LogoContainer>
      <LogoLink href="/">
        <LogoImg src={logo} alt="logo" />
        <LogoText><strong>Gym</strong>Power<strong>+</strong></LogoText>
      </LogoLink>
    </LogoContainer>
  );
}

export default Logo;
