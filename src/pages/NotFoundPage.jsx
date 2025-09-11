import React from 'react';
import { Link } from 'react-router-dom';
import { TriangleAlert } from 'lucide-react';

export default function NotFoundPage() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 text-center px-6">
            <TriangleAlert className="text-[#D83A00]" size={80} />
            <h1 className="mt-6 text-6xl font-extrabold text-[#D83A00]">404</h1>
            <p className="mt-4 text-2xl text-gray-700">Página Não Encontrada</p>
            <p className="mt-2 text-gray-500">
                A página que você está procurando não existe ou foi movida.
            </p>
            <Link
                to="/"
                className="mt-8 inline-block bg-[#D83A00] text-white py-3 px-6 rounded-full font-bold shadow-lg hover:bg-[#b52b00] transition-transform transform hover:scale-105"
            >
                Voltar para a Página Inicial
            </Link>
        </div>
    );
}
