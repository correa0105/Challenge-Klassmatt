import React, { useState } from 'react';
import Celula from '../Celula';
import { ContainerTabuleiro, Container, StatusContainer } from './style';
import Botao from '../Botao';
import defineVencedor from '../../utils/defineVencedor';

export default function Tabuleiro() {
  const [celulas, setCelulas] = useState(Array(9).fill(null));
  const [proximo, setProximo] = useState(true);

  const handleClick = (indice) => {
    const celulasCopiadas = celulas.slice();
    if (defineVencedor(celulasCopiadas).vencedor || celulasCopiadas[indice]) {
      return;
    }
    celulasCopiadas[indice] = proximo ? 'x' : 'circle';
    setCelulas(celulasCopiadas);
    setProximo(!proximo);
  };

  const reiniciarJogo = () => {
    setCelulas(Array(9).fill(null));
    setProximo(true);
  };

  const renderizaCelula = (indice, celulaVencedora) => {
    return (
      <Celula
        value={celulas[indice]}
        onClick={() => handleClick(indice)}
        className={celulas[indice]}
        celulaVencedora={celulaVencedora}
      />
    );
  };

  const { vencedor, linha } = defineVencedor(celulas);

  let status;
  const vencedorString = vencedor === 'x' ? 'X' : 'Circulo';

  if (vencedor) {
    status = `O ${vencedorString} Venceu!`;
  } else if (celulas.every((celula) => celula)) {
    status = 'Empate!';
  } else {
    status = `Jogador - ${proximo ? 'X' : 'Circulo'}`;
  }

  return (
    <Container>
      <StatusContainer>{status}</StatusContainer>
      <ContainerTabuleiro>
        {renderizaCelula(0, linha && linha.includes(0))}
        {renderizaCelula(1, linha && linha.includes(1))}
        {renderizaCelula(2, linha && linha.includes(2))}
        {renderizaCelula(3, linha && linha.includes(3))}
        {renderizaCelula(4, linha && linha.includes(4))}
        {renderizaCelula(5, linha && linha.includes(5))}
        {renderizaCelula(6, linha && linha.includes(6))}
        {renderizaCelula(7, linha && linha.includes(7))}
        {renderizaCelula(8, linha && linha.includes(8))}
      </ContainerTabuleiro>
      <Botao text="Reiniciar Jogo" onClick={reiniciarJogo} />
    </Container>
  );
}
