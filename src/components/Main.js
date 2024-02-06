import React from "react";
import Card from "./Card"
import StatusFilterDropDown from "./StatusFilterDropDown";
const Main = () => {
  // Handling the title input change

  const handleChangeTitle = () => {};

  // Handling the Description input change

  const handleChangeDescription = () => {};

  return (
    <section>
      <div className="mt-32 w-9/12 mx-auto">
        {/* todo Title */}
        <div className="flex justify-center ">
          <h1 className="text-edit  font-medium text-xl">My todo</h1>
        </div>

        <div className="mt-16 flex">
          {/* Todo Name input box */}

          <input
            type="text"
            placeholder="TodoName"
            value=""
            onChange={handleChangeTitle}
            className="border w-96 p-2 border-edit rounded-md shadow-lg"
          />

          {/* Todo Description input box */}

          <input
            type="text"
            placeholder="TodoDescription"
            value=""
            onChange={handleChangeDescription}
            className="border w-96 p-2 border-edit rounded-md shadow-lg mx-12"
          />

          {/* Todo Add Button */}

          <button className="text-white bg-edit border w-52 p-2 rounded-md shadow-lg">
            AddTodo
          </button>
        </div>
      </div>

      <div className="w-10/12 mx-auto flex justify-between">
        <h1 className="text-black  font-medium text-xl mt-20 px-2 py-2 m-2">My todos</h1>

        <div className="flex justify-center mt-20">
          <h1 className="text-black  font-medium text-xl px-2 py-2 m-2">
            Status Filter :{" "}
          </h1>
          <div className='px-2 py-2 m-2'><StatusFilterDropDown /></div>
          
        </div>
      </div>

      <div className="w-10/12 mx-auto flex mt-10">

        <Card />
        <Card />
        <Card />

      </div>
    </section>
  );
};

export default Main;
