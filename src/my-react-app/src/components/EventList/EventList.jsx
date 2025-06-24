import React from 'react';
import './EventList.css';

const EventList = ({ eventos }) => {
  if (!eventos || eventos.length === 0) {
    return <p>Nenhum evento encontrado.</p>;
  }

  return (
    <ul className="event-list">
      {eventos.map((evento) => (
        <li key={evento.id} className="event-item">
          <h3>{evento.nome}</h3>
          <p>Data: {evento.data}</p>
          <p>Preço: R$ {Number(evento.price).toFixed(2)}</p>
        </li>
      ))}
    </ul>
  );
};

export default EventList;
