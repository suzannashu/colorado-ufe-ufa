"use client";

import { useState } from "react";
import { Button, Icon } from "@/components/ui";

const AGE_OPTIONS = Array.from(
  { length: 13 },
  (_, i) => `${i} year${i === 1 ? "" : "s"}`,
);

function ChildRow({
  label,
  onRemove,
}: {
  label: string;
  onRemove: () => void;
}) {
  return (
    <div className="flex items-center justify-between border border-[#e0e0e0] p-4">
      <div className="flex items-center gap-6">
        <span className="font-heavy text-lg text-black">{label}</span>
        <div className="relative flex h-14 w-[220px] flex-col justify-center border-b border-[#9e9e9e] bg-[#eee] px-4 py-2">
          <span className="text-xs text-[#1d1d1d]">Age</span>
          <select
            defaultValue="0 years"
            className="w-full appearance-none bg-transparent pr-8 text-base text-[#1d1d1d] outline-none"
          >
            {AGE_OPTIONS.map((age) => (
              <option key={age} value={age}>
                {age}
              </option>
            ))}
          </select>
          <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2">
            <Icon name="icon-chevron-down-field.svg" size={24} />
          </span>
        </div>
      </div>
      <button
        type="button"
        onClick={onRemove}
        className="flex size-6 items-center justify-center rounded-full bg-[#9e9e9e]"
        aria-label={`Remove ${label}`}
      >
        <Icon name="icon-cancel.svg" size={16} />
      </button>
    </div>
  );
}

export function ChildrenList() {
  const [children, setChildren] = useState([0, 1]);
  const [nextId, setNextId] = useState(2);

  function addChild() {
    setChildren((prev) => [...prev, nextId]);
    setNextId((id) => id + 1);
  }

  function removeChild(id: number) {
    setChildren((prev) => prev.filter((childId) => childId !== id));
  }

  return (
    <>
      {children.map((id, index) => (
        <ChildRow
          key={id}
          label={`Child ${index + 1}`}
          onRemove={() => removeChild(id)}
        />
      ))}
      <Button
        variant="ghost"
        size="sm"
        className="self-start bg-[#f3f6fa]"
        onClick={addChild}
      >
        <Icon name="icon-add-teal.svg" size={16} />
        Add a child
      </Button>
    </>
  );
}
