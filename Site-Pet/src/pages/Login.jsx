import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const [form, setForm] = useState({
    email: "",
    senha: "",
  });
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const users = JSON.parse(localStorage.getItem("users")) || [];
    
    const user = users.find(
      (user) => user.email === form.email && user.senha === form.senha
    );

    if (user) {
      alert("Login bem-sucedido!");
      navigate("/landingpage");
    } else {
      setErrorMessage("Email ou senha incorretos.");
    }
  };

  return (
    <div className="login-container gatinho-fundo">
      <div className="form-container">
        <form onSubmit={handleSubmit} className="form-custom p-4 rounded shadow-lg">
          <h2 className="text-center mb-4">Login</h2>

          {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}

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

          <button type="submit" className="btn btn-custom w-100">
            Logar
          </button>
          <center>
            <Link to="/cadastro" style={{ color: "white" }}>
              Não tem uma conta? Cadastre-se
            </Link>
          </center>
        </form>
      </div>
    </div>
  );
}

export default Login;
