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

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #ECF0F1;
`;

function App() {
  return (
    <Router>
      <AppContainer>
        <Header />
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<><Banner /><SobreGymPower /></>} />
          <Route path="/exercicios" element={<Exercicios />} />
          <Route path="/treinos" element={<Treinos />} />
          <Route path="/cronogramas" element={<Cronogramas />} />
          <Route path="/meu-cronograma" element={<ProtocolosTreino />} />
        </Routes>
        <Footer />
      </AppContainer>
    </Router>
  );
}

export default App;
