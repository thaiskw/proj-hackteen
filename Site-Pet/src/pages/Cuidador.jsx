import React from 'react';

const caregivers = [
  {
    id: 1,
    name: 'Heloisa Lima',
    specialty: 'Cães e Gatos',
    photo: './heloisa.jpeg',
    contact: 'helocontato@gmail.com'
  },
  {
    id: 2,
    name: 'João Oliveira',
    specialty: 'Pássaros em geral',
    photo: './joao.jpeg',
    contact: 'joaocontato@email.com'
  },
  {
    id: 3,
    name: 'Carla Diaz',
    specialty: 'Gatos e Coelhos',
    photo: './carla.jpeg',
    contact: 'carlacontato@email.com'
  },
  {
    id: 4,
    name: 'Marcos Fontes',
    specialty: 'Cachorros em geral',
    photo: './marcos.jpeg',
    contact: 'marcoscontato@email.com'
  },
  {
    id: 5,
    name: 'Luisa Costa',
    specialty: 'Cachorros, Gatos e Pássaros',
    photo: './luisa.jpeg',
    contact: 'luisacontato@email.com'
  },
  {
    id: 6,
    name: 'Nicolas De Melo',
    specialty: 'Coelhos e Porquinhos da Índia',
    photo: './nicolas.jpeg',
    contact: 'nicolascontato@email.com'
  },
];

const AnimalCaregivers = () => {
  return (
    <div id='fundo-cuidadores' style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>🐾 Cuidadores de Animais</h1>

      {/* Container de cartões */}
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '20px',
        justifyContent: 'center',
        alignItems: 'flex-start'
      }}>
        {caregivers.map((caregiver) => (
          <div key={caregiver.id} style={{
            border: '2px solid #ccc',
            borderRadius: '10px',
            padding: '20px',
            width: '250px',
            textAlign: 'center',
            backgroundColor: '#f9f9f9'
          }}>
            <img
              src={caregiver.photo}
              alt={caregiver.name}
              style={{ borderRadius: '50%', width: '100px', height: '100px' }}
            />
            <h3>{caregiver.name}</h3>
            <p><strong>Especialidade:</strong> {caregiver.specialty}</p>
            <button onClick={() => alert(`Contato: ${caregiver.contact}`)} style={{
              backgroundColor: '#ffeaad',
              color: '#1c2130',
              padding: '10px 15px',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer'
            }}>
              Entrar em Contato
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

function Cuidador() {
  return <AnimalCaregivers />;
}

export default Cuidador;