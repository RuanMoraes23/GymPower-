import React, { useState, useEffect, useContext } from 'react';
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
} from '../estiloCronograma';
import { AuthContext } from '../autenticacao/AuthContext';

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
    const { user } = useContext(AuthContext);

    useEffect(() => {
        const buscarTreinos = async () => {
            try {
                const resposta = await axios.get(`https://api-treinos-2.onrender.com/treinos/${user.usuario._id}`, {
                    headers: {
                      'Authorization': `Bearer ${localStorage.getItem('token')}`
                    }
                  });
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
                const resposta = await axios.get('https://api-treinos-2.onrender.com/cronograma');
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
            })),
            userId: user.usuario._id
        };

        try {
            console.log('novo cronograma:', novoCronograma)
            await axios.post('https://api-treinos-2.onrender.com/cronograma', novoCronograma, {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                }
            });
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
            const resposta = await axios.get('https://api-treinos-2.onrender.com/cronograma');
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