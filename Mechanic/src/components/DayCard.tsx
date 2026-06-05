import React from "react";

interface DayCardProps {
  date: Date | null;
  isToday: boolean;
  isSelected: boolean;
  onSelect: (date: Date) => void;
}

const DayCard: React.FC<DayCardProps> = ({
  date,
  isToday,
  isSelected,
  onSelect,
}) => {
  // If date is null, render an empty placeholder to align the grid
  if (!date) {
    return <div className="day-card day-card-empty" />;
  }

  const dayOfWeek = date.getDay();
  // 0 is Sunday, 6 is Saturday
  const isWeekend = dayOfWeek === 0 || dayOfWeek === 6;

  let stateClass = "day-card-default";

  if (isSelected) {
    stateClass = "day-card-selected";
  } else if (isToday) {
    stateClass = "day-card-today";
  } else if (isWeekend) {
    stateClass = "day-card-weekend";
  }

  return (
    <div onClick={() => onSelect(date)} className={`day-card ${stateClass}`}>
      <span>{date.getDate()}</span>
    </div>
  );
};

export default DayCard;
