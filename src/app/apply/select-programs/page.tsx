"use client";

import { useState } from "react";
import { PageShell } from "@/components/SiteChrome";
import { Button, Chip, Icon } from "@/components/ui";

type Program = {
  id: string;
  title: string;
  category: string;
  description: string;
  criteriaGroups: string[][];
};

const programs: Program[] = [
  {
    id: "upk",
    title: "Colorado Universal Pre-K (UPK)",
    category: "Early Learning",
    description:
      "Provides free preschool for eligible Colorado children before kindergarten, with additional eligibility options for some younger children.",
    criteriaGroups: [
      [
        "Family lives in Colorado",
        "The child must be 4 on October 1 of the school year before kindergarten",
        "Some 3-year-olds may qualify, including children with an Individualized Education Program (IEP)",
      ],
    ],
  },
  {
    id: "cccap",
    title: "Colorado Child Care Assistance Program (CCCAP)",
    category: "Financial support",
    description:
      "Helps eligible families pay for child care while they work, study or attend approved training.",
    criteriaGroups: [
      [
        "Children must be under 13 years of age",
        "Household income falls below 130% of federal poverty line",
        "Parent/guardian must be working, looking for work, or attending school/training",
        "Verified state residency and identity",
      ],
    ],
  },
  {
    id: "child-first",
    title: "Child First",
    category: "Home visiting",
    description:
      "Provides home-based support for young children and families to build healthy relationships and support development.",
    criteriaGroups: [
      ["For families with young children from birth through age 5"],
    ],
  },
  {
    id: "hippy",
    title: "HIPPY (Home Instruction for Parents of Preschool Youngsters)",
    category: "Home visiting",
    description:
      "Helps parents support their child's early learning through home-based activities and education.",
    criteriaGroups: [
      [
        "For families with children ages 2 through 5",
        "A parent or legal guardian can participate in the program",
      ],
    ],
  },
  {
    id: "nfp",
    title: "Nurse-Family Partnership (NFP)",
    category: "Home visiting",
    description:
      "Provides nurse home visits to first-time parents during pregnancy and their child's early years.",
    criteriaGroups: [
      [
        "For families and individuals expecting a child",
        "Household income at or below 200% of the federal poverty line",
      ],
    ],
  },
  {
    id: "pat",
    title: "Parents as Teachers (PAT)",
    category: "Home visiting",
    description:
      "Offers home visits, parenting guidance and resources to support children's health, learning and development.",
    criteriaGroups: [
      [
        "Expecting a baby or have a child from birth until kindergarten",
        "Parent/caregiver agrees to participate in home visits or other program activities",
      ],
    ],
  },
  {
    id: "safecare",
    title: "SafeCare",
    category: "Home visiting",
    description:
      "Helps families build parenting skills, support child health and create safer homes.",
    criteriaGroups: [
      ["For families where a child age 5 or younger lives in the household"],
    ],
  },
];

function ApplyCheckbox({
  checked,
  onToggle,
  label,
}: {
  checked: boolean;
  onToggle: () => void;
  label: string;
}) {
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-pressed={checked}
      className="flex shrink-0 items-center gap-3"
    >
      <span className="text-sm leading-[18px] text-black">{label}</span>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        alt=""
        src={
          checked
            ? "/assets/checkbox-selected-28.svg"
            : "/assets/checkbox-unselected-28.svg"
        }
        width={28}
        height={28}
      />
    </button>
  );
}

export default function SelectProgramsPage() {
  const [selected, setSelected] = useState<Record<string, boolean>>({});

  return (
    <PageShell borderedHeader className="bg-white">
      <section className="flex flex-col items-center py-10">
        <div className="flex w-full max-w-[853px] flex-col gap-[25px]">
          <div className="flex flex-col gap-3 text-[#1d1d1d]">
            <h1 className="font-heavy text-[28px] leading-10">
              Apply one time and get connected to more programs.
            </h1>
            <p className="text-lg leading-6">
              With one application, you can apply for Universal Pre-K, CCCAP,
              and five home visiting programs that support Colorado families and
              young children. Select all the programs you wish to apply for.
            </p>
          </div>

          {programs.map((program) => (
            <article
              key={program.id}
              className="flex flex-col gap-3 rounded-2xl border border-[#e0e0e0] bg-white p-6"
            >
              <div className="flex items-start gap-4">
                <h2 className="flex-1 font-heavy text-lg leading-6 text-black">
                  {program.title}
                </h2>
                <ApplyCheckbox
                  label="Apply to this program"
                  checked={Boolean(selected[program.id])}
                  onToggle={() =>
                    setSelected((current) => ({
                      ...current,
                      [program.id]: !current[program.id],
                    }))
                  }
                />
              </div>
              <Chip>{program.category}</Chip>
              <p className="text-base leading-5 text-black">
                {program.description}
              </p>
              {program.criteriaGroups.map((criteria, index) => (
                <div
                  key={`${program.id}-${index}`}
                  className="rounded-lg bg-[#f3f6fa] p-3"
                >
                  <ul className="list-disc pl-6 text-base leading-6 text-[#1d1d1d]">
                    {criteria.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </article>
          ))}

          <div className="flex justify-center">
            <Button href="/apply/before-you-apply">
              Start application
              <Icon name="icon-east-white-3.svg" size={20} />
            </Button>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
