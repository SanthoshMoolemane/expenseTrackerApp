import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [displayForm, setDisplayForm] = useState(false);
  const saveFieldData = (expense) => props.addExpense(expense);
  const addNewExpense = () => {
    setDisplayForm(true);
  };

  return (
    <div className="new-expense">
      {!displayForm && <button onClick={addNewExpense}>Add New Expense</button>}
      {displayForm && (
        <ExpenseForm
          saveFieldData={saveFieldData}
          setDisplayForm={setDisplayForm}
        />
      )}
    </div>
  );
};

export default NewExpense;
