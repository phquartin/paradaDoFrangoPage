import React from "react";
import frangoAssado from "../images/frangoAssado.jpeg";
import kitParada from "../images/kitParada.jpeg";
import feijaoTropeiro from "../images/feijaoTropeiro.jpeg";
import batataParada from "../images/batataParada.jpeg";

export default function Galeria() {
    const imagens = [
        { src: frangoAssado, alt: "Frango Assado" },
        { src: kitParada, alt: "Kit Parada" },
        { src: feijaoTropeiro, alt: "Feijão Tropeiro" },
        { src: batataParada, alt: "Batata Parada" },
    ];

    return (
        <section id="fotos" className="mb-20">
            <h2 className="text-center text-4xl lg:text-4xl font-montserrat font-bold text-[#D83A00] mb-4">
                Galeria
            </h2>
            <p className="text-center mb-10 text-lg">Veja nossos principais produtos</p>

            <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-4">
                {imagens.map((img, index) => (
                    <div
                        key={index}
                        className="overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 bg-white"
                    >
                        <img
                            src={img.src}
                            alt={img.alt}
                            className="w-full h-56 object-cover"
                        />
                        <div className="p-3 text-center bg-[#D83A00]">
                            <span className="font-semibold text-white">{img.alt}</span>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
