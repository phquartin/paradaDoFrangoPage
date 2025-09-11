import Header from "./components/Header.jsx";
import CardapioResumido from "./components/CardapioResumido.jsx";
import Galeria from "./components/Galeria.jsx";
import Localizacao from "./components/Localizacao.jsx";
import Footer from "./components/Footer.jsx";

function App() {
    return (
        <div className="font-roboto text-gray-800 bg-white">
            <Header />
            <main className="max-w-5xl mx-auto px-6 py-12">
                <CardapioResumido />
                <Galeria />
                <Localizacao />
            </main>
            <Footer />
        </div>
    );
}

export default App;