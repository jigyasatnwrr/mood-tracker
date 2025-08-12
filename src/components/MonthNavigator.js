import React from "react";

export default function MonthNavigator({ year, onPrevYear, onNextYear }) {
  return (
    <div style={{ textAlign: "center", marginBottom: "20px" }}>
      <button onClick={onPrevYear}>⬅ Previous</button>
      <span style={{ margin: "0 20px", fontSize: "20px" }}>{year}</span>
      <button onClick={onNextYear}>Next ➡</button>
    </div>
  );
}
