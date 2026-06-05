import React from "react";

interface ServiceInfoProps {
  selectedService: string;
}

const ServiceInfo: React.FC<ServiceInfoProps> = ({ selectedService }) => {
  // A dictionary to hold the descriptions for each service
  const serviceDetails: Record<string, string> = {
    Inspection:
      "Our comprehensive inspection covers 50+ points on your vehicle to ensure it meets safety standards and runs efficiently.",
    "Engine Repair":
      "Advanced diagnostics and repair for engine misfires, timing issues, and performance drops. Parts and labor warranties apply.",
    "Battery Replacement":
      "Quick and easy battery testing and replacement. We safely dispose of your old battery and clean the terminal connections.",
    Tires:
      "Tire rotation, balancing, patching, or full replacements. Please note your tire size in the description if known.",
    "Oil Change":
      "Standard, synthetic blend, or full synthetic oil changes. Includes a new filter and a complimentary fluid level check.",
    Maintenance:
      "Scheduled factory maintenance (30k, 60k, 90k miles) to keep your warranty valid and your car running smoothly.",
    "Steering & Suspension":
      "Fixing alignment issues, worn shocks, struts, or tie rods to ensure a smooth and safe ride.",
  };

  // Default text before the user selects anything
  const displayText = selectedService
    ? serviceDetails[selectedService]
    : "Please select a service from the User Fields form to see details.";

  return (
    <div className="info-box-wrapper">
      <h3 className="info-box-header">
        {selectedService ? `${selectedService} Info` : "Service Info"}
      </h3>
      <p className="info-box-text">{displayText}</p>
    </div>
  );
};

export default ServiceInfo;
