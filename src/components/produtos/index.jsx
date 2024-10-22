
import React from 'react';
import image1 from '../../../src/assets/img_produtos/produto1.png';
import image2 from '../../../src/assets/img_produtos/produto2.png';
import image3 from '../../../src/assets/img_produtos/produto3.png';
import image4 from '../../../src/assets/img_produtos/produto4.png';
import image5 from '../../../src/assets/img_produtos/produto5.png';
import './style.css';

const Produtos = () => {
  const produtos = [
    { id: 1, nome: 'Produto 1', imagem: image1 },
    { id: 2, nome: 'Produto 2', imagem: image2 },
    { id: 3, nome: 'Produto 3', imagem: image3 },
    { id: 4, nome: 'Produto 4', imagem: image4 },
    { id: 5, nome: 'Produto 5', imagem: image5 },
  ];

  return (
    <div className="produtos-container-home">
      <div className="nome">
        <span>PRODUTOS DISPONIVEIS</span>
      </div>
      <div className="produto-items-home">
        {produtos.map((produto) => (
          <div className="produto-item" key={produto.id}>
            <img src={produto.imagem} alt={produto.nome} className="produto-img" />
            <div className="produto-overlay">
              <span>{produto.nome}</span>
            </div>
          </div>
        ))}
      </div>
      <div className="produtos-info">
        <span>VEJA MAIS SOBRE NOSSOS PRODUTOS</span>
        <button className="btn-veja-mais">AQUI</button>
      </div>
    </div>
  );
};

export default Produtos;
