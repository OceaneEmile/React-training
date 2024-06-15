"use client";

import { User2 } from "lucide-react";
import { useState } from "react";

// 🦁 Crée un contexte `DialogContext` avec une valeur par défaut `null`

// 🦁 Crée une fonction `useDialogContext` qui va retourner le contexte `DialogContext`
// 💡 Utilise `useContext` pour récupérer le contexte `DialogContext`
// ❌ Si le contexte renvoie null, on va renvoyer une erreur
// ✅ Sinon on va renvoyer le contexte

// Modifie Dialog pour qu'il injecte le `open, setOpen` dans notre `DialogContext.Provider`
// https://react.dev/reference/react/createContext#provider
const Dialog = ({ children, buttonText }) => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setOpen(true)} className="btn">
        {buttonText}
      </button>
      <DialogContent open={open} setOpen={setOpen}>
        {children}
      </DialogContent>
    </div>
  );
};

// 🦁 Enlève les props et utilise `useDialogContext` pour récupérer le contexte
const DialogContent = ({ open, setOpen, children }) => {
  if (!open) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm animate-in fade-in-50">
      <div className="card w-96 bg-base-200 shadow-xl animate-in fade-in-50 slide-in-from-bottom-3">
        <div className="card-body">
          {children}
          {/* 🦁 Enlève ce code */}
          <div className="card-actions justify-end">
            <button onClick={() => setOpen(false)} className="btn btn-primary">
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// 🦁 Crée un component DialogTrigger qui prend comme props children
// Celui-ci va contenir le bouton avec un onClick qui va mettre à jour le state `open`
// Utilise `useDialogContext` pour récupérer le contexte `DialogContext`

// 🦁 Crée un component DialogClose qui prend comme props children
// Celui-ci va contenir le bouton avec un onClick qui va mettre à jour le state `open`
// Utilise `useDialogContext` pour récupérer le contexte `DialogContext`

export default function App() {
  return (
    <div>
      {/* 🦁 Mets ensemble nos components pour avoir un Dialog fonctionnel */}
      <Dialog buttonText="Open dialog">
        <p>What is your name ?</p>

        <label className="input input-bordered flex items-center gap-2">
          <User2 scale={16} />
          <input type="text" className="grow" placeholder="Username" />
        </label>
        <div className="flex gap-2">
          {/* 🦁 Ajoute le bouton "Cancel" */}
          <button className="btn btn-primary">Submit</button>
        </div>
      </Dialog>
    </div>
  );
}
