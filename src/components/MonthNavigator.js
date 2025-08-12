import React from "react";

export default function MonthNavigator({ year, onPrevYear, onNextYear }) {
  return (
    <div className="d-flex justify-content-center align-items-center mb-5">
      <button className="btn btn-outline-primary btn-lg fw-bold" onClick={onPrevYear}>
        ⬅ Previous
      </button>
      <span className="mx-4 fw-bold" style={{ fontSize: "3rem" }}>
        {year}
      </span>
      <button className="btn btn-outline-primary btn-lg fw-bold" onClick={onNextYear}>
        Next ➡
      </button>
    </div>
  );
}
