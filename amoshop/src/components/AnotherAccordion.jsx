import React, { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";

// Define the AnotherAccordion functional component
const AnotherAccordion = ({ title, children }) => {
  // State to manage whether the accordion is open or closed
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle the accordion open/closed state
  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  // JSX rendering of the component
  return (
    <div className="border border-gray-300 rounded-md mb-4">
      {/* Header of the accordion with the title */}
      <div
        className="flex items-center justify-between p-4 cursor-pointer"
        onClick={toggleAccordion}
      >
        {/* Display the title of the accordion */}
        <h2 className="text-xs md:text-sm font-semibold">{title}</h2>

        {/* Display "+" icon when closed and "-" icon when open */}
        {isOpen ? (
          <FiMinus className="w-5 h-5 text-xs md:text-sm" />
        ) : (
          <FiPlus className="w-5 h-5 text-xs md:text-sm" />
        )}
      </div>

      {/* Render the content when the accordion is open */}
      {isOpen && <div className="p-4 border-t border-gray-300">{children}</div>}
    </div>
  );
};

export default AnotherAccordion;
