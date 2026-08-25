import Link from "next/link";
import { FullBleed, PageShell } from "@/components/SiteChrome";
import { Button, Chip, Icon, ImgPlaceholder } from "@/components/ui";

export default function HomePage() {
  return (
    <PageShell>
      <FullBleed className="bg-[#757575] text-white">
        <div className="flex w-[684px] flex-col gap-8">
          <div className="flex flex-col gap-2">
            <p className="text-base tracking-[2.56px]">
              ONE APPLICATION, MANY PROGRAMS
            </p>
            <h1 className="font-heavy text-[40px] leading-tight">
              Support for your family, all in one place
            </h1>
            <p className="text-lg">
              Find child care help, early learning, food, health coverage, and
              more. Answer a few simple questions and we&apos;ll show you the
              programs you&apos;re most likely to qualify for, then help you
              apply.
            </p>
          </div>
          <div className="flex items-center gap-10">
            <Button href="/eligibility">
              Check what I qualify for
              <Icon name="icon-east-white.svg" size={20} />
            </Button>
            <Button href="/browse" variant="secondary">
              Browse all programs
            </Button>
          </div>
          <div className="flex gap-10 text-sm">
            <span className="flex items-center gap-2">
              <Icon name="icon-watch.svg" /> Takes about 5 minutes
            </span>
            <span className="flex items-center gap-2">
              <Icon name="icon-shield.svg" /> Private &amp; secure
            </span>
            <span className="flex items-center gap-2">
              <Icon name="icon-support.svg" /> Free help available
            </span>
          </div>
        </div>
        <ImgPlaceholder />
      </FullBleed>

      <section className="flex flex-col items-center py-[60px]">
        <div className="flex w-[1160px] flex-col gap-10">
          <div>
            <h2 className="font-heavy text-2xl text-[#1d1d1d]">
              Three ways to get started
            </h2>
            <p className="mt-2 text-lg text-[#1d1d1d]">
              Clear next steps, wherever you are in the process.
            </p>
          </div>
          <div className="grid grid-cols-3 gap-12">
            {[
              {
                icon: "icon-programs.svg",
                title: "Learn about programs",
                body: "Understand what each program offers, who qualifies, and what's expected of participants.",
                cta: "Explore programs",
                href: "/browse",
              },
              {
                icon: "icon-eligibility.svg",
                title: "Check your eligibility",
                body: "Answer a few questions and see the programs you're most likely to qualify for, with reasons why.",
                cta: "Start the screener",
                href: "/eligibility",
              },
              {
                icon: "icon-apply.svg",
                title: "Quick apply",
                body: "Apply to a program right away as a guest, or create an account to save your progress.",
                cta: "Apply now",
                href: "/programs/upk",
              },
            ].map((card) => (
              <div
                key={card.title}
                className="flex flex-col gap-9 rounded-2xl border border-[#e0e0e0] bg-white p-6"
              >
                <Icon name={card.icon} size={60} />
                <div className="flex flex-col gap-4">
                  <h3 className="font-heavy text-lg text-[#1d1d1d]">
                    {card.title}
                  </h3>
                  <p className="text-base text-[#1d1d1d]">{card.body}</p>
                  <Link
                    href={card.href}
                    className="inline-flex items-center gap-2 text-base text-[#205c6f]"
                  >
                    {card.cta}
                    <Icon name="icon-east-teal.svg" size={20} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="flex flex-col items-center py-[60px]">
        <div className="flex w-[1160px] flex-col gap-10">
          <div className="flex items-center justify-between gap-10">
            <div>
              <h2 className="font-heavy text-2xl text-[#1d1d1d]">
                Programs families rely on
              </h2>
              <p className="mt-2 text-lg text-[#1d1d1d]">
                A quick look at a few of the programs you can apply to here.
              </p>
            </div>
            <Button href="/browse" variant="ghost" size="sm">
              View all programs
              <Icon name="icon-east-teal-sm.svg" size={16} />
            </Button>
          </div>
          <div className="grid grid-cols-3 gap-12">
            {[
              {
                icon: "icon-childcare.svg",
                chip: "Child care",
                title: "Colorado Child Care Assistance Program (CCCAP)",
                body: "Help paying for licensed child care while you work or go to school. Covers most or all of the cost of licensed care, based on a sliding-scale copay.",
                href: "/browse",
              },
              {
                icon: "icon-prek.svg",
                chip: "Early learning",
                title: "Colorado Universal Pre-K",
                body: "Free or low-cost preschool the year before kindergarten led by certified early-childhood teachers.",
                href: "/programs/upk",
              },
              {
                icon: "icon-health.svg",
                chip: "Health",
                title: "Nurse-Family Partnership",
                body: "Free, voluntary community health program that pairs first-time, low-income pregnant individuals with specially trained registered nurses.",
                href: "/refer",
              },
            ].map((card) => (
              <Link
                key={card.title}
                href={card.href}
                className="flex flex-col gap-9 rounded-2xl border border-[#e0e0e0] bg-white p-6"
              >
                <Icon name={card.icon} size={60} />
                <div className="flex flex-col items-start gap-4">
                  <Chip>{card.chip}</Chip>
                  <h3 className="font-heavy text-lg text-[#1d1d1d]">
                    {card.title}
                  </h3>
                  <p className="text-base text-[#1d1d1d]">{card.body}</p>
                  <span className="inline-flex items-center gap-2 text-base text-[#205c6f]">
                    Learn more
                    <Icon name="icon-east-teal.svg" size={20} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="flex justify-center py-[60px]">
        <div className="flex w-[1170px] flex-col items-center gap-6 rounded-2xl bg-[#d2dee2] p-12 text-center">
          <div>
            <h2 className="font-heavy text-2xl text-[#1d1d1d]">
              Not sure where to begin? Let&apos;s find out together.
            </h2>
            <p className="mt-2 text-lg text-[#1d1d1d]">
              Answer a few questions and we&apos;ll match you to the programs
              that fit your family, and explain exactly why.
            </p>
          </div>
          <div className="flex gap-10">
            <Button href="/eligibility">
              Check what I qualify for
              <Icon name="icon-east-white.svg" size={20} />
            </Button>
            <Button href="/browse" variant="secondary">
              Browse all programs
            </Button>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
