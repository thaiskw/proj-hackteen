import React, { useState } from 'react';

function Cadastro() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    senha: ''
    
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você pode enviar os dados para um backend ou API
    console.log('Dados cadastrados:', formData);
    alert('Cadastro realizado com sucesso!');
  };

  return (
    <div style={{ maxWidth: '400px', margin: 'auto' }}>
      <h2>Cadastro</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nome:</label>
          <input
            type="text"
            name="nome"
            value={formData.nome}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Senha:</label>
          <input
            type="password"
            name="senha"
            value={formData.senha}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
}

export default Cadastro;