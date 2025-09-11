import React from 'react';
import { Outlet } from 'react-router-dom';
import { MessageCircle } from 'lucide-react';

export default function Layout() {
    const whatsappUrl = "https://wa.me/5561993014664";

    return (
        <div className="font-roboto text-gray-800 bg-white">
            {/* O Outlet renderiza o componente da rota atual (Home, Cardapio, etc.) */}
            <Outlet />

            {/* O botão do WhatsApp fica aqui para aparecer em todas as páginas */}
            <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition transform hover:scale-110 z-50"
            >
                <MessageCircle size={32} />
            </a>
        </div>
    );
}
