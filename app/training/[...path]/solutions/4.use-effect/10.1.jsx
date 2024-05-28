"use client";

import clsx from "clsx";
import { useEffect, useState } from "react";

// create a method that takes ms and return an object with hours, minutes, seconds and milliseconds¨
const msToTime = (ms) => {
  const hours = Math.floor(ms / 3600000);
  const minutes = Math.floor((ms / 60000) % 60);
  const seconds = Math.floor((ms / 1000) % 60);
  const milliseconds = ms % 1000;
  return { hours, minutes, seconds, milliseconds };
};

const Timer = () => {
  const [milliseconds, setMilliseconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  // 🦁 Utilise un `useEffect` pour venir incrémenter de 1 `milliseconds`
  // 🦁 Uniquement si `isRunning` est à true
  useEffect(() => {
    if (!isRunning) return;

    const interval = setInterval(() => {
      setMilliseconds((prevMilliseconds) => prevMilliseconds + 10);
    }, 10);

    return () => {
      clearInterval(interval);
    };
  }, [isRunning]);

  const { hours, minutes, seconds, milliseconds: ms } = msToTime(milliseconds);

  const firstDigitOfMilliseconds = Math.floor(ms / 10).toString();

  return (
    <div className="flex w-fit flex-col items-center gap-2 rounded-md bg-base-content p-4 text-base-100">
      <p className="text-center text-sm">Timer</p>
      <div className="flex items-center gap-2">
        <span className="rounded bg-base-100 px-2 py-1 font-mono text-lg text-base-content">
          {hours.toString().padStart(2, "0")}
        </span>
        <span className="rounded bg-base-100 px-2 py-1 font-mono text-lg text-base-content">
          {minutes.toString().padStart(2, "0")}
        </span>
        <span className="rounded bg-base-100 px-2 py-1 font-mono text-lg text-base-content">
          {seconds.toString().padStart(2, "0")}
        </span>
        <span className="rounded bg-base-100 px-2 py-1 font-mono text-lg text-base-content">
          {firstDigitOfMilliseconds.toString().padStart(2, "0")}
        </span>
      </div>

      <div className="flex items-center gap-2">
        <button
          className={clsx("btn btn-sm", {
            "btn-error": isRunning,
            "btn-success": !isRunning,
          })}
          onClick={() => {
            setIsRunning((prevIsRunning) => !prevIsRunning);
          }}
        >
          {isRunning ? "Stop" : "Start"}
        </button>

        <button
          className={clsx("btn btn-info btn-sm")}
          onClick={() => {
            setMilliseconds(0);
          }}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default function App() {
  return (
    <div>
      <Timer />
    </div>
  );
}
