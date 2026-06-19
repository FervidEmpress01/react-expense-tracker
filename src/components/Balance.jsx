import { useGlobalState } from '../context/GlobalState'

function Balance() {

    const {transactions} = useGlobalState();

    const amounts = transactions.map(transaction => transaction.
    amount)
    const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2)

    return (
        <div className="flex justify-between items-center bg-zinc-800/50 p-4 rounded-xl border border-zinc-700/50">
            <h3 className="text-zinc-300 text-lg font-medium">Mi Balance</h3>
            <h1 className={`text-3xl font-bold tracking-tight ${total < 0 ? 'text-red-400' : 'text-white'}`}>
                ${total}
            </h1>
        </div>
    )
}

export default Balance