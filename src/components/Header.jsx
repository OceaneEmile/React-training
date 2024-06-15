import Link from "next/link";
import { ThemeController } from "./ThemeController";

export const Header = () => {
  return (
    <header className="sticky max-w-2xl w-full m-auto top-4 z-50 flex items-center gap-2 rounded-full border border-neutral-content/20 bg-neutral px-4 py-2 shadow-md">
      <img className="size-8" src="/beginreact.png" />
      <Link href="/" className="font-bold text-neutral-content">
        BeginReact
      </Link>
      <div className="flex-1"></div>
      <ThemeController />
    </header>
  );
};
