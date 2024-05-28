"use client";

import { useEffect, useRef, useState } from "react";

const useEventListener = ({
  eventName,
  handler,
  element = window,
  enabled = true,
}) => {
  const refHandler = useRef(handler);

  useEffect(() => {
    refHandler.current = handler;
  }, [handler]);

  useEffect(() => {
    if (!enabled || !element) return;

    const eventListener = (event) => refHandler.current(event);
    element.addEventListener(eventName, eventListener);

    return () => {
      element.removeEventListener(eventName, eventListener);
    };
  }, [eventName, refHandler, element, enabled]);
};

export default function App() {
  const [isCountingClick, setIsCountingClick] = useState(false);
  const [count, setCount] = useState(0);

  useEventListener({
    eventName: "click",
    handler: () => {
      setCount((prevCount) => prevCount + 1);
    },
    enabled: isCountingClick,
  });

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
