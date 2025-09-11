import React from "react";

export default function Header() {
    return (
        <header className="bg-[#D83A00] text-white text-center py-10">
            <img
                src="../assets/lojo.JPG"
                alt="Logo Parada do Frango"
                className="mx-auto mb-4 max-w-[150px]"
            />
            <h1 className="text-3xl font-montserrat">Bem-vindo à Parada do Frango!</h1>
            <p className="mt-2">Sabor e qualidade que você encontra aqui.</p>
        </header>
    );
}