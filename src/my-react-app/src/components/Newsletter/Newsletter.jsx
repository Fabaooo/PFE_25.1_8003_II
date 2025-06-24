import React, { useState } from 'react';
import './Newsletter.css';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setEmail('');
  };

  return (
    <div className="newsletter">
      <h2>Assine a nossa Newsletter</h2>

      {!isSubmitted ? (
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Digite seu e-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit">Cadastrar</button>
        </form>
      ) : (
        <p className="success-message">Cadastro realizado!</p>
      )}
    </div>
  );
};

export default Newsletter;
