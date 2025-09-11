import React from "react";

export default function Localizacao() {
    return (
        <section id="localizacao" className="bg-yellow-50 p-8 rounded-lg shadow">
            <h2 className="text-center text-4xl font-montserrat text-[#D83A00] mb-6">
                Onde nos Encontrar
            </h2>
            <div className="text-center space-y-6">
                <div>
                    <h3 className="font-bold text-lg">Endereço</h3>
                    <p>CLSW 301, Bloco C, Loja 126<br />Sudoeste, Brasília - DF</p>
                </div>
                <div>
                    <h3 className="font-bold text-lg">Telefone para Pedidos</h3>
                    <p>(61) 99301-4664 (WhatsApp)</p>
                </div>
                <div>
                    <h3 className="font-bold text-lg">Horário de Funcionamento</h3>
                    <p>Terça a Domingo<br />10:00 às 15:00</p>
                </div>
            </div>
        </section>
    );
}
