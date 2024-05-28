"use client";

import { Plus } from "lucide-react";

export const Todos = () => {
  // 🦁 Ajoute deux états :
  //    - `todos` : un tableau vide
  //    - `todo` : une chaîne de caractères vide

  // 🦁 Crée une méthode `addTodo` qui ajoute un todo
  // 💡 Un todo est un objet avec 3 propriétés :
  //    1. `id` : un identifiant unique (💡 utilise `Date.now()`)
  //    2. `text` : le texte du todo
  //    3. `completed` : un booléen qui indique si le todo est complété (💡 `false` par défaut)

  return (
    <div className="card w-full max-w-md border border-base-300 bg-base-200 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">Todos</h2>
        <div className="flex w-full items-center gap-2">
          <label className="input input-bordered flex flex-1 items-center gap-2">
            <input
              type="checkbox"
              checked={false}
              className="checkbox checkbox-sm"
            />
            {/* 🦁 Ajoute un état "Todo" et contrôle l'input */}
            <input type="text" className="grow" placeholder="Some task" />
          </label>
          {/* 🦁 Lors du clic sur le bouton, appelle la méthode "addTodo" */}
          <button className="btn btn-primary">
            <Plus size={22} />
          </button>
        </div>
        <div className="divider">List</div>
        <ul className="space-y-2">
          {/* Voici un exemple d'un élément "Todo" */}
          {/* Tu dois afficher ces éléments avec une liste en utilisant `.map` */}
          <li className="flex w-full items-center gap-2">
            <label className="input input-bordered flex flex-1 items-center gap-2">
              <input type="checkbox" className="checkbox checkbox-sm" />
              <p>Todo demo</p>
            </label>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default function App() {
  return (
    <div className="flex w-full justify-center">
      <Todos />
    </div>
  );
}
