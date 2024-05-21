import styled from "styled-components";
import React, { useState, useEffect } from 'react';
import { FaTimes, FaEdit } from 'react-icons/fa';
import axios from 'axios';

const ExcluirButton = styled.button`
  background-color: transparent;
  color: #FF5733;
  padding: 5px;
  font-size: 1em;
  display: flex;
  border: none;
  cursor: pointer;
  transition: color 0.3s ease;
  &:hover {
    color: #FF0000;
  }
`;

const ModificarButton = styled.button`
  background-color: transparent;
  color: #FFA500;
  padding: 5px;
  display: flex;
  font-size: 1em;
  border: none;
  cursor: pointer;
  transition: color 0.3s ease;
  &:hover {
    color: #FF8C00;
  }
`;

const ExerciciosContainer = styled.section`
  background-color: #ECF0F1;
  padding: 50px 20px;
  text-align: center;

  @media (max-width: 768px) {
    padding: 30px 10px;
  }
`;

const ExerciciosTitle = styled.h2`
  color: #2C3E50;
  font-size: 2.5em;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 2em;
  }

  @media (max-width: 480px) {
    font-size: 1.5em;
  }
`;

const ExerciciosForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 30%;
  margin: 0 auto 20px auto;
  padding: 20px;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    width: 50%;
  }

  @media (max-width: 480px) {
    width: 70%;
  }
`;

const ExerciciosLabel = styled.label`
  color: #2C3E50;
  font-weight: bold;
`;

const ExerciciosInput = styled.input`
  padding: 10px;
  font-size: 1em;
  border: 1px solid #ccc;
  border-radius: 3px;
  outline: none;
`;

const ExerciciosButton = styled.button`
  background-color: #27AE60;
  color: #fff;
  padding: 10px 20px;
  font-size: 1em;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #1B9D57;
  }

  @media (max-width: 480px) {
    padding: 10px;
    font-size: 0.9em;
  }
`;

const ExerciciosListContainer = styled.div`
  width: 30%;
  margin: 0 auto;
  padding: 20px;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  min-height: 200px;
  overflow-y: auto;

  @media (max-width: 768px) {
    width: 50%;
  }

  @media (max-width: 480px) {
    width: 70%;
  }
`;

const PesquisaInput = styled.input`
  width: 85%;
  padding: 10px;
  font-size: 1em;
  border: 1px solid #ccc;
  border-radius: 3px;
  margin-bottom: 20px;
  outline: none;

  @media (max-width: 480px) {
    width: 100%;
  }
`;

const ExerciciosList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const ExercicioItem = styled.li`
  background-color: #fff;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  color: #2C3E50;
  font-size: 1em;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const Mensagens = styled.p`
  color: #27AE60;
`;

const BotaoWrapper = styled.div`
  position: absolute;
  right: 0;
  display: flex;
  gap: 10px;

  @media (max-width: 480px) {
    position: static;
    margin-top: 10px;
    width: 100%;
    justify-content: flex-end;
  }
`;

const EditField = styled.div`
  display: flex;
  align-items: center;
  margin-left: 9px;
`;

const Input = styled.input`
  padding: 5px;
  font-size: 1em;
  border: 1px solid #ccc;
  border-radius: 3px;
  margin-right: 5px;
  outline: none;
  width: 50%;
`;

const Button = styled.button`
  background-color: #27AE60;
  color: #fff;
  padding: 5px 10px;
  font-size: 1em;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #1B9D57;
  }
`;

