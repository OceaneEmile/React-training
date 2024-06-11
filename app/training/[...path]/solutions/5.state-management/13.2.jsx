"use client";

import { Minus, Plus, RotateCcw } from "lucide-react";
import { useReducer } from "react";

// eslint-disable-next-line no-unused-vars
const reducer = (state, action) => {
  switch (action.type) {
    case "DECREMENT":
      return state - 1;
    case "INCREMENT":
      return state + 1;
    case "RESET":
      return 0;
    default:
      throw new Error();
  }
};

export default function App() {
  const [count, dispatch] = useReducer(reducer, 0);

  return (
    <div className="card m-auto w-full max-w-md bg-base-200 shadow-xl">
      <div className="card-body items-center text-center">
        <h2 className="card-title">{count}</h2>
        <div className="card-actions">
          <button
            className="btn btn-primary"
            onClick={() => dispatch({ type: "DECREMENT" })}
          >
            <Minus size={16} />
          </button>
          <button
            className="btn btn-outline"
            onClick={() => dispatch({ type: "RESET" })}
          >
            <RotateCcw size={16} />
          </button>
          <button
            className="btn btn-primary"
            onClick={() => dispatch({ type: "INCREMENT" })}
          >
            <Plus size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}
