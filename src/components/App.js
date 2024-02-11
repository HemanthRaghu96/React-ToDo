import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';
import Card from "./Card";
import Filter from "./Filter";
import Header from "./Header";

function App() {
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

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(data));
  }, [data]);

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

  const filteredData = data.filter((todo) => {
    if (statusFilter === "completed") {
      return todo.completed;
    } else if (statusFilter === "notCompleted") {
      return !todo.completed;
    } else {
      return true;
    }
  });

  const cardStatus = (id) => {
    setData(
      data.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const filterStatus = (status) => {
    setStatusFilter(status);
  };

  const openEdit = (todo) => {
    setEditTodo(todo);
    setEditName(todo.name);
    setEditDescription(todo.description);
  };

  const closeEdit = () => {
    setEditTodo(null);
  };

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

  const deleteData = (id) => {
    setData(data.filter((todo) => todo.id !== id));
  };

  return (
    <main  className="flex flex-col w-full">
      <Header
        name={name}
        description={description}
        addDataToCard={addDataToCard}
        setName={setName}
        setDescription={setDescription}
      />

      <Filter filterStatus={filterStatus} statusFilter={statusFilter} />

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
