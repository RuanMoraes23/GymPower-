import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import styled from 'styled-components';
import Exercicios from './componentes/Exercicios';
import Header from './componentes/Header';
import SobreGymPower from './componentes/sobreGymPower';
import Banner from './componentes/bannerCorpo';
import Footer from './componentes/footer';
import Treinos from './componentes/Treinos';
import Cronogramas from './componentes/Cronogramas';
import ProtocolosTreino from './componentes/ProtocolosTreinos';
import CadastroUsuario from './componentes/cadastro';
import Login from './login';
import { AuthProvider, AuthContext } from './componentes/autenticacao/AuthContext';
import Home from './componentes/home';

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #ECF0F1;
`;

function ProtectedRoute({ children }) {
  const { user } = React.useContext(AuthContext);

  if (!user) {
    return <Navigate to="/login" />;
  }

  return children;
}

function App() {
  return (
    <AuthProvider>
      <Router>
        <AppContainer>
          <Header />
          <Routes>
            <Route path="/" element={<><Banner /><SobreGymPower /></>} />
            <Route path="/home" element={<Home />} />
            <Route 
              path="/exercicios" 
              element={
                <ProtectedRoute>
                  <Exercicios />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/treinos" 
              element={
                <ProtectedRoute>
                  <Treinos />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/cronogramas" 
              element={
                <ProtectedRoute>
                  <Cronogramas />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/meu-cronograma" 
              element={
                <ProtectedRoute>
                  <ProtocolosTreino />
                </ProtectedRoute>
              } 
            />
            <Route path="/cadastrar" element={<CadastroUsuario />} />
            <Route path="/login" element={<Login />} />
          </Routes>
          <Footer />
        </AppContainer>
      </Router>
    </AuthProvider>
  );
}

export default App;
