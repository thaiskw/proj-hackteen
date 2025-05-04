import React from "react";

const LandingPage = () => {
  return (
    <div className="landing-container">
      <div className="text-overlay">
        <h1 className="title">Encontre o cuidador ideal para o seu pet!</h1>
        <p className="description">
          Com a PetJanita's você encontra cuidadores de pets com facilidade, segurança e profissionalidade.
        </p>
      </div>

      <div className="features">
        <h3>Benefícios</h3>
        <ul>
          <li>Conecte-se facilmente com cuidadores qualificados.</li>
          <li>Plataforma segura e confiável.</li>
          <li>Encontre o melhor cuidado para o seu pet.</li>
        </ul>
      </div>
    </div>
  );
};

export default LandingPage;
