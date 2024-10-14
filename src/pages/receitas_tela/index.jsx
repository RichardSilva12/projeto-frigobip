import React from 'react';
import Footer from '../../components/footer/index';
import Header from '../../components/header/index';
import './style.css';

function Receita() {
  return (
    <div className="receita-page">
      <Header />
      <div className="receita-container">
        <h1>RECEITA</h1>
      </div>
      <div className='info-container_tela'>
        {/* Conteúdo adicional pode ser colocado aqui */}
      </div>
      <Footer />
    </div>
  );
}

export default Receita;
