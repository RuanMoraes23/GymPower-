import React from 'react';
import { Tabela, TabelaContainer, TabelaHead, Linha, Celula, CelulaCabecalho } from '../estiloCronograma';

const TabelaControlePeso = ({ controlePeso }) => {
    if (!controlePeso) return null;

    return (
        <TabelaContainer>
            <Tabela>
                <TabelaHead>
                    <Linha>
                        <CelulaCabecalho>Exercício</CelulaCabecalho>
                        <CelulaCabecalho>Série</CelulaCabecalho>
                        <CelulaCabecalho>Repetições</CelulaCabecalho>
                        <CelulaCabecalho>Carga (kg)</CelulaCabecalho>
                    </Linha>
                </TabelaHead>
                <tbody>
                    {controlePeso.exercicios.map((exercicio, index) => (
                        exercicio.exercicio.series.map((serie, serieIndex) => (
                            <Linha key={`${index}-${serieIndex}`}>
                                <Celula>{exercicio.exercicio.nome}</Celula>
                                <Celula>{serieIndex + 1}</Celula>
                                <Celula>{serie.repeticao}</Celula>
                                <Celula>{serie.carga}</Celula>
                            </Linha>
                        ))
                    ))}
                </tbody>
            </Tabela>
        </TabelaContainer>
    );
};

export default TabelaControlePeso;
