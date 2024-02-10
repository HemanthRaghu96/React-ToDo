import React, { useState } from 'react';

// Define the StatusDropDown component
const StatusDropDown = ({ onSelect }) => {
  // State variable for selected option
  const [selected, setSelected] = useState("Not Complete");

  // Function to handle option selection
  const handleSelect = (option) => {
    // Update selected option in state
    setSelected(option);
    // Call the onSelect function passed from parent component
    onSelect(option);
  };

  // Rendering the JSX
  return (
    <select className={selected==='Complete'?'bg-edit rounded-md p-1 text-white font-poppins mx-2':'bg-status rounded-md p-1 text-white font-poppins mx-2'} value={selected} onChange={(e) => handleSelect(e.target.value)}>
      {/* Options for status selection */}
      <option  className='bg-white rounded-md p-1 text-black font-poppins ' value="Not Complete">Not Complete</option>
      <option  className='bg-white rounded-md p-1 text-black font-poppins ' value="Complete">Complete</option>
    </select>
  );
};

// Export the StatusDropDown component as default
export default StatusDropDown;
