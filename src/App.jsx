import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Layout from './components/Layout';
import Home from './pages/PaginaPrincipal.jsx';
import CardapioCompleto from './pages/CardapioCompleto';
import ErrorBoundary from "./pages/ErrorBoundary.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";

function App() {
    return (
        <BrowserRouter>
            {/* O ErrorBoundary envolve toda a aplicação para capturar erros */}
            <ErrorBoundary>
                <Routes>
                    {/* As rotas principais (com Header, Footer, botão de Zap) ficam dentro do Layout */}
                    <Route path="/" element={<Layout />}>
                        {/* A rota inicial (/) renderiza a página Home */}
                        <Route index element={<Home />} />

                        {/* A rota /cardapio renderiza o cardápio completo */}
                        <Route path="cardapio" element={<CardapioCompleto />} />
                    </Route>

                    {/* A rota '*' (catch-all) renderiza a página 404 para qualquer URL não encontrada */}
                    {/* Ela fica fora do Layout para não exibir header/footer na página de erro */}
                    <Route path="*" element={<NotFoundPage />} />
                </Routes>
            </ErrorBoundary>
        </BrowserRouter>
    );
}

export default App;
