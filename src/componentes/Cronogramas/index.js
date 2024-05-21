import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
    ContainerCronograma,
    FormCronograma,
    Titulo,
    Label,
    Input,
    Select,
    Option,
    Botao,
    ContainerDetalhesCronograma,
    TituloCronograma,
    CronogramaItem,
    DiaSemana,
    TreinoDetalhes,
    TreinoNome,
    ExerciciosLista,
    ExercicioItem,
    DetalhesExercicio
} from '../estiloCronograma';
import ProtocolosTreino from '../ProtocolosTreinos';

const Cronogramas = () => {
    const [nomeCronograma, setNomeCronograma] = useState('');
    const [dias, setDias] = useState({
        segunda: '',
        terca: '',
        quarta: '',
        quinta: '',
        sexta: '',
        sabado: '',
        domingo: ''
    });
    const [treinos, setTreinos] = useState([]);
    const [cronogramas, setCronogramas] = useState([]);

    useEffect(() => {
        const buscarTreinos = async () => {
            try {
                const resposta = await axios.get('http://localhost:3000/treino');
                console.log(resposta.data)
                if (Array.isArray(resposta.data)) {
                    setTreinos(resposta.data);
                } else {
                    setTreinos([]);
                }
            } catch (erro) {
                console.log(erro);
            }
        };

        const buscarCronogramas = async () => {
            try {
                const resposta = await axios.get('http://localhost:3000/cronograma');
                if (Array.isArray(resposta.data.listadeCronogramas)) {
                    console.log('entrou na array')
                    setCronogramas(resposta.data.listadeCronogramas);
                } else {
                    setCronogramas([]);
                }
            } catch (erro) {
                console.log(erro);
            }
        };
        console.log('cronogramas:', cronogramas)
        buscarTreinos();
        buscarCronogramas();
    }, []);

    const handleSubmit = async (event) => {
        event.preventDefault();
        const novoCronograma = {
            nome: nomeCronograma,
            dias: Object.entries(dias).map(([diaDaSemana, treinoId]) => ({
                diaDaSemana: diaDaSemana.charAt(0).toUpperCase() + diaDaSemana.slice(1),
                treino: treinos.find(treino => treino._id === treinoId)
            }))
        };

        try {
            await axios.post('http://localhost:3000/cronograma', novoCronograma);
            setNomeCronograma('');
            setDias({
                segunda: '',
                terca: '',
                quarta: '',
                quinta: '',
                sexta: '',
                sabado: '',
                domingo: ''
            });
            const resposta = await axios.get('http://localhost:3000/cronograma');
            if (Array.isArray(resposta.data)) {
                setCronogramas(resposta.data);
            } else {
                setCronogramas([]);
            }
        } catch (erro) {
            console.log(erro);
        }
    };

    return (
        <ContainerCronograma>
            <FormCronograma onSubmit={handleSubmit}>
                <Titulo>Cadastrar Cronograma</Titulo>
                <Label htmlFor="nome">Nome do Cronograma</Label>
                <Input
                    id="nome"
                    type="text"
                    value={nomeCronograma}
                    onChange={(e) => setNomeCronograma(e.target.value)}
                    required
                />
                {Object.keys(dias).map((dia) => (
                    <div key={dia}>
                        <Label htmlFor={dia}>{dia.charAt(0).toUpperCase() + dia.slice(1)}</Label>
                        <Select
                            id={dia}
                            value={dias[dia]}
                            onChange={(e) => setDias({ ...dias, [dia]: e.target.value })}
                            required
                        >
                            <Option value="">Selecione o treino</Option>
                            {treinos.map((treino) => (
                                <Option key={treino._id} value={treino._id}>{treino.nome}</Option>
                            ))}
                        </Select>
                    </div>
                ))}
                <Botao type="submit">Cadastrar</Botao>
            </FormCronograma>
        </ContainerCronograma>
    );
};

export default Cronogramas;