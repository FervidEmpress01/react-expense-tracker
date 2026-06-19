import { useGlobalState } from '../context/GlobalState';

function DataSync() {
    const { transactions, importTransactions } = useGlobalState();

    const exportData = () => {
        const dataStr = JSON.stringify(transactions);
        navigator.clipboard.writeText(dataStr).then(() => {
            alert("¡Datos copiados! Pégalos en tu celular o guárdalos de forma segura.");
        }).catch(err => {
            alert("Error al copiar: " + err);
        });
    };

    const importData = () => {
        const dataStr = prompt("Pega aquí tus datos copiados anteriormente:");
        if (!dataStr) return;

        try {
            const parsedData = JSON.parse(dataStr);
            if (Array.isArray(parsedData)) {
                importTransactions(parsedData);
                alert("¡Datos importados exitosamente!");
            } else {
                alert("Formato de datos no válido.");
            }
        } catch (err) {
            alert("Error al importar: el texto no es válido.");
        }
    };

    return (
        <div className="flex justify-center gap-4 mt-6">
            <button 
                onClick={exportData}
                className="text-zinc-400 hover:text-white text-sm flex items-center transition-colors"
                title="Copiar datos al portapapeles"
            >
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>
                Exportar Datos
            </button>
            <button 
                onClick={importData}
                className="text-zinc-400 hover:text-white text-sm flex items-center transition-colors"
                title="Pegar datos previamente copiados"
            >
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" /></svg>
                Importar Datos
            </button>
        </div>
    );
}

export default DataSync;
