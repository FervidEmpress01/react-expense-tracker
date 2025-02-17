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
      <div className="bg-zinc-950 text-white h-screen flex
      justify-center items-center">
        <div className="container mx-auto w-3/6">
          <div className="bg-zinc-800 p-10 rounded-lg flex gap-x-2">
            <div >
              <h1 className="text-4xl font-bold">Expense Tracker</h1>
              <IncomeExpenses />
              <Balance />
              <TransactionForm />
            </div>
            <div className="flex flex-col flex-1">
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