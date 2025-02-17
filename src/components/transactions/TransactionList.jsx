import { useGlobalState } from "../../context/GlobalState"
import  TransactionItem  from "./TransactionItem";
function TransctionList() {
    const { transactions } = useGlobalState();

    return (
        <>
            <h3 className="text-slate-300 text-xl font-bold block w-full">Historial</h3>
            <ul>
                {transactions.map(transaction => (
                    <TransactionItem transaction={transaction} key={transaction.id} />
                ))}
            </ul>
        </>
    )
    

}

export default TransctionList;