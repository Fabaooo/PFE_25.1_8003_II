import React, { useState, useEffect } from 'react';

const eventos = [
  { id: 1, nome: 'Evento A', imagem: 'img1.jpg' },
  { id: 2, nome: 'Evento B', imagem: 'img2.jpg' },
  { id: 3, nome: 'Evento C', imagem: 'img3.jpg' },
];

const Carrossel = () => {
  const [indiceAtual, setIndiceAtual] = useState(0);

  useEffect(() => {
    const intervalo = setInterval(() => {
      setIndiceAtual((prev) => (prev + 1) % eventos.length);
    }, 5000); // troca a cada 5 segundos

    return () => clearInterval(intervalo); // limpa o intervalo ao desmontar
  }, []);

  return (
    <div>
      <h2>{eventos[indiceAtual].nome}</h2>
      <img
        src={eventos[indiceAtual].imagem}
        alt={eventos[indiceAtual].nome}
        style={{ width: '100%', height: '300px', objectFit: 'cover' }}
      />
    </div>
  );
};

export default Carrossel;
