import React, { useState, useMemo } from "react";

const TimeSection: React.FC = () => {
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  // Generate times from 8:00 AM to 4:00 PM
  const times = useMemo(() => {
    const generatedTimes: string[] = [];
    for (let hour = 8; hour <= 16; hour++) {
      // Determine AM/PM and standard 12-hour format
      const ampm = hour >= 12 ? "PM" : "AM";
      const displayHour = hour > 12 ? hour - 12 : hour;

      generatedTimes.push(`${displayHour}:00 ${ampm}`);

      // Stop at 4:00 PM exactly, don't add 4:30 PM
      if (hour !== 16) {
        generatedTimes.push(`${displayHour}:30 ${ampm}`);
      }
    }
    return generatedTimes;
  }, []);

  return (
    <div className="time-section-wrapper">
      <h3 className="time-section-header">Select A time</h3>

      {/* We reuse the calendar's scroll area logic here, but with a specific class for the height */}
      <div className="calendar-scroll-area time-scroll-container">
        <div className="time-list">
          {times.map((time) => (
            <div
              key={time}
              onClick={() => setSelectedTime(time)}
              className={`time-slot ${selectedTime === time ? "time-slot-selected" : "time-slot-default"}`}
            >
              {time}
            </div>
          ))}
        </div>
      </div>

      {/* Visual indicator for scrolling, matching your image */}
      <div className="scroll-arrow-indicator">▼</div>
    </div>
  );
};

export default TimeSection;
