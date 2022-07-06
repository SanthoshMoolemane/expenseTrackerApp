import React from "react";
import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = (props) => {
  const values = props.expenses.map((expense) => expense.amount);
  const maxValue = Math.max(...values);

  const dataPoints = [
    { label: "Jan", value: 0 },
    { label: "Feb", value: 0 },
    { label: "Mar", value: 0 },
    { label: "Apr", value: 0 },
    { label: "May", value: 0 },
    { label: "Jun", value: 0 },
    { label: "Jul", value: 0 },
    { label: "Aug", value: 0 },
    { label: "Sep", value: 0 },
    { label: "Oct", value: 0 },
    { label: "Nov", value: 0 },
    { label: "Dec", value: 0 },
  ];

  for (const expense of props.expenses) {
    const expenseMonth = expense.date.getMonth();
    dataPoints[expenseMonth].value += expense.amount;
  }

  console.log(dataPoints);

  return (
    <div className="chart">
      {dataPoints.map((dataPoint) => (
        <ChartBar
          label={dataPoint.label}
          value={dataPoint.value}
          key={dataPoint.label}
          maxValue={maxValue}
        />
      ))}
    </div>
  );
};

export default Chart;
