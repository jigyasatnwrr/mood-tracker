import React from "react";

export default function MoodGrid({ year, moods, onDayClick }) {
  const months = Array.from({ length: 12 }, (_, monthIndex) => {
    const firstDay = new Date(year, monthIndex, 1);
    const daysInMonth = new Date(year, monthIndex + 1, 0).getDate();

    return {
      monthName: firstDay.toLocaleString("default", { month: "long" }),
      days: Array.from({ length: daysInMonth }, (_, day) => {
        const dateKey = `${year}-${String(monthIndex + 1).padStart(2, "0")}-${String(
          day + 1
        ).padStart(2, "0")}`;
        return {
          date: day + 1,
          key: dateKey,
          mood: moods[dateKey] || null
        };
      })
    };
  });

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
        gap: "20px",
      }}
    >
      {months.map((month, mIndex) => (
        <div
          key={mIndex}
          style={{
            border: "1px solid #ccc",
            padding: "10px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <h3 style={{ textAlign: "center" }}>{month.monthName}</h3>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(7, 1fr)",
              gap: "4px",
              width: "100%",
              maxWidth: "350px",
            }}
          >
            {month.days.map((day) => (
              <div
                key={day.key}
                onClick={() => onDayClick(day.key)}
                style={{
                  border: "1px solid #ddd",
                  textAlign: "center",
                  fontSize: "1rem",
                  cursor: "pointer",
                  userSelect: "none",
                  aspectRatio: "1 / 1", // keeps square shape
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {day.mood || day.date}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}