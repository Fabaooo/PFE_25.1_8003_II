import React, { useState } from 'react';
import EventList from '../components/EventList/EventList';
import FiltroPreco from '../components/FiltroPreco/FiltroPreco';

const eventosMock = [
  { id: 1, nome: 'Festival de Rock', date: '10/07/2025', price: 150 },
  { id: 2, nome: 'Samba na Praça', date: '15/07/2025', price: 50 },
  { id: 3, nome: 'Show de Jazz', date: '20/07/2025', price: 100 },
];

const ExplorarPage = () => {
  const [eventosFiltrados, setEventosFiltrados] = useState(eventosMock);

  const filtrarPorPreco = (min, max) => {
    const filtrados = eventosMock.filter(
      (evento) => evento.price >= min && evento.price <= max
    );
    setEventosFiltrados(filtrados);
  };

  return (
    <div>
      <h2>Explorar Eventos</h2>
      <FiltroPreco onFiltrar={filtrarPorPreco} />
      <EventList eventos={eventosFiltrados} />
    </div>
  );
};

export default ExplorarPage;
