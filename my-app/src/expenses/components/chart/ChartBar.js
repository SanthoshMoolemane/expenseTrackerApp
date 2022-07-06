import React from "react";
import "./ChartBar.css";

const ChartBar = (props) => {
  const { label, value, maxValue } = props;
  let valueFilled = "0%";

  if (maxValue > 0) {
    valueFilled = Math.round((value / maxValue) * 100) + "%";
  }

  console.log(valueFilled);
  console.log(maxValue);

  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div className="chart-bar__fill" style={{ height: valueFilled }}></div>
      </div>
      <div className="chart-bar__label">{label}</div>
    </div>
  );
};

export default ChartBar;
