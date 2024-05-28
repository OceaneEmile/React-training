const SIZES = {
  default: {
    padding: "2px 6px",
  },
  lg: {
    padding: "4px 8px",
  },
};

const COLORS = {
  red: {
    background: "#ef444415",
    color: "#b91c1c",
  },
  green: {
    background: "#22c55e15",
    color: "#15803d",
  },
  purple: {
    background: "#8b5cf615",
    color: "#6d28d9",
  },
};

const Badge = ({ size, variant, children }) => {
  const sizeStyle = SIZES[size] || SIZES.default;
  const colorStyle = COLORS[variant] || COLORS.red;

  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        borderRadius: "6px",
        fontWeight: "500",
        width: "fit-content",
        fontSize: "14px",
        ...sizeStyle,
        ...colorStyle,
      }}
    >
      {children}
    </span>
  );
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
