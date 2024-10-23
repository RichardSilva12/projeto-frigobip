import React, { useEffect, useState } from 'react';
import Footer from '../../../components/footer/index';
import Header from '../../../components/header/index';
import './style.css'; // Estilização da página do carrinho

function Carrinho() {
  const [carrinho, setCarrinho] = useState([]);
  
  // Carrega o estado do carrinho do localStorage ao carregar a página
  useEffect(() => {
    const carrinhoSalvo = JSON.parse(localStorage.getItem('carrinho')) || [];
    setCarrinho(carrinhoSalvo);
  }, []);

  // Função para remover um produto do carrinho
  const removerProduto = (index) => {
    const novoCarrinho = [...carrinho];
    novoCarrinho.splice(index, 1); // Remove o produto do carrinho
    setCarrinho(novoCarrinho);
    localStorage.setItem('carrinho', JSON.stringify(novoCarrinho)); // Atualiza no localStorage
  };

  // Função para aumentar a quantidade de um produto
  const aumentarQuantidade = (index) => {
    const novoCarrinho = [...carrinho];
    novoCarrinho[index].quantidade += 1; // Aumenta a quantidade
    setCarrinho(novoCarrinho);
    localStorage.setItem('carrinho', JSON.stringify(novoCarrinho)); // Atualiza no localStorage
  };

  // Função para diminuir a quantidade de um produto
  const diminuirQuantidade = (index) => {
    const novoCarrinho = [...carrinho];
    if (novoCarrinho[index].quantidade > 1) {
      novoCarrinho[index].quantidade -= 1; // Diminui a quantidade
      setCarrinho(novoCarrinho);
      localStorage.setItem('carrinho', JSON.stringify(novoCarrinho)); // Atualiza no localStorage
    }
  };

  return (
    <div className="page">
      <Header />
      <div className="carrinho-container">
        <h1>Seu Carrinho</h1>
        {carrinho.length === 0 ? (
          <p>Seu carrinho está vazio.</p>
        ) : (
          carrinho.map((produto, index) => (
            <div key={index} className="carrinho-item">
              <img src={produto.imagem} alt={produto.nome} className="carrinho-item-img" />
              <div className="carrinho-item-info">
                <h3>{produto.nome}</h3>
                <p>{produto.descricao}</p>
                <div className="carrinho-item-controls">
                  <button onClick={() => diminuirQuantidade(index)}>-</button>
                  <span>{produto.quantidade}</span>
                  <button onClick={() => aumentarQuantidade(index)}>+</button>
                </div>
                <button onClick={() => removerProduto(index)} className="btn-remover">Remover</button>
              </div>
            </div>
          ))
        )}
        {carrinho.length > 0 && (
          <button className="btn-finalizar">Finalizar Pedido</button>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default Carrinho;
