"use client";

import { cn } from "@/src/utils/cn";
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

  const updateTodo = (id, newTodo) => {
    const newTodos = todos.map((todo) => {
      if (todo.id !== id) return todo;
      return newTodo;
    });
    setTodos(newTodos);
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
                  onChange={() => {
                    const newCompleted = !todo.completed;
                    updateTodo(todo.id, {
                      ...todo,
                      completed: newCompleted,
                    });
                  }}
                  checked={todo.completed}
                  type="checkbox"
                  className="checkbox checkbox-sm"
                />
                <p
                  className={cn({
                    "line-through text-neutral-content": todo.completed,
                  })}
                >
                  {todo.text}
                </p>
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
