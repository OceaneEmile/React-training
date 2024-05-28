// @ts-nocheck
"use client";

import clsx from "clsx";

const Button = ({ children, variant, id }) => {
  const buttonClass = clsx("btn ring-offset-2 ring-offset-base-100", {
    "btn-primary": variant === "primary",
    "btn-error": variant === "error",
    "btn-success": variant === "success",
    "btn-warning": variant === "warning",
  });

  return (
    <button className={buttonClass} id={id}>
      {children}
    </button>
  );
};

export default function App() {
  return (
    <div
      // 🦁 Rajoute un `onClick` avec un arrow function
      // 💡 (e) => {...}
      // Récupère l'id de l'élément cliqué avec `target`
      // Si `target` === `currentTarget` = container
      // Sinon = id de l'élément cliqué
      // Affiche une `alert` avec `alert`
      className="flex flex-wrap gap-4 p-4"
    >
      <Button variant={"primary"} id="eat-me">
        Eat me
      </Button>
      <Button variant={"error"} id="love-me">
        Love me
      </Button>
      <Button variant={"success"} id="drink-me">
        Drink me
      </Button>
      <Button variant={"warning"} id="leave-me">
        Eat me
      </Button>
    </div>
  );
}
