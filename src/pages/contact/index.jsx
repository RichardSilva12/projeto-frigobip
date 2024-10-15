import React from 'react';
import resumeIcon from '../../assets/img/curriculo.png'; // Adicione o caminho correto
import emailIcon from '../../assets/img/email.png'; // Adicione o caminho correto
import phoneIcon from '../../assets/img/telefone.png'; // Adicione o caminho correto
import Footer from '../../components/footer/index';
import Header from '../../components/header/index';
import './style.css';

function Contato() {
  return (
    <div className='page'>
      <Header />

      <div className="contato-container">
        <h1>CONTATO</h1>
      </div>

      <div className="info-container_tela">
        <div className="info-icons">
          <div className="info-item">
            <img src={emailIcon} alt="E-mail" className="info-icon" />
            <p>contato@frigobip.com.br</p>
          </div>
          <div className="info-item">
            <img src={phoneIcon} alt="Telefone" className="info-icon" />
            <p>+55 (14) 3295-9500</p>
          </div>
          <div className="info-item">
            <img src={resumeIcon} alt="Currículo" className="info-icon" />
            <p>Envie seu currículo para rh@frigobip.com.br</p>
          </div>
        </div>

        <div className='forme'>
          <h2>ENVIE SUA MENSAGEM</h2>
          <form className="forme-contato">
            <label>Nome Completo</label>
            <input type="text" placeholder="Digite seu nome completo" />

            <label>Telefone com DDD</label>
            <input type="text" placeholder="Digite seu telefone" />

            <label>E-mail</label>
            <input type="email" placeholder="Digite seu e-mail" />

            <label>Assunto</label>
            <input type="text" placeholder="Assunto" />

            <label>Descrição</label>
            <textarea placeholder="Escreva sua mensagem"></textarea>

            <button type="submit">Enviar</button>
          </form>
        </div>
      </div>

      <div className='mapa'>
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23436.04411183087!2d-48.7694633455818!3d-22.1525466697517!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94bf4d192ea3f967%3A0xb2a4cac3d56ff8e!2sFrigoBip!5e0!3m2!1spt-BR!2sbr!4v1728931824593!5m2!1spt-BR!2sbr" 
          width="100%" 
          height="400" 
          style={{border: 0}} 
          allowFullScreen="" 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade">
        </iframe>
      </div>

      <Footer />
    </div>
  );
}

export default Contato;
