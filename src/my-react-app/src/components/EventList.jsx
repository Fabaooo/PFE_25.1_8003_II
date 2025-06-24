import React from 'react';

const EventList = ({ eventos }) => {
  return (
    <div>
      <h2>Lista de Eventos</h2>
      {eventos.map((evento) => (
        <div key={evento.id} style={{ marginBottom: '20px' }}>
          <h3>{evento.nome}</h3>
          <p>Data: {evento.data}</p>
          <p>Preço: R$ {evento.price}</p> {/* <-- novo campo */}
        </div>
      ))}
    </div>
  );
};

export default EventList;
