"use client";

import { useEffect, useRef, useState } from "react";
import { Icon } from "./ui";

const MENUS: Record<string, string[]> = {
  age: ["Infants", "Toddlers under 3", "3 year olds", "4 year olds", "School age"],
  county: ["Adams", "Alamosa", "Arapahoe", "Archuleta", "Baca"],
  income: [
    "Unemployed",
    "up to $24,999",
    "$25,000 - $39,999",
    "$40,000 - $59,999",
    "Over $60,000",
  ],
  support: [
    "Child care",
    "Early learning",
    "Family resource navigation",
    "Financial support",
    "Food & nutrition",
    "Home visits",
    "Mental health support",
    "Parenting support",
  ],
};

const FILTERS = [
  { id: "age", label: "Child’s age" },
  { id: "county", label: "County" },
  { id: "income", label: "Income limits" },
  { id: "support", label: "Support services" },
] as const;

export type FilterSelection = Record<string, string[]>;

export function BrowseFilters({
  selected,
  onChange,
}: {
  selected: FilterSelection;
  onChange: (next: FilterSelection) => void;
}) {
  const [open, setOpen] = useState<string | null>(null);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;

    function handlePointerDown(event: MouseEvent | TouchEvent) {
      const root = rootRef.current;
      if (!root) return;
      if (event.target instanceof Node && !root.contains(event.target)) {
        setOpen(null);
      }
    }

    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("touchstart", handlePointerDown);
    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("touchstart", handlePointerDown);
    };
  }, [open]);

  function toggleOption(menuId: string, option: string) {
    const current = selected[menuId] ?? [];
    const next = current.includes(option)
      ? current.filter((o) => o !== option)
      : [...current, option];
    onChange({ ...selected, [menuId]: next });
  }

  return (
    <div ref={rootRef} className="relative flex flex-wrap items-center gap-2">
      <span className="text-sm text-[#1d1d1d]">Filter by</span>
      {FILTERS.map((filter) => {
        const isOpen = open === filter.id;
        const hasSelection = (selected[filter.id] ?? []).length > 0;
        const active = isOpen || hasSelection;

        return (
          <div key={filter.id} className="relative">
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : filter.id)}
              className={`rounded-full border border-[#e0e0e0] px-4 py-2.5 text-sm text-[#1d1d1d] ${
                active ? "bg-[rgba(32,92,111,0.2)]" : "bg-white"
              }`}
            >
              {filter.label}
            </button>

            {isOpen && MENUS[filter.id] ? (
              <div className="absolute left-0 top-[calc(100%+8px)] z-20 flex w-[280px] flex-col gap-2 rounded-[6px] border border-[#e0e0e0] bg-white px-4 py-3 shadow-sm">
                {MENUS[filter.id].map((option) => {
                  const checked = (selected[filter.id] ?? []).includes(option);
                  return (
                    <button
                      key={option}
                      type="button"
                      role="menuitemcheckbox"
                      aria-checked={checked}
                      onClick={() => toggleOption(filter.id, option)}
                      className="flex w-full items-center gap-0 text-left text-base text-[#1d1d1d]"
                    >
                      <span className="flex size-10 items-center justify-center">
                        {checked ? (
                          <span className="flex size-5 items-center justify-center rounded-[2px] bg-[#205c6f] text-white">
                            ✓
                          </span>
                        ) : (
                          <Icon name="icon-checkbox.svg" size={24} />
                        )}
                      </span>
                      {option}
                    </button>
                  );
                })}
              </div>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}
