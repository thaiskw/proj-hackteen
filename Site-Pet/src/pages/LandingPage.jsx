import React from 'react';
import './LandingPage.css'; // Vamos adicionar um arquivo CSS separado para estilo.

const LandingPage = () => {
  return (
    <div className="landing-page">
      <div className="container text-center py-5">
        <h1 className="display-3 mb-4">Bem-vindo à PetJanita's!</h1>
        <p className="lead mb-4">
          Conectamos donos de pets com cuidadores apaixonados e confiáveis.
        </p>

        {/* Call-to-action para engajar o usuário */}
        <div className="cta-container mt-5">
          <h2 className="cta-title">Encontre o cuidador ideal para seu pet!</h2>
          <p>
            Navegue pelas opções de cuidadores e faça a escolha perfeita para o seu amigo de quatro patas.
          </p>
          <a href="/cuidadores" className="btn btn-primary btn-lg">Ver Cuidadores</a>
        </div>

        {/* Rodapé com o nome correto */}
        <footer className="mt-5 text-light">
          <p>&copy; 2025 PetJanita's. Todos os direitos reservados.</p>
        </footer>
      </div>
    </div>
  );
};

export default LandingPage;
