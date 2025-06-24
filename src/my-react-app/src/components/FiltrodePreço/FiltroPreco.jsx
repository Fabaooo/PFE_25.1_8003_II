// src/components/FiltroPreco/FiltroPreco.jsx

import React, { useState } from 'react';

const FiltroPreco = ({ onFiltrar }) => {
  const [precoMin, setPrecoMin] = useState('');
  const [precoMax, setPrecoMax] = useState('');

  const handleFiltrar = (e) => {
    e.preventDefault();
    onFiltrar({
      min: precoMin ? parseFloat(precoMin) : 0,
      max: precoMax ? parseFloat(precoMax) : Infinity,
    });
  };

  return (
    <form onSubmit={handleFiltrar} style={{ marginBottom: '20px' }}>
      <label>
        Preço Mínimo:
        <input
          type="number"
          value={precoMin}
          onChange={(e) => setPrecoMin(e.target.value)}
        />
      </label>
      <label style={{ marginLeft: '10px' }}>
        Preço Máximo:
        <input
          type="number"
          value={precoMax}
          onChange={(e) => setPrecoMax(e.target.value)}
        />
      </label>
      <button type="submit" style={{ marginLeft: '10px' }}>Aplicar Filtro</button>
    </form>
  );
};

export default FiltroPreco;
