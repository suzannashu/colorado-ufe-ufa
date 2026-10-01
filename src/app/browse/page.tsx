import { BrowseFilters } from "@/components/BrowseFilters";
import { FullBleed, PageShell } from "@/components/SiteChrome";
import { Button, Chip, Icon, ImgPlaceholder } from "@/components/ui";

type Program = {
  title: string;
  body: string;
  href: string;
  also: string[];
};

type Category = {
  id: string;
  name: string;
  programs: Program[];
};

const categories: Category[] = [
  {
    id: "early-learning",
    name: "Early learning",
    programs: [
      {
        title: "Colorado Universal Preschool Program (UPK)",
        body: "Provides free preschool for eligible Colorado children before kindergarten, with additional eligibility options for some younger children.",
        href: "/programs/upk",
        also: ["Child care"],
      },
      {
        title: "Early Head Start",
        body: "Supports pregnant women, infants and toddlers with early learning, health and family services.",
        href: "/browse",
        also: ["Mental health support"],
      },
      {
        title: "Early Intervention Colorado – IDEA Part C (Intake, Evaluation, Services)",
        body: "Provides evaluations and early support for infants and toddlers with developmental delays.",
        href: "/browse",
        also: ["Home visitation"],
      },
      {
        title: "Head Start Preschool",
        body: "Offers early education, health, nutrition, and family support to eligible children ages 3 - 5.",
        href: "/browse",
        also: ["Financial support"],
      },
      {
        title: "Imagination Library",
        body: "Delivers free books to children to encourage early reading and a love of learning.",
        href: "/browse",
        also: [],
      },
      {
        title: "Incredible Years",
        body: "Helps parents build positive relationships and support children's behavior and social-emotional skills.",
        href: "/browse",
        also: ["Mental health support"],
      },
    ],
  },
  {
    id: "child-care",
    name: "Child care",
    programs: [
      {
        title: "Child Care Locator",
        body: "Helps families find and compare child care options that meet their needs.",
        href: "/browse",
        also: ["Early learning"],
      },
      {
        title: "Colorado Child Care Assistance Program (CCCAP)",
        body: "Helps eligible families pay for child care while they work, study or attend approved training.",
        href: "/browse",
        also: ["Financial support"],
      },
    ],
  },
  {
    id: "home-visitation",
    name: "Home visitation",
    programs: [
      {
        title: "Child First",
        body: "Provides home-based support for young children and families to build healthy relationships and support development.",
        href: "/browse",
        also: ["Mental health support"],
      },
      {
        title: "Family Connects",
        body: "Provides nurse home visits, newborn care guidance and connections to community resources.",
        href: "/browse",
        also: ["Parenting support & education"],
      },
      {
        title: "Home Instruction for Parents of Preschool Youngsters (HIPPY)",
        body: "Helps parents support their child's early learning through home-based activities and education.",
        href: "/browse",
        also: ["Parenting support & education"],
      },
      {
        title: "Nurse-Family Partnership (NFP)",
        body: "Provides nurse home visits to first-time parents during pregnancy and their child's early years.",
        href: "/browse",
        also: ["Early learning"],
      },
      {
        title: "Parents as Teachers (PAT)",
        body: "Offers home visits, parenting guidance and resources to support children's health, learning and development.",
        href: "/browse",
        also: ["Early learning"],
      },
      {
        title: "SafeCare Colorado (SCC)",
        body: "Helps families build parenting skills, support child health and create safer homes.",
        href: "/browse",
        also: ["Parenting support & education"],
      },
    ],
  },
  {
    id: "parenting-support",
    name: "Parenting support & education",
    programs: [
      {
        title: "Circle of Parents / Circle of Fathers",
        body: "Connects parents and caregivers through peer support and parenting groups.",
        href: "/browse",
        also: [],
      },
      {
        title: "Colorado Fatherhood Program",
        body: "Helps fathers strengthen parenting skills and build positive relationships with their children.",
        href: "/browse",
        also: ["Financial support"],
      },
      {
        title: "Colorado Works – TANF",
        body: "Offers financial assistance and employment support to eligible families with children.",
        href: "/browse",
        also: ["Financial support"],
      },
      {
        title: "Nurturing Parents/Nurturing Fathers",
        body: "Helps parents and fathers build positive parenting skills and strengthen family relationships.",
        href: "/browse",
        also: [],
      },
    ],
  },
  {
    id: "food-and-nutrition",
    name: "Food and nutrition",
    programs: [
      {
        title:
          "Special Supplemental Nutrition Program for Women, Infants, and Children (WIC)",
        body: "Provides healthy foods, nutrition education and breastfeeding support for eligible women, infants and children.",
        href: "/browse",
        also: ["Family resource navigation"],
      },
      {
        title: "Supplemental Nutrition Assistance Program (SNAP)",
        body: "Provides monthly food benefits to eligible low-income individuals and families to help them buy groceries and meet nutritional needs.",
        href: "/browse",
        also: ["Financial support"],
      },
    ],
  },
  {
    id: "mental-health",
    name: "Mental health support",
    programs: [
      {
        title: "Early Childhood Mental Health Support Line",
        body: "Offers guidance to families and early childhood professionals on young children's social, emotional and behavioral needs.",
        href: "/browse",
        also: ["Family resource navigation"],
      },
    ],
  },
  {
    id: "family-resource-navigation",
    name: "Family resource navigation",
    programs: [
      {
        title: "Family Resource Centers",
        body: "Connect families with local resources, services and support, including help with basic needs, parenting and family well-being.",
        href: "/browse",
        also: ["Parenting support & education"],
      },
    ],
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
        <div className="flex w-full max-w-[1160px] flex-col gap-8 px-6">
          <BrowseFilters />

          <div className="flex flex-col gap-12">
            {categories.map((category) => (
              <section
                key={category.id}
                id={category.id}
                aria-labelledby={`${category.id}-heading`}
                className="scroll-mt-24 overflow-hidden rounded-2xl border border-[#e0e0e0] bg-white"
              >
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 bg-[rgba(32,92,111,0.12)] px-6 py-4">
                  <h2
                    id={`${category.id}-heading`}
                    className="font-heavy text-2xl text-[#1d1d1d]"
                  >
                    {category.name}
                  </h2>
                  <p className="shrink-0 text-sm text-[#205c6f]">
                    {category.programs.length}{" "}
                    {category.programs.length === 1 ? "program" : "programs"}
                  </p>
                </div>

                <ul>
                  {category.programs.map((program) => (
                    <li
                      key={program.title}
                      className="border-t border-[#e0e0e0] px-6 py-5"
                    >
                      <article className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-6">
                        <div className="flex min-w-0 flex-1 flex-col gap-2">
                          <h3 className="font-heavy text-lg leading-6 text-[#1d1d1d]">
                            {program.title}
                          </h3>
                          {program.also.length > 0 ? (
                            <div className="flex flex-wrap items-center gap-2">
                              <span className="text-xs text-[#757575]">
                                Also
                              </span>
                              {program.also.map((label) => (
                                <Chip key={label}>{label}</Chip>
                              ))}
                            </div>
                          ) : null}
                          <p className="text-base leading-6 text-[#1d1d1d]">
                            {program.body}
                          </p>
                        </div>
                        <Button
                          href={program.href}
                          size="sm"
                          className="shrink-0"
                        >
                          Learn more
                          <Icon name="icon-chevron-right.svg" size={16} />
                        </Button>
                      </article>
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
