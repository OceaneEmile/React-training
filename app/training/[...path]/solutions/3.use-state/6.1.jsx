"use client";

import { Plus } from "lucide-react";
import { useState } from "react";

export const Todos = () => {
  const [todos, setTodos] = useState([
    {
      id: 1222919191,
      text: "Faire les courses",
      completed: false,
    },
  ]);
  const [todo, setTodo] = useState("");

  console.log({ todo });

  const addTodo = () => {
    const newTodo = {
      id: Date.now(),
      text: todo,
      completed: false,
    };
    const newTodos = [...todos, newTodo];
    setTodos(newTodos);
    setTodo("");
  };

  return (
    <div className="card w-full max-w-md border border-base-300 bg-base-200 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">Todos</h2>
        <div className="flex w-full items-center gap-2">
          <label className="input input-bordered flex flex-1 items-center gap-2">
            <input
              type="checkbox"
              checked={false}
              className="checkbox checkbox-sm"
            />
            <input
              value={todo}
              onChange={(e) => {
                setTodo(e.target.value);
              }}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  addTodo();
                }
              }}
              type="text"
              className="grow"
              placeholder="Some task"
            />
          </label>
          <button onClick={() => addTodo()} className="btn btn-primary">
            <Plus size={22} />
          </button>
        </div>
        <div className="divider">List</div>
        <ul className="space-y-2">
          {todos.map((todo) => (
            <li className="flex w-full items-center gap-2" key={todo.id}>
              <label className="input input-bordered flex flex-1 items-center gap-2">
                <input
                  checked={todo.completed}
                  type="checkbox"
                  className="checkbox checkbox-sm"
                />
                <p>{todo.text}</p>
              </label>
            </li>
          ))}
          {todos.length === 0 ? (
            <p className="text-neutral-content">Empty</p>
          ) : null}
        </ul>
      </div>
    </div>
  );
};

export default function App() {
  return (
    <div className="flex w-full justify-center">
      <Todos />
    </div>
  );
}
