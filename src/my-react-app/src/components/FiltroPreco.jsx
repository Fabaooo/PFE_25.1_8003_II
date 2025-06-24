import React, { useState } from 'react';

const FiltroPreco = ({ onFiltrar }) => {
  const [min, setMin] = useState('');
  const [max, setMax] = useState('');

  const aplicarFiltro = () => {
    const minVal = parseFloat(min);
    const maxVal = parseFloat(max);
    onFiltrar(minVal, maxVal);
  };

  return (
    <div style={{ marginBottom: '20px' }}>
      <label>
        Preço Mínimo:
        <input
          type="number"
          value={min}
          onChange={(e) => setMin(e.target.value)}
          placeholder="0"
        />
      </label>
      <label>
        Preço Máximo:
        <input
          type="number"
          value={max}
          onChange={(e) => setMax(e.target.value)}
          placeholder="999"
        />
      </label>
      <button onClick={aplicarFiltro}>Filtrar</button>
    </div>
  );
};

export default FiltroPreco;