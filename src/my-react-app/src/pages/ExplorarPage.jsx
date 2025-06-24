// src/pages/ExplorarPage.jsx

import React, { useState } from 'react';
import FiltroPreco from '../components/FiltroPreco/FiltroPreco';

const eventosMock = [
  { id: 1, nome: 'Festival do Sol', preco: 150 },
  { id: 2, nome: 'Rock na Praia', preco: 300 },
  { id: 3, nome: 'Jazz ao Ar Livre', preco: 90 },
  { id: 4, nome: 'Eletrônica Invasion', preco: 250 },
];

const ExplorarPage = () => {
  const [filtros, setFiltros] = useState({ min: 0, max: Infinity });

  const eventosFiltrados = eventosMock.filter(evento =>
    evento.preco >= filtros.min && evento.preco <= filtros.max
  );

  return (
    <div>
      <h1>Explorar Eventos</h1>
      <FiltroPreco onFiltrar={setFiltros} />

      {eventosFiltrados.length > 0 ? (
        <ul>
          {eventosFiltrados.map((evento) => (
            <li key={evento.id}>
              {evento.nome} - R${evento.preco}
            </li>
          ))}
        </ul>
      ) : (
        <p>Nenhum evento encontrado dentro da faixa de preço.</p>
      )}
    </div>
  );
};

export default ExplorarPage;
