import React, { useState, useMemo } from "react";
import DayCard from "./DayCard";

// 1. Add the interface for the new prop
interface CalendarProps {
  variant?: "booking" | "schedule";
}

// 2. Destructure the prop and give it a default value
const Calendar: React.FC<CalendarProps> = ({ variant = "booking" }) => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const monthsData = useMemo(() => {
    // ... (Keep all your existing date math exactly the same)
    const today = new Date();
    const data = [];
    for (let i = 0; i < 6; i++) {
      const targetMonthDate = new Date(
        today.getFullYear(),
        today.getMonth() + i,
        1,
      );
      const year = targetMonthDate.getFullYear();
      const month = targetMonthDate.getMonth();
      const daysInMonth = new Date(year, month + 1, 0).getDate();
      const firstDayOfWeek = targetMonthDate.getDay();
      const days: (Date | null)[] = [];
      for (let j = 0; j < firstDayOfWeek; j++) days.push(null);
      for (let d = 1; d <= daysInMonth; d++)
        days.push(new Date(year, month, d));
      data.push({
        name: targetMonthDate.toLocaleString("default", {
          month: "long",
          year: "numeric",
        }),
        days,
      });
    }
    return data;
  }, []);

  const today = new Date();

  const isSameDay = (d1: Date | null, d2: Date | null) => {
    if (!d1 || !d2) return false;
    return (
      d1.getDate() === d2.getDate() &&
      d1.getMonth() === d2.getMonth() &&
      d1.getFullYear() === d2.getFullYear()
    );
  };

  const handleSelect = (date: Date) => {
    setSelectedDate(isSameDay(selectedDate, date) ? null : date);
  };

  // 3. Dynamically apply a CSS class based on the variant
  return (
    <div
      className={`calendar-wrapper ${variant === "schedule" ? "calendar-schedule-variant" : ""}`}
    >
      <div className="calendar-scroll-area">
        {monthsData.map((monthData, index) => (
          <div key={index} className="month-section">
            <h2 className="calendar-header">{monthData.name}</h2>
            <div className="calendar-grid">
              {monthData.days.map((date, idx) => (
                <DayCard
                  key={date ? date.toISOString() : `empty-${index}-${idx}`}
                  date={date}
                  isToday={isSameDay(today, date)}
                  isSelected={isSameDay(selectedDate, date)}
                  onSelect={handleSelect}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calendar;
