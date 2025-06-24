import React, { useState } from 'react';
import './Newsletter.css';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [mensagem, setMensagem] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setMensagem('Cadastro realizado!');
      setEmail('');
    }
  };

  return (
    <div className="newsletter">
      <h2>Assine nossa Newsletter</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Digite seu email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit">Cadastrar</button>
      </form>
      {mensagem && <p className="mensagem-sucesso">{mensagem}</p>}
    </div>
  );
};

export default Newsletter;