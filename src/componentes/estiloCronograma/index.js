import styled from 'styled-components';

export const ContainerCronograma = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #F8F9FA;
    padding: 40px 20px;

    @media (max-width: 768px) {
        padding: 20px 10px;
    }
`;

export const FormCronograma = styled.form`
    background-color: #FFFFFF;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    padding: 20px;
    margin-bottom: 40px;
    width: 100%;
    max-width: 600px;

    @media (max-width: 768px) {
        padding: 15px;
        margin-bottom: 30px;
    }
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

    @media (max-width: 768px) {
        padding: 8px;
        margin-bottom: 10px;
    }
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

    @media (max-width: 768px) {
        padding: 8px;
        font-size: 0.9em;
    }
`;

export const ContainerDetalhesCronograma = styled.section`
    background-color: #F8F9FA;
    width: 100%;
    max-width: 800px;

    @media (max-width: 768px) {
        padding: 20px;
    }
`;

export const TituloCronograma = styled.h2`
    color: #2C3E50;
    font-size: 2.5em;
    margin-bottom: 20px;
    text-align: center;

    @media (max-width: 768px) {
        font-size: 2em;
        margin-bottom: 15px;
    }
`;

export const CronogramaItem = styled.div`
    background-color: #FFFFFF;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    margin-bottom: 20px;
    padding: 20px;
    text-align: left;

    @media (max-width: 768px) {
        padding: 15px;
        margin-bottom: 15px;
    }
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

    @media (max-width: 768px) {
        padding: 15px;
        margin-bottom: 15px;
    }
`;

export const H2Estilizado = styled.h2``;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    padding: 20px;
    background-color: #ecf0f1;

    @media (max-width: 768px) {
        padding: 15px;
    }
`;

export const Container2 = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    padding: 20px;

    @media (max-width: 768px) {
        padding: 15px;
    }
`;

export const ContainerSelect = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 300px;
    margin-bottom: 20px;

    @media (max-width: 768px) {
        width: 100%;
        margin-bottom: 15px;
    }
`;

export const Select = styled.select`
    width: 100%;
    padding: 10px;
    margin-bottom: 15px;
    border: 1px solid #CCC;
    border-radius: 4px;
    box-sizing: border-box;
    font-size: 1em;

    @media (max-width: 768px) {
        padding: 8px;
        margin-bottom: 10px;
    }
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

    @media (max-width: 768px) {
        padding: 8px 15px;
        font-size: 0.9em;
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

    @media (max-width: 768px) {
        padding: 15px;
        width: 90%;
    }
`;

export const Navegacao = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-top: 20px;

    @media (max-width: 768px) {
        flex-direction: column;
        align-items: center;
    }
`;

export const DiaSemana = styled.h4`
    color: #2980B9;
    margin-bottom: 10px;

    @media (max-width: 768px) {
        margin-bottom: 5px;
    }
`;

export const TreinoDetalhes = styled.div`
    border-left: 3px solid #2980B9;
    padding-left: 10px;

    @media (max-width: 768px) {
        border-left: 0;
        padding-left: 0;
    }
`;

export const TreinoNome = styled.h5`
    color: #2C3E50;
    margin-bottom: 10px;

    @media (max-width: 768px) {
        margin-bottom: 5px;
    }
`;

export const ExercicioItem = styled.li`
    background-color: #F1F1F1;
    border-radius: 5px;
    margin-bottom: 10px;
    padding: 10px;

    @media (max-width: 768px) {
        padding: 8px;
        margin-bottom: 5px;
    }
`;

export const DetalhesExercicio = styled.p`
    margin: 5px 0;
    color: #2C3E50;

    strong {
        color: #2980B9;
    }

    @media (max-width: 768px) {
        margin: 3px 0;
        font-size: 0.9em;
    }
`;

export const Titulo = styled.h2`
    color: #2C3E50;
    font-size: 2em;
    margin-bottom: 20px;
    text-align: center;
    font-family: 'Arial', sans-serif;

    @media (max-width: 768px) {
        font-size: 1.5em;
        margin-bottom: 15px;
    }
`;

export const ExercicioDetalhesContainer = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;

    @media (max-width: 768px) {
        flex-direction: column;
        align-items: center;
    }
`;

export const Coluna = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 5px;

    @media (max-width: 768px) {
        padding: 3px;
        width: 100%;
    }
`;

export const SerieDetalhes = styled.span`
    color: #2C3E50;
    font-size: 0.9em;

    @media (max-width: 768px) {
        font-size: 0.8em;
    }
`;

export const ColunaSeriesCargas = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px;
    border-radius: 10px;
    width: 30%;
    justify-content: center;
    align-items: center;
    text-align: center;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

    @media (max-width: 768px) {
        width: 90%;
        padding: 15px;
    }
`;

export const Subtitulo = styled.h3`
    font-family: 'Arial', sans-serif;
    font-weight: normal;
    color: #2C3E50;
    margin-bottom: 20px;

    @media (max-width: 768px) {
        font-size: 1.2em;
        margin-bottom: 15px;
    }
`;

export const TreinoSeriesDetalhes = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (max-width: 768px) {
        width: 100%;
    }
`;

export const BotaoControlePeso = styled.button`
    background-color: #27ae60;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin-top: 10px;
    font-size: 1em;
    transition: background-color 0.3s;

    &:hover {
        background-color: #2ecc71;
    }

    @media (max-width: 768px) {
        padding: 8px 15px;
        font-size: 0.9em;
    }
`;

export const CardExercicio = styled.div`
    background-color: white;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    width: 100%;
    margin-bottom: 20px;

    @media (max-width: 768px) {
        padding: 15px;
        margin-bottom: 15px;
    }
`;

export const Tabela = styled.table`
    width: 100%;
    border-collapse: collapse;
    margin-bottom: 20px;

    @media (max-width: 768px) {
        font-size: 0.9em;
    }
`;

export const CabecalhoTabela = styled.th`
    padding: 10px;
    background-color: #2980B9;
    color: white;
    text-align: left;

    @media (max-width: 768px) {
        padding: 8px;
    }
`;

export const CelulaTabela = styled.td`
    padding: 10px;
    border-bottom: 1px solid #ddd;

    @media (max-width: 768px) {
        padding: 8px;
    }
`;
