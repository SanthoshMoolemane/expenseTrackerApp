import React from "react";
import "./ExpensesList.css";
import Expense from "./Expense";

const ExpensesList = (props) => {
  if (props.filteredExpenses.length === 0) {
    return <h2 className="expenses-list__fallback">No expenses found.</h2>;
  }

  return (
    <ul className="expenses-list">
      {props.filteredExpenses.map((expense, index) => (
        <Expense key={index} expenses={expense} />
      ))}
    </ul>
  );
};

export default ExpensesList;