const Exercicios = () => {
  const [exercicioNovo, setExercicioNovo] = useState('');
  const [listaExerciciosPesquisa, setListaExerciciosPesquisa] = useState([]);
  const [mensagem, setMensagem] = useState('');
  const [editandoExercicioId, setEditandoExercicioId] = useState(null);
  const [nomeEditando, setNomeEditando] = useState('');

  const ExcluirComponent = ({ onClick }) => (
    <ExcluirButton onClick={onClick}>
      <FaTimes />
    </ExcluirButton>
  );

  const handleExcluirExercicio = async (exercicioId) => {
    try {
      await axios.delete(`https://api-treinos-2.onrender.com/exercicios/${exercicioId}`);
      const listaAtualizada = await axios.get('https://api-treinos-2.onrender.com/exercicios');
      setListaExerciciosPesquisa(listaAtualizada.data.exercicios);
      setMensagem('Exercício deletado com sucesso!');
    } catch (error) {
      console.log(error);
    }
  }

  const handleCadastrarExercicio = async (e) => {
    e.preventDefault()
    if (exercicioNovo) {
      try {
        const response = await axios.post('https://api-treinos-2.onrender.com/exercicios', {
          nome: exercicioNovo
        });
        setMensagem('Exercício cadastrado com sucesso!');
        setExercicioNovo('');
        const listaAtualizada = await axios.get('https://api-treinos-2.onrender.com/exercicios');
        setListaExerciciosPesquisa(listaAtualizada.data.exercicios);
      } catch (error) {
        console.log(error);
      }
    }
  }

  const handleListaExercicios = async (e) => {
    const pesquisaExercicios = e.target.value;
    try {
      const response = await axios.get('https://api-treinos-2.onrender.com/exercicios');
      if (Array.isArray(response.data.exercicios)) {
        const listaFiltrada = response.data.exercicios.filter((exercicio) => exercicio.nome.includes(pesquisaExercicios));
        setListaExerciciosPesquisa(listaFiltrada);
      }
    } catch (error) {
      console.log(error);
    }
  }

  const handleModificarExercicio = async (exercicioId) => {
    try {
      const response = await axios.put(`https://api-treinos-2.onrender.com/exercicios/${exercicioId}`, {
        nome: nomeEditando
      });
      const listaAtualizada = await axios.get('https://api-treinos-2.onrender.com/exercicios');
      setListaExerciciosPesquisa(listaAtualizada.data.exercicios);
      setEditandoExercicioId(null);
      setMensagem('Exercício modificado com sucesso!');
    } catch (error) {
      console.log(error);
    }
  }

  const ModificarComponent = ({ onClick }) => (
    <ModificarButton onClick={onClick}>
      <FaEdit />
    </ModificarButton>
  );

  useEffect(() => {
    const fetchExercicios = async () => {
      try {
        const response = await axios.get('https://api-treinos-2.onrender.com/exercicios');
        setListaExerciciosPesquisa(response.data.exercicios);
      } catch (error) {
        console.log(error);
      }
    }
    fetchExercicios();
  }, []);

  return (
    <ExerciciosContainer>
      <ExerciciosTitle>Cadastro de Exercícios</ExerciciosTitle>
      <ExerciciosForm onSubmit={handleCadastrarExercicio}>
        <ExerciciosLabel htmlFor="exercicio">Nome do exercício:</ExerciciosLabel>
        <ExerciciosInput type="text" id="exercicio" value={exercicioNovo} onChange={(e) => setExercicioNovo(e.target.value)} />
        <ExerciciosButton type="submit">Cadastrar Exercício</ExerciciosButton>
      </ExerciciosForm>
      {mensagem && <Mensagens>{mensagem}</Mensagens>}
      <PesquisaInput type="text" placeholder="Pesquisar exercício" onChange={handleListaExercicios} />
      <ExerciciosListContainer>
        <ExerciciosList>
          {listaExerciciosPesquisa.length > 0 ? (
            listaExerciciosPesquisa.map((exercicio) => (
              <ExercicioItem key={exercicio._id}>
                {editandoExercicioId === exercicio._id ? (
                  <EditField>
                    <Input type="text" value={nomeEditando} onChange={(e) => setNomeEditando(e.target.value)} />
                    <Button onClick={() => handleModificarExercicio(exercicio._id)}>Salvar</Button>
                  </EditField>
                ) : (
                  <>
                    {exercicio.nome}
                    <BotaoWrapper>
                      <ModificarComponent onClick={() => { setEditandoExercicioId(exercicio._id); setNomeEditando(exercicio.nome); }} />
                      <ExcluirComponent onClick={() => handleExcluirExercicio(exercicio._id)} />
                    </BotaoWrapper>
                  </>
                )}
              </ExercicioItem>
            ))
          ) : (
            <Mensagens>Nenhum exercício encontrado.</Mensagens>
          )}
        </ExerciciosList>
      </ExerciciosListContainer>
    </ExerciciosContainer>
  );
}

export default Exercicios;
