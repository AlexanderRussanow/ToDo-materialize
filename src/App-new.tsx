import React, { useState } from "react";
import { Navbar } from "./components/navbar";
import { TodoForm } from "./components/toDoForm";

const AppNew: React.FC = (props) => {
  const [todos, setTodos] = useState([]);
  const addHandler = (title: string) => {
    console.log("Add new todo", title);
  };

  return (
    <>
      <Navbar />
      <div className="container">
        <TodoForm />
      </div>
    </>
  );
};

export default AppNew;
