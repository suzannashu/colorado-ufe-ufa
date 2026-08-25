import { BrowseFilters } from "@/components/BrowseFilters";
import { FullBleed, PageShell } from "@/components/SiteChrome";
import { Button, Icon, ImgPlaceholder } from "@/components/ui";

const programs = [
  {
    title: "Colorado Universal Preschool Program (UPK)",
    href: "/programs/upk",
    body: (
      <>
        Colorado&apos;s Universal Preschool Program (UPK) offers up to 15 hours
        per week of free,{" "}
        <span className="text-[#205c6f]">
          high-quality preschool for children
        </span>{" "}
        in their year before kindergarten. UPK emphasizes family choice through
        a “mixed-delivery” model, allowing families to select the best preschool
        setting from various program types to suit their child&apos;s needs.
      </>
    ),
  },
  {
    title: "Supplemental Nutrition Assistance Program (SNAP)",
    href: "/browse",
    body: (
      <>
        <span className="text-[#205c6f]">
          The Supplemental Nutrition Assistance Program (SNAP)
        </span>{" "}
        is a federally funded program that provided food benefits to low-income
        families to supplement their grocery budget so they can afford the
        nutritious food essential to health and well-being. Eligible households
        receive monthly benefits via an Electronic Benefits Transaction (EBT)
        card, redeemable for food items only. To be eligible for SNAP, the
        applicant must be a U.S. Citizen or lawful permanent resident.{" "}
        <span className="font-heavy text-[#205c6f]">Show less</span>
      </>
    ),
  },
  {
    title: "Early Childhood Mental Health Support Line",
    href: "/browse",
    body: (
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
  {
    title: "Head Start Preschool",
    href: "/browse",
    body: "Head Start helps children ages 3 to 5 from low-income families be successful learners. The program supports their learning and growth by providing education, health, nutrition, and family services. Migrant and Seasonal Head Start provides education and support services to low-income children of migrant and seasonal workers and their families.",
  },
  {
    title: "Circle of Parents / Circle of Fathers",
    href: "/browse",
    body: "Circle of Parents offers free peer support groups for parents and caregivers. These groups provide a safe space to share experiences, celebrate successes, and find helpful resources. Meetings help to build connection, confidence, and knowledge about parenting.",
  },
];

export default function BrowsePage() {
  return (
    <PageShell active="browse">
      <FullBleed className="bg-[#757575] text-white">
        <div className="flex w-[567px] flex-col gap-8">
          <div className="flex flex-col gap-2">
            <h1 className="font-heavy text-[40px] leading-tight">
              Explore programs that support your family
            </h1>
            <p className="text-lg">
              Each program has its own benefits, eligibility rules, and
              expectations. Review the details, or take the eligibility screener
              to see which ones fit your family.
            </p>
          </div>
          <Button href="/eligibility" className="w-fit !px-4">
            Check what I qualify for
            <Icon name="icon-east-white-2.svg" size={20} />
          </Button>
        </div>
        <ImgPlaceholder />
      </FullBleed>

      <section className="flex flex-col items-center py-[60px]">
        <div className="flex w-[942px] flex-col gap-6">
          <BrowseFilters />

          {programs.map((program) => (
            <article
              key={program.title}
              className="flex gap-6 rounded-2xl border border-[#e0e0e0] bg-white p-6"
            >
              <div className="flex min-w-0 flex-1 flex-col gap-3">
                <h2 className="font-heavy text-lg leading-6 text-[#1d1d1d]">
                  {program.title}
                </h2>
                <div className="flex gap-2">
                  <span className="rounded-full bg-[rgba(36,41,83,0.12)] px-2 py-0.5 text-xs text-[#205c6f]">
                    Category name
                  </span>
                  <span className="rounded-full bg-[rgba(36,41,83,0.12)] px-2 py-0.5 text-xs text-[#205c6f]">
                    Category name
                  </span>
                </div>
                <p className="text-base leading-6 text-[#1d1d1d]">
                  {program.body}
                </p>
              </div>
              <Button href={program.href} size="sm" className="shrink-0 self-start">
                Learn more
                <Icon name="icon-chevron-right.svg" size={16} />
              </Button>
            </article>
          ))}

          <p className="text-sm text-[#757575]">
            Note: Not all 24 programs are shown in this prototype.
          </p>
        </div>
      </section>
    </PageShell>
  );
}
