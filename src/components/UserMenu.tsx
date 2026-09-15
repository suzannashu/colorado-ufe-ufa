"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { Icon } from "./ui";

export function UserMenu({ name = "Karla Abrams" }: { name?: string }) {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onClick(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  const initials = name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  function handleLogout() {
    setOpen(false);
    router.push("/apply");
  }

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-haspopup="menu"
        aria-expanded={open}
        className="flex items-center gap-3"
      >
        <span className="flex size-9 items-center justify-center rounded-full bg-[#205c6f] text-sm font-heavy text-white">
          {initials}
        </span>
        <span className="text-sm text-[#1d1d1d]">{name}</span>
        <Icon name="icon-chevron-down.svg" size={20} />
      </button>
      {open ? (
        <div
          role="menu"
          className="absolute right-0 top-full z-10 mt-2 w-40 overflow-hidden rounded-lg border border-[#e0e0e0] bg-white shadow-md"
        >
          <button
            type="button"
            role="menuitem"
            onClick={handleLogout}
            className="flex w-full items-center gap-2 px-4 py-3 text-left text-sm text-[#1d1d1d] hover:bg-[#f3f6fa]"
          >
            <Icon name="icon-logout.svg" size={20} />
            Log out
          </button>
        </div>
      ) : null}
    </div>
  );
}
