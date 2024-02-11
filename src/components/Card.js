import React from "react";

export default function Card({
  data,
  editTodo,
  editName,
  setEditName,
  editDescription,
  setEditDescription,
  updateData,
  closeEdit,
  deleteData,
  openEdit,
  cardStatus,
}) {
  return (
    <section>
      <div className="grid grid-cols-1 lg:grid-cols-2  xl:grid-cols-3 w-10/12 lg:w-11/12 mx-2 md:mx-auto justify-center mt-2">
        {data.map((todo) => (
          <div key={todo.id} className="px-2 py-2 m-2 bg-card w-96 rounded-lg">
            {editTodo && editTodo.id === todo.id ? (
              <div className="my-2 ">
                <div className="flex justify-center ">
                  <h1 className="font-medium text-xl">Edit Todo</h1>
                </div>
             
                <input
                  className="border w-60 p-2 border-edit rounded-md shadow-lg mx-12 my-5"
                  type="text"
                  id="editName"
                  value={editName}
                  onChange={(e) => setEditName(e.target.value)}
                />

                <input
                  className="border w-60 p-2 border-edit rounded-md shadow-lg mx-12 mb-5"
                  type="text"
                  id="editDescription"
                  value={editDescription}
                  onChange={(e) => setEditDescription(e.target.value)}
                />

                <div className="flex justify-end">
                  <button
                    className="text-white bg-edit border px-7 py-2 m-2 rounded-md shadow-lg"
                    onClick={updateData}
                  >
                    Save
                  </button>
                  <button
                    className="text-white bg-red-700 border px-7 py-2 m-2 rounded-md shadow-lg"
                    onClick={closeEdit}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            ) : (
              <div>
                <p className="p-2">Name : {todo.name}</p>

                <p className="p-2">Description : {todo.description}</p>

                <p className="p-2">
                  Status{" "}
                  <select
                    className="rounded-md p-1 text-white font-poppins mx-2"
                    value={todo.completed ? "completed" : "notCompleted"}
                    onChange={() => cardStatus(todo.id)}
                    style={{
                      backgroundColor: todo.completed ? "#15ac88" : "#fa8380",
                    }}
                  >
                    <option
                      value="completed"
                      className="bg-white rounded-md p-1 text-black font-poppins"
                    >
                      Completed
                    </option>
                    <option
                      value="notCompleted"
                      className="bg-white rounded-md p-1 text-black font-poppins"
                    >
                      Not Completed
                    </option>
                  </select>
                </p>

                <div className="flex justify-end">
                  <button
                    className="text-white bg-edit border px-9 py-2 m-2 rounded-md shadow-lg"
                    onClick={() => openEdit(todo)}
                  >
                    Edit
                  </button>
                  <button
                    className="text-white bg-delete border px-7 py-2 m-2 rounded-md shadow-lg"
                    onClick={() => deleteData(todo.id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
