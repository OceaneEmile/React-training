"use client";

import { User2 } from "lucide-react";
import { useEffect, useState } from "react";

const STORAGE_KEY = "storage-name";

const getInitialLocalStorageValue = (key) => {
  try {
    const value = localStorage.getItem(key);
    return value;
  } catch {
    return null;
  }
};

const NameForm = ({ initialName }) => {
  const [name, setName] = useState(
    () => getInitialLocalStorageValue(STORAGE_KEY) || initialName
  );

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, name);
  }, [name]);

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
