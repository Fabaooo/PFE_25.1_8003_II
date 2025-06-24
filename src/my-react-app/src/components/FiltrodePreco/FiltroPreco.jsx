import React, { useState } from 'react';

const FiltroPreco = ({ onFiltrar }) => {
  const [min, setMin] = useState('');
  const [max, setMax] = useState('');

  const handleFiltrar = () => {
    onFiltrar(Number(min), Number(max));
  };

  return (
    <div className="filtro-preco">
      <h3>Filtrar por preço</h3>
      <input
        type="number"
        placeholder="Mínimo"
        value={min}
        onChange={(e) => setMin(e.target.value)}
      />
      <input
        type="number"
        placeholder="Máximo"
        value={max}
        onChange={(e) => setMax(e.target.value)}
      />
      <button onClick={handleFiltrar}>Aplicar Filtro</button>
    </div>
  );
};

export default FiltroPreco;
