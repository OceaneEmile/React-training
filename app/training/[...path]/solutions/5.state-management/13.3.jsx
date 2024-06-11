"use client";

import { Minus, Plus, RefreshCcw } from "lucide-react";
import { useReducer } from "react";

const REDUCER_ACTIONS = {
  DECREMENT: "DECREMENT",
  INCREMENT: "INCREMENT",
  RESET: "RESET",
};

// eslint-disable-next-line no-unused-vars
const reducer = (state, action) => {
  const value = action.value || 1;
  switch (action.type) {
    case REDUCER_ACTIONS.DECREMENT:
      return state - value;
    case REDUCER_ACTIONS.INCREMENT:
      return state + value;
    case REDUCER_ACTIONS.RESET:
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
            onClick={() =>
              dispatch({ type: REDUCER_ACTIONS.DECREMENT, value: 5 })
            }
          >
            <Minus size={16} /> 5
          </button>
          <button
            className="btn btn-primary"
            onClick={() => dispatch({ type: REDUCER_ACTIONS.DECREMENT })}
          >
            <Minus size={16} /> 1
          </button>
          <button
            className="btn btn-outline"
            onClick={() => dispatch({ type: REDUCER_ACTIONS.RESET })}
          >
            <RefreshCcw size={16} />
          </button>
          <button
            className="btn btn-primary"
            onClick={() => dispatch({ type: REDUCER_ACTIONS.INCREMENT })}
          >
            <Plus size={16} /> 1
          </button>
          <button
            className="btn btn-primary"
            onClick={() =>
              dispatch({ type: REDUCER_ACTIONS.INCREMENT, value: 5 })
            }
          >
            <Plus size={16} /> 5
          </button>
        </div>
      </div>
    </div>
  );
}
