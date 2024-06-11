"use client";

import { cn } from "@/src/utils/cn";
import { Check, ShoppingBasket } from "lucide-react";
import { useState } from "react";

// 🦁 Créer un context avec les informations suivant :
// - `items` : un tableau de type `{ id: number, name: string, cover: string }`
// - `onDeleteItem` : une fonction qui va supprimer un item
// - `onAddItem` : une fonction qui va ajouter un item dans le panier

// 🦁 Supprime les imports et utilise le context
const Header = ({ items, onDeleteItem }) => {
  return (
    <div className="flex items-center justify-between rounded-lg border border-neutral/40 bg-base-200 px-8 py-4 shadow-lg">
      <h2 className="text-2xl font-bold">Shoes</h2>
      <div className="dropdown">
        <button tabIndex={0} className="btn btn-secondary m-1">
          <ShoppingBasket size={16} /> {items.length}
        </button>
        <div
          tabIndex={0}
          className="card dropdown-content card-compact z-[1] w-64 bg-base-200 p-2 shadow"
        >
          <ul>
            {items.length === 0 ? (
              <li className="flex w-60 flex-row flex-nowrap items-center justify-between p-1">
                No items
              </li>
            ) : null}
            {items.map((item, index) => (
              <li
                key={index}
                className="flex w-60 flex-row flex-nowrap items-center justify-between p-1"
              >
                <img
                  src={item.cover}
                  alt={item.name}
                  className="m-0 size-8 rounded-full p-0"
                />
                <span>{item.name}</span>
                <button
                  onClick={() => {
                    onDeleteItem(item);
                  }}
                  className="btn btn-error btn-sm"
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default function App() {
  // 🦁 Déplace le state dans un context
  const [items, setItems] = useState([]);

  return (
    <div className="flex flex-col gap-8">
      <Header
        // 🦁 Enlève les props
        onDeleteItem={(item) => {
          setItems((prevItems) => prevItems.filter((i) => i.id !== item.id));
        }}
        items={items}
      />
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {SHOES.map((shoe) => (
          <ShoeCard
            // 🦁 Enlève les props
            isSelected={items.some((item) => item.id === shoe.id)}
            onShoppingBasketClick={() => {
              console.log("click", shoe);
              if (items.some((item) => item.id === shoe.id)) {
                setItems((prevItems) =>
                  prevItems.filter((item) => item.id !== shoe.id)
                );
              } else {
                setItems((prevItems) => [...prevItems, shoe]);
              }
            }}
            key={shoe.id}
            shoe={shoe}
          />
        ))}
      </div>
    </div>
  );
}

const ShoeCard = ({ shoe, isSelected = false, onShoppingBasketClick }) => {
  // 🦁 Utilise le context pour récupérer le state `isSelected` ainsi que `onAddItem` et `onDeleteItem`
  return (
    <div className="card flex w-full bg-base-300 shadow-xl">
      <figure>
        <img
          src={shoe.cover}
          className="h-32 w-full object-cover object-center"
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{shoe.name}</h2>
        <div className="card-actions flex w-full items-end justify-end">
          <button
            // En fonction de `useSelected` on ajoutera ou supprimera du panier
            onClick={onShoppingBasketClick}
            className={cn("btn", {
              "btn-outline": isSelected,
              "btn-primary": !isSelected,
            })}
          >
            <ShoppingBasket size={16} />{" "}
            {isSelected ? <Check size={16} /> : null}
          </button>
        </div>
      </div>
    </div>
  );
};

// *** Data ***
const SHOES = [
  {
    name: "Air Max Plus",
    id: 1,
    cover: "/nikes/air-max-plus.jpeg",
  },
  {
    name: "Air Force",
    id: 2,
    cover: "/nikes/air-force.png",
  },
  {
    name: "Dunk Retro",
    id: 3,
    cover: "/nikes/dunk-retro.png",
  },
  {
    name: "Air Max",
    id: 4,
    cover: "/nikes/air-max.png",
  },
];
