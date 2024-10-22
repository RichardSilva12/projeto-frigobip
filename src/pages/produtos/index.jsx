import React, { useState } from 'react';
import cartIcon from '../../assets/img_produtos/carrinhoCompras.png';
import Footer from '../../components/footer/index';
import Header from '../../components/header/index';
import './style.css';

/* import image product */
import produto1Img from '../../assets/img_produtos/produto1.png';
import produto10Img from '../../assets/img_produtos/produto10.png';
import produto2Img from '../../assets/img_produtos/produto2.png';
import produto3Img from '../../assets/img_produtos/produto3.png';
import produto4Img from '../../assets/img_produtos/produto4.png';
import produto5Img from '../../assets/img_produtos/produto5.png';
import produto6Img from '../../assets/img_produtos/produto6.png';
import produto7Img from '../../assets/img_produtos/produto7.png';
import produto8Img from '../../assets/img_produtos/produto8.png';
import produto9Img from '../../assets/img_produtos/produto9.png';

function Produtos() {
  const produtos = [
    { id: 1, nome: 'Frango Inteiro', imagem: produto1Img },
    { id: 2, nome: 'Coxinha', imagem: produto2Img },
    { id: 3, nome: 'Asa', imagem: produto3Img },
    { id: 4, nome: 'Tulipa', imagem: produto4Img },
    { id: 5, nome: 'Sobrecoxa', imagem: produto5Img },
    { id: 6, nome: 'Peito', imagem: produto6Img },
    { id: 7, nome: 'Coração', imagem: produto7Img },
    { id: 8, nome: 'Pé', imagem: produto8Img },
    { id: 9, nome: 'Fígado', imagem: produto9Img },
    { id: 10, nome: 'Moela', imagem: produto10Img },
  ];

  // Estado para controlar a quantidade de cada produto (opcional, pode ser removido se não for mais necessário)
  const [quantidades, setQuantidades] = useState(Array(produtos.length).fill(0));

  // Função para comprar o produto
  const comprarProduto = (index) => {
    const novasQuantidades = [...quantidades];
    novasQuantidades[index] += 1; // Adiciona uma unidade ao carrinho
    setQuantidades(novasQuantidades);
    alert(`${produtos[index].nome} foi adicionado ao carrinho!`); // Exibe uma mensagem de confirmação
  };

  return (
    <div className='page'>
      <Header />
      {/* Ícone do carrinho flutuante */}
      <a href="#">
        <img src={cartIcon} alt="Carrinho" className="cart-icon-float" />
      </a>
      <div className="produtos-container">
        <h1>NOSSOS PRODUTOS</h1>
      </div>
      <div className="info-container_produto">
        <div className="produto-grid">
          {produtos.map((produto, index) => (
            <div key={produto.id} className="produto-texto">
              <img src={produto.imagem} alt={produto.nome} className="produto-img-texto" />
              <div className="produto-info">
                <h3>{produto.nome}</h3>
                <a href="https://www.youtube.com/watch?v=DRq_6wLRLEI" className="receita-link">
                  <button className='btn-leia-mais'>Leia mais</button>
                </a>
                <button className="btn-comprar" onClick={() => comprarProduto(index)}>COMPRAR</button>
              </div>
            </div>
          ))}
        </div>
        <button className="carregar-mais-produto">Carregar mais</button>
      </div>
      <Footer />
    </div>
  );
}

export default Produtos;
