import { PageShell } from "@/components/SiteChrome";
import { Button, Icon } from "@/components/ui";

const matches = [
  {
    title: "Colorado Universal Preschool Program (UPK)",
    categories: ["Category name", "Category name", "Category name"],
    href: "/programs/upk",
    description:
      "Colorado's Universal Preschool Program (UPK) offers up to 15 hours per week of free, high-quality preschool for children in their year before kindergarten. UPK emphasizes family choice through a \"mixed-delivery\" model, allowing families to select the best preschool setting from various program types to suit their child's needs.",
  },
  {
    title: "Supplemental Nutrition Assistance Program (SNAP)",
    categories: ["Category name", "Category name"],
    href: "/browse",
    description:
      "The Supplemental Nutrition Assistance Program (SNAP) is a federally funded program that provided food benefits to low-income families to supplement their grocery budget so they can afford the nutritious food essential to health and well-being. Eligible households receive monthly benefits via an Electronic Benefits Transaction (EBT) card, redeemable for food items only. To be eligible for SNAP, the applicant must be a U.S. Citizen or lawful permanent resident.",
  },
  {
    title: "Early Childhood Mental Health Support Line",
    categories: ["Category name", "Category name"],
    href: "/browse",
    description:
      "The Early Childhood Mental Health (ECMH) Support Line offers free, confidential help for parents and caregivers of children under 6. By calling this phone line, families can connect with infant mental health resources, get advice on managing parenting stress, changes in child behavior, and locate resources in their community.",
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

export default function EligibilityResults() {
  return (
    <PageShell active="eligibility" borderedHeader className="bg-[#f3f6fa]">
      <section className="flex flex-col items-center py-10">
        <div className="flex w-full max-w-[942px] flex-col gap-8">
          <div className="flex flex-col gap-3">
            <h1 className="font-heavy text-[28px] leading-10 text-black">
              Cherie, based on your answers, you may qualify for 3 programs.
            </h1>
            <p className="text-lg leading-6 text-black">
              These are estimates to help you decide where to apply, not an
              official determination. You can apply to any program below, even
              ones marked less likely.
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {[
              "All",
              "Child care",
              "Early learning",
              "Food & nutrition",
              "Health coverage",
              "Home visits",
              "Mental Health",
            ].map((chip, i) => (
              <span
                key={chip}
                className={`rounded-full border border-[#e0e0e0] px-4 py-2.5 text-sm ${
                  i === 0
                    ? "bg-[rgba(32,92,111,0.2)]"
                    : "bg-white text-[#1d1d1d]"
                }`}
              >
                {chip}
              </span>
            ))}
          </div>

          {matches.map((program) => (
            <article
              key={program.title}
              className="flex gap-6 rounded-2xl border border-[#e0e0e0] bg-white p-6"
            >
              <div className="flex min-w-0 flex-1 flex-col gap-3">
                <h2 className="font-heavy text-lg text-[#1d1d1d]">
                  {program.title}
                </h2>
                <div className="flex gap-2">
                  {program.categories.map((c, i) => (
                    <span
                      key={`${c}-${i}`}
                      className="rounded-full bg-[rgba(36,41,83,0.12)] px-2 py-0.5 text-xs text-[#205c6f]"
                    >
                      {c}
                    </span>
                  ))}
                </div>
                <p className="text-base leading-6 text-[#1d1d1d]">
                  {program.description}
                </p>
              </div>
              <div className="flex shrink-0 flex-col gap-2 self-start">
                <Button href={program.href} size="sm">
                  Quick apply
                </Button>
                <Button href={program.href} size="sm" variant="secondary">
                  Learn more
                  <Icon name="icon-arrow-right-alt.svg" size={16} />
                </Button>
              </div>
            </article>
          ))}

          <div className="pt-4">
            <h2 className="font-heavy text-2xl text-[#1d1d1d]">
              You are not currently eligible for these programs
            </h2>
            <p className="mt-2 text-base text-[#1d1d1d]">
              Although you&apos;re not currently eligible, changes in your child
              care or household situation could make you eligible later.
            </p>
          </div>

          {notEligible.map((program) => (
            <article
              key={program.title}
              className="flex gap-6 rounded-2xl border border-[#e0e0e0] bg-white p-6 opacity-80"
            >
              <div className="flex min-w-0 flex-1 flex-col gap-3">
                <h3 className="font-heavy text-lg text-[#1d1d1d]">
                  {program.title}
                </h3>
                <div className="flex gap-2">
                  {program.categories.map((c, i) => (
                    <span
                      key={`${c}-${i}`}
                      className="rounded-full bg-[rgba(36,41,83,0.12)] px-2 py-0.5 text-xs text-[#205c6f]"
                    >
                      {c}
                    </span>
                  ))}
                </div>
                <p className="text-base leading-6 text-[#1d1d1d]">
                  {program.description}
                </p>
              </div>
              <div className="flex shrink-0 flex-col gap-2 self-start">
                <Button href="/browse" size="sm" variant="secondary">
                  Learn more
                  <Icon name="icon-arrow-right-alt.svg" size={16} />
                </Button>
              </div>
            </article>
          ))}

          <div className="flex justify-between pt-4">
            <Button href="/eligibility/5" variant="secondary">
              Back
            </Button>
            <Button href="/eligibility">Retake the eligibility test</Button>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
