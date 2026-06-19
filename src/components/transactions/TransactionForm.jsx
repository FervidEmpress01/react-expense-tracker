import { useState } from "react";
import { useGlobalState } from '../../context/GlobalState'

function TransactionForm() {
    const { addTransaction } = useGlobalState();
    const [description, setDescription] = useState("");
    const [amount, setAmount] = useState("");
    const [type, setType] = useState("expense"); // 'expense' o 'income'

    const onSubmit = (e) => {
        e.preventDefault();
        
        // Aseguramos que el monto final sea positivo o negativo según la selección
        const absoluteAmount = Math.abs(+amount);
        const finalAmount = type === "expense" ? -absoluteAmount : absoluteAmount;

        addTransaction({
            id: window.crypto.randomUUID(),
            description,
            amount: finalAmount,
        });
        setAmount("");
        setDescription("");
    }

    return (
        <div>
            <form onSubmit={onSubmit} className="mt-6">
                
                <div className="flex gap-3 mb-4">
                    <button
                        type="button"
                        onClick={() => setType("expense")}
                        className={`flex-1 py-2 rounded-lg font-semibold text-sm transition-all duration-200 border ${
                            type === "expense" 
                            ? 'bg-red-500/20 text-red-400 border-red-500/50 shadow-[0_0_10px_rgba(239,68,68,0.2)]' 
                            : 'bg-zinc-800 text-zinc-400 border-zinc-700 hover:bg-zinc-700'
                        }`}
                    >
                        Gasto
                    </button>
                    <button
                        type="button"
                        onClick={() => setType("income")}
                        className={`flex-1 py-2 rounded-lg font-semibold text-sm transition-all duration-200 border ${
                            type === "income" 
                            ? 'bg-green-500/20 text-green-400 border-green-500/50 shadow-[0_0_10px_rgba(34,197,94,0.2)]' 
                            : 'bg-zinc-800 text-zinc-400 border-zinc-700 hover:bg-zinc-700'
                        }`}
                    >
                        Ingreso
                    </button>
                </div>

                <input
                    type="text"
                    placeholder="Descripción (ej. Salario, Comida)"
                    onChange={(e) => setDescription(e.target.value)}
                    className="bg-zinc-800 text-white px-4 py-3 rounded-lg block mb-3 w-full border border-zinc-700 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors placeholder-zinc-500"
                    value={description}
                    required
                />

                <input
                    type="number"
                    step="0.01"
                    min="0"
                    placeholder="Monto (ej. 50.00)"
                    onChange={(e) => setAmount(e.target.value)}
                    className="bg-zinc-800 text-white px-4 py-3 rounded-lg block mb-5 w-full border border-zinc-700 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors placeholder-zinc-500"
                    value={amount}
                    required
                />
                <button className="bg-indigo-600 hover:bg-indigo-500 text-white px-4 py-3 rounded-lg block w-full font-semibold transition-colors duration-200 shadow-lg shadow-indigo-500/20">
                    Agregar Transacción
                </button>
            </form>
        </div>
    )
}

export default TransactionForm