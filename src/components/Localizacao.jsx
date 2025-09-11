import React from "react";
import { MapPin, Phone, Clock, Store } from 'lucide-react';

// Card de informação reutilizável
const InfoCard = ({ icon, title, children }) => (
    <div className="flex items-start space-x-4">
        <div className="flex-shrink-0 bg-[#FFC300] p-4 rounded-full text-white">
            {icon}
        </div>
        <div>
            <h3 className="text-xl font-bold text-gray-800">{title}</h3>
            <div className="text-gray-600 mt-1">{children}</div>
        </div>
    </div>
);

export default function Localizacao() {
    const googleMapsUrl = "https://www.google.com/maps/place/Parada+do+Frango/@-15.7979294,-47.9212673,19z/data=!4m6!3m5!1s0x935a3b005b8dd3f5:0x817517756e95b35b!8m2!3d-15.7978777!4d-47.9212898!16s%2Fg%2F11xkjl29qf?entry=ttu";
    const whatsappUrl = "https://wa.me/5561993014664";
    const ifoodUrl = "https://www.ifood.com.br/delivery/brasilia-df/parada-do-frango-setor-sudoeste/a15027ea-1b19-4b17-8287-bbb498d34380?utm_medium=share";
    const mapEmbedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d959.8000490714152!2d-47.92185563334234!3d-15.79787769882236!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935a3b005b8dd3f5%3A0x817517756e95b35b!2sParada%20do%20Frango!5e0!3m2!1spt-BR!2sbr!4v1726003259952!5m2!1spt-BR!2sbr";

    return (
        <section id="localizacao" className="py-20 bg-gray-50 relative overflow-hidden">
            {/* Elementos SVG de fundo */}
            <div className="absolute top-0 right-0 -translate-y-1/3 translate-x-1/3 opacity-10 pointer-events-none">
                <svg width="800" height="800" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                    <path fill="#D83A00" d="M49.8,-53.4C62,-37,67.5,-18.5,67.8,0.3C68.1,19.1,63.1,38.2,50.2,52.3C37.3,66.4,18.6,75.5,-1.9,76.5C-22.4,77.5,-44.8,70.4,-58,55.5C-71.2,40.6,-75.2,17.9,-71,0.2C-66.8,-17.5,-54.4,-35.1,-39.5,-50.2C-24.6,-65.4,-7.3,-78.1,8.9,-81.1C25.1,-84.1,50.2,-77.4,49.8,-53.4Z" transform="translate(100 100)" />
                </svg>
            </div>
            <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/3 opacity-10 pointer-events-none">
                <svg width="700" height="700" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                    <path fill="#FFC300" d="M39.1,-52.8C52.9,-46.3,67.8,-37.8,73.5,-24.8C79.1,-11.8,75.5,5.8,67.7,19.9C59.9,34,47.9,44.6,34.8,53.4C21.7,62.2,7.5,69.2,-7.8,71.1C-23.1,73,-39.3,69.8,-52.1,60.5C-64.9,51.2,-74.3,35.8,-78.2,19.1C-82.1,2.4,-80.6,-15.6,-71.8,-29.4C-63,-43.2,-47,-52.8,-31.6,-59.1C-16.2,-65.4,-1.4,-68.4,13.2,-65.8C27.9,-63.2,42.5,-55.5,39.1,-52.8Z" transform="translate(100 100)" />
                </svg>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <h2 className="text-center text-4xl lg:text-4xl font-montserrat font-bold text-[#D83A00] mb-4">
                    Onde nos Encontrar
                </h2>

                <div className="grid lg:grid-cols-5 gap-12 items-center">
                    {/* Coluna de Informações */}
                    <div className="lg:col-span-2 space-y-10">
                        <InfoCard icon={<MapPin size={28} />} title="Endereço">
                            <p>CLSW 301, Bloco C, Loja 126<br />Sudoeste, Brasília - DF</p>
                            <a href={googleMapsUrl} target="_blank" rel="noopener noreferrer" className="text-[#D83A00] font-bold mt-2 inline-block hover:underline">
                                Ver no mapa
                            </a>
                        </InfoCard>

                        <InfoCard icon={<Phone size={28} />} title="Telefone para Pedidos">
                            <p className="text-lg">(61) 99301-4664</p>
                            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="text-[#D83A00] font-bold mt-2 inline-block hover:underline">
                                Chamar no WhatsApp
                            </a>
                        </InfoCard>

                        <InfoCard icon={<Store size={28} />} title="Ifood">
                            <p className="text-lg">Sábados e Domingos</p>
                            <a href={ifoodUrl} target="_blank" rel="noopener noreferrer" className="text-[#D83A00] font-bold mt-2 inline-block hover:underline">
                                Acessar no Ifood
                            </a>
                        </InfoCard>

                        <InfoCard icon={<Clock size={28} />} title="Horário de Funcionamento">
                            <p>Terça a Domingo (Incluindo feriados) <br />10:00 às 15:00</p>
                        </InfoCard>
                    </div>

                    {/* Coluna do Mapa */}
                    <div className="lg:col-span-3 rounded-xl overflow-hidden shadow-2xl h-80 lg:h-[450px]">
                        <iframe
                            src={mapEmbedUrl}
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Localização da Parada do Frango"
                        ></iframe>
                    </div>
                </div>
            </div>
        </section>
    );
}

