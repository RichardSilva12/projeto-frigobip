import React from 'react';
import { Link } from 'react-router-dom'; // Importe o Link do React Router
import facebookIcon from '../../../src/assets/img/facebook_108044.png';
import instagramIcon from '../../../src/assets/img/instagram_108043.png';
import logo from '../../assets/img/logo-bip.png';
import './style.css';

function Header() {
  return (
    <header className="header"> 
      <div className="logo">
          <img src={logo} alt="Logo" />
      </div> 
      
      <nav className="conteudo">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/institucional">Institucional</Link></li>
          <li><Link to="#">Produtos</Link></li>
          <li><Link to="/receitas_tela">Receitas</Link></li>
          <li><Link to="/trabalheConosco">Trabalhe Conosco</Link></li>
          <li><Link to="/contact">Contato</Link></li>
        </ul>
      </nav>
      <div className="header-right">
        <button>Sign Up</button>
        <button>Log In</button>
      </div>
      <div className="logos">
        <img src={instagramIcon} alt="Instagram" className="social-icon" />
        <img src={facebookIcon} alt="Facebook" className="social-icon" />
      </div>
    </header>
  );
}

export default Header;
