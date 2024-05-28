"use client";

import useSWR from "swr";

// @ts-ignore
const fetcher = (...args) => fetch(...args).then((res) => res.json());

const CatFact = () => {
  const { data, error, isLoading } = useSWR(
    "https://catfact.ninja/fact",
    fetcher
  );

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
        {error ? (
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
