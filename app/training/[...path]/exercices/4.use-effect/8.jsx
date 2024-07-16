// @ts-nocheck
"use client";

import { User2 } from "lucide-react";
import { useEffect, useState } from "react";

// J'initialise la clé par une constante, qui sera utilisée comme clé pour stocker dans le localStorage
const STORAGE_KEY = "storage-name";

const NameForm = ({ initialName }) => {
  // Hook usestate pour créer variable 'name' et fonction 'setName' pour la modifier
  const [name, setName] = useState(
    localStorage.getItem(STORAGE_KEY) || initialName // (GET pour recuperer) valeur stockée dans le localStorage ou initialName
  );
 // Hook useEffect pour sauvegarder le nom dans le localStorage
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, name); // SET pour stocker la valeur de name dans le localStorage
  }, [name]); // Déclenche l'effet uniquement si la valeur de name change

  return (
    <div className="flex flex-col items-center justify-center">
      <label className="input input-bordered flex items-center gap-2">
        <User2 size={16} />
        <input
          type="text"
          className="grow"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)} // A chaque changement de valeur, on appelle setName pour mettre à jour la valeur de name
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
