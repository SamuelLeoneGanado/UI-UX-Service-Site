import { useState } from "react";
import Calendar from "../components/Calander";
import Navbar from "../components/Navbar";
import TimeSection from "../components/TimeSection";
import UserFields from "../components/UserFields";
import ServiceInfo from "../components/ServiceInfo";
import BookingInfo from "../components/BookingInfo";

const ScheduleService = () => {
  const [selectedService, setSelectedService] = useState<string>("");
  return (
    <section className="Background">
      <div className="screen">
        <Navbar />
        <div className="ScheduleServiceLayout">
          <div>
            <Calendar />
            <div className="ScheduleServiceInfoLayout">
              <div>
                <ServiceInfo selectedService={selectedService} />
                <BookingInfo />
              </div>
              <TimeSection />
            </div>
          </div>
          <UserFields onServiceSelect={setSelectedService} />
        </div>
      </div>
    </section>
  );
};

export default ScheduleService;
