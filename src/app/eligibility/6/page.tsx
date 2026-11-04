"use client";

import { useState } from "react";
import { PageShell } from "@/components/SiteChrome";
import { Button, Chip, Icon } from "@/components/ui";

const applyHere = [
  {
    id: "upk",
    title: "Colorado Universal Pre-K (UPK)",
    category: "Early Learning",
    description:
      "Provides free preschool for eligible Colorado children before kindergarten, with additional eligibility options for some younger children.",
    criteria: [
      "Family lives in Colorado",
      "The child must be 4 on October 1 of the school year before kindergarten",
      "Some 3-year-olds may qualify, including children with an Individualized Education Program (IEP)",
    ],
  },
  {
    id: "cccap",
    title: "Colorado Child Care Assistance Program (CCCAP)",
    category: "Financial support",
    description:
      "Helps eligible families pay for child care while they work, study or attend approved training.",
    criteria: [
      "Children must be under 13 years of age",
      "Household income falls below 130% of federal poverty line",
      "Parent/guardian must be working, looking for work, or attending school/training",
      "Verified state residency and identity",
    ],
  },
  {
    id: "child-first",
    title: "Child First",
    category: "Home visiting",
    description:
      "Provides home-based support for young children and families to build healthy relationships and support development.",
    criteria: ["For families with young children from birth through age 5"],
  },
  {
    id: "hippy",
    title: "HIPPY (Home Instruction for Parents of Preschool Youngsters)",
    category: "Home visiting",
    description:
      "Helps parents support their child’s early learning through home-based activities and education.",
    criteria: [
      "For families with children ages 2 through 5",
      "A parent or legal guardian can participate in the program",
    ],
  },
];

const elsewhere = [
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
        resources in their community.
      </>
    ),
  },
];

const later = [
  {
    title: "Early Head Start",
    categories: ["Early learning", "Mental health support"],
    href: "/browse",
    description:
      "Supports pregnant women, infants and toddlers with early learning, health and family services.",
  },
  {
    title: "Early Intervention Colorado – IDEA Part C (Intake, Evaluation, Services)",
    categories: ["Early learning", "Home visits"],
    href: "/browse",
    description:
      "Provides evaluations and early support for infants and toddlers with developmental delays.",
  },
  {
    title: "Head Start Preschool",
    categories: ["Early learning", "Financial support"],
    href: "/browse",
    description:
      "Head Start helps children ages 3 to 5 from low-income families be successful learners. The program supports their learning and growth by providing education, health, nutrition, and family services. Migrant and Seasonal Head Start provides education and support services to low-income children of migrant and seasonal workers and their families.",
  },
  {
    title: "Imagination Library",
    categories: ["Early learning"],
    href: "/browse",
    description:
      "Delivers free books to children to encourage early reading and a love of learning.",
  },
  {
    title: "Incredible Years",
    categories: ["Early learning", "Mental health support"],
    href: "/browse",
    description:
      "Helps parents build positive relationships and support children's behavior and social-emotional skills.",
  },
  {
    title: "Child Care Locator",
    categories: ["Child care", "Early learning"],
    href: "/browse",
    description:
      "Helps families find and compare child care options that meet their needs.",
  },
  {
    title: "Family Connects",
    categories: ["Home visits", "Parenting support"],
    href: "/browse",
    description:
      "Provides nurse home visits, newborn care guidance and connections to community resources.",
  },
  {
    title: "Nurse-Family Partnership (NFP)",
    categories: ["Home visits", "Early learning"],
    href: "/browse",
    description:
      "Provides nurse home visits to first-time parents during pregnancy and their child's early years.",
  },
  {
    title: "Parents as Teachers (PAT)",
    categories: ["Home visits", "Early learning"],
    href: "/browse",
    description:
      "Offers home visits, parenting guidance and resources to support children's health, learning and development.",
  },
  {
    title: "SafeCare Colorado (SCC)",
    categories: ["Home visits", "Parenting support"],
    href: "/browse",
    description:
      "Helps families build parenting skills, support child health and create safer homes.",
  },
  {
    title: "Circle of Parents / Circle of Fathers",
    categories: ["Parenting support"],
    href: "/browse",
    description:
      "Circle of Parents offers free peer support groups for parents and caregivers. These groups provide a safe space to share experiences, celebrate successes, and find helpful resources. Meetings help to build connection, confidence, and knowledge about parenting.",
  },
  {
    title: "Colorado Fatherhood Program",
    categories: ["Parenting support", "Financial support"],
    href: "/browse",
    description:
      "Helps fathers strengthen parenting skills and build positive relationships with their children.",
  },
  {
    title: "Colorado Works – TANF",
    categories: ["Parenting support", "Financial support"],
    href: "/browse",
    description:
      "Offers financial assistance and employment support to eligible families with children.",
  },
  {
    title: "Nurturing Parents/Nurturing Fathers",
    categories: ["Parenting support"],
    href: "/browse",
    description:
      "Helps parents and fathers build positive parenting skills and strengthen family relationships.",
  },
  {
    title:
      "Special Supplemental Nutrition Program for Women, Infants, and Children (WIC)",
    categories: ["Food and nutrition", "Family resource navigation"],
    href: "/browse",
    description:
      "Provides healthy foods, nutrition education and breastfeeding support for eligible women, infants and children.",
  },
  {
    title: "Supplemental Nutrition Assistance Program (SNAP)",
    categories: ["Food and nutrition", "Financial support"],
    href: "/browse",
    description:
      "Provides monthly food benefits to eligible low-income individuals and families to help them buy groceries and meet nutritional needs.",
  },
  {
    title: "Family Resource Centers",
    categories: ["Family resource navigation", "Parenting support"],
    href: "/browse",
    description:
      "Connect families with local resources, services and support, including help with basic needs, parenting and family well-being.",
  },
];

