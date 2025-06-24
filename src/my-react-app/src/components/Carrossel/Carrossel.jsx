import React, { useEffect, useState } from 'react';
import './Carrossel.css';

const eventos = [
  { id: 1, nome: 'Festival de Rock', imagem: 'rock.jpg' },
  { id: 2, nome: 'Samba na Praça', imagem: 'samba.jpg' },
  { id: 3, nome: 'Show de Jazz', imagem: 'jazz.jpg' },
];

const Carrossel = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % eventos.length);
    }, 5000); // A cada 5 segundos

    return () => clearInterval(timer); // Limpa o timer quando desmonta
  }, []);

  const eventoAtual = eventos[index];

  return (
    <div className="carrossel">
      <h2>{eventoAtual.nome}</h2>
      <img src={`/imagens/${eventoAtual.imagem}`} alt={eventoAtual.nome} />
    </div>
  );
};

export default Carrossel;