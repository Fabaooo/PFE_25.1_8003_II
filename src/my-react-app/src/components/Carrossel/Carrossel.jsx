// src/components/Carrossel/Carrossel.jsx

import React, { useState, useEffect } from 'react';
import './Carrossel.css';

const eventos = [
  { id: 1, nome: 'Festival das Cores', descricao: 'Música e alegria ao ar livre!' },
  { id: 2, nome: 'Noite do Rock', descricao: 'Bandas clássicas ao vivo.' },
  { id: 3, nome: 'Samba Sunset', descricao: 'Pôr do sol com muito samba.' },
];

const Carrossel = () => {
  const [indiceAtual, setIndiceAtual] = useState(0);

  useEffect(() => {
    if (eventos.length === 0) return;

    const intervalo = setInterval(() => {
      setIndiceAtual((prevIndice) => (prevIndice + 1) % eventos.length);
    }, 5000);

    return () => clearInterval(intervalo); // Cleanup ao desmontar
  }, []);

  if (eventos.length === 0) {
    return <p>Nenhum evento disponível.</p>;
  }

  const { nome, descricao } = eventos[indiceAtual];

  return (
    <section className="carrossel" aria-label="Carrossel de eventos">
      <div className="carrossel-item">
        <h2>{nome}</h2>
        <p>{descricao}</p>
      </div>
    </section>
  );
};

export default Carrossel;
