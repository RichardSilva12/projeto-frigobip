import React from 'react';
import receita1Img from '../../assets/img/receita1.jpeg';
import receita2Img from '../../assets/img/receita2.jpeg';
import receita3Img from '../../assets/img/receita3.jpeg';
import receita4Img from '../../assets/img/receita4.jpeg';
import './style.css';

// Definindo o componente Receitas
const Receitas = () => {
  const receitas = [
    { id: 1, nome: 'Receita 1', imagem: receita1Img },
    { id: 2, nome: 'Receita 2', imagem: receita2Img },
    { id: 3, nome: 'Receita 3', imagem: receita3Img },
    { id: 4, nome: 'Receita 4', imagem: receita4Img },
  ];

  return (
    <div className="receitas-container">
      <div className="nome">
        <span>Receitas</span>
      </div>
      <br />
      <div className="receitas-items-container">
        {receitas.map((receita) => (
          <div className="receita-item" key={receita.id}>
            <img src={receita.imagem} alt={receita.nome} className="receita-img" />
            <div className="receita-description">
              <span>Descrição da {receita.nome}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Receitas;
