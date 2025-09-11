import React from 'react';
import {Home} from 'lucide-react';

const menuData = {
    frangos: [
        {
            name: "Frango Assado Inteiro",
            description: "Nosso carro-chefe, marinado em temperos especiais e assado na brasa.",
            price: "R$ 55,00"
        },
        {
            name: "Meio Frango Assado",
            description: "Metade do nosso suculento frango. Ideal para uma ou duas pessoas.",
            price: "R$ 30,00"
        }
    ],
    kits: [
        {
            name: "Kit Parada (Frango Inteiro)",
            description: "Frango Assado + Feijão Tropeiro + Batata Parada + Arroz Branco.",
            price: "R$ 85,00"
        },
        {
            name: "Kit Parada (Meio Frango)",
            description: "Meio Frango Assado + Feijão Tropeiro + Batata Parada + Arroz Branco.",
            price: "R$ 65,00"
        }
    ],
    porcoes: [
        { name: "Maionese 400g", price: "R$ 20,00" },
        { name: "Vinagrete 180g", price: "R$ 10,00" },
        { name: "Arroz Branco 400g", price: "R$ 10,00" },
        { name: "Feijão Tropeiro 400g", price: "R$ 20,00" },
        { name: "Batata Parada 400g", price: "R$ 10,00" },
        { name: "Batata Chips Juju 100g", price: "R$ 12,00" },
        { name: "Farofa 180g", price: "R$ 10,00" },
    ],
    refrigerantes: [
        { name: "Coca Cola 2 litros", price: "R$ 12,00" },
        { name: "Guaraná/Fanta Laranja 2 litros", price: "R$ 10,00" },
        { name: "Coca Cola 600 ml", price: "R$ 8,00" },
        { name: "Guaraná lata 269 ml", price: "R$ 4,00" },
        { name: "Coca Cola lata 310 ml", price: "R$ 6,00" },
        { name: "Água com gás", price: "R$ 5,00" },
        { name: "Água sem gás", price: "R$ 4,00" },
        { name: "Água de coco 200 ml", price: "R$ 4,00" },
    ],
    cervejas: [
        { name: "Heineken Long Neck 330 ml", price: "R$ 12,00" },
        { name: "Amstel/Petra lata 269 ml", price: "R$ 5,00" },
    ]
};

// Componente reutilizável para um item do cardápio com estilo clássico
const MenuItem = ({ name, description, price }) => (
    <div className="py-4">
        <div className="flex justify-between items-baseline gap-2">
            <h4 className="text-lg font-bold text-gray-800">{name}</h4>
            <div className="flex-grow border-b-2 border-dotted border-gray-300 mx-2"></div>
            <span className="text-lg font-bold text-[#D83A00]">{price}</span>
        </div>
        {description && <p className="mt-1 text-gray-600 text-sm">{description}</p>}
    </div>
);

// Componente para uma seção/categoria do cardápio
const CategorySection = ({ title, items }) => (
    <div className="mb-12 break-inside-avoid">
        <h3 className="text-3xl font-extrabold text-[#D83A00] border-l-8 border-[#FFC300] pl-4 mb-6">
            {title}
        </h3>
        <div className="space-y-2">
            {items.map((item, index) => (
                <MenuItem key={index} {...item} />
            ))}
        </div>
    </div>
);

export default function CardapioCompleto() {

    return (
        <div className="bg-gray-50 relative overflow-hidden">
            {/* Elementos de fundo */}
            <div className="absolute top-0 left-0 -translate-x-1/3 opacity-10 pointer-events-none">
                <svg width="800" height="800" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><path fill="#FFC300" d="M49.8,-53.4C62,-37,67.5,-18.5,67.8,0.3C68.1,19.1,63.1,38.2,50.2,52.3C37.3,66.4,18.6,75.5,-1.9,76.5C-22.4,77.5,-44.8,70.4,-58,55.5C-71.2,40.6,-75.2,17.9,-71,0.2C-66.8,-17.5,-54.4,-35.1,-39.5,-50.2C-24.6,-65.4,-7.3,-78.1,8.9,-81.1C25.1,-84.1,50.2,-77.4,49.8,-53.4Z" transform="translate(100 100)" /></svg>
            </div>

            <header className="py-12 bg-white/50 backdrop-blur-sm">
                <div className="container mx-auto px-6 text-center">
                    <h1 className="text-5xl font-montserrat font-extrabold text-[#D83A00]">
                        Nosso Cardápio
                    </h1>
                    <p className="mt-4 text-xl text-gray-700">
                        Todo o sabor da Parada do Frango em um só lugar.
                    </p>
                </div>
            </header>

            <main className="container mx-auto px-6 py-16">
                <div className="md:grid md:grid-cols-2 md:gap-x-16">
                    {/* Coluna 1 */}
                    <div>
                        <CategorySection title="Frangos Assados" items={menuData.frangos} />
                        <CategorySection title="Kits Parada" items={menuData.kits} />
                        <CategorySection title="Porções" items={menuData.porcoes} />
                    </div>
                    {/* Coluna 2 */}
                    <div>
                        <CategorySection title="Refrigerantes e Águas" items={menuData.refrigerantes} />
                        <CategorySection title="Cervejas" items={menuData.cervejas} />
                    </div>
                </div>

                <div className="text-center mt-12">
                    <a href="/" className="inline-flex items-center gap-2 bg-[#D83A00] text-white py-3 px-6 rounded-full font-bold shadow-lg hover:bg-[#b52b00] transition-transform transform hover:scale-105">
                        <Home size={20} />
                        Voltar à Página Inicial
                    </a>
                </div>
            </main>

        </div>
    );
}

