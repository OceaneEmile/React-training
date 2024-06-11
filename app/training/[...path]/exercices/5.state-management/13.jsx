"use client";

// 🦁 Créer une méthode `reducer` qui prends en paramètre `state` et `action`
// 🦁 Return le `state` + 1

export default function App() {
  // 🦁 Remplace ceci par un `useReducer`
  // ⚡ La seul action sera d'incrémenter le count
  const count = 0;

  return (
    <div className="card m-auto w-full max-w-md bg-base-200 shadow-xl">
      <div className="card-body items-center text-center">
        <h2 className="card-title">{count}</h2>
        <div className="card-actions">
          <button className="btn btn-primary">+</button>
        </div>
      </div>
    </div>
  );
}
