import { VictoryPie, VictoryLabel } from 'victory'
import { useGlobalState } from '../context/GlobalState';

function ExpenseChart() {

    const { transactions } = useGlobalState();

    const totalIncome = transactions.filter(transaction =>
        transaction.amount > 0)
        .reduce((acc, transaction) => ( acc += transaction.amount ), 0)

    const totalExpense = transactions.filter(transaction =>
        transaction.amount < 0)
        .reduce((acc, transaction) => ( acc += transaction.amount ), 0) * -1;

    const totalCashFlow = totalIncome + totalExpense;

    if (totalCashFlow === 0) {
        return (
            <div className="w-full flex justify-center items-center h-[220px] mb-6">
                <p className="text-zinc-500 text-sm font-medium">No hay datos para graficar</p>
            </div>
        );
    }

    const expensePercentage = Math.round((totalExpense / totalCashFlow) * 100);
    const incomePercentage = 100 - expensePercentage;

    return (
        <div className="w-full flex justify-center items-center h-[220px] mb-6">
            <VictoryPie
                colorScale={["#ef4444", "#22c55e"]}
                data={[
                    { x: "Gastos", y: expensePercentage },
                    { x: "Ingresos", y: incomePercentage },
                ]}
                animate={{
                    duration: 200
                }}
                labels={({ datum }) => `${datum.y}%`}
                labelComponent={<VictoryLabel
                    angle={0}
                    style={{
                        fill: "white",
                        fontSize: 14,
                        fontWeight: "bold"
                    }}
                />}
                innerRadius={70}
                padding={20}
            />
        </div>
    );
}

export default ExpenseChart