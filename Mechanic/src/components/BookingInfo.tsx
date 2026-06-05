import React from "react";

const BookingInfo: React.FC = () => {
  return (
    <div className="info-box-wrapper">
      <h3 className="info-box-header">Booking Info</h3>
      <p className="info-box-text">
        Please arrive 10 minutes prior to your scheduled appointment time. If
        you need to cancel or reschedule, we ask that you provide at least 24
        hours notice.
      </p>
    </div>
  );
};

export default BookingInfo;
