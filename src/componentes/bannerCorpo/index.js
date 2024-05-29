import React from "react";
import styled from "styled-components";
import BannerImage from '../../imagens/banner-image.jpg';

const BannerContainer = styled.section`
  background-image: url(${BannerImage});
  background-size: cover;
  background-position: center;
  text-align: center;
  color: #FFFFFF;
  padding: 100px 0;

  @media (max-width: 768px) {
    padding: 50px 0;
  }

  @media (max-width: 480px) {
    padding: 30px 0;
  }
`;

const BannerTitle = styled.h2`
  font-size: 3em;
  margin-bottom: 20px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5); /* Adiciona contorno ao texto */

  @media (max-width: 768px) {
    font-size: 2.5em;
  }

  @media (max-width: 480px) {
    font-size: 2em;
  }
`;

const BannerSubtitle = styled.p`
  font-size: 1.5em;
  margin-bottom: 30px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5); /* Adiciona contorno ao texto */

  @media (max-width: 768px) {
    font-size: 1.2em;
  }

  @media (max-width: 480px) {
    font-size: 1em;
  }
`;

const BannerButton = styled.a`
  background-color: #27AE60;
  color: #FFFFFF;
  padding: 15px 30px;
  text-decoration: none;
  border-radius: 5px;
  font-size: 1.2em;

  @media (max-width: 768px) {
    padding: 12px 25px;
    font-size: 1em;
  }

  @media (max-width: 480px) {
    padding: 10px 20px;
    font-size: 0.9em;
  }
`;

const Banner = () => (
  <BannerContainer>
    <div className="container">
      <BannerTitle>Transforme Seu Treino com GymPower+</BannerTitle>
      <BannerSubtitle>Controle sua rotina de exercícios e dieta de forma simples e eficaz</BannerSubtitle>
      <BannerButton href="/cadastrar">Comece Agora</BannerButton>
    </div>
  </BannerContainer>
);

export default Banner;
