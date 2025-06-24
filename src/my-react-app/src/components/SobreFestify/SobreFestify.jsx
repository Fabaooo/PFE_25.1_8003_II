import React from 'react';
import { useNavigate } from 'react-router-dom';
import './SobreFestify.css';

const SobreFestify = () => {
  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate('/');
  };

  return (
    <div className="sobre-festify">
      <h2>Sobre o Festify</h2>
      <p>
        O Festify é uma plataforma dedicada a conectar amantes da música com os melhores festivais do Brasil. Nosso objetivo é tornar a descoberta de eventos musicais mais fácil, divertida e personalizada.
      </p>
      <button onClick={handleRedirect}>
        Voltar para a Página Inicial
      </button>
    </div>
  );
};

export default SobreFestify;