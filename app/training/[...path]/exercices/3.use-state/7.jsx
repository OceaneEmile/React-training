"use client";

import { Mail, User2 } from "lucide-react";
import { useState } from "react";

// eslint-disable-next-line no-unused-vars
export const LoginForm = ({ onSubmit }) => {
  // 🦁 Utilise 2 states pour le mail et le name

  // 🦁 Crée une méthode "handleSubmit" qui sera passée au `onSubmit` de `form`
  // - Commence par empêcher le comportement par défaut du formulaire
  // - Puis appelle `onSubmit` avec un objet contenant le mail et le name
  return (
    // Ajoute la props `onSubmit`
    <form className="flex flex-col gap-2">
      <label className="input input-bordered flex items-center gap-2">
        <Mail size={16} />
        {/* 🦁 Contrôle cette input */}
        <input type="text" className="grow" placeholder="email" />
      </label>
      <label className="input input-bordered flex items-center gap-2">
        <User2 size={16} />
        {/* 🦁 Contrôle cette input */}
        <input type="text" className="grow" placeholder="user" />
      </label>
      <button type="button" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default function App() {
  const [user, setUser] = useState(null);

  if (user) {
    return (
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">Logged in !</h2>
          <p>Email : {user.email}</p>
          <p>Name : {user.name}</p>
          <div className="card-actions justify-end">
            <button
              className="btn btn-primary"
              onClick={() => {
                setUser(null);
              }}
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="flex justify-center">
      <LoginForm
        onSubmit={(values) => {
          setUser(values);
        }}
      />
    </div>
  );
}
