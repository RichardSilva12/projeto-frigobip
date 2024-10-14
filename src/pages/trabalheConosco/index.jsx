import React from 'react';
import Footer from '../../components/footer/index';
import Header from '../../components/header/index';
import './style.css';

function TrabalheConosco() {
  return (
    <div className="page">
      <Header />
      <div className="trabalhe-container">
        <h1>TRABALHE CONOSCO</h1>
      </div>
      <div className='info-container_tela'>
        <div className="form-curriculo-container">
          <form className="form-curriculo">
            <h1>Preencha o formulário abaixo e envie seu Currículo</h1>
            <label>Nome Completo</label>
            <input type="text" placeholder="Digite seu nome completo" />

            <label>RG</label>
            <input type="text" placeholder="Digite seu RG" />

            <label>CPF</label>
            <input type="text" placeholder="Digite seu CPF" />

            <label>Data de Nascimento</label>
            <input type="date" />

            <label>Telefone</label>
            <input type="text" placeholder="Digite seu telefone com DDD" />

            <label>Estado</label>
            <input type="text" placeholder="Digite seu estado" />

            <label>Cidade</label>
            <input type="text" placeholder="Digite sua cidade" />

            <label>Endereço</label>
            <input type="text" placeholder="Digite seu endereço" />

            <label>CEP</label>
            <input type="text" placeholder="Digite seu CEP" />

            <label>Número do Endereço</label>
            <input type="text" placeholder="Digite o número do endereço" />

            <label>Formação Acadêmica</label>
            <input type="text" placeholder="Digite sua formação acadêmica" />

            <label>PCD?</label>
            <select>
              <option value="nao">Não</option>
              <option value="sim">Sim</option>
            </select>

            <label>Qual Deficiência (se houver)</label>
            <input type="text" placeholder="Descreva a deficiência" />

            <label>Descrição para Mensagem</label>
            <textarea placeholder="Escreva uma mensagem"></textarea>

            <button type="submit">Enviar</button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default TrabalheConosco;
