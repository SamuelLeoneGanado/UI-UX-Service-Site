import React from "react";
import Navbar from "../components/Navbar";
import Calendar from "../components/Calander";

const Schedule: React.FC = () => {
  return (
    <section className="Background">
      <div className="screen">
        <Navbar />

        <div className="schedule-content">
          {/* Simply pass the variant prop! */}
          <Calendar variant="schedule" />

          {/* Scroll Arrow */}
          <div className="scroll-arrow-indicator">▼</div>

          {/* Bottom Information Row */}
          <div className="schedule-info-row">
            <div className="schedule-info-box box-gray">
              <h3>Schedule info</h3>
              <p className="schedule-info-desc">
                Our standard operating hours are Monday through Friday, 8:00 AM
                to 5:00 PM. We offer a secure service for early bird or
                after-hours vehicle drop-offs. Walk-ins are accepted, but
                appointments are always given priority.
              </p>
            </div>

            <div className="schedule-info-box box-orange">
              <h3>Weekend Availability</h3>
              <p className="schedule-info-desc">
                We have limited weekend availability on Weekends, specifically
                for priority or emergency repairs. Appointments should be
                scheduled during weekdays unless no alternative is present.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Schedule;
