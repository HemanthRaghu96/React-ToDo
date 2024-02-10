import React, { useState } from 'react';

// Define the StatusFilterDropDown component
const StatusFilterDropDown = ({ onSelect }) => {
  // State variable for selected option
  const [selectedOption, setSelectedOption] = useState('All');

  // Function to handle option selection
  const handleSelectOption = (option) => {
    // Update selected option in state
    setSelectedOption(option);
    // Call the onSelect function passed from parent component
    onSelect(option);
  };

  // Rendering the JSX
  return (
    <select className='bg-status rounded-md p-1 text-white font-poppins' value={selectedOption} onChange={(e) => handleSelectOption(e.target.value)}>
      {/* Options for status filter selection */}
      <option className='bg-white rounded-md p-1 text-black font-poppins '  value="All">All</option>
      <option className='bg-white rounded-md p-1 text-black font-poppins '  value="Complete">Complete</option>
      <option className='bg-white rounded-md p-1 text-black font-poppins '  value="Not Complete">Not Complete</option>
    </select>
  );
};

// Export the StatusFilterDropDown component as default
export default StatusFilterDropDown;
