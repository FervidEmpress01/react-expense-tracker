import { useGlobalState } from "../../context/GlobalState"
import  TransactionItem  from "./TransactionItem";
function TransctionList() {
    const { transactions } = useGlobalState();

    return (
        <div className="flex flex-col flex-1 mt-4">
            <h3 className="text-zinc-300 text-lg font-semibold border-b border-zinc-700 pb-2 mb-3">Historial</h3>
            <ul className="overflow-y-auto max-h-[300px] pr-2 space-y-2">
                {transactions.map(transaction => (
                    <TransactionItem transaction={transaction} key={transaction.id} />
                ))}
            </ul>
        </div>
    )
    

}

export default TransctionList;