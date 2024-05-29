import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import {
    Container,
    Select,
    Option,
    Botao2,
    Card,
    ColunaSeriesCargas,
    Navegacao,
    DiaSemana,
    TreinoDetalhes,
    TreinoNome,
    ExercicioItem,
    DetalhesExercicio,
    Titulo,
    ContainerSelect,
    LinhaSerie,
    InputSerie
} from '../estiloCronograma';
import { AuthContext } from '../autenticacao/AuthContext';

const diasDaSemana = ["Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado", "Domingo"];

const ProtocolosTreino = () => {
    const [cronogramas, setCronogramas] = useState([]);
    const [cronogramaSelecionado, setCronogramaSelecionado] = useState('');
    const [diaAtual, setDiaAtual] = useState(0);
    const [exercicioAtual, setExercicioAtual] = useState(0);
    const [seriesCargas, setSeriesCargas] = useState([]);
    const [exerciciosConcluidos, setExerciciosConcluidos] = useState([]);
    const [concluiuTreinoDoDia, setConcluiuTreinoDoDia] = useState(false);
    const [exercicioConcluido, setExercicioConcluido] = useState(false);
    const [controlePesoAtual, setControlePesoAtual] = useState(null);
    const [dataSelecionada, setDataSelecionada] = useState('');
    const [pesoCargaExercicioAtual, setPesoCargaExercicioAtual] = useState(null);
    const [treinoDoDia, setTreinoDoDia] = useState(null);
    const [exercicioSelecionado, setExercicioSelecionado] = useState(null);
    const [mostrarCardExercicio, setMostrarCardExercicio] = useState(true);
    const { user } = useContext(AuthContext);

    useEffect(() => {
        const buscarCronogramas = async () => {
            try {
                const resposta = await axios.get(`https://api-treinos-2.onrender.com/cronogramas/${user.usuario._id}`, {
                    headers: {
                      'Authorization': `Bearer ${localStorage.getItem('token')}`
                    }
                  });
                setCronogramas(resposta.data.listadeCronogramas);
            } catch (erro) {
                console.log(erro);
            }
        };
        buscarCronogramas();
    }, []);

    useEffect(() => {
        if (cronogramaSelecionado) {
            const cronograma = cronogramas.find(c => c._id === cronogramaSelecionado);
            const treinoDiaAtual = cronograma ? cronograma.dias[diaAtual] : null;
            setTreinoDoDia(treinoDiaAtual);
            if (treinoDiaAtual && treinoDiaAtual.treino.exercicios.length > 0) {
                setExercicioAtual(0);
            }
        }
    }, [cronogramaSelecionado, diaAtual, cronogramas]);

    useEffect(() => {
        if (treinoDoDia) {
            const exercicio = treinoDoDia.treino.exercicios[exercicioAtual];
            setSeriesCargas(new Array(exercicio.series).fill({ repeticao: '', carga: '' }));
            setExercicioConcluido(false);
        }
    }, [treinoDoDia, exercicioAtual]);

    useEffect(() => {
        if (exercicioSelecionado && cronogramaSelecionado && dataSelecionada) {
            console.log('entrou aqui');
            handleCargasChange(dataSelecionada);
        }
    }, [exercicioSelecionado, cronogramaSelecionado, dataSelecionada]);

    const handleCronogramaChange = (event) => {
        setCronogramaSelecionado(event.target.value);
        setDiaAtual(0);
        setExercicioAtual(0);
        setSeriesCargas([]);
        setExerciciosConcluidos([]);
        setConcluiuTreinoDoDia(false);
    };

    const handleProximoDia = () => {
        setDiaAtual((diaAtual + 1) % 7);
        setExercicioAtual(0);
        setSeriesCargas([]);
        setExerciciosConcluidos([]);
        setConcluiuTreinoDoDia(false);
        setDataSelecionada('');
    };

    const handleDiaAnterior = () => {
        setDiaAtual((diaAtual + 6) % 7);
        setExercicioAtual(0);
        setSeriesCargas([]);
        setExerciciosConcluidos([]);
        setConcluiuTreinoDoDia(false);
        setDataSelecionada('');
    };

    const handleConcluirExercicio = () => {
        if (exercicioAtual < treinoDoDia.treino.exercicios.length) {
            const exercicio = treinoDoDia.treino.exercicios[exercicioAtual];
            console.log(exercicio);
            const novoExercicioConcluido = {
                exercicio: {
                    nome: exercicio.exercicio.nome,
                    series: seriesCargas.map(serie => ({
                        carga: parseInt(serie.carga),
                        repeticao: parseInt(serie.repeticao)
                    }))
                }
            };
            setExerciciosConcluidos([...exerciciosConcluidos, novoExercicioConcluido]);

            if (exercicioAtual < treinoDoDia.treino.exercicios.length - 1) {
                setExercicioAtual(exercicioAtual + 1);
                setExercicioSelecionado(treinoDoDia.treino.exercicios[exercicioAtual + 1]);  // Assume que handleCargasChange depende disso
            } else {
                setConcluiuTreinoDoDia(true);
            }

            setExercicioConcluido(true);
        }
        console.log('exercicio concluido:',exerciciosConcluidos);
    };

    const handleSerieChange = (index, field, value) => {
        const novasSeries = [...seriesCargas];
        novasSeries[index] = { ...novasSeries[index], [field]: value };
        setSeriesCargas(novasSeries);
    };

    const handleSalvarControlePeso = async () => {
        console.log(exerciciosConcluidos);
        const controlePeso = {
            data: new Date().toISOString().split('T')[0], // Formata a data para YYYY-MM-DD
            controlePeso: {
                cronogramaID: cronogramaSelecionado,
                diaDaSemana: diasDaSemana[diaAtual],
                exercicios: exerciciosConcluidos
            },
            userId: user.usuario._id
        };
        console.log('CONTROLE DE PESO:', controlePeso);

        try {
            const response = await axios.post('https://api-treinos-2.onrender.com/controlePeso', controlePeso, {
                headers: {
                  'Authorization': `Bearer ${localStorage.getItem('token')}`
                }
              });
            console.log(response.data);
            alert('Controle de peso salvo com sucesso!');
            setConcluiuTreinoDoDia(false); // Reset the state after saving
            handleProximoDia();
        } catch (erro) {
            console.log(erro);
            alert('Erro ao salvar controle de peso.');
        }
    };

    const handleDataChange = async (event) => {
        const data = event.target.value;
        const diaDaSemanaSelecionado = getDiaDaSemana(data);

        if (diasDaSemana[diaAtual] === diaDaSemanaSelecionado) {
            setDataSelecionada(data);
            if (data && treinoDoDia) {
                await handleCargasChange(data);
            }
        } else {
            alert(`A data selecionada não corresponde ao dia da semana atual: ${ diasDaSemana[diaAtual]}`);
            setDataSelecionada('');
        }
    };

    const handleCargasChange = async (data) => {
        console.log('treino do dia:', treinoDoDia);
        const exercicioSelecionado = treinoDoDia.treino.exercicios[exercicioAtual];
        setExercicioSelecionado(exercicioSelecionado);
        console.log('não passa aqui')
        if (exercicioSelecionado && cronogramaSelecionado) {
            const cronograma = cronogramas.find(c => c._id === cronogramaSelecionado);
            const exercicioEncontrado = cronograma?.dias[diaAtual].treino.exercicios.find(exercicio => exercicio._id === exercicioSelecionado._id);
            console.log('achou:', exercicioEncontrado);
            if (exercicioEncontrado) {
                try {
                    const resposta = await axios.get(`https://api-treinos-2.onrender.com/controlePeso/${user.usuario._id}`, {
                        headers: {
                          'Authorization': `Bearer ${localStorage.getItem('token')}`
                        }
                      })
                    const listaControleDePesos = [...resposta.data.listaControleDePesos];

                    // Verifica o dia da semana da data selecionada
                    const diaDaSemanaSelecionado = getDiaDaSemana(data);
                    console.log('diadasemana', diaDaSemanaSelecionado);
                    const listaFiltradaData = listaControleDePesos.filter((lista) => (
                        lista.data.includes(data) && lista.controlePeso.diaDaSemana === diaDaSemanaSelecionado
                    ));
                    console.log('listafiltrada', listaFiltradaData);
                    if (listaFiltradaData.length > 0) {
                        const listaFiltradaCronograma = listaFiltradaData.find((elemento) => elemento.controlePeso.cronogramaID === cronogramaSelecionado);
                        console.log('listacronograma:', listaFiltradaCronograma)
                        if (listaFiltradaCronograma) {
                            const listaExerciciosCronograma = [...listaFiltradaCronograma.controlePeso.exercicios];
                            console.log('lista exercicio3:',listaExerciciosCronograma);
                            const listaFiltradaExercicio = listaExerciciosCronograma.find((exercicioLista) => exercicioLista.exercicio.nome === exercicioSelecionado.exercicio.nome);
                            console.log('lista exercicio:',listaFiltradaExercicio);
                            if (listaFiltradaExercicio) {
                                const pesoCarga = listaFiltradaExercicio.exercicio.series.map(serie => ({
                                    carga: serie.carga,
                                    repeticao: serie.repeticao
                                }));
                                console.log('pesoCarga:',pesoCarga)
                                setPesoCargaExercicioAtual(pesoCarga);
                            } else {
                                setPesoCargaExercicioAtual(null);
                            }
                        } else {
                            setPesoCargaExercicioAtual(null);
                        }
                    } else {
                        setPesoCargaExercicioAtual(null);
                    }
                } catch (erro) {
                    console.log(erro);
                }
            }
        } else {
            setPesoCargaExercicioAtual(null);
        }
    };

    const getDiaDaSemana = (data) => {
        const diasDaSemana = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"];
        const date = new Date(data + 'T00:00:00'); // Adicione um tempo padrão para evitar problemas de fuso horário
        return diasDaSemana[date.getUTCDay()]; // Use getUTCDay() para evitar problemas de fuso horário
    };

    const exercicio = treinoDoDia ? treinoDoDia.treino.exercicios[exercicioAtual] : null;

    return (
        <Container>
            <Titulo>Selecione seu treino:</Titulo>
            <ContainerSelect>
                <Select onChange={handleCronogramaChange} value={cronogramaSelecionado}>
                    <Option value="">Selecione o cronograma</Option>
                    {cronogramas.map(cronograma => (
                        <Option key={cronograma._id} value={cronograma._id}>{cronograma.nome}</Option>
                    ))}
                </Select>
            </ContainerSelect>

            {treinoDoDia && (
                <div>
                    {mostrarCardExercicio ? (
                        <Card>
                            <DiaSemana>{diasDaSemana[diaAtual]}</DiaSemana>
                            <TreinoDetalhes>
                                <TreinoNome>{treinoDoDia.treino.nome}</TreinoNome>
                                <ExercicioItem>
                                    <DetalhesExercicio>
                                        <strong>Exercício:</strong> {exercicio?.exercicio.nome}
                                    </DetalhesExercicio>
                                    <DetalhesExercicio>
                                        <strong>Séries:</strong> {exercicio?.series}
                                    </DetalhesExercicio>
                                    <DetalhesExercicio>
                                        <strong>Repetições:</strong> {exercicio?.repeticoes}
                                    </DetalhesExercicio>
                                    <DetalhesExercicio>
                                        <strong>Pausa:</strong> {exercicio?.pausa}
                                    </DetalhesExercicio>
                                </ExercicioItem>
                                <Botao2 onClick={handleConcluirExercicio} disabled={exercicioConcluido}>Concluir exercício</Botao2>
                            </TreinoDetalhes>
                            <Navegacao>
                                <Botao2 onClick={handleDiaAnterior}>Dia anterior</Botao2>
                                <Botao2 onClick={handleProximoDia}>Próximo dia</Botao2>
                            </Navegacao>
                            {concluiuTreinoDoDia && (
                                <Botao2 onClick={handleSalvarControlePeso}>Salvar Treino do Dia</Botao2>
                            )}
                            <Botao2 onClick={() => setMostrarCardExercicio(false)}>Definir pesos</Botao2>
                        </Card>
                    ) : (
                        <Card>
                            {seriesCargas.map((serie, index) => (
                                <LinhaSerie key={index}>
                                    <InputSerie
                                        placeholder={`Repetições`}
                                        value={serie.repeticao}
                                        onChange={(e) => handleSerieChange(index, 'repeticao', e.target.value)}
                                    />
                                    <InputSerie
                                        placeholder={`Carga (kg)`}
                                        value={serie.carga}
                                        onChange={(e) => handleSerieChange(index, 'carga', e.target.value)}
                                    />
                                </LinhaSerie>
                            ))}
                            <div style={{ marginTop: '20px' }}>
                                <label>Data:</label>
                                <input type="date" value={dataSelecionada} onChange={handleDataChange} />
                            </div>
                            {dataSelecionada && (
                                <div style={{ marginTop: '20px', border: '1px solid #ccc', padding: '10px' }}>
                                    <h3>Treino para data selecionada:</h3>
                                    <ul>
                                        {pesoCargaExercicioAtual ? (
                                            pesoCargaExercicioAtual.map((serie, index) => (
                                                <li key={index}>
                                                    Repetições: {serie.repeticao}, Carga: {serie.carga} kg
                                                </li>
                                            ))
                                        ) : (
                                            <li>Nenhum treino disponível para a data selecionada.</li>
                                        )}
                                    </ul>
                                </div>
                            )}
                            <Botao2 onClick={() => setMostrarCardExercicio(true)}>Voltar ao exercício</Botao2>
                        </Card>
                    )}
                </div>
            )}
        </Container>
    );
};

export default ProtocolosTreino;
