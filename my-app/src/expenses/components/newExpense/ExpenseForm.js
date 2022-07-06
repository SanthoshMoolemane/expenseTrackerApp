import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const { saveFieldData, setDisplayForm } = props;

  const [updatedName, setUpdatedName] = useState("");
  const [updatedAmount, setUpdatedAmount] = useState("");
  const [updatedDate, setUpdatedDate] = useState("");

  const nameChangeHandler = (e) => {
    setUpdatedName(e.target.value);
  };
  const amountChangeHandler = (e) => {
    setUpdatedAmount(e.target.value);
  };
  const dateChangeHandler = (e) => {
    setUpdatedDate(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const fieldData = {
      name: updatedName,
      amount: updatedAmount,
      date: new Date(updatedDate),
    };

    saveFieldData(fieldData);
    setUpdatedName("");
    setUpdatedAmount("");
    setUpdatedDate("");
    setDisplayForm(false);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Name</label>
          <input type="text" value={updatedName} onChange={nameChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount in ₹</label>
          <input
            type="number"
            value={updatedAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>date</label>
          <input type="date" value={updatedDate} onChange={dateChangeHandler} />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="cancel">Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
