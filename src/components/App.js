import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';
import Card from "./Card";
import Filter from "./Filter";
import Header from "./Header";

function App() {
  // State declarations
  const [data, setData] = useState(() => {
    const savedData = localStorage.getItem("todos");
    return savedData ? JSON.parse(savedData) : [];
  });
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [editTodo, setEditTodo] = useState(null);
  const [editName, setEditName] = useState("");
  const [editDescription, setEditDescription] = useState("");

  // Effect to save data to localStorage
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(data));
  }, [data]);

  // Function to add new data to card
  const addDataToCard = () => {
    if (name.trim() !== "") {
      const newTodo = {
        id: uuidv4(),
        name,
        description,
        completed: false,
      };
      setData([...data, newTodo]);
      setName("");
      setDescription("");
    }
  };

  // Filtering the data based on status
  const filteredData = data.filter((todo) => {
    if (statusFilter === "completed") {
      return todo.completed;
    } else if (statusFilter === "notCompleted") {
      return !todo.completed;
    } else {
      return true;
    }
  });

  // Function to toggle completion status of a card
  const cardStatus = (id) => {
    setData(
      data.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // Function to handle filter status change
  const filterStatus = (status) => {
    setStatusFilter(status);
  };

  // Function to open editing mode for a card
  const openEdit = (todo) => {
    setEditTodo(todo);
    setEditName(todo.name);
    setEditDescription(todo.description);
  };

  // Function to close editing mode
  const closeEdit = () => {
    setEditTodo(null);
  };

  // Function to update edited data
  const updateData = () => {
    setData(
      data.map((todo) =>
        todo.id === editTodo.id
          ? {
              ...todo,
              name: editName,
              description: editDescription,
            }
          : todo
      )
    );
    setEditTodo(null);
  };

  // Function to delete data from card
  const deleteData = (id) => {
    setData(data.filter((todo) => todo.id !== id));
  };

  return (
    <main  className="flex flex-col w-full">
      {/* Header component */}
      <Header
        name={name}
        description={description}
        addDataToCard={addDataToCard}
        setName={setName}
        setDescription={setDescription}
      />

      {/* Filter component */}
      <Filter filterStatus={filterStatus} statusFilter={statusFilter} />

      {/* Card component */}
      <Card
        data={filteredData}
        editTodo={editTodo}
        editName={editName}
        setEditName={setEditName}
        editDescription={editDescription}
        setEditDescription={setEditDescription}
        updateData={updateData}
        closeEdit={closeEdit}
        deleteData={deleteData}
        openEdit={openEdit}
        cardStatus={cardStatus}
      />
    </main>
  );
}

export default App;
