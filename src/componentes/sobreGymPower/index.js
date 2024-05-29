import React from "react";
import styled from "styled-components";
import ImgPessoa from '../../imagens/Pessoa-treinando.jpg';

const ContainerBody = styled.div`
  background-color: #ECF0F1; /* Fundo cinza claro */
  padding: 50px 20px; /* Espaçamento interno */
  text-align: center; /* Centraliza o texto */
`;

const Titulo = styled.h2`
  color: #2C3E50; /* Azul escuro */
  font-size: 2.5em; /* Tamanho da fonte */
  margin-bottom: 20px; /* Espaço abaixo do título */
`;

const Texto = styled.p`
  color: #2C3E50; /* Azul escuro */
  font-size: 1.2em; /* Tamanho da fonte */
  max-width: 800px; /* Largura máxima do texto */
  margin: 0 auto 30px auto; /* Centraliza o texto e adiciona espaçamento inferior */
  line-height: 1.6; /* Altura da linha */
`;

const ImagemPessoa = styled.img`
  max-width: 100%; /* Largura máxima de 100% do contêiner pai */
  height: auto; /* Ajusta a altura automaticamente */
  margin-top: 30px; /* Espaçamento superior */
`;

const SobreGymPower = () => (
  <ContainerBody>
    <Titulo>O que é GymPower+?</Titulo>
    <Texto>
      GymPower+ é sua plataforma completa para organizar treinos, dietas e acompanhar seu progresso. Nosso objetivo é ajudar você a atingir seus objetivos fitness com ferramentas fáceis de usar e motivação constante.
    </Texto>
    <ImagemPessoa src={ImgPessoa} alt="Pessoa treinando" />
  </ContainerBody>
);

export default SobreGymPower;
