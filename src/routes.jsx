// src/routes.jsx
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Contato from './pages/contact/index'; // Certifique-se de que o caminho e nome do arquivo estão corretos
import Home from './pages/home/index'; // Certifique-se de que o caminho e nome do arquivo estão corretos
import Institucional from './pages/institucional/index';
import Receita from './pages/receitas_tela/index';
import TrabalheConosco from './pages/trabalheConosco/index';
function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contato />} />
        <Route path="/receitas_tela" element={<Receita />} />
        <Route path="/institucional" element={<Institucional />} />
        <Route path="/trabalheConosco" element={<TrabalheConosco />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
