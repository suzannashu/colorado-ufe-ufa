import { ReactNode } from "react";
import { PageShell } from "@/components/SiteChrome";
import { Button, Chip, Icon } from "@/components/ui";

const filters = [
  "Child care",
  "Early learning",
  "Food & nutrition",
  "Health coverage",
  "Home visits",
  "Mental Health",
];

const matches = [
  {
    title: "Colorado Universal Preschool Program (UPK)",
    categories: ["Category name", "Category name", "Category name"],
    href: "/programs/upk",
    applyHref: "/programs/upk",
    quickApply: true,
    description: (
      <>
        Colorado&apos;s Universal Preschool Program (UPK) offers up to 15 hours
        per week of free,{" "}
        <span className="text-[#205c6f]">
          high-quality preschool for children
        </span>{" "}
        in their year before kindergarten. UPK emphasizes family choice through
        a &quot;mixed-delivery&quot; model, allowing families to select the
        best preschool setting from various program types to suit their
        child&apos;s needs.
      </>
    ),
  },
  {
    title: "Supplemental Nutrition Assistance Program (SNAP)",
    categories: ["Category name", "Category name"],
    href: "/browse",
    description: (
      <>
        <span className="text-[#205c6f]">
          The Supplemental Nutrition Assistance Program (SNAP)
        </span>{" "}
        is a federally funded program that provided food benefits to low-income
        families to supplement their grocery budget so they can afford the
        nutritious food essential to health and well-being. Eligible households
        receive monthly benefits via an Electronic Benefits Transaction (EBT)
        card, redeemable for food items only. To be eligible for SNAP, the
        applicant must be a U.S. Citizen or lawful permanent resident.
      </>
    ),
  },
  {
    title: "Early Childhood Mental Health Support Line",
    categories: ["Category name", "Category name"],
    href: "/browse",
    description: (
      <>
        The Early Childhood Mental Health (ECMH) Support Line offers{" "}
        <span className="text-[#205c6f]">free, confidential help</span> for
        parents and caregivers of children under 6. By calling this phone line,
        families can connect with infant mental health resources, get advice on
        managing parenting stress, changes in child behavior, and locate
        resources in their community. If your child is having a hard time in
        child care or ...{" "}
        <span className="font-heavy text-[#205c6f]">Show more</span>
      </>
    ),
  },
];

const notEligible = [
  {
    title: "Head Start Preschool",
    categories: ["Category name"],
    description:
      "Head Start helps children ages 3 to 5 from low-income families be successful learners. The program supports their learning and growth by providing education, health, nutrition, and family services. Migrant and Seasonal Head Start provides education and support services to low-income children of migrant and seasonal workers and their families.",
  },
  {
    title: "Circle of Parents / Circle of Fathers",
    categories: ["Category name", "Category name"],
    description:
      "Circle of Parents offers free peer support groups for parents and caregivers. These groups provide a safe space to share experiences, celebrate successes, and find helpful resources. Meetings help to build connection, confidence, and knowledge about parenting.",
  },
];

function ProgramCard({
  title,
  categories,
  description,
  href,
  applyHref,
  quickApply = false,
}: {
  title: string;
  categories: string[];
  description: ReactNode;
  href?: string;
  applyHref?: string;
  quickApply?: boolean;
}) {
  return (
    <article className="overflow-hidden rounded-md border border-[#e0e0e0] bg-white">
      <div className="border-b border-[#e0e0e0] p-6">
        <h2 className="font-heavy text-lg text-[#1d1d1d]">{title}</h2>
        <div className="mt-3 flex flex-wrap gap-2">
          {categories.map((c, i) => (
            <Chip key={`${c}-${i}`}>{c}</Chip>
          ))}
        </div>
        <p className="mt-3 text-base leading-6 text-[#1d1d1d]">{description}</p>
      </div>
      <div className="flex items-center justify-end gap-6 p-6">
        <Button href={href ?? "/browse"} variant="link" size="sm">
          Learn more
          <Icon name="icon-arrow-right-alt.svg" size={16} />
        </Button>
        {quickApply ? (
          <Button href={applyHref ?? href ?? "/browse"} size="sm">
            Quick apply
            <Icon name="icon-arrow-right-alt.svg" size={16} className="invert" />
          </Button>
        ) : null}
      </div>
    </article>
  );
}

export default function EligibilityResults() {
  return (
    <PageShell active="eligibility" borderedHeader className="bg-white">
      <section className="flex flex-col items-center py-10">
        <div className="flex w-full max-w-[853px] flex-col gap-6">
          <div className="flex flex-col gap-3">
            <h1 className="font-heavy text-[28px] leading-10 text-[#1d1d1d]">
              Cherie, based on your answers, you may qualify for 3 programs.
            </h1>
            <p className="text-lg leading-6 text-[#1d1d1d]">
              These are estimates to help you decide where to apply, not an
              official determination. You can apply to any program below, even
              ones marked less likely.
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
            {matches.map((program) => (
              <ProgramCard key={program.title} {...program} />
            ))}
          </div>

          <div className="flex flex-col gap-2 pt-6">
            <h2 className="font-heavy text-xl text-[#1d1d1d]">
              You are not currently eligible for these programs
            </h2>
            <p className="text-base leading-6 text-[#1d1d1d]">
              Although you&apos;re not currently eligible, changes in your child
              care or household situation could make you eligible later. If it
              does, we encourage you to apply again.
            </p>
          </div>

          <div className="flex flex-col gap-6">
            {notEligible.map((program) => (
              <ProgramCard
                key={program.title}
                {...program}
                href="/browse"
                description={program.description}
              />
            ))}
          </div>

          <div className="flex items-center justify-between py-10">
            <Button href="/eligibility/4" variant="secondary">
              Back
            </Button>
            <Button href="/eligibility">Retake the eligibility test</Button>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
