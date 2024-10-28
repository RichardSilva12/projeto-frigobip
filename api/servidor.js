const express = require('express');
const nodemailer = require('nodemailer');
const app = express();
const PORT = 5000;

// Middleware para interpretar JSON
app.use(express.json());

// Configuração do transportador do Nodemailer
const transporter = nodemailer.createTransport({
  service: 'gmail', // ou qualquer provedor que você esteja usando
  auth: {
    user: 'malokasilva123.123@gmail.com', // substitua pelo seu email
    pass: 'senhaRI123' // substitua pela sua senha
  }
});

// Endpoint para envio do pedido
app.post('/api/send-order', (req, res) => {
  const { produtos, cliente } = req.body;

  // Estrutura do conteúdo do email
  const listaProdutos = produtos.map(produto => (
    `- ${produto.nome} (Quantidade: ${produto.quantidade})`
  )).join('\n');

  const mailOptions = {
    from: 'malokasilva123.123@gmail.com',
    to: 'richard.a.peghin@gmail.com',
    subject: 'Novo Pedido de Produtos',
    text: `Cliente: ${cliente.nome}\n\nEndereço: ${cliente.endereco}\n\nProdutos:\n${listaProdutos}`
  };

  // Envio do e-mail
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).json({ error: 'Erro ao enviar pedido' });
    }
    res.status(200).json({ message: 'Pedido enviado com sucesso!' });
  });
});

// Inicia o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
