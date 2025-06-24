import React from 'react';

const EventList = ({ eventos }) => {
  return (
    <div className="event-list">
      {eventos.map((evento) => (
        <div key={evento.id} className="evento">
          <h3>{evento.nome}</h3>
          <p>Data: {evento.date}</p>
          <p>Preço: R$ {evento.price}</p>
        </div>
      ))}
    </div>
  );
};

export default EventList;