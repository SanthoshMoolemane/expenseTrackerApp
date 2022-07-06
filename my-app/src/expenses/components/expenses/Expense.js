import React from "react";
import "./Expense.css";
import DateCalculation from "./DateCalculation";
import Card from "../ui/Card";

const Expense = (props) => {
  const { name, amount, date } = props.expenses;
  return (
    <li>
      <Card className="expense-item">
        <DateCalculation date={date} />
        <div className="expense-item__description">
          <h2>{name}</h2>
          <div className="expense-item__price">₹ {amount}</div>
        </div>
      </Card>
    </li>
  );
};

export default Expense;
