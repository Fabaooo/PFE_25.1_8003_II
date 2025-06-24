import React, { useState } from 'react';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [sucesso, setSucesso] = useState(false); // novo estado

  const handleSubmit = (e) => {
    e.preventDefault();

    // Aqui poderia ter lógica de envio para o backend
    if (email.trim() !== '') {
      setSucesso(true); // ativa a mensagem
      setEmail(''); // limpa o campo
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Assine a Newsletter</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Seu e-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit">Cadastrar</button>
      </form>

      {/* Mensagem de sucesso */}
      {sucesso && <p style={{ color: 'green' }}>Cadastro realizado!</p>}
    </div>
  );
};

export default Newsletter;
