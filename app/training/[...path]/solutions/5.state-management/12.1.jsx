"use client";

import { User2 } from "lucide-react";
import { createContext, useContext, useState } from "react";

const DialogContext = createContext(null);

const Dialog = ({ children }) => {
  const [open, setOpen] = useState(false);

  return (
    <DialogContext.Provider value={{ open, setOpen }}>
      {children}
    </DialogContext.Provider>
  );
};

const useDialogContext = () => {
  const context = useContext(DialogContext);
  if (!context) {
    throw new Error("useDialogContext must be used within a DialogProvider");
  }
  return context;
};

const DialogTrigger = ({ children }) => {
  const { setOpen } = useDialogContext();
  return (
    <button onClick={() => setOpen(true)} className="btn">
      {children}
    </button>
  );
};

const DialogContent = ({ children }) => {
  const { open } = useDialogContext();
  if (!open) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm animate-in fade-in-50">
      <div className="card w-96 bg-base-200 shadow-xl animate-in fade-in-50 slide-in-from-bottom-3">
        <div className="card-body">{children}</div>
      </div>
    </div>
  );
};

const DialogClose = ({ children }) => {
  const { setOpen } = useContext(DialogContext);
  return (
    <button onClick={() => setOpen(false)} className="btn btn-primary">
      {children}
    </button>
  );
};

export default function App() {
  return (
    <Dialog>
      <DialogTrigger>Open dialog</DialogTrigger>
      <DialogContent>
        <p>What is your name ?</p>

        <label className="input input-bordered flex items-center gap-2">
          <User2 scale={16} />
          <input type="text" className="grow" placeholder="Username" />
        </label>
        <div className="flex gap-2">
          <DialogClose>Close</DialogClose>
          <button className="btn btn-primary">Submit</button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
