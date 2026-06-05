import React from "react";
import Navbar from "../components/Navbar";

const Locations: React.FC = () => {
  const locationsData = [
    {
      id: 1,
      name: "OMS - Downtown Central",
      address: "123 Mechanic Way, Ottawa, ON K1A 0B1",
      phone: "(613) 555-0198",
      hours: "Mon-Fri: 8:00 AM - 5:00 PM",
      features: "Full Service, Walk-ins Welcome",
    },
    {
      id: 2,
      name: "OMS - Kanata West",
      address: "456 Innovation Drive, Kanata, ON K2K 3C9",
      phone: "(613) 555-0842",
      hours: "Mon-Fri: 7:30 AM - 5:30 PM",
      features: "Express Lube, Early Drop-off",
    },
    {
      id: 3,
      name: "OMS - South Keys",
      address: "789 Transitway Blvd, Ottawa, ON K1V 7Z7",
      phone: "(613) 555-0911",
      hours: "Mon-Sat: 8:00 AM - 6:00 PM",
      features: "Weekend Hours, Tire Storage",
    },
  ];

  return (
    <section className="Background">
      <div className="screen">
        <Navbar />

        <div className="locations-content">
          <div className="locations-header-container">
            <h1 className="locations-title">Our Locations</h1>
            <p className="locations-subtitle">
              Find a premium Ottawa Mechanic Services garage near you.
            </p>
          </div>

          <div className="locations-grid">
            {locationsData.map((loc) => (
              <div key={loc.id} className="location-card">
                <div className="location-card-header">
                  <h2>{loc.name}</h2>
                </div>

                <div className="location-details">
                  <div className="loc-item">
                    <p>
                      <strong>Address:</strong> {loc.address}
                    </p>
                  </div>
                  <div className="loc-item">
                    <p>
                      <strong>Phone:</strong> {loc.phone}
                    </p>
                  </div>
                  <div className="loc-item">
                    <p>
                      <strong>Hours:</strong> {loc.hours}
                    </p>
                  </div>
                  <div className="loc-item feature-item">
                    <p>
                      <strong>Special:</strong> {loc.features}
                    </p>
                  </div>
                </div>

                <button className="location-book-btn">Make this my shop</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Locations;
