"use client";

import { useReducer } from "react";

// eslint-disable-next-line no-unused-vars
const reducer = (state, action) => {
  return state + 1;
};

export default function App() {
  const [count, dispatch] = useReducer(reducer, 0);

  return (
    <div className="card m-auto w-full max-w-md bg-base-200 shadow-xl">
      <div className="card-body items-center text-center">
        <h2 className="card-title">{count}</h2>
        <div className="card-actions">
          <button className="btn btn-primary" onClick={() => dispatch()}>
            +
          </button>
        </div>
      </div>
    </div>
  );
}
