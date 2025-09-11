import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Layout from './components/Layout';
import Home from './pages/PaginaPrincipal.jsx';
import CardapioCompleto from './pages/CardapioCompleto';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                {/* Todas as rotas dentro de Layout terão o botão do WhatsApp */}
                <Route path="/" element={<Layout />}>
                    {/* A rota principal (/) renderiza a página Home */}
                    <Route index element={<Home />} />
                    {/* A rota /cardapio renderiza o cardápio completo */}
                    <Route path="cardapio" element={<CardapioCompleto />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
