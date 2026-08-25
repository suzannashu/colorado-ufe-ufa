import { FullBleed, PageShell } from "@/components/SiteChrome";
import { Button, Chip, Icon, ImgPlaceholder } from "@/components/ui";

const steps = [
  {
    icon: "icon-refer-step1.svg",
    label: "STEP 1",
    title: "Submit the intake form",
    body: "Share basic contact details for the family and, if you know it, the program that seems like the best fit.",
  },
  {
    icon: "icon-refer-step2.svg",
    label: "STEP 2",
    title: "A specialist follows up",
    body: "A state child care specialist reaches out to the family directly to explain options and answer questions.",
  },
  {
    icon: "icon-refer-step3.svg",
    label: "STEP 3",
    title: "The family gets enrolled",
    body: "The specialist helps the family enroll in the home visiting program that matches their needs.",
  },
];

const programs = [
  {
    chip: "Early Childhood Development",
    abbr: "PAT",
    name: "Parents as Teachers",
    body: "Personal visits from a trained parent educator who shares age-appropriate activities, tracks developmental milestones, and connects families to community resources.",
    serves: "Expectant parents and families with children from birth to kindergarten.",
    url: "parentpossible.org/pat",
    href: "https://parentpossible.org/pat",
  },
  {
    chip: "School readiness",
    abbr: "HIPPY",
    name: "Home Instruction for Parents of Preschool Youngsters",
    body: "A structured home-based curriculum that gives parents the tools and confidence to be their child's first teacher and prepare them for success in school.",
    serves: "Families with children ages 2 to 5.",
    url: "parentpossible.org/hippy",
    href: "https://parentpossible.org/hippy",
  },
  {
    chip: "Maternal & infant health",
    abbr: "NFP",
    name: "Nurse-Family Partnership",
    body: "A registered nurse partners with a first-time parent throughout pregnancy and the child's first two years, supporting a healthy pregnancy and strong early development.",
    serves: "First-time parents, enrolled early in pregnancy.",
    url: "denverhealth.org",
    href: "https://denverhealth.org/services/community-health/nurse-family-partnership",
  },
  {
    chip: "Family mental health",
    abbr: "Child First",
    name: "",
    body: "A team-based model pairing a clinician and care coordinator with the family to strengthen the parent-child relationship and address trauma, stress, and mental health needs.",
    serves: "Families with young children facing significant stress or adversity.",
    url: "changent.org",
    href: "https://changent.org/what-we-do/child-first",
  },
  {
    chip: "School readiness",
    abbr: "SafeCare",
    name: "",
    body: "A short-term, in-home program that coaches parents on positive parent-child interaction, home safety, and recognizing when a child needs medical care.",
    serves: "Families with children ages 0–5.",
    url: "safecare.publichealth.gsu.edu",
    href: "https://safecare.publichealth.gsu.edu/",
  },
];

export default function ReferPage() {
  return (
    <PageShell active="refer">
      <FullBleed
        className="bg-[#757575] text-white"
        innerClassName="flex items-center justify-between px-32 py-[25px]"
      >
        <div className="flex w-[567px] flex-col gap-8">
          <div className="flex flex-col gap-2">
            <p className="text-base tracking-[2.56px]">FOR PROFESSIONALS</p>
            <h1 className="font-heavy text-[40px] leading-tight">
              Refer a family to a home visiting program
            </h1>
            <p className="text-lg">
              Medical providers and social workers can connect families to
              Colorado&apos;s home visiting programs with one short form.
            </p>
          </div>
          <Button href="/refer/form" className="w-fit !px-4">
            Start a referral
            <Icon name="icon-east-white-3.svg" size={20} />
          </Button>
        </div>
        <ImgPlaceholder />
      </FullBleed>

      <section className="flex flex-col items-center gap-10 py-10">
        <div className="flex w-[1160px] flex-col gap-10">
          <h2 className="font-heavy text-2xl text-[#1d1d1d]">
            How a referral works
          </h2>
          <div className="grid grid-cols-3 gap-12">
            {steps.map((step) => (
              <div
                key={step.title}
                className="flex flex-col gap-9 rounded-2xl border border-[#e0e0e0] bg-white p-6"
              >
                <p className="text-base text-[#1d1d1d]">{step.label}</p>
                <Icon name={step.icon} size={60} />
                <div className="flex flex-col gap-4">
                  <h3 className="font-heavy text-lg">{step.title}</h3>
                  <p className="text-base">{step.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex w-[1160px] flex-col gap-10">
          <div>
            <h2 className="font-heavy text-2xl text-[#1d1d1d]">
              Home visiting programs you can refer to
            </h2>
            <p className="mt-2 text-lg text-[#1d1d1d]">
              A quick look at a few of the programs you can apply to here.
            </p>
          </div>
          <div className="grid grid-cols-3 gap-12">
            {programs.slice(0, 3).map((p) => (
              <ProgramCard key={p.abbr} {...p} />
            ))}
          </div>
          <div className="grid grid-cols-3 gap-12">
            {programs.slice(3).map((p) => (
              <ProgramCard key={p.abbr} {...p} />
            ))}
            <div />
          </div>
        </div>

        <div className="flex w-[1170px] flex-col items-center gap-6 rounded-2xl bg-[#d2dee2] p-12 text-center">
          <div>
            <h2 className="font-heavy text-2xl text-[#1d1d1d]">
              Ready to connect a family?
            </h2>
            <p className="mt-2 text-lg text-[#1d1d1d]">
              The intake form takes just a few minutes. A specialist will follow
              up with the family directly.
            </p>
          </div>
          <Button href="/refer/form">
            Start a referral
            <Icon name="icon-east-white-3.svg" size={20} />
          </Button>
        </div>
      </section>
    </PageShell>
  );
}

function ProgramCard({
  chip,
  abbr,
  name,
  body,
  serves,
  url,
  href,
}: {
  chip: string;
  abbr: string;
  name: string;
  body: string;
  serves: string;
  url: string;
  href: string;
}) {
  return (
    <div className="flex flex-col gap-4 rounded-2xl border border-[#e0e0e0] bg-white p-6">
      <Chip>{chip}</Chip>
      <div>
        <h3 className="font-heavy text-lg text-[#1d1d1d]">{abbr}</h3>
        {name ? (
          <p className="font-heavy text-base text-[#1d1d1d]">{name}</p>
        ) : null}
      </div>
      <p className="text-base text-[#1d1d1d]">
        {body}
        <br />
        <br />
        <span className="font-heavy">Serves: </span>
        {serves}
      </p>
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className="inline-flex items-center gap-2 text-base text-[#205c6f] underline"
      >
        {url}
        <Icon name="icon-launch.svg" size={20} />
      </a>
    </div>
  );
}
