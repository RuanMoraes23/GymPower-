import React from "react";
import { useNavigate } from 'react-router-dom';
import styled from "styled-components";
import { FaDumbbell, FaClipboardList, FaCalendarAlt, FaWeight } from "react-icons/fa";
import { AuthContext } from "../autenticacao/AuthContext";

const Container = styled.div`
  padding: 50px 20px;
  background-color: #ECF0F1;
  text-align: center;
  max-width: 1500px; /* Define a largura máxima */
  margin: 0 auto; /* Centraliza o conteúdo horizontalmente */
`;

const Titulo = styled.h2`
  color: #2C3E50;
  font-size: 2.5em;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 2em;
  }

  @media (max-width: 480px) {
    font-size: 1.8em;
  }
`;

const Texto = styled.p`
  color: #2C3E50;
  font-size: 1.2em;
  max-width: 800px;
  margin: 0 auto 30px auto;
  line-height: 1.6;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 1.1em;
  }

  @media (max-width: 480px) {
    font-size: 1em;
  }
`;

const Bloco = styled.div`
  background-color: #FFFFFF;
  padding: 30px;
  margin: 20px auto; /* Centraliza cada bloco */
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  max-width: 800px; /* Define a largura máxima */

  @media (max-width: 768px) {
    padding: 20px;
  }

  @media (max-width: 480px) {
    padding: 15px;
  }
`;

const Subtitulo = styled.h3`
  color: #34495E;
  font-size: 2em;
  margin-bottom: 15px;

  @media (max-width: 768px) {
    font-size: 1.8em;
  }

  @media (max-width: 480px) {
    font-size: 1.5em;
  }
`;

const IconContainer = styled.div`
  color: #27AE60;
  font-size: 3em;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 2.5em;
  }

  @media (max-width: 480px) {
    font-size: 2em;
  }
`;

const StepText = styled.div`
  max-width: 600px;
  text-align: center;
  margin: 0 auto 20px auto;

  @media (max-width: 768px) {
    font-size: 1em;
  }

  @media (max-width: 480px) {
    font-size: 0.9em;
  }
`;

const Button = styled.button`
  background-color: #27AE60;
  color: #FFFFFF;
  padding: 10px 20px;
  text-decoration: none;
  border: none;
  border-radius: 5px;
  font-size: 1em;
  cursor: pointer;

  &:hover {
    background-color: #1E8449;
  }

  @media (max-width: 768px) {
    padding: 8px 16px;
  }

  @media (max-width: 480px) {
    padding: 6px 12px;
  }
`;

const Etapa = ({ icon, title, text, link }) => {
  const navigate = useNavigate();
  const { user } = React.useContext(AuthContext);

  const handleClick = () => {
    if (user) {
      navigate(link);
    } else {
      navigate('/login');
    }
  };

  return (
    <Bloco>
      <IconContainer>{icon}</IconContainer>
      <Subtitulo>{title}</Subtitulo>
      <StepText>{text}</StepText>
      <Button onClick={handleClick}>Ir para {title}</Button>
    </Bloco>
  );
};

const Home = () => (
  <Container>
    <Titulo>Bem-vindo ao GymPower+</Titulo>
    <Texto>Descubra como usar nossa plataforma para maximizar seus treinos e alcançar seus objetivos fitness.</Texto>

    <Etapa
      icon={<FaDumbbell />}
      title="Cadastro de Exercícios"
      text="Comece registrando todos os exercícios que você realiza."
      link="/exercicios"
    />

    <Etapa
      icon={<FaClipboardList />}
      title="Montagem de Treinos"
      text="Com os exercícios cadastrados, você pode montar seus treinos personalizados. Combine diferentes exercícios para criar rotinas que atendam às suas necessidades."
      link="/treinos"
    />

    <Etapa
      icon={<FaCalendarAlt />}
      title="Criação de Cronogramas"
      text="Crie cronogramas semanais. Isso ajuda a manter a consistência e a alcançar melhores resultados."
      link="/cronogramas"
    />

    <Etapa
      icon={<FaWeight />}
      title="Controle de Peso"
      text="No cronograma, registre os pesos utilizados em cada exercício. Acompanhe seu progresso e compare os pesos registrados ao longo do tempo."
      link="/meu-cronograma"
    />
  </Container>
);

export default Home;

