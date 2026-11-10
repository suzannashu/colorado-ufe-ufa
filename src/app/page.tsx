import Link from "next/link";
import { PageShell } from "@/components/SiteChrome";
import { Button, Chip, Icon } from "@/components/ui";

const startCards = [
  {
    icon: "hifi-icon-programs.svg",
    title: "Learn about programs",
    body: "Understand what each program offers, who qualifies, and what's expected of participants.",
    cta: "Explore programs",
    href: "/browse",
  },
  {
    icon: "hifi-icon-eligibility.svg",
    title: "Check your eligibility",
    body: "Answer a few questions and see the programs you're most likely to qualify for, with reasons why.",
    cta: "Start the screener",
    href: "/eligibility",
  },
  {
    icon: "hifi-icon-apply.svg",
    title: "Quick apply",
    body: "Apply to a program right away as a guest, or create an account to save your progress.",
    cta: "Apply now",
    href: "/apply",
  },
];

const programCards = [
  {
    icon: "hifi-icon-childcare.svg",
    chip: "Child care",
    title: "Colorado Child Care Assistance Program (CCCAP)",
    body: "Help paying for licensed child care while you work or go to school. Covers most or all of the cost of licensed care, based on a sliding-scale copay.",
    href: "/browse",
  },
  {
    icon: "hifi-icon-prek.svg",
    chip: "Early learning",
    title: "Colorado Universal Pre-K",
    body: "Free or low-cost preschool the year before kindergarten led by certified early-childhood teachers.",
    href: "/programs/upk",
  },
  {
    icon: "hifi-icon-health.svg",
    chip: "Health",
    title: "Nurse-Family Partnership",
    body: "Free, voluntary community health program that pairs first-time, low-income pregnant individuals with specially trained registered nurses.",
    href: "/refer",
    divider: true,
  },
];

function ArrowCta({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 text-base leading-4 font-black text-[#363a61]">
      {children}
      <Icon name="hifi-icon-east-navy.svg" size={20} />
    </span>
  );
}

function PrimaryActions() {
  return (
    <div className="flex items-center gap-10">
      <Button href="/eligibility" variant="navy" className="leading-4">
        Check what I qualify for
        <Icon name="icon-east-white.svg" size={20} />
      </Button>
      <Button href="/browse" variant="navy-outline" className="leading-4">
        Browse all programs
      </Button>
    </div>
  );
}

export default function HomePage() {
  return (
    <PageShell theme="navy">
      <section className="relative w-full overflow-hidden bg-[#e3f3ed]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/assets/hifi-hero-illustration.png"
          alt=""
          className="pointer-events-none absolute inset-0 h-full w-full object-cover"
        />
        <div className="relative mx-auto flex h-[459px] w-full max-w-[1440px] items-start px-32 py-12">
          <div className="flex w-[584px] flex-col gap-8 text-[#363a61]">
            <div className="flex flex-col gap-2">
              <p className="w-[567px] text-base leading-[normal] font-black tracking-[2.56px]">
                ONE APPLICATION, MANY PROGRAMS
              </p>
              <h1 className="w-[498px] font-heavy text-[40px] leading-[normal]">
                Support for your family, all in one place
              </h1>
              <p className="text-lg leading-[normal]">
                Find child care help, early learning, food, health coverage, and
                more. Answer a few simple questions and we&apos;ll show you the
                programs you&apos;re most likely to qualify for, then help you
                apply.
              </p>
            </div>
            <PrimaryActions />
            <div className="flex items-center gap-10 text-sm leading-4 font-black">
              <span className="flex items-center gap-2">
                <Icon name="hifi-icon-watch.svg" /> Takes about 5 minutes
              </span>
              <span className="flex items-center gap-2">
                <Icon name="hifi-icon-shield.svg" /> Private &amp; secure
              </span>
              <span className="flex items-center gap-2">
                <Icon name="hifi-icon-support.svg" /> Free help available
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="flex flex-col items-center py-[60px]">
        <div className="flex w-[1160px] flex-col gap-10 text-[#363a61]">
          <div className="flex flex-col gap-2">
            <h2 className="font-heavy text-2xl leading-[normal]">Three ways to get started</h2>
            <p className="text-lg leading-6">
              Clear next steps, wherever you are in the process.
            </p>
          </div>
          <div className="grid grid-cols-3 gap-12">
            {startCards.map((card) => (
              <div
                key={card.title}
                className="flex flex-col gap-9 rounded-2xl border border-[#e0e0e0] bg-white p-6"
              >
                <Icon name={card.icon} size={80} />
                <div className="flex flex-col items-start gap-4">
                  <h3 className="font-heavy text-lg leading-[normal]">{card.title}</h3>
                  <p className="text-base leading-[normal]">{card.body}</p>
                  <Link href={card.href} className="inline-flex hover:underline">
                    <ArrowCta>{card.cta}</ArrowCta>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="flex flex-col items-center py-[60px]">
        <div className="flex w-[1160px] flex-col gap-10 text-[#363a61]">
          <div className="flex items-center justify-between gap-10">
            <div className="flex flex-col gap-2">
              <h2 className="font-heavy text-2xl leading-[normal]">Programs families rely on</h2>
              <p className="text-lg leading-6">
                A quick look at a few of the programs you can apply to here.
              </p>
            </div>
            <Button href="/browse" variant="navy-ghost" size="sm">
              <span className="font-black">View all programs</span>
              <Icon name="hifi-icon-east-navy-sm.svg" size={16} />
            </Button>
          </div>
          <div className="grid grid-cols-3 gap-12">
            {programCards.map((card) => (
              <Link
                key={card.title}
                href={card.href}
                className="flex flex-col gap-9 rounded-2xl border border-[#e0e0e0] bg-white p-6 transition-shadow hover:shadow-md"
              >
                <Icon name={card.icon} size={80} />
                <div className="flex flex-col items-start gap-4">
                  <Chip tone="navy">{card.chip}</Chip>
                  <h3 className="font-heavy text-lg leading-[normal]">{card.title}</h3>
                  <p className="text-base leading-[normal]">{card.body}</p>
                  {card.divider ? (
                    <span aria-hidden className="block h-0 w-full" />
                  ) : null}
                  <ArrowCta>Learn more</ArrowCta>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="flex justify-center py-[60px]">
        <div className="flex w-[1170px] flex-col items-center gap-6 rounded-2xl bg-[#f2c679] p-12 text-center text-[#363a61]">
          <div className="flex flex-col gap-2">
            <h2 className="font-heavy text-2xl leading-[normal]">
              Not sure where to begin? Let&apos;s find out together.
            </h2>
            <p className="text-lg leading-[normal]">
              Answer a few questions and we&apos;ll match you to the programs
              that fit your family, and explain exactly why.
            </p>
          </div>
          <PrimaryActions />
        </div>
      </section>
    </PageShell>
  );
}
