import React from "react";

export default function Footer() {
    // Cores da marca para fácil referência
    const colors = {
        orange: "#D83A00",
        yellow: "#FFC300",
        white: "#FFFFFF",
    };

    // Mesmo path de onda do Header
    const wavePath = "M0,64 C240,128 360,32 720,64 S1080,96 1440,48 L1440,0 L0,0 Z";

    return (
        <footer className="relative bg-white text-center pt-20 pb-8 mt-10 overflow-hidden">
            {/* Contêiner das Ondas Inferiores */}
            <div className="absolute bottom-0 left-0 w-full" style={{ transform: 'scaleY(-1)' }}>
                {/* Onda Amarela (atrás e deslocada) */}
                <div className="absolute top-0 left-0 w-full" style={{ transform: 'translateX(0px) translateY(10px)' }}>
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

            {/* Conteúdo do Footer */}
            <div className="relative z-10">
                <p className="text-white">&copy; {new Date().getFullYear()} Parada do Frango - Todos os direitos reservados.</p>
            </div>
        </footer>
    );
}
