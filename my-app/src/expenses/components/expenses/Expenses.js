import React, { useState } from "react";
import "./Expenses.css";
import Card from "../ui/Card";
import ExpenseFilter from "./ExpenseFilter";
import ExpensesList from "./ExpensesList";
import Chart from "../chart/Chart";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2019");

  const selectedYear = (year) => {
    setFilteredYear(year);
  };

  const filteredExpenses = props.expenses.filter(
    (expense) => expense.date.getFullYear().toString() === filteredYear
  );

  return (
    <Card className="expenses">
      <ExpenseFilter selectedYear={selectedYear} defaultYear={filteredYear} />
      <Chart expenses={filteredExpenses} />
      <ExpensesList filteredExpenses={filteredExpenses} />
    </Card>
  );
};

export default Expenses;
