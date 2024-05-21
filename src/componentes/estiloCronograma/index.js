import styled from 'styled-components';

export const ContainerCronograma = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #F8F9FA;
    padding: 40px 20px;
`;

export const FormCronograma = styled.form`
    background-color: #FFFFFF;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    padding: 20px;
    margin-bottom: 40px;
    width: 100%;
    max-width: 600px;
`;

export const Label = styled.label`
    display: block;
    color: #2C3E50;
    margin-bottom: 5px;
    margin-top: 10px;
`;

export const Input = styled.input`
    display: block;
    width: 100%;
    padding: 10px;
    margin-bottom: 15px;
    border: 1px solid #CCC;
    border-radius: 4px;
    box-sizing: border-box;
`;

export const Botao = styled.button`
    display: block;
    width: 100%;
    padding: 10px;
    background-color: #2980B9;
    color: #FFF;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 1em;
    margin-top: 20px;
    &:hover {
        background-color: #1F639B;
    }
`;

export const ContainerDetalhesCronograma = styled.section`
    background-color: #F8F9FA;
    width: 100%;
    max-width: 800px;
`;

export const TituloCronograma = styled.h2`
    color: #2C3E50;
    font-size: 2.5em;
    margin-bottom: 20px;
    text-align: center;
`;

export const CronogramaItem = styled.div`
    background-color: #FFFFFF;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    margin-bottom: 20px;
    padding: 20px;
    text-align: left;
`;

export const ExerciciosLista = styled.ul`
    list-style: none;
    padding: 0;
`;

export const TreinoCard = styled.div`
    background-color: #FFFFFF;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    margin-bottom: 20px;
    padding: 20px;
    text-align: left;
`;
export const H2Estilizado = styled.h2`
`

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    padding: 20px;
    background-color: #ecf0f1;
`;
export const Container2 = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    padding: 20px;
`;

export const ContainerSelect = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 300px;
    margin-bottom: 20px;
`;

export const Select = styled.select`
    width: 100%;
    padding: 10px;
    margin-bottom: 15px;
    border: 1px solid #CCC;
    border-radius: 4px;
    box-sizing: border-box;
    font-size: 1em;
`;

export const Option = styled.option``;

export const Botao2 = styled.button`
    padding: 10px 20px;
    margin: 5px;
    background-color: #27ae60;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    &:hover {
        background-color: #2ecc71;
    }
`;

export const Card = styled.div`
    background-color: white;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    width: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
`;

export const Navegacao = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-top: 20px;
`;

export const DiaSemana = styled.h4`
    color: #2980B9;
    margin-bottom: 10px;
`;

export const TreinoDetalhes = styled.div`
    border-left: 3px solid #2980B9;
    padding-left: 10px;
`;

export const TreinoNome = styled.h5`
    color: #2C3E50;
    margin-bottom: 10px;
`;

export const ExercicioItem = styled.li`
    background-color: #F1F1F1;
    border-radius: 5px;
    margin-bottom: 10px;
    padding: 10px;
`;

export const DetalhesExercicio = styled.p`
    margin: 5px 0;
    color: #2C3E50;
    strong {
        color: #2980B9;
    }
`;

export const Titulo = styled.h2`
    color: #2C3E50;
    font-size: 2em;
    margin-bottom: 20px;
    text-align: center;
    font-family: 'Arial', sans-serif;
`;

export const ExercicioDetalhesContainer = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
`;

export const Coluna = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 5px;
`;

export const SerieDetalhes = styled.span`
    color: #2C3E50;
    font-size: 0.9em;
`;

export const ColunaSeriesCargas = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px;
    margin-left: 20px;
    background-color: #FFF;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    overflow-y: auto;
    height: 91%;
    
`;

export const LinhaSerie = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 10px;
`;

export const InputSerie = styled.input`
    width: 120px;
    margin: 5px;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
`;

export const TabelaContainer = styled.div`
    margin-top: 20px;
    width: 100%;
`;

export const TabelaHead = styled.thead`
    background-color: #f4f4f4;
`;

export const TabelaBody = styled.tbody``;

export const Tabela = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin: 20px 0;
  font-size: 1em;
  min-width: 400px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
`;

export const Cabecalho = styled.thead`
  background-color: #009879;
  color: #ffffff;
  text-align: left;
`;

export const Linha = styled.tr`
  border-bottom: 1px solid #dddddd;

  &:nth-of-type(even) {
    background-color: #f3f3f3;
  }

  &:last-of-type {
    border-bottom: 2px solid #009879;
  }

  &:hover {
    background-color: #f1f1f1;
  }
`;

export const Celula = styled.td`
  padding: 12px 15px;
`;

export const CelulaCabecalho = styled.th`
  padding: 12px 15px;
`;
