import React from 'react';
import Footer from '../../components/footer/index';
import Header from '../../components/header/index';
import './style.css';

function Institucional() {
  return (
    <div className='page'>
      <Header />
      <div className="empresa-container">
        <h1>NOSSA EMPRESA</h1>
      </div>
      <div className="info-container_tela">
      </div>
      <Footer />
    </div>
  );
}

export default Institucional;
