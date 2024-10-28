import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../../components/header/index';
import './style.css'; // Estilização da página do carrinho

function Carrinho() {
  const [carrinho, setCarrinho] = useState([]);
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    const carrinhoSalvo = JSON.parse(localStorage.getItem('carrinho')) || [];
    setCarrinho(carrinhoSalvo);
  }, []);

  const removerProduto = (index) => {
    const novoCarrinho = [...carrinho];
    novoCarrinho.splice(index, 1);
    setCarrinho(novoCarrinho);
    localStorage.setItem('carrinho', JSON.stringify(novoCarrinho));
  };

  const aumentarQuantidade = (index) => {
    const novoCarrinho = [...carrinho];
    novoCarrinho[index].quantidade += 1;
    setCarrinho(novoCarrinho);
    localStorage.setItem('carrinho', JSON.stringify(novoCarrinho));
  };

  const diminuirQuantidade = (index) => {
    const novoCarrinho = [...carrinho];
    if (novoCarrinho[index].quantidade > 1) {
      novoCarrinho[index].quantidade -= 1;
      setCarrinho(novoCarrinho);
      localStorage.setItem('carrinho', JSON.stringify(novoCarrinho));
    }
  };

  // Função para finalizar o pedido
  const finalizarPedido = async () => {
    const pedido = {
      nome: nome,
      email: email,
      produtos: carrinho.map(produto => produto.nome),
    };

    try {
      const response = await fetch('/api/enviar-pedido', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(pedido),
      });

      const result = await response.text();
      alert(result); // Exibe a resposta do servidor
    } catch (error) {
      console.error('Erro ao enviar o pedido:', error);
      alert('Ocorreu um erro ao enviar o pedido. Tente novamente.');
    }
  };

  return (
    <div className="card-page">
      <Header />
      <div className="carrinho-container">
        {/* Link para a página ./produto com estilo de botão e seta */}
        <Link to="/produtos" className="btn-voltar">Voltar</Link>
        <br />
        <h1>Seu Carrinho</h1>
        {carrinho.length === 0 ? (
          <p>Seu carrinho está vazio.</p>
        ) : (
          carrinho.map((produto, index) => (
            <div key={index} className="carrinho-item">
              <img src={produto.imagem} alt={produto.nome} className="carrinho-item-img" />
              <div className="carrinho-item-info">
                <h3>{produto.nome}</h3>
                <p>Quantidade: {produto.quantidade}</p>
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
          <div className="formulario-pedido">
            <h2>Informações do Cliente</h2>
            <input 
              type="text" 
              placeholder="Nome" 
              value={nome} 
              onChange={(e) => setNome(e.target.value)} 
              required 
            />
            <input 
              type="email" 
              placeholder="Email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              required 
            />
            <button className="btn-finalizar" onClick={finalizarPedido}>Finalizar Pedido</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Carrinho;
