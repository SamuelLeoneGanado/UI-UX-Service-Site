import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom"; // <-- Added import

interface UserFieldsProps {
  onServiceSelect: (service: string) => void;
}

const UserFields: React.FC<UserFieldsProps> = ({ onServiceSelect }) => {
  // Grab the location object from React Router to catch the state
  const location = useLocation();
  const preselectedService = location.state?.preselectedService || "";

  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    vehicleYear: "",
    vehicleMake: "",
    vehicleModel: "",
    serviceRequested: preselectedService, // <-- Set initial value from routing state
    description: "",
  });

  // Notify the parent component on load so the Info Box updates instantly
  useEffect(() => {
    if (preselectedService) {
      onServiceSelect(preselectedService);
    }
  }, [preselectedService, onServiceSelect]);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (name === "serviceRequested") {
      onServiceSelect(value);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Appointment Request Data:", formData);
  };

  return (
    <div className="user-fields-wrapper">
      <h3 className="user-fields-header">User Fields</h3>

      <form onSubmit={handleSubmit} className="user-fields-form">
        {/* Full-width: Name */}
        <div className="form-row">
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={formData.fullName}
            onChange={handleChange}
            className="form-input"
            required
          />
        </div>

        {/* Half-width: Contact Info */}
        <div className="form-row-half">
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            className="form-input"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            className="form-input"
            required
          />
        </div>

        {/* Half-width: Vehicle Basics */}
        <div className="form-row-half form-section-divider">
          <input
            type="text"
            name="vehicleYear"
            placeholder="Vehicle Year"
            value={formData.vehicleYear}
            onChange={handleChange}
            className="form-input"
            required
          />
          <input
            type="text"
            name="vehicleMake"
            placeholder="Vehicle Make"
            value={formData.vehicleMake}
            onChange={handleChange}
            className="form-input"
            required
          />
        </div>

        {/* Full-width: Vehicle Model */}
        <div className="form-row">
          <input
            type="text"
            name="vehicleModel"
            placeholder="Vehicle Model"
            value={formData.vehicleModel}
            onChange={handleChange}
            className="form-input"
            required
          />
        </div>

        {/* Full-width: Service Type Dropdown */}
        <div className="form-row">
          <select
            name="serviceRequested"
            value={formData.serviceRequested}
            onChange={handleChange}
            className="form-input form-select"
            required
          >
            <option value="" disabled>
              Select a service...
            </option>
            <option value="Inspection">Inspection</option>
            <option value="Engine Repair">Engine Repair</option>
            <option value="Battery Replacement">Battery Replacement</option>
            <option value="Tires">Tires</option>
            <option value="Oil Change">Oil Change</option>
            <option value="Maintenance">Maintenance</option>
            <option value="Steering & Suspension">Steering & Suspension</option>
          </select>
        </div>

        {/* Full-width, Tall: Textarea */}
        <div className="form-row">
          <textarea
            name="description"
            placeholder="Please describe the issue or service needed in detail..."
            value={formData.description}
            onChange={handleChange}
            className="form-textarea"
            rows={13}
          />
        </div>

        {/* Right-aligned Orange Button */}
        <div className="submit-btn-container">
          <button type="submit" className="submit-btn">
            Book Appointment
          </button>
        </div>
      </form>
    </div>
  );
};

export default UserFields;
