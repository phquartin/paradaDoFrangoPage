import React from 'react';
import { ShieldAlert } from 'lucide-react';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
        ErrorBoundary._error = error;
        // Atualiza o estado para que a próxima renderização mostre a UI de fallback.
        return { hasError: true };
    }

    // componentDidCatch(error, errorInfo) {
    //     // Você pode registrar o erro em um serviço de relatórios de erro aqui.
    //     console.error("Erro capturado pelo ErrorBoundary:", error, errorInfo);
    // }

    render() {
        if (this.state.hasError) {
            // UI de fallback
            return (
                <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 text-center px-6">
                    <ShieldAlert className="text-red-600" size={80} />
                    <h1 className="mt-6 text-4xl font-extrabold text-red-600">Ocorreu um Erro</h1>
                    <p className="mt-4 text-xl text-gray-700">Algo inesperado aconteceu.</p>
                    <button
                        onClick={() => window.location.reload()}
                        className="mt-8 inline-block bg-red-600 text-white py-3 px-6 rounded-full font-bold shadow-lg hover:bg-red-700 transition-transform transform hover:scale-105"
                    >
                        Recarregar a Página
                    </button>
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
