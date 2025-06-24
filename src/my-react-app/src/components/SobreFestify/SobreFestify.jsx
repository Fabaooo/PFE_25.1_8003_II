import React from 'react';
import { useNavigate } from 'react-router-dom';

const SobreFestify = () => {
  const navigate = useNavigate();

  const handleVoltar = () => {
    navigate('/');
  };

  return (
    <div className="sobre-festify">
      <h2>Sobre o Festify</h2>
      <p>
        O Festify é uma plataforma para você encontrar e participar dos melhores eventos da sua região. Nosso objetivo é conectar pessoas através da música, cultura e diversão!
      </p>
      <button onClick={handleVoltar}>Voltar para Home</button>
    </div>
  );
};

export default SobreFestify;