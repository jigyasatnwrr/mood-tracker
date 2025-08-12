import React, { useState } from "react";
import MonthNavigator from "./components/MonthNavigator";
import EmojiPickerModal from "./components/EmojiPickerModal";
import MoodGrid from "./components/MoodGrid";

function App() {
  const [year, setYear] = useState(new Date().getFullYear());
  const [moods, setMoods] = useState({});
  const [selectedDate, setSelectedDate] = useState(null);
  const [pickerVisible, setPickerVisible] = useState(false);

  const handleDayClick = (dateKey) => {
    setSelectedDate(dateKey);
    setPickerVisible(true);
  };

  const handleSelectEmoji = (emoji) => {
    setMoods((prev) => ({
      ...prev,
      [selectedDate]: emoji
    }));
  };

  return (
    <div style={{ padding: "20px" }}>
      <MonthNavigator
        year={year}
        onPrevYear={() => setYear(year - 1)}
        onNextYear={() => setYear(year + 1)}
      />
      <MoodGrid year={year} moods={moods} onDayClick={handleDayClick} />
      <EmojiPickerModal
        visible={pickerVisible}
        onClose={() => setPickerVisible(false)}
        onSelect={handleSelectEmoji}
      />
    </div>
  );
}

export default App;