function scrollToSection(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

function QuickLink({
  count,
  title,
  detail,
  targetId,
}: {
  count: number;
  title: string;
  detail: string;
  targetId: string;
}) {
  return (
    <button
      type="button"
      onClick={() => scrollToSection(targetId)}
      className="flex min-w-0 flex-1 flex-col gap-3 rounded-md border border-[#e0e0e0] p-4 text-left"
    >
      <span className="flex items-center justify-between gap-3">
        <span className="flex items-center gap-4 whitespace-nowrap leading-6">
          <span className="font-normal text-4xl text-[#205c6f]">{count}</span>
          <span className="font-heavy text-base text-black">{title}</span>
        </span>
        <Icon name="icon-arrow-downward.svg" size={24} alt="" />
      </span>
      <span className="text-sm leading-[18px] text-black">{detail}</span>
    </button>
  );
}

function ApplyCheckbox({
  checked,
  onToggle,
}: {
  checked: boolean;
  onToggle: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-pressed={checked}
      className="flex shrink-0 items-center gap-3"
    >
      <span className="text-sm leading-[18px] text-black">
        Apply to this program
      </span>
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

function VisitWebsite({ href }: { href: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex shrink-0 items-center justify-center gap-2 rounded-[4px] border border-[#205c6f] bg-white px-4 py-2.5 text-sm text-[#205c6f] hover:bg-[#f3f6fa]"
    >
      Visit website
      <Icon name="icon-launch-16.svg" size={16} alt="" />
    </a>
  );
}

export default function EligibilityResults() {
  const [selected, setSelected] = useState<Record<string, boolean>>({});
  const selectedCount = applyHere.filter((program) => selected[program.id]).length;

  return (
    <PageShell
      active="eligibility"
      borderedHeader
      showQuickApply={false}
      className="bg-white"
    >
      <section className="flex flex-col items-center py-10">
        <div className="flex w-full max-w-[900px] flex-col gap-6 px-6 lg:px-0">
          <div className="flex flex-col gap-3 text-[#1d1d1d]">
            <h1 className="font-heavy text-[28px] leading-10">
              Karla, based on your answers, you may qualify for these programs.
            </h1>
            <p className="text-lg leading-6">
              Here’s what you can do next. Start with the programs you can
              apply to right here, then explore the others.
            </p>
          </div>

          <div className="flex flex-col gap-6 md:flex-row md:items-stretch">
            <QuickLink
              count={4}
              title="Apply here"
              detail="One application covers them all"
              targetId="apply-here"
            />
            <QuickLink
              count={1}
              title="Apply elsewhere"
              detail="On each program’s own website"
              targetId="apply-elsewhere"
            />
            <QuickLink
              count={later.length}
              title="Check back later"
              detail="If your situation changes"
              targetId="check-later"
            />
          </div>

          <div id="apply-here" className="flex scroll-mt-6 flex-col gap-6 pt-10">
            <div className="flex flex-col gap-3 text-[#1d1d1d]">
              <p className="font-heavy text-sm leading-[18px]">
                APPLY HERE WITH ONE APPLICATION
              </p>
              <h2 className="font-heavy text-[28px] leading-10">
                You can apply to 4 programs right now
              </h2>
              <p className="max-w-[852px] text-lg leading-6">
                We’ve selected every program you qualify for. Check the
                programs you’d like to apply for, then start one application
                for all of them.
              </p>
            </div>

            {applyHere.map((program) => (
              <article
                key={program.id}
                className="flex flex-col gap-3 rounded-2xl border border-[#e0e0e0] bg-white p-6"
              >
                <div className="flex items-start gap-4">
                  <h3 className="flex-1 font-heavy text-lg leading-6 text-black">
                    {program.title}
                  </h3>
                  <ApplyCheckbox
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
                <div className="rounded-lg bg-[#f3f6fa] p-3">
                  <ul className="list-disc pl-6 text-base leading-6 text-[#1d1d1d]">
                    {program.criteria.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>

          <div className="flex flex-col items-start justify-between gap-4 rounded-md border border-[#e0e0e0] p-4 sm:flex-row sm:items-center">
            <p className="flex flex-wrap items-center gap-2 text-[#1d1d1d]" aria-live="polite">
              <span className="font-heavy text-lg">{selectedCount} of 4</span>
              <span className="text-base">
                programs selected for one application
              </span>
            </p>
            <Button href="/apply/before-you-apply">
              Start application
              <Icon name="icon-east-white-3.svg" size={20} alt="" />
            </Button>
          </div>

          <div
            id="apply-elsewhere"
            className="flex scroll-mt-6 flex-col gap-6 pt-10"
          >
            <div className="flex flex-col gap-3 text-[#1d1d1d]">
              <p className="font-heavy text-sm leading-[18px]">
                APPLY ON ANOTHER WEBSITE
              </p>
              <h2 className="font-heavy text-[28px] leading-10">
                You may also be eligible for these programs
              </h2>
              <p className="max-w-[852px] text-lg leading-6">
                These programs aren’t part of the application above. Each one
                opens its own website in a new tab, so you can come back here
                when you’re done.
              </p>
            </div>

            {elsewhere.map((program) => (
              <article
                key={program.title}
                className="flex flex-col gap-4 rounded-md border border-[#e0e0e0] p-6"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex min-w-0 flex-col gap-3">
                    <h3 className="font-heavy text-lg leading-6 text-[#1d1d1d]">
                      {program.title}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {program.categories.map((category, index) => (
                        <Chip key={`${category}-${index}`} size="xs">
                          {category}
                        </Chip>
                      ))}
                    </div>
                  </div>
                  <VisitWebsite href={program.href} />
                </div>
                <p className="text-base leading-6 text-[#1d1d1d]">
                  {program.description}
                </p>
              </article>
            ))}
          </div>

          <div id="check-later" className="flex scroll-mt-6 flex-col gap-6 pt-10">
            <div className="flex flex-col gap-3 text-[#1d1d1d]">
              <p className="font-heavy text-sm leading-[18px]">
                NOT ELIGIBLE RIGHT NOW
              </p>
              <h2 className="font-heavy text-[28px] leading-10">
                You are not currently eligible for these programs
              </h2>
              <p className="max-w-[852px] text-lg leading-6">
                Although you’re not currently eligible, changes in your child
                care or household situation could make you eligible later. If
                it does, we encourage you to apply again.
              </p>
            </div>

            {later.map((program) => (
              <article
                key={program.title}
                className="flex flex-col gap-4 rounded-md border border-[#e0e0e0] p-6"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex min-w-0 flex-col gap-3">
                    <h3 className="font-heavy text-lg leading-6 text-[#1d1d1d]">
                      {program.title}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {program.categories.map((category, index) => (
                        <Chip key={`${category}-${index}`} size="xs">
                          {category}
                        </Chip>
                      ))}
                    </div>
                  </div>
                  <VisitWebsite href={program.href} />
                </div>
                <p className="text-base leading-6 text-[#1d1d1d]">
                  {program.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
