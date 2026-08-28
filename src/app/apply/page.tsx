import Link from "next/link";
import { FullBleed, PageShell } from "@/components/SiteChrome";
import { Button, Chip, Icon, ImgPlaceholder } from "@/components/ui";

export default function ApplyPage() {
  return (
    <PageShell>
      <FullBleed className="bg-[#757575] text-white">
        <div className="flex w-[684px] flex-col gap-8">
          <div className="flex flex-col gap-2">
            <h1 className="font-heavy text-[40px] leading-tight">
              Apply once. Get connected to more programs.
            </h1>
            <p className="text-lg">
              With one application, you can apply for Universal Pre-K, CCCAP, and
              five home visiting programs that support Colorado families and
              young children.
            </p>
          </div>
          <div className="flex items-center gap-10">
            <Button href="/eligibility">
              Start my application
              <Icon name="icon-east-white.svg" size={20} />
            </Button>
            <Button href="/browse" variant="secondary">
              Log in to my dashboard
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
              One application, more opportunities
            </h2>
            <p className="mt-2 text-lg text-[#1d1d1d]">
              You don&apos;t need to apply separately for every program. Complete
              one application to be considered for multiple Colorado programs
              that may support your family.
            </p>
          </div>
          <div className="grid grid-cols-3 gap-12">
            {[
              {
                icon: "icon-application.svg",
                title: "Apply once",
                body: "instead of filling out multiple applications.",
              },
              {
                icon: "icon-time.svg",
                title: "Save time",
                body: "by providing your information in one place.",
              },
              {
                icon: "icon-application.svg",
                title: "Start my application",
                body: "Apply to Colorado Universal Pre-K, CCCAP, or home visiting programs from one single application.",
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
                  {card.cta && card.href && (
                    <Link
                      href={card.href}
                      className="inline-flex items-center gap-2 text-base text-[#205c6f]"
                    >
                      {card.cta}
                      <Icon name="icon-east-teal.svg" size={20} />
                    </Link>
                  )}
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
