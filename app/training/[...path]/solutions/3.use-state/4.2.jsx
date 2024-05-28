// @ts-nocheck
"use client";

import clsx from "clsx";

const Button = ({ children, variant, id, onClick }) => {
  const buttonClass = clsx("btn ring-offset-2 ring-offset-base-100", {
    "btn-primary": variant === "primary",
    "btn-error": variant === "error",
    "btn-success": variant === "success",
    "btn-warning": variant === "warning",
  });

  return (
    <button className={buttonClass} id={id} onClick={() => onClick(id)}>
      {children}
    </button>
  );
};

export default function App() {
  const onClickButton = (id) => alert(`You clicked on ${id}`);

  return (
    <div
      onClick={(e) => {
        const target = e.target;

        if (target === e.currentTarget) {
          alert(`You clicked on the container`);
        }
      }}
      className="flex flex-wrap gap-4 p-4"
    >
      <Button
        onClick={(id) => onClickButton(id)}
        variant={"primary"}
        id="eat-me"
      >
        Eat me
      </Button>
      <Button
        variant={"error"}
        id="love-me"
        onClick={(id) => onClickButton(id)}
      >
        Love me
      </Button>
      <Button
        variant={"success"}
        id="drink-me"
        onClick={(id) => onClickButton(id)}
      >
        Drink me
      </Button>
      <Button
        variant={"warning"}
        id="leave-me"
        onClick={(id) => onClickButton(id)}
      >
        Eat me
      </Button>
    </div>
  );
}
