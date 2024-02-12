import React from "react";

// Header component responsible for adding new todo items
export default function Header({
  name, 
  description, 
  addDataToCard, 
  setName, 
  setDescription, 
}) {
  return (
    <div className="mt-20 w-9/12 mx-auto">
      {/* Title */}
      <div className="flex justify-center ">
        <h1 className="text-edit  font-medium text-xl">My Todo</h1>
      </div>
      {/* Input fields for adding new todo */}
      <div className="grid grid-cols-1 md:flex mt-16 ">
        <input
          className="border md:w-96 p-2 border-edit rounded-md shadow-lg my-5 md:my-0"
          type="text"
          placeholder="Todo Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          className="border md:w-96 p-2 border-edit rounded-md shadow-lg mb-5 md:mx-12 md:my-0"
          type="text"
          placeholder="Todo Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        {/* Button to add new todo */}
        <button
          className="text-white bg-edit border w-24 md:w-52 p-2 rounded-md shadow-lg"
          type="button"
          onClick={addDataToCard}
        >
          Add Todo
        </button>
      </div>
    </div>
  );
}
