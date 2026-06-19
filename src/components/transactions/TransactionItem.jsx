import { useGlobalState } from "../../context/GlobalState";

export function TransactionItem({ transaction }) {
    const { deleteTransaction } = useGlobalState();

    return (
        <li className={`bg-zinc-700 text-white px-4 py-3 rounded-lg w-full flex justify-between items-center border-l-4 shadow-sm group transition-all ${transaction.amount < 0 ? 'border-red-500' : 'border-green-500'}`}>
            <p className="text-sm font-medium">{transaction.description}</p>
            <div className="flex items-center">
                <span className={`mr-2 font-bold text-sm tracking-wide ${transaction.amount < 0 ? 'text-red-400' : 'text-green-400'}`}>
                    {transaction.amount < 0 ? '-' : '+'}${Math.abs(transaction.amount).toFixed(2)}
                </span>
                <button 
                    onClick={() => deleteTransaction(transaction.id)}
                    className="bg-red-500/20 hover:bg-red-500 text-red-400 hover:text-white transition-colors duration-200 font-bold w-7 h-7 flex items-center justify-center rounded-md ml-2 opacity-0 group-hover:opacity-100"
                    title="Eliminar"
                >
                    &times;
                </button>
            </div>
        </li>
    )
}

export default TransactionItem;