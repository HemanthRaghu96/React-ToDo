import React from "react";
import StatusDropDown from "./StatusDropDown";

const Card = () => {
  return (
    <section>
      <div className="px-2 py-2 m-2 bg-card w-96 rounded-lg  ">
        <p className="p-2">Name : Office Task-1</p>
        <p className="p-2"> 
          Description : This is the description for my first task.
        </p>
        <p className="p-2">Status <StatusDropDown /></p>
        <div className="flex justify-end">
          <button className="text-white bg-edit border  px-9 py-2 m-2 rounded-md shadow-lg">
            Edit
          </button>
          <button className="text-white bg-delete border  px-7 py-2 m-2 rounded-md shadow-lg">
            Delete
          </button>
        </div>
      </div>
    </section>
  );
};

export default Card;
