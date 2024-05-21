import styled from 'styled-components';

export const TreinosContainer = styled.section`
  background-color: #ECF0F1;
  padding: 50px 20px;
  text-align: center;
`;

export const TreinosTitle = styled.h2`
  color: #2C3E50;
  font-size: 2.5em;
  margin-bottom: 20px;
`;

export const TreinosForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 80%;
  margin: 0 auto 20px auto;
  padding: 20px;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const TreinosLabel = styled.label`
  color: #2C3E50;
  font-weight: bold;
  margin-bottom: 5px;
`;

export const TreinosInput = styled.input`
  padding: 10px;
  font-size: 1em;
  border: 1px solid #ccc;
  border-radius: 3px;
  outline: none;
  width: 100%;
  margin-bottom: 10px;
`;

export const TreinosTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;
`;

export const TreinosTableHeader = styled.thead`
  background-color: #2C3E50;
  color: #fff;
`;

export const TreinosTableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f2f2f2;
  }
`;

export const TreinosTableHeaderCell = styled.th`
  padding: 10px;
  text-align: left;
`;

export const TreinosTableCell = styled.td`
  padding: 10px;
`;

export const TreinosButton = styled.button`
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
`;

export const IconButton = styled.button`
  background-color: transparent;
  color: #3498DB;
  padding: 5px;
  font-size: 1.2em;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    color: #2980B9;
  }
`;

export const TreinosTableInput = styled.input`
  padding: 10px;
  font-size: 1em;
  border: 1px solid #ccc;
  border-radius: 3px;
  outline: none;
  width: 100%;
`;

export const TreinosSelect = styled.select`
  padding: 10px;
  font-size: 1em;
  border: 1px solid #ccc;
  border-radius: 3px;
  outline: none;
  width: 100%;
`;

export const TreinosOption = styled.option`
  padding: 10px;
  font-size: 1em;
`;

export const Mensagens = styled.p`
  color: #27AE60;
`;

export const TreinosCadastradosContainer = styled.div`
  margin-top: 40px;
`;

export const TreinosCadastradosTitle = styled.h2`
  color: #2C3E50;
  font-size: 2em;
  margin-bottom: 20px;
`;

export const TreinosCard = styled.div`
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 20px;
  width: calc(25% - 10px); /* Define o tamanho do card e margem para que haja 4 cards por linha */
  margin-right: 10px;
  display: inline-block;
  vertical-align: top; /* Alinha os cards no topo */
`;

export const TreinosCardBody = styled.div`
  padding: 10px;
`;

export const TreinosCardHeader = styled.div`
  background-color: #f2f2f2;
  padding: 10px;
  cursor: pointer;
`;

export const TreinosCardFooter = styled.div`
  background-color: #f2f2f2;
  padding: 10px;
  text-align: right;
`;

export const TreinosCardTitle = styled.h3`
  margin: 0;
`;

export const TreinosCardText = styled.div`
  margin-bottom: 5px;
`;

// Estilos para o botão de exclusão do treino
export const TreinosDeleteButton = styled(IconButton)`
  color: #e74c3c;
`;

// Estilos para a tabela dentro do card
export const TreinosCardTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 10px;
`;

export const TreinosCardTableHeader = styled.thead`
  background-color: #2C3E50;
  color: #fff;
`;

export const TreinosCardTableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f2f2f2;
  }
`;

export const TreinosCardTableHeaderCell = styled.th`
  padding: 10px;
  text-align: left;
`;

export const TreinosCardTableCell = styled.td`
  padding: 10px;
`;
