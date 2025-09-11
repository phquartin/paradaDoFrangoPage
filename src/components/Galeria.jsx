import React from "react";

export default function Galeria() {
    return (
        <section id="fotos" className="mb-20">
            <h2 className="text-center text-4xl font-montserrat text-[#D83A00] mb-4">
                Nossa Galeria
            </h2>
            <p className="text-center mb-10 text-lg">Confira nossos produtos</p>

            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4">
                <img src="/logo.png" alt="Produto" className="rounded-lg shadow" />
                <img src="/logo.png" alt="Produto" className="rounded-lg shadow" />
                <img src="/logo.png" alt="Produto" className="rounded-lg shadow" />
                <img src="/logo.png" alt="Produto" className="rounded-lg shadow" />
            </div>
        </section>
    );
}
