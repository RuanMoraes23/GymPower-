import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import BannerImage from '../../imagens/banner-image.jpg';

const CadastroContainer = styled.section`
  background-image: url(${BannerImage});
  background-size: cover;
  background-position: center;
  text-align: center;
  color: #ffffff;
  padding: 100px 0;

  @media (max-width: 768px) {
    padding: 50px 0;
  }

  @media (max-width: 480px) {
    padding: 30px 0;
  }
`;

const FormContainer = styled.div`
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 10px;
  padding: 30px;
  max-width: 600px;
  margin: 0 auto;
`;

const FormTitle = styled.h2`
  color: #2c3e50;
  margin-bottom: 20px;
`;

const FormLabel = styled.label`
  display: block;
  margin-bottom: 10px;
  color: #2c3e50;
`;

const FormInput = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  border-radius: 5px;
  border: 1px solid #ccc;
  box-sizing: border-box;
`;

const FormButton = styled.button`
  background-color: #27ae60;
  color: #ffffff;
  padding: 15px 30px;
  border: none;
  border-radius: 5px;
  font-size: 1em;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #1b9d57;
  }
`;

const CadastroUsuario = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');
  const [mensagem, setMensagem] = useState('');

  const handleCadastro = async (e) => {
    e.preventDefault();
    if (senha !== confirmarSenha) {
      setMensagem('As senhas não coincidem');
      return;
    }

    try {
      const response = await axios.post('https://api-treinos-2.onrender.com/usuarios/registrar', { nome, email, senha });
      setMensagem(response.data.message);
    } catch (error) {
      console.error('Erro ao cadastrar usuário:', error);
      setMensagem('Erro ao cadastrar usuário');
    }
  };

  return (
    <CadastroContainer>
      <FormContainer>
        <FormTitle>Cadastro de Usuário</FormTitle>
        <form onSubmit={handleCadastro}>
          <FormLabel htmlFor="nome">Nome:</FormLabel>
          <FormInput type="text" id="nome" value={nome} onChange={(e) => setNome(e.target.value)} required />

          <FormLabel htmlFor="email">Email:</FormLabel>
          <FormInput type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />

          <FormLabel htmlFor="senha">Senha:</FormLabel>
          <FormInput type="password" id="senha" value={senha} onChange={(e) => setSenha(e.target.value)} required />

          <FormLabel htmlFor="confirmarSenha">Confirmar Senha:</FormLabel>
          <FormInput type="password" id="confirmarSenha" value={confirmarSenha} onChange={(e) => setConfirmarSenha(e.target.value)} required />

          <FormButton type="submit">Cadastrar</FormButton>
        </form>
        {mensagem && <p>{mensagem}</p>}
      </FormContainer>
    </CadastroContainer>
  );
};

export default CadastroUsuario;
