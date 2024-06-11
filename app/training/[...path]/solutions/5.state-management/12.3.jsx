"use client";

import { cn } from "@/src/utils/cn";
import { User2, X } from "lucide-react";
import {
  cloneElement,
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";

const DialogContext = createContext(null);

const Dialog = ({
  children,
  open: openProps = null,
  setOpen: setOpenProps = null,
}) => {
  const [open, setOpen] = useState(false);

  const usedOpen = openProps || open;
  const usedSetOpen = setOpenProps || setOpen;

  return (
    <DialogContext.Provider value={{ open: usedOpen, setOpen: usedSetOpen }}>
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

  if (typeof children !== "string") {
    return cloneElement(children, { onClick: () => setOpen(true) });
  }

  return (
    <button onClick={() => setOpen(true)} className="btn">
      {children}
    </button>
  );
};

const useClickOutside = (ref, handler) => {
  useEffect(() => {
    const listener = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        handler(event);
      }
    };
    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, handler]);
};

const useEventListener = ({
  eventName,
  handler,
  element = window,
  isEnabled = true,
}) => {
  useEffect(() => {
    if (!element) return;
    if (!isEnabled) return;

    const eventListener = (event) => handler(event);
    element.addEventListener(eventName, eventListener);

    return () => {
      element.removeEventListener(eventName, eventListener);
    };
  }, [eventName, handler, element, isEnabled]);
};

const getFocusableElements = (ref) =>
  Array.from(
    ref.current.querySelectorAll(
      'a[href], button, textarea, input[type="text"], input[type="radio"], input[type="checkbox"], select'
    )
  );

const useFocusTrap = (ref, enabled) => {
  useEffect(() => {
    if (!enabled || !ref.current) {
      return;
    }

    const focusFirstElement = () => {
      const focusableElements = getFocusableElements(ref);
      const firstFocusableElement = focusableElements[0];
      if (firstFocusableElement) {
        firstFocusableElement.focus();
      }
    };
    focusFirstElement();
  }, [ref, enabled]);

  useEventListener({
    eventName: "keydown",
    handler: (e) => {
      if (e.key !== "Tab") {
        return;
      }

      const handleTabKey = (e) => {
        const focusableElements = getFocusableElements(ref);
        const activeElement = document.activeElement;

        let nextActiveElementIndex = e.shiftKey
          ? focusableElements.indexOf(activeElement) - 1
          : focusableElements.indexOf(activeElement) + 1;

        if (focusableElements[nextActiveElementIndex]) {
          return;
        }

        nextActiveElementIndex =
          nextActiveElementIndex < 0 ? focusableElements.length - 1 : 0;

        focusableElements[nextActiveElementIndex].focus();
        e.preventDefault();
        return;
      };

      handleTabKey(e);
    },
    isEnabled: enabled,
  });
};

const DialogContent = ({ children, className = "" }) => {
  const { open, setOpen } = useDialogContext();
  const ref = useRef(null);
  useClickOutside(ref, () => setOpen(false));
  useEventListener({
    eventName: "keydown",
    isEnabled: open,
    handler: (e) => {
      if (e.key === "Escape") {
        setOpen(false);
      }
    },
  });
  useFocusTrap(ref, open);

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm animate-in fade-in-50"
    >
      <div
        ref={ref}
        className={cn(
          "card w-96 bg-base-200 shadow-xl animate-in fade-in-50 slide-in-from-bottom-3",
          className
        )}
      >
        <div className="card-body">{children}</div>
      </div>
    </div>
  );
};

const DialogClose = ({ children }) => {
  const { setOpen } = useContext(DialogContext);

  if (typeof children !== "string") {
    return cloneElement(children, { onClick: () => setOpen(false) });
  }

  return (
    <button onClick={() => setOpen(false)} className="btn btn-primary">
      {children}
    </button>
  );
};

export default function App() {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} setOpen={setOpen}>
      <DialogTrigger>
        <button className="btn btn-primary btn-lg">Open Dialog Now !</button>
      </DialogTrigger>
      <DialogContent className="">
        <DialogClose>
          <button className="absolute right-4 top-4 flex size-6 items-center justify-center rounded-lg bg-base-100">
            <X size={12} />
          </button>
        </DialogClose>

        <p>What is your name ?</p>

        <label className="input input-bordered flex items-center gap-2">
          <User2 scale={16} />
          <input type="text" className="grow" placeholder="Username" />
        </label>
        <div className="flex gap-2">
          <DialogClose>
            <button className="btn btn-ghost">Cancel</button>
          </DialogClose>
          <button
            className="btn btn-primary"
            onClick={() => {
              alert("Submit");
              setOpen(false);
            }}
          >
            Submit
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
}