"use client";

import { useState } from "react";

export default function App() {
  const [isCountingClick, setIsCountingClick] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [count, setCount] = useState(0);

  // 🦁 Créer un `useEffect` qui vient écouter les click sur `window`
  // 🦁 Ensuite il incrémente le state `count` uniquement si `isCountingClick` est `true`

  return (
    <div className="flex max-w-sm flex-col gap-8">
      <div className="form-control">
        <label className="label cursor-pointer">
          <span className="label-text">Is Counting Click</span>
          <input
            type="checkbox"
            className="toggle"
            checked={isCountingClick}
            onChange={(e) => setIsCountingClick(e.target.checked)}
          />
        </label>
      </div>
      <h2 className="text-2xl font-bold">Click count: {count}</h2>
    </div>
  );
}
