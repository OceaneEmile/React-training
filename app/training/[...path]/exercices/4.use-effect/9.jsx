"use client";

import { useEffect, useState } from "react";

const useEventListener = ({
  eventName,
  handler,
  element = window,
  enabled = true,
}) => {
  // On utilise useEffect pour ajouter un event listener sur le click
  useEffect(() => {
    if (!isCountingClick) return; // Si isCountingClick est faux, on ne fait rien
    const handleClick = () => {
      if (isCountingClick) {
        console.log(handleClick);
        setCount((preCount) => preCount + 1);
        // On incrémente le compteur si isCountingClick est vrai
      }
    };
    // On ajoute l'event listener sur le click
    window.addEventListener('click', handleClick);



    // Nettoyer l'event listener pour éviter les fuites de mémoire
    return () => {
      window.removeEventListener('click', handleClick);
    };
  }, [isCountingClick]); // On met isCountingClick dans le tableau de dépendances
};

export default function App() {
  function ClickCounter() {
    //isCountingClick est un état qui permet de savoir si on doit compter les clicks
    const [isCountingClick, setIsCountingClick] = useState(false);
    const [count, setCount] = useState(0);


    return (
      <div className="flex max-w-sm flex-col gap-8">
        <div className="form-control">
          <label className="label cursor-pointer">
            <span className="label-text">Is Counting Click</span>
            <input
              type="checkbox"
              className="toggle"
              checked={isCountingClick}
              onChange={(e) => setIsCountingClick(e.target.checked)} // On met à jour isCountingClick
            />
          </label>
        </div>
        <h2 className="text-2xl font-bold">Click count: {count}</h2>
      </div>
    );
  }

  return <ClickCounter />;
}
