"use client";

import { useEffect, useState } from "react";

const CatFact = () => {
  const [data, setData] = useState(null);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const abortController = new AbortController();

    fetch("https://catfact.ninja/fact", {
      signal: abortController.signal,
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw new Error("Invalid response");
      })
      .then((data) => {
        setIsError(false);
        setData(data);
      })
      .catch(() => {
        setIsError(true);
        setData(null);
      })
      .finally(() => {
        setIsLoading(false);
      });

    return () => {
      abortController.abort();
    };
  }, []);

  return (
    <div className="card card-compact w-96 max-w-sm bg-base-200 shadow-xl">
      <figure>
        <img
          src="https://cataas.com/cat"
          alt="Shoes"
          className="max-h-32 w-full object-cover"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Cat fact</h2>
        {isLoading ? (
          <span className="loading loading-ring loading-lg"></span>
        ) : null}
        {isError ? (
          <p className="text-error">
            Something went wrong while fetching the cat fact
          </p>
        ) : null}
        {data ? <p>{data.fact}</p> : null}
      </div>
    </div>
  );
};

export default function App() {
  return (
    <div>
      <CatFact />
    </div>
  );
}
