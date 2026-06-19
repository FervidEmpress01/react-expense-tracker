import { GlobalProvider } from './context/GlobalState'
import Header from './components/Header'
import Balance from './components/Balance'
import TransactionForm from './components/transactions/TransactionForm'
import TransactionList from './components/transactions/TransactionList'
import IncomeExpenses from './components/IncomeExpenses'
import ExpenseChart from './components/ExpenseChart'

function App() {
  return (
    <GlobalProvider>
      <div className="bg-zinc-950 text-white min-h-screen py-10 flex justify-center items-center">
        <div className="container mx-auto max-w-4xl px-4 w-full">
          <div className="bg-zinc-900 p-8 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] flex flex-col md:flex-row gap-8 w-full border border-zinc-800">
            <div className="flex-1 flex flex-col gap-4">
              <h1 className="text-3xl font-bold tracking-tight text-white mb-2">Control de Gastos</h1>
              <IncomeExpenses />
              <Balance />
              <TransactionForm />
            </div>
            <div className="flex flex-col flex-1 bg-zinc-800/50 p-6 rounded-xl border border-zinc-700/50 shadow-inner">
              <ExpenseChart />
              <TransactionList />
            </div>
          </div>
        </div>
      </div>
    </GlobalProvider>

  );
}

export default App;