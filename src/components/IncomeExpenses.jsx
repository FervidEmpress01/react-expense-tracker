import { useGlobalState } from "../context/GlobalState"

function IncomeExpenses() {

    const { transactions } = useGlobalState();

    const amounts = transactions.map(transaction => transaction.amount);

    const income = amounts
        .filter(item => item > 0)
        .reduce((acc, item) => (acc += item), 0)
        .toFixed(2);


    const expense = amounts.filter((item) => item < 0)
        .reduce((acc, item) => acc += item, 0)  
        .toFixed(2) * -1;

    return (
        <div className="flex justify-between gap-4 my-6">
            <div className="bg-zinc-800 flex-1 p-4 rounded-xl border border-zinc-700 shadow-sm flex flex-col items-center">
                <h4 className="text-zinc-400 text-sm font-semibold uppercase tracking-wider mb-1">Ingresos</h4>
                <p className="text-green-400 text-xl font-bold">${income}</p>
            </div>
            <div className="bg-zinc-800 flex-1 p-4 rounded-xl border border-zinc-700 shadow-sm flex flex-col items-center">
                <h4 className="text-zinc-400 text-sm font-semibold uppercase tracking-wider mb-1">Gastos</h4>
                <p className="text-red-400 text-xl font-bold">${expense}</p>
            </div>
        </div>
    )
}

export default IncomeExpenses