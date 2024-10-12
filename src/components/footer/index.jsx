import React from 'react';
import logo from '../../assets/img/logo-bip.png';
import './style.css';

const Footer = () => {  
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <img src={logo} className="logo" />
            <ul className="social-media">
              <li>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-instagram"></i>
                </a>
              </li>
              <li>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-facebook-f"></i>
                </a>
              </li>
              <li>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </li>
            </ul>
          </div>
          <div className="conteudo">
            <h3>Contato</h3>
            <p>+55 (17) 3301 4031/4028</p>
            <p>faleconosco@Bip.com.br</p>
            
          </div>
          <div className="conteudo">
            <h3>Endereço</h3>
            <p>Rua Penita, 2450, Boa Vista, São José do Rio Preto - SP, 15.025-150</p>
            <h3>Horário de Atendimento</h3>
            <p>Segunda à sexta: das 7:30h às 12:00h e das 13:30h às 17:30h</p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <p className="copyright">
              &copy; {new Date().getFullYear()} Bip. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
