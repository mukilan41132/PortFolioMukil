import { useState } from "react";

interface NavItem {
  id: number;
  label: string;
}

const navItems: NavItem[] = [
  { id: 1, label: "Step 1" },
  { id: 2, label: "Step 2" },
  { id: 3, label: "Step 3" },
];

export default function StepNavigator() {
  const [activeTab, setActiveTab] = useState(1);

  // Move to next step
  const handleNext = () => {
    if (activeTab < navItems.length) {
      setActiveTab(activeTab + 1);
    }
  };

  // Move to previous step
  const handlePrev = () => {
    if (activeTab > 1) {
      setActiveTab(activeTab - 1);
    }
  };

  return (
    <div className="stepper">
      {/* Show active step label */}
      <h2>{navItems.find((item) => item.id === activeTab)?.label}</h2>

      {/* Navigation Buttons */}
      <div style={{ display: "flex", gap: "1rem", marginTop: "20px" }}>
        <button
          onClick={handlePrev}
          disabled={activeTab === 1}
          className="btn btn-secondary">
          ◀ Previous
        </button>

        <button
          onClick={handleNext}
          disabled={activeTab === navItems.length}
          className="btn btn-primary">
          Next ▶
        </button>
      </div>
    </div>
  );
}
