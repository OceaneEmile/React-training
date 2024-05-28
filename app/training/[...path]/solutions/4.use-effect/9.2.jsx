"use client";

import { useEffect, useState } from "react";

export default function App() {
  const [isCountingClick, setIsCountingClick] = useState(false);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isCountingClick) return;

    const handleClick = () => {
      setCount((prevCount) => prevCount + 1);
    };

    window.addEventListener("click", handleClick);

    return () => {
      window.removeEventListener("click", handleClick);
    };
  }, [isCountingClick]);

  return (
    <div className="m-auto flex max-w-xs flex-col items-center gap-8">
      <div className="form-control">
        <label className="label cursor-pointer space-x-2">
          <span className="label-text">Is Counting Click</span>
          <input
            type="checkbox"
            className="toggle toggle-success"
            checked={isCountingClick}
            onChange={(e) => setIsCountingClick(e.target.checked)}
          />
        </label>
      </div>
      <h2 className="text-2xl font-bold">Click count: {count}</h2>
    </div>
  );
}
