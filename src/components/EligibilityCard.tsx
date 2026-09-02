"use client";

import { useState } from "react";
import { Chip, Icon } from "@/components/ui";

export type Criterion = { text: string; met: boolean };

export function EligibilityCard({
  title,
  beneficiary,
  role,
  birthDate,
  applyChecked = false,
  showApplyCheckbox = true,
  expanded = false,
  criteria,
}: {
  title: string;
  beneficiary: string;
  role: string;
  birthDate?: string;
  applyChecked?: boolean;
  showApplyCheckbox?: boolean;
  expanded?: boolean;
  criteria?: Criterion[];
}) {
  const [isChecked, setIsChecked] = useState(applyChecked);
  const [isExpanded, setIsExpanded] = useState(expanded);

  return (
    <article className="flex flex-col gap-3 rounded-2xl border border-[#e0e0e0] bg-white p-6">
      <div className="flex items-start justify-between gap-4">
        <h2 className="font-heavy text-lg text-[#1d1d1d]">{title}</h2>
        {showApplyCheckbox ? (
          <button
            type="button"
            onClick={() => setIsChecked((v) => !v)}
            aria-pressed={isChecked}
            className="flex shrink-0 items-center gap-3"
          >
            <span className="text-sm text-black">Apply to this program</span>
            {isChecked ? (
              <span className="flex size-7 items-center justify-center rounded-[2px] bg-[#205c6f] text-base font-bold text-white">
                ✓
              </span>
            ) : (
              <span className="flex size-7 items-center justify-center">
                <Icon name="icon-checkbox.svg" size={28} alt="Unchecked" />
              </span>
            )}
          </button>
        ) : null}
      </div>
      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-3">
          <span className="text-base text-black">{beneficiary}</span>
          <Chip>{role}</Chip>
        </div>
        {birthDate ? <p className="text-sm text-black">{birthDate}</p> : null}
      </div>
      <hr className="border-[#e0e0e0]" />
      <div className="flex flex-col gap-3">
        <button
          type="button"
          onClick={() => setIsExpanded((v) => !v)}
          aria-expanded={isExpanded}
          className="flex items-center gap-2 text-base text-[#205c6f]"
        >
          View eligibility details
          <Icon
            name="icon-chevron-down.svg"
            size={24}
            className={isExpanded ? "rotate-180" : ""}
          />
        </button>
        {isExpanded && criteria ? (
          <div className="flex flex-col gap-2 rounded-lg bg-[#f3f6fa] p-3">
            {criteria.map((c) => (
              <div key={c.text} className="flex items-center gap-2">
                <Icon
                  name={c.met ? "icon-check-green.svg" : "icon-cancel.svg"}
                  size={24}
                  className={
                    c.met
                      ? ""
                      : "[filter:brightness(0)_saturate(100%)_invert(28%)_sepia(72%)_saturate(3000%)_hue-rotate(348deg)_brightness(88%)_contrast(90%)]"
                  }
                />
                <p className="text-base text-[#1d1d1d]">{c.text}</p>
              </div>
            ))}
          </div>
        ) : null}
      </div>
    </article>
  );
}
