import React from 'react';
import { useNavigate } from 'react-router-dom';

const SobreFestify = () => {
  const navigate = useNavigate();

  return (
    <div style={{ padding: '20px' }}>
      <h2>Sobre o Festify</h2>
      <p>
        O Festify é uma plataforma criada para facilitar a divulgação, venda de ingressos e gestão de eventos. 
        Com uma interface amigável e prática, ele conecta organizadores e participantes com facilidade.
      </p>
      <button onClick={() => navigate('/')}>
        Voltar para a página inicial
      </button>
    </div>
  );
};

export default SobreFestify;