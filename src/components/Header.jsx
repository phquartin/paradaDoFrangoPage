import React from "react";
import logo from "../images/lojo.JPG";

export default function Header() {
    // Cores da marca para fácil referência
    const colors = {
        orange: "#D83A00",
        yellow: "#FFC300",
        white: "#FFFFFF",
    };

    // Path de onda
    const wavePath = "M0,64 C240,128 360,32 720,64 S1080,96 1440,48 L1440,0 L0,0 Z";

    return (
        <header className="relative bg-white text-center overflow-hidden">
            {/* Contêiner das Ondas Superiores */}
            <div className="absolute top-0 left-0 w-full h-auto">
                {/* Onda Amarela (atrás e deslocada) */}
                <div className="absolute top-0 left-0 w-full" style={{ transform: 'translateX(0px) translateY(10px)'  }}>
                    <svg viewBox="0 0 1440 120" preserveAspectRatio="none" className="w-full h-auto block">
                        <path
                            fill={colors.yellow}
                            d={wavePath}
                        />
                    </svg>
                </div>
                {/* Onda Laranja (na frente) */}
                <div className="absolute top-0 left-0 w-full">
                    <svg viewBox="0 0 1440 120" preserveAspectRatio="none" className="w-full h-auto block">
                        <path
                            fill={colors.orange}
                            d={wavePath}
                        />
                    </svg>
                </div>
            </div>

            {/* Conteúdo Central */}
            <div className="relative z-10 pt-28 pb-12 px-6">
                <img
                    src={logo}
                    alt="Logo Parada do Frango"
                    className="mx-auto mb-4 w-full max-w-[150px] sm:max-w-[180px]"
                />
                <h1
                    className="text-3xl lg:text-4xl font-montserrat font-bold"
                    style={{ color: colors.orange }}
                >
                    Bem-vindo à Parada do Frango!
                </h1>
                <p className="mt-2 text-lg text-gray-600">
                    Sabor e qualidade que você encontra aqui.
                </p>
            </div>
        </header>
    );
}

