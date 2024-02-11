import React from "react";

function Filter({ filterStatus, statusFilter }) {
  return (
    <div className=" w-full md:w-10/12 mx-10 md:mx-auto flex justify-between my-7">
      <h1 className="text-black  font-medium text-xl md:mx-10">My todos</h1>
      <div className="flex flex-col md:flex justify-center mx-5">
        <h1 className="text-black  font-medium text-xl mx-2">Status Filter : </h1>
        <div className="mx-2">
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
