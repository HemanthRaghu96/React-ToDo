import React from "react";

// Filter component responsible for filtering todo items based on status
function Filter({ filterStatus, statusFilter }) {
  return (
    <div className=" w-full md:w-10/12 mx-10 md:mx-auto flex justify-between my-7">
      {/* Title */}
      <h1 className="text-black  font-medium text-xl md:mx-10">My todos</h1>
      {/* Status filter dropdown */}
      <div className="flex flex-col md:flex justify-center mx-5">
        <h1 className="text-black  font-medium text-xl mx-2">Status Filter : </h1>
        <div className="mx-2">
          {/* Dropdown to select status filter */}
          <select
           className='bg-status rounded-md p-1 text-white font-poppins'
            value={statusFilter}
            onChange={(e) => filterStatus(e.target.value)}
          >
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="notCompleted">Not Completed</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default Filter;
