"use client";

import { Hash, Minus, Plus, RefreshCcw } from "lucide-react";
import { useReducer } from "react";

// eslint-disable-next-line no-unused-vars
const reducer = (state, action) => {
  const value = action.value || 1;
  switch (action.type) {
    case "DECREMENT":
      return state - value;
    case "INCREMENT":
      return state + value;
    case "RESET":
      return 0;
    case "SET":
      if (isNaN(action.value)) {
        throw new Error();
      }
      return action.value;
    default:
      throw new Error();
  }
};

export default function App() {
  const [count, dispatch] = useReducer(reducer, 0);

  return (
    <div className="card m-auto w-full max-w-md bg-base-200 shadow-xl">
      <div className="card-body items-center text-center">
        <label className="input input-bordered flex  items-center gap-2">
          <Hash scale={16} />
          <input
            type="text"
            className="w-10 grow"
            placeholder="Count"
            value={count}
            onChange={(e) => {
              let value = parseInt(e.target.value);
              if (isNaN(value)) {
                value = 0;
              }
              dispatch({ type: "SET", value });
            }}
          />
        </label>
        <div className="card-actions">
          <button
            className="btn btn-primary"
            onClick={() => dispatch({ type: "DECREMENT", value: 5 })}
          >
            <Minus size={16} /> 5
          </button>
          <button
            className="btn btn-primary"
            onClick={() => dispatch({ type: "DECREMENT" })}
          >
            <Minus size={16} /> 1
          </button>
          <button
            className="btn btn-outline"
            onClick={() => dispatch({ type: "RESET" })}
          >
            <RefreshCcw size={16} />
          </button>
          <button
            className="btn btn-primary"
            onClick={() => dispatch({ type: "INCREMENT" })}
          >
            <Plus size={16} /> 1
          </button>
          <button
            className="btn btn-primary"
            onClick={() => dispatch({ type: "INCREMENT", value: 5 })}
          >
            <Plus size={16} /> 5
          </button>
        </div>
      </div>
    </div>
  );
}
