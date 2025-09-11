import React from "react";

export default function CardapioResumido() {
    return (
        <section id="cardapio" className="mb-20">
            <h2 className="text-center text-4xl font-montserrat text-[#D83A00] mb-4">
                Nosso Cardápio
            </h2>
            <p className="text-center mb-10 text-lg">
                Confira alguns de nossos produtos mais deliciosos.
            </p>

            <div className="text-center mb-10">
                <a
                    href="/cardapio"
                    className="inline-block bg-[#D83A00] text-white py-3 px-6 rounded-full font-bold transition hover:bg-[#b52b00]"
                >
                    Ver Cardápio Completo
                </a>
            </div>

            <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
                <div className="bg-gray-50 border-l-4 border-[#FFC300] p-6 rounded-lg shadow hover:-translate-y-1 transition">
                    <h3 className="text-xl font-bold mb-2">Frango Assado</h3>
                    <p>Um delicioso frango marinado em temperos especiais, assado na brasa.</p>
                    <span className="block mt-3 font-bold text-[#D83A00]">R$ 55,00</span>
                </div>
                <div className="bg-gray-50 border-l-4 border-[#FFC300] p-6 rounded-lg shadow hover:-translate-y-1 transition">
                    <h3 className="text-xl font-bold mb-2">Meio Frango</h3>
                    <p>Metade do nosso suculento frango assado. Perfeito para uma refeição individual.</p>
                    <span className="block mt-3 font-bold text-[#D83A00]">R$ 30,00</span>
                </div>
                <div className="bg-gray-50 border-l-4 border-[#FFC300] p-6 rounded-lg shadow hover:-translate-y-1 transition">
                    <h3 className="text-xl font-bold mb-2">Kit Parada</h3>
                    <p>Batatas deliciosas, arroz branco e feijão tropeiro que acompanham seu frango assado.</p>
                    <span className="block mt-3 font-bold text-[#D83A00]">R$ 85,00</span>
                </div>
            </div>
        </section>
    );
}
