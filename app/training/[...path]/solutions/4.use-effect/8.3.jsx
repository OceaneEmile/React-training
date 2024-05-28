"use client";

import { User2 } from "lucide-react";
import { useEffect, useState } from "react";

const STORAGE_KEY = "storage-name";

const getInitialLocalStorageValue = (key, initialValue) => {
  try {
    const value = localStorage.getItem(key);
    return value !== null ? value : initialValue;
  } catch {
    return initialValue;
  }
};

const useStickyState = (key, initialValue) => {
  const [value, setValue] = useState(() =>
    getInitialLocalStorageValue(key, initialValue)
  );

  useEffect(() => {
    localStorage.setItem(key, value);
  }, [key, value]);

  return [value, setValue];
};

const NameForm = ({ initialName }) => {
  const [name, setName] = useStickyState(STORAGE_KEY, initialName);

  return (
    <div className="flex flex-col items-center justify-center">
      <label className="input input-bordered flex items-center gap-2">
        <User2 size={16} />
        <input
          type="text"
          className="grow"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
    </div>
  );
};

export default function App() {
  return (
    <div className="flex flex-col gap-8">
      <NameForm initialName={"Jean"} />
    </div>
  );
}
