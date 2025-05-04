import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Cadastro() {
  const [form, setForm] = useState({
    nome: "",
    email: "",
    senha: "",
    confirmarSenha: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.senha !== form.confirmarSenha) {
      alert("As senhas não coincidem!");
      return;
    }

    const newUser = {
      nome: form.nome,
      email: form.email,
      senha: form.senha,
    };

    const users = JSON.parse(localStorage.getItem("users")) || [];
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));

    alert("Cadastro realizado com sucesso!");
    navigate("/login");
  };

  return (
    <div className="login-container gatinho-fundo">
      <div className="form-container">
        <form onSubmit={handleSubmit} className="form-custom p-4 rounded shadow-lg">
          <h2 className="text-center mb-4">Cadastro</h2>

          <div className="mb-3">
            <label className="form-label">Nome</label>
            <input
              type="text"
              name="nome"
              value={form.nome}
              onChange={handleChange}
              className="form-control"
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="form-control"
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Senha</label>
            <input
              type="password"
              name="senha"
              value={form.senha}
              onChange={handleChange}
              className="form-control"
              required
            />
          </div>

          <div className="mb-4">
            <label className="form-label">Confirmar Senha</label>
            <input
              type="password"
              name="confirmarSenha"
              value={form.confirmarSenha}
              onChange={handleChange}
              className="form-control"
              required
            />
          </div>

          <button type="submit" className="btn btn-custom w-100">
            Cadastrar
          </button>
          <center>
            <Link to="/login" style={{ color: "white" }}>
              Já possui uma conta? Logar
            </Link>
          </center>
        </form>
      </div>
    </div>
  );
}

export default Cadastro;
