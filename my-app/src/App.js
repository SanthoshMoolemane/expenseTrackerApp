import Expenses from "./expenses/components/expenses/Expenses";
import NewExpense from "./expenses/components/newExpense/NewExpense";
import { useState } from "react";

const exampleExpenses = [
  { name: "car insurance", amount: 100, date: new Date(2021, 7, 4) },
  { name: "Home EMI", amount: 1800, date: new Date(2022, 2, 12) },
  { name: "Treatment", amount: 260, date: new Date(2021, 9, 31) },
  { name: "Groceries", amount: 180, date: new Date(2019, 4, 24) },
];

function App() {
  const [expenses, setExpenses] = useState(exampleExpenses);

  const addExpense = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense addExpense={addExpense} />
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
