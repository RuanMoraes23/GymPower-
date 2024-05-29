import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../componentes/autenticacao/AuthContext';
import BannerImage from '../imagens/banner-image.jpg';

const LoginContainer = styled.div`
  background-image: url(${BannerImage});
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const LoginForm = styled.form`
  width: 300px;
  padding: 20px;
  background-color: #f1f1f1;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const LoginTitle = styled.h2`
  margin-bottom: 20px;
`;

const LoginInput = styled.input`
  width: 90%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 3px;
  outline: none;
`;

const LoginButton = styled.button`
  width: 95%;
  padding: 10px;
  background-color: #27ae60;
  color: #fff;
  border: none;
  border-radius: 3px;
  cursor: pointer;
`;

const ErrorMessage = styled.p`
  color: #ff5733;
  margin-top: 10px;
`;

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const { login } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('https://api-treinos-2.onrender.com/usuarios/login', {
                email: email,
                senha: password
            });
            const { token, user } = response.data;

            localStorage.setItem('token', token);
            login(user);

            navigate('/home');
            window.location.reload();
        } catch (error) {
            setError('Email ou senha incorretos.');
        }
    };

    return (
        <LoginContainer>
            <LoginForm onSubmit={handleLogin}>
                <LoginTitle>Login</LoginTitle>
                <LoginInput
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <LoginInput
                    type="password"
                    placeholder="Senha"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <LoginButton type="submit">Login</LoginButton>
                {error && <ErrorMessage>{error}</ErrorMessage>}
            </LoginForm>
        </LoginContainer>
    );
};

export default Login;
