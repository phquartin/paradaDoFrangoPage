import React from "react";

// Dados dos itens para facilitar a manutenção
const menuItems = [
    {
        title: "Frango Assado",
        description: "Um delicioso frango marinado em temperos especiais, assado na brasa. Perfeito para uma família.",
        price: "R$ 55,00",
    },
    {
        title: "Meio Frango",
        description: "Metade do nosso suculento frango assado. Perfeito para uma refeição de um casal.",
        price: "R$ 30,00",
    },
    {
        title: "Kit Parada",
        description: "Batatas deliciosas, arroz branco e feijão tropeiro que acompanham seu frango assado.",
        price: "R$ 85,00",
    },
];

// Componente para o card individual
const MenuCard = ({ title, description, price }) => (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 ease-in-out overflow-hidden border-t-8 border-[#FFC300]">
        <div className="p-6">
            <h3 className="text-2xl font-bold text-gray-800 mb-2">{title}</h3>
            <p className="text-gray-600 mb-4">{description}</p>
            <span className="block text-2xl font-bold text-[#D83A00]">{price}</span>
        </div>
    </div>
);

export default function CardapioResumido() {
    return (
        <section id="cardapio" className="py-20 bg-gray-50 relative overflow-hidden">
            {/* Elementos SVG de fundo para decoração */}
            <div className="absolute top-0 left-0 -translate-x-1/4 -translate-y-1/4 opacity-10 pointer-events-none">
                <svg width="600" height="600" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                    <path fill="#FFC300" d="M49.8,-53.4C62,-37,67.5,-18.5,67.8,0.3C68.1,19.1,63.1,38.2,50.2,52.3C37.3,66.4,18.6,75.5,-1.9,76.5C-22.4,77.5,-44.8,70.4,-58,55.5C-71.2,40.6,-75.2,17.9,-71,0.2C-66.8,-17.5,-54.4,-35.1,-39.5,-50.2C-24.6,-65.4,-7.3,-78.1,8.9,-81.1C25.1,-84.1,50.2,-77.4,49.8,-53.4Z" transform="translate(100 100)" />
                </svg>
            </div>
            <div className="absolute bottom-0 right-0 translate-x-1/4 translate-y-1/4 opacity-10 pointer-events-none">
                <svg width="600" height="600" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                    <path fill="#D83A00" d="M39.1,-52.8C52.9,-46.3,67.8,-37.8,73.5,-24.8C79.1,-11.8,75.5,5.8,67.7,19.9C59.9,34,47.9,44.6,34.8,53.4C21.7,62.2,7.5,69.2,-7.8,71.1C-23.1,73,-39.3,69.8,-52.1,60.5C-64.9,51.2,-74.3,35.8,-78.2,19.1C-82.1,2.4,-80.6,-15.6,-71.8,-29.4C-63,-43.2,-47,-52.8,-31.6,-59.1C-16.2,-65.4,-1.4,-68.4,13.2,-65.8C27.9,-63.2,42.5,-55.5,39.1,-52.8Z" transform="translate(100 100)" />
                </svg>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <h2 className="text-center text-4xl lg:text-4xl font-montserrat font-bold text-[#D83A00] mb-4">
                    Cardápio
                </h2>
                <p className="text-center mb-12 text-lg text-gray-700 max-w-2xl mx-auto">
                    Confira alguns de nossos produtos mais deliciosos, feitos com os melhores ingredientes.
                </p>

                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {menuItems.map((item, index) => (
                        <MenuCard key={index} {...item} />
                    ))}
                </div>

                <div className="text-center mt-12">
                    <a
                        href="/cardapio"
                        className="inline-block bg-[#D83A00] text-white py-4 px-8 rounded-full font-bold text-lg shadow-lg hover:bg-[#b52b00] transition-all duration-300 transform hover:scale-105"
                    >
                        Ver Cardápio Completo
                    </a>
                </div>
            </div>
        </section>
    );
}
