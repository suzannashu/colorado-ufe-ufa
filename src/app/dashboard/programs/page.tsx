import Link from "next/link";
import { FamilyDashboardShell } from "@/components/FamilyDashboardShell";
import { Chip, Icon } from "@/components/ui";

const filters = [
  "Child care",
  "Early learning",
  "Food & nutrition",
  "Health coverage",
  "Home visits",
  "Mental Health",
];

const eligible = [
  {
    title: "Supplemental Nutrition Assistance Program (SNAP)",
    description:
      "The Supplemental Nutrition Assistance Program (SNAP) is a federally funded program that provided food benefits to low-income families to supplement their grocery budget so they can afford the nutritious food essential to health and well-being. Eligible households receive monthly benefits via an Electronic Benefits Transaction (EBT) card, redeemable for food items only. To be eligible for SNAP, the applicant must be a U.S. Citizen or lawful permanent resident.",
    expanded: true,
  },
  {
    title: "Early Childhood Mental Health Support Line",
    description:
      "The Early Childhood Mental Health (ECMH) Support Line offers free, confidential help for parents and caregivers of children under 6. By calling this phone line, families can connect with infant mental health resources, get advice on managing parenting stress, changes in child behavior, and locate resources in their community. If your child is having a hard time in child care or ... Show more",
  },
];

const notEligible = [
  {
    title: "Head Start Preschool",
    description:
      "Head Start helps children ages 3 to 5 from low-income families be successful learners. The program supports their learning and growth by providing education, health, nutrition, and family services. Migrant and Seasonal Head Start provides education and support services to low-income children of migrant and seasonal workers and their families.",
  },
  {
    title: "Circle of Parents / Circle of Fathers",
    description:
      "Circle of Parents offers free peer support groups for parents and caregivers. These groups provide a safe space to share experiences, celebrate successes, and find helpful resources. Meetings help to build connection, confidence, and knowledge about parenting.",
  },
];

function ProgramCard({
  title,
  description,
  expanded,
}: {
  title: string;
  description: string;
  expanded?: boolean;
}) {
  return (
    <article className="overflow-hidden rounded-md border border-[#e0e0e0] bg-white">
      <div className="flex items-start justify-between gap-6 p-6">
        <div className="min-w-0 flex-1">
          <h3 className="font-heavy text-lg text-[#1d1d1d]">{title}</h3>
          <div className="mt-3 flex flex-wrap gap-2">
            <Chip>Category name</Chip>
            <Chip>Category name</Chip>
          </div>
          <p className="mt-3 text-base leading-6 text-[#1d1d1d]">{description}</p>
        </div>
        <Link
          href="/browse"
          className="inline-flex shrink-0 items-center gap-2 text-sm text-[#205c6f]"
        >
          Learn more
          <Icon name="icon-arrow-right-alt.svg" size={16} />
        </Link>
      </div>
      <button
        type="button"
        className="flex w-full items-center justify-between border-t border-[#e0e0e0] px-6 py-4 text-base text-[#205c6f]"
      >
        Eligibility requirements
        <Icon
          name="icon-chevron-down.svg"
          size={24}
          className={expanded ? "rotate-180" : ""}
        />
      </button>
    </article>
  );
}

export default function DashboardProgramsPage() {
  return (
    <FamilyDashboardShell active="programs" pageIcon="icon-programs.svg">
      <div className="flex max-w-[1152px] flex-col gap-8">
        <div>
          <h1 className="font-heavy text-[28px] leading-10 text-[#1d1d1d]">
            Programs
          </h1>
          <p className="mt-2 text-lg text-[#1d1d1d]">
            Your family or child may be eligible for the following programs.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <span className="text-base text-black">Filter by</span>
          {filters.map((chip) => (
            <span
              key={chip}
              className="rounded-full border border-[#e0e0e0] bg-white px-4 py-2.5 text-sm text-[#1d1d1d]"
            >
              {chip}
            </span>
          ))}
        </div>

        <div className="flex flex-col gap-6">
          {eligible.map((program) => (
            <ProgramCard key={program.title} {...program} />
          ))}
        </div>

        <div className="flex flex-col gap-2 pt-2">
          <h2 className="font-heavy text-xl text-[#1d1d1d]">
            You are not currently eligible for these programs
          </h2>
          <p className="text-base text-[#1d1d1d]">
            Changes in your child care or household situation could make you, your
            children, or other household members eligible later. If it does, we
            encourage you to apply again.
          </p>
        </div>

        <div className="flex flex-col gap-6">
          {notEligible.map((program) => (
            <ProgramCard key={program.title} {...program} />
          ))}
        </div>
      </div>
    </FamilyDashboardShell>
  );
}
