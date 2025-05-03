import React from "react";
import { Link } from "react-router-dom";

const HistoriaEmpresa = () => {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <header style={{ textAlign: 'center', marginBottom: '30px' }}>
        <h1>História da Empresa Pet Junita's</h1>
      </header>

      <section style={{ marginBottom: '20px' }}>
        <h2>Nossa empresa</h2>
        <p>
          Nossa empresa foi criada com a intenção de ajudar pessoas compromissadas com seus animais de estimação. Caso precise fazer 
          viagens longas, nosso site ajuda a não deixar seu pet descuidado. Empregando profissionais para cuidar da melhor forma do seu bichinho.
        </p>
      </section>

      <section style={{ marginBottom: '20px' }}>
        <h2>Inovações</h2>
        <p>
          Nosso diferencial é os nossos cuidadores irem até a residencia do nosso cliente, garantindo o conforto do seu pet, fazendo ele não 
          precisar se acostumar com um ambiente diferente do comum.
        </p>
      </section>

      <section style={{ marginBottom: '20px' }}>
        <h2>Avaliações</h2>
        <p>
          Somos sempre abertos com as avaliações dadas pelos nossos clientes. Queremos sempre o melhor cuidado e profissionalismo
          quando se trata dos animais, sempre contratando os melhores profissionais do mercado.
        </p>
      </section>

      <section style={{ marginBottom: '20px' }}>
        <h2>Contatos</h2>
        <p>
          Entre em contato conosco por nosso emi
        </p>
      </section>

      <footer style={{ textAlign: 'center', marginTop: '40px', fontSize: '14px' }}>

        <p>&copy; 2025 Empresa Pet Junita's. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
};

export default HistoriaEmpresa;