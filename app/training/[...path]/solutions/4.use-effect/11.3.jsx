"use client";

import { ErrorBoundaries } from "@/src/utils/ErrorBoundaries";
import { Suspense, use } from "react";

const getCatFact = async () => {
  const result = await fetch("https://catfact.ninja/fact");
  const json = await result.json();

  return json;
};

const CatFact = () => {
  const { fact } = use(getCatFact());
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

        <p>{fact}</p>
      </div>
    </div>
  );
};

export default function App() {
  return (
    <div>
      <ErrorBoundaries>
        <Suspense fallback={<div>Loading...</div>}>
          <CatFact />
        </Suspense>
      </ErrorBoundaries>
    </div>
  );
}
