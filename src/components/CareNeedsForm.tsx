"use client";

import { useState } from "react";
import { PageShell } from "@/components/SiteChrome";
import { Stepper } from "@/components/Stepper";
import { Button, Icon } from "@/components/ui";

const OPTIONS = [
  "Full-time or part-time child care",
  "Cash assistance",
  "Early learning",
  "Food and nutrition",
  "Health coverage",
  "Home visiting help",
  "Mental health support",
  "Help me decide",
];

export function CareNeedsForm({
  initialSelected = [],
  nextHref = "/eligibility/6",
  backHref = "/eligibility/3",
}: {
  initialSelected?: string[];
  nextHref?: string;
  backHref?: string;
}) {
  const [selected, setSelected] = useState<string[]>(initialSelected);

  return (
    <PageShell active="eligibility" borderedHeader className="bg-white">
      <section className="flex flex-col items-center py-10">
        <div className="flex w-full max-w-[853px] flex-col gap-6">
          <Stepper current={3} />
          <div className="flex flex-col gap-3">
            <h1 className="font-heavy text-[28px] leading-10 text-black">
              What kind of care do you need?
            </h1>
            <p className="text-lg leading-6 text-black">
              You may select more than one. Not sure? Choose &quot;Help me
              decide&quot; and we&apos;ll still show your options.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            {OPTIONS.map((option) => {
              const checked = selected.includes(option);
              return (
                <button
                  key={option}
                  type="button"
                  onClick={() =>
                    setSelected((prev) =>
                      checked
                        ? prev.filter((o) => o !== option)
                        : [...prev, option],
                    )
                  }
                  className={`flex h-[72px] w-full items-center gap-3 rounded-lg border bg-[#f3f6fa] px-4 text-left text-base text-[#1d1d1d] ${
                    checked ? "border-[#205c6f]" : "border-[#e0e0e0]"
                  }`}
                >
                  {checked ? (
                    <span className="flex size-5 items-center justify-center rounded-[2px] bg-[#205c6f] text-xs text-white">
                      ✓
                    </span>
                  ) : (
                    <Icon name="icon-checkbox.svg" size={20} />
                  )}
                  {option}
                </button>
              );
            })}
          </div>
          <div className="flex items-center justify-between pt-2">
            <Button href={backHref} variant="secondary">
              Back
            </Button>
            <Button href={nextHref}>Continue</Button>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
