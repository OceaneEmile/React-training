import clsx from "clsx";

/**
```css
// globals.css

.badge {
  display: inline-flex;
  align-items: center;
  border-radius: 0.375rem; 
  font-weight: 500;
  width: fit-content;
}

.badge-size-default {
  padding: 2px 6px;
  font-size: 14px;
}

.badge-size-large {
  padding: 4px 8px;
  font-size: 14px;
}

.badge-color-red {
  background: #ef444415;
  color: #b91c1c;
}

.badge-color-green {
  background: #22c55e15;
  color: #15803d;
}

.badge-color-purple {
  background: #8b5cf615;
  color: #6d28d9;
}
```

 */

const SIZES = {
  default: "badge-size-default",
  lg: "badge-size-large",
};

const COLORS = {
  red: "badge-color-red",
  green: "badge-color-green",
  purple: "badge-color-purple",
};

const Badge = ({ size, variant, children }) => {
  const sizeClassName = SIZES[size] || SIZES.default;
  const colorClassName = COLORS[variant] || COLORS.red;

  return (
    <span className={clsx("badge", sizeClassName, colorClassName)}>
      {children}
    </span>
  );
};

export default function App() {
  return (
    <div>
      <div role="alert" className="alert alert-warning">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="size-6 shrink-0 stroke-current"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
          />
        </svg>
        <span>
          Cette solution ne fonctionne pas si tu n'as pas ajouté les styles CSS
          dans le fichier `globals.css` !
        </span>
      </div>
      <div className="grid grid-cols-4 flex-col gap-2 bg-white p-8 text-black">
        <p className="code">Size / color</p>
        <p className="code">Green</p>
        <p className="code">Red</p>
        <p className="code">Purple</p>
        <p className="code">lg</p>
        <Badge size="lg" variant="green">
          New
        </Badge>
        <Badge size="lg" variant="red">
          New
        </Badge>
        <Badge size="lg" variant="purple">
          New
        </Badge>
        <p className="code">default</p>
        <Badge size="default" variant="green">
          New
        </Badge>
        <Badge size="default" variant="red">
          New
        </Badge>
        <Badge size="default" variant="purple">
          New
        </Badge>
      </div>
    </div>
  );
}
