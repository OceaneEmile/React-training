"use client";
import { SlowComponent } from "@/src/utils/SlowComponents";
import { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col items-center gap-4 rounded-md border border-neutral bg-base-200 p-4 shadow-md">
      <button className="btn btn-primary" onClick={() => setCount(count + 1)}>
        Click me
      </button>
      <SlowComponent />
      <p>Count : {count}</p>
    </div>
  );
}
