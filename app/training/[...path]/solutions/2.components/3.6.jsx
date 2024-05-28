// @ts-nocheck

import { cva } from "class-variance-authority";

const badgeVariant = cva(
  "inline-flex w-fit items-center rounded-md text-sm font-medium", // styles de base
  {
    variants: {
      variant: {
        red: "bg-red-500/15 text-red-700",
        green: "bg-green-500/15 text-green-700",
        purple: "bg-purple-500/15 text-purple-700",
      },

      size: {
        default: "px-1.5 py-0.5",
        lg: "px-2 py-1",
      },
    },
    defaultVariants: {
      variant: "red",
      size: "default",
    },
  }
);

const Badge = ({ variant = "red", size = "default", children }) => {
  return <span className={badgeVariant({ variant, size })}>{children}</span>;
};

export default function App() {
  return (
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
  );
}
