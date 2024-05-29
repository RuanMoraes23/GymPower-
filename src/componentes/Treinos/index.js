import { FaPlus, FaTrash } from 'react-icons/fa';
import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import {
    TreinosForm,
    TreinosLabel,
    TreinosInput,
    TreinosTable,
    TreinosTableHeader,
    TreinosTableRow,
    TreinosTableHeaderCell,
    TreinosTableCell,
    TreinosButton,
    IconButton,
    TreinosTableInput,
    TreinosSelect,
    TreinosOption,
    TreinosContainer,
    TreinosTitle,
    Mensagens,
    TreinosCadastradosContainer,
    TreinosCadastradosTitle,
    TreinosCard,
    TreinosCardBody,
    TreinosCardHeader,
    TreinosCardTitle,
    TreinosCardText,
    TreinosCardFooter,
    TreinosDeleteButton
} from '../estiloTreinos';

import { AuthContext } from '../autenticacao/AuthContext';

const Treinos = () => {
    const [nomeTreino, setNomeTreino] = useState('');
    const [exercicios, setExercicios] = useState([
        { exercicio: { id: '', nome: '' }, series: '', repeticoes: '', pausa: '' },
    ]);
    const [registeredExercises, setListaExercicios] = useState([]);
    const [successMessage, setSuccessMessage] = useState('');
    const [treinosCadastrados, setTreinosCadastrados] = useState([]);
    const [expandedTreino, setExpandedTreino] = useState(null);
    const [treinosBuscados, setTreinosLista] = useState([]);
    const { user } = useContext(AuthContext);

    useEffect(() => {
        if (user) {
            console.log('User in Treinos component:', user);

            const fetchExercicios = async () => {
                try {
                    const response = await axios.get(`https://api-treinos-2.onrender.com/exercicios/${user.usuario._id}`, {
                        headers: {
                            'Authorization': `Bearer ${localStorage.getItem('token')}`
                        }
                    });
                    if (Array.isArray(response.data.exercicios)) {
                        setListaExercicios(response.data.exercicios);
                    }
                } catch (error) {
                    console.log(error);
                }
            };

            const fetchTreinos = async () => {
                try {
                    const response = await axios.get(`https://api-treinos-2.onrender.com/treinos/${user.usuario._id}`, {
                        headers: {
                            'Authorization': `Bearer ${localStorage.getItem('token')}`
                        }
                    });
                    console.log('lista é essa:', response.data);
                    setTreinosCadastrados(response.data);
                } catch (error) {
                    console.log(error);
                }
            };

            fetchExercicios();
            fetchTreinos();
        }
    }, [user]);

    const handleCadastrarTreino = async (e) => {
        e.preventDefault();
        if (exercicios.length > 0) {
            try {
                const response = await axios.post('https://api-treinos-2.onrender.com/treinos', {
                    usuario: user.usuario._id,
                    nome: nomeTreino,
                    exercicios: exercicios.map(exercicio1 => ({
                        exercicio: exercicio1.exercicio.id,
                        series: parseInt(exercicio1.series, 10),
                        repeticoes: parseInt(exercicio1.repeticoes, 10),
                        pausa: exercicio1.pausa
                    }))
                }, {
                    headers: {
                      'Authorization': `Bearer ${localStorage.getItem('token')}`
                    }
                });
                setSuccessMessage('Treino cadastrado com sucesso!');
                setExercicios([{ exercicio: { id: '', nome: '' }, series: '', repeticoes: '', pausa: '' }]);
                setNomeTreino('');
                handleProcuraTreinos(); // Atualizar a lista de treinos cadastrados
            } catch (error) {
                console.error("Erro ao cadastrar treino:", error.message);
                if (error.response) {
                    console.error("Detalhes da resposta do servidor:", error.response.data);
                }
            }
        }
    };

    const handleProcuraTreinos = async () => {
        try {
            const response = await axios.get(`https://api-treinos-2.onrender.com/treinos/${user.usuario._id}`, {
                    headers: {
                      'Authorization': `Bearer ${localStorage.getItem('token')}`
                    }
                  });
                  console.log('treinos:', response.data)
            setTreinosCadastrados(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    const handleAddRow = () => {
        setExercicios([
            ...exercicios,
            { exercicio: { id: '', nome: '' }, series: '', repeticoes: '', pausa: '' },
        ]);
    };

    const handleDeleteRow = (index) => {
        const newExercicios = [...exercicios];
        newExercicios.splice(index, 1);
        setExercicios(newExercicios);
    };

    const handleChange = (index, e) => {
        const { name, value } = e.target;
        const newExercicios = [...exercicios];

        if (name === 'exercicio') {
            const selectedExercise = registeredExercises.find(exercise => exercise.nome === value);

            if (selectedExercise) {
                newExercicios[index].exercicio = { id: selectedExercise._id, nome: selectedExercise.nome };
                newExercicios[index].exercicio.nome = value;
            } else {
                newExercicios[index].exercicio = { id: '', nome: '' };
            }
        } else {
            newExercicios[index][name] = value;
        }

        setExercicios(newExercicios);
    };

    const handleExpandTreino = (index) => {
        setExpandedTreino(index === expandedTreino ? null : index);
    };

    const handleDeleteTreino = async (treinoId) => {
        try {
            const response = await axios.delete(`https://api-treinos-2.onrender.com/treinos/${treinoId}`,{
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                  }
            });
            console.log(response.data);
            setSuccessMessage('Treino excluído com sucesso!');
            handleProcuraTreinos(); // Atualizar a lista de treinos cadastrados
        } catch (error) {
            console.error("Erro ao excluir treino:", error.message);
            if (error.response) {
                console.error("Detalhes da resposta do servidor:", error.response.data);
            }
        }
    };

    const renderTreinosCadastrados = () => (
        <TreinosCadastradosContainer>
            <TreinosCadastradosTitle>Treinos Cadastrados</TreinosCadastradosTitle>
            {treinosCadastrados.map((treino, index) => (
                <TreinosCard key={index}>
                    <TreinosCardHeader>
                        <TreinosCardTitle onClick={() => handleExpandTreino(index)}>{treino.nome} {expandedTreino === index ? '-' : '+'}</TreinosCardTitle>
                    </TreinosCardHeader>
                    {expandedTreino === index && (
                        <TreinosCardBody>
                            {treino.exercicios.map((exercicio, idx) => (
                                <TreinosCardText key={idx}>
                                    <strong>{exercicio.exercicio.nome}</strong>: {exercicio.series} séries, {exercicio.repeticoes} repetições, pausa de {exercicio.pausa}
                                </TreinosCardText>
                            ))}
                        </TreinosCardBody>
                    )}
                    <TreinosCardFooter>
                        <IconButton onClick={() => handleDeleteTreino(treino._id) }>
                            <FaTrash />
                        </IconButton>
                    </TreinosCardFooter>
                </TreinosCard>
            ))}
        </TreinosCadastradosContainer>
    );

    return (
        <TreinosContainer>
            <div className="container">
                <TreinosTitle>Cadastro de Treinos</TreinosTitle>
                {successMessage && <Mensagens>{successMessage}</Mensagens>}
                <TreinosForm onSubmit={handleCadastrarTreino}>
                    <TreinosLabel htmlFor="nomeTreino">Nome do Treino:</TreinosLabel>
                    <TreinosInput
                        type="text"
                        id="nomeTreino"
                        name="nomeTreino"
                        value={nomeTreino}
                        onChange={(e) => setNomeTreino(e.target.value)}
                    />
                    <TreinosTable>
                        <TreinosTableHeader>
                            <TreinosTableRow>
                                <TreinosTableHeaderCell>Exercício</TreinosTableHeaderCell>
                                <TreinosTableHeaderCell>Séries</TreinosTableHeaderCell>
                                <TreinosTableHeaderCell>Repetições</TreinosTableHeaderCell>
                                <TreinosTableHeaderCell>Pausa</TreinosTableHeaderCell>
                                <TreinosTableHeaderCell>Ações</TreinosTableHeaderCell>
                            </TreinosTableRow>
                        </TreinosTableHeader>
                        <tbody>
                            {exercicios.map((exercicio, index) => (
                                <TreinosTableRow key={index}>
                                    <TreinosTableCell>
                                        <TreinosSelect
                                            name='exercicio'
                                            value={exercicio.exercicio.nome}
                                            onChange={(e) => handleChange(index, e)}
                                        >
                                            <TreinosOption value="">Selecione um exercício</TreinosOption>
                                            {registeredExercises.map((exercise) => (
                                                <TreinosOption key={exercise._id} value={exercise.nome}>
                                                    {exercise.nome}
                                                </TreinosOption>
                                            ))}
                                        </TreinosSelect>
                                    </TreinosTableCell>
                                    <TreinosTableCell>
                                        <TreinosTableInput
                                            type="text"
                                            name="series"
                                            value={exercicio.series}
                                            onChange={(e) => handleChange(index, e)}
                                        />
                                    </TreinosTableCell>
                                    <TreinosTableCell>
                                        <TreinosTableInput
                                            type="text"
                                            name="repeticoes"
                                            value={exercicio.repeticoes}
                                            onChange={(e) => handleChange(index, e)}
                                        />
                                    </TreinosTableCell>
                                    <TreinosTableCell>
                                        <TreinosTableInput
                                            type="text"
                                            name="pausa"
                                            value={exercicio.pausa}
                                            onChange={(e) => handleChange(index, e)}
                                        />
                                    </TreinosTableCell>
                                    <TreinosTableCell>
                                        <IconButton onClick={() => handleDeleteRow(index)}>
                                            <FaTrash />
                                        </IconButton>
                                    </TreinosTableCell>
                                </TreinosTableRow>
                            ))}
                        </tbody>
                    </TreinosTable>
                    <IconButton type="button" onClick={handleAddRow}>
                        <FaPlus />
                    </IconButton>
                    <TreinosButton type="submit">Cadastrar Treino</TreinosButton>
                </TreinosForm>
                {renderTreinosCadastrados()}
            </div>
        </TreinosContainer>
    );
};

export default Treinos;
