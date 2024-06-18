"use client";

import { Search } from "lucide-react";
import { useRef, useState } from "react";

const useDebounce = (callback, time) => {
  const debounce = useRef(null);

  const onDebounce = (...args) => {
    clearTimeout(debounce.current);
    debounce.current = setTimeout(() => {
      callback(...args);
    }, time);
  };

  return onDebounce;
};

const fetchAgeByName = (name) => {
  return fetch(`https://api.agify.io/?name=${name}`).then((res) => res.json());
};

export default function App() {
  const [result, setResult] = useState(null);
  const inputRef = useRef(null);

  const onSearch = useDebounce(() => {
    fetchAgeByName(inputRef.current.value).then((data) => {
      setResult(data);
    });
  }, 500);

  return (
    <div className="flex flex-col items-center gap-4">
      <label className="input input-bordered flex items-center gap-2">
        <input
          type="text"
          placeholder="Search bar"
          ref={inputRef}
          onChange={() => {
            onSearch();
          }}
        />
        <Search size={16} />
      </label>
      {result ? (
        <div style={{ padding: 16 }}>
          The age for <b>{result.name}</b> is <b>{result.age}</b> and there is{" "}
          <b>{result.count}</b> people with this name.
        </div>
      ) : null}
    </div>
  );
}
