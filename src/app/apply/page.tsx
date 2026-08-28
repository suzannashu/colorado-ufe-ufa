import Link from "next/link";
import { FullBleed, PageShell } from "@/components/SiteChrome";
import { Button, Icon, ImgPlaceholder } from "@/components/ui";

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
                icon: "icon-explore.svg",
                title: "Explore more options",
                body: "for early learning, child care, and family support.",
              },
            ].map((card) => (
              <div
                key={card.title}
                className="flex flex-col gap-9"
              >
                <Icon name={card.icon} size={60} />
                <div className="flex flex-col gap-2">
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
          <div className="flex items-center justify-center gap-10">
            <Button>
              Start my application
              <Icon name="icon-east-white.svg" size={20} />
            </Button>
            <Button variant="secondary">
              Log in to my dashboard
            </Button>
          </div>
        </div>
      </section>

      <section className="flex flex-col items-center py-[60px]">
        <div className="flex w-[1160px] flex-col gap-10">
          <div className="flex items-center justify-between gap-10">
            <div>
              <h2 className="font-heavy text-2xl text-[#1d1d1d]">
                One application, seven programs
              </h2>
              <p className="mt-2 text-lg text-[#1d1d1d]">
                Your application can connect you with programs that support
                children and families at different stages*.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <h3 className="text-base font-heavy tracking-[2.56px] text-[#1d1d1d]">
                EARLY LEARNING &amp; CHILD CARE
              </h3>
              <ul className="flex flex-col gap-3">
                <li className="flex items-start gap-3 text-lg text-[#1d1d1d]">
                  <Icon name="icon-check-green.svg" size={24} className="mt-1 shrink-0" />
                  <span>
                    <span className="font-heavy">Universal Pre-K (UPK):</span>{" "}
                    Free preschool for eligible Colorado children.
                  </span>
                </li>
                <li className="flex items-start gap-3 text-lg text-[#1d1d1d]">
                  <Icon name="icon-check-green.svg" size={24} className="mt-1 shrink-0" />
                  <span>
                    <span className="font-heavy">CCCAP:</span> Helps eligible
                    families pay for child care.
                  </span>
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-4">
              <h3 className="text-base font-heavy tracking-[2.56px] text-[#1d1d1d]">
                HOME VISITING PROGRAMS
              </h3>
              <ul className="flex flex-col gap-3">
                <li className="flex items-start gap-3 text-lg text-[#1d1d1d]">
                  <Icon name="icon-check-green.svg" size={24} className="mt-1 shrink-0" />
                  <span>
                    <span className="font-heavy">Parents as Teachers:</span>{" "}
                    Provides families with information and support to help
                    children learn and grow.
                  </span>
                </li>
                <li className="flex items-start gap-3 text-lg text-[#1d1d1d]">
                  <Icon name="icon-check-green.svg" size={24} className="mt-1 shrink-0" />
                  <span>
                    <span className="font-heavy">HIPPY:</span> Helps parents
                    prepare young children for success in school and beyond.
                  </span>
                </li>
                <li className="flex items-start gap-3 text-lg text-[#1d1d1d]">
                  <Icon name="icon-check-green.svg" size={24} className="mt-1 shrink-0" />
                  <span>
                    <span className="font-heavy">
                      Nurse-Family Partnership (NFP):
                    </span>{" "}
                    Provides support from trained nurses to eligible first-time
                    parents.
                  </span>
                </li>
                <li className="flex items-start gap-3 text-lg text-[#1d1d1d]">
                  <Icon name="icon-check-green.svg" size={24} className="mt-1 shrink-0" />
                  <span>
                    <span className="font-heavy">Child First:</span> Connects
                    families with support to promote healthy child development
                    and family well-being.
                  </span>
                </li>
                <li className="flex items-start gap-3 text-lg text-[#1d1d1d]">
                  <Icon name="icon-check-green.svg" size={24} className="mt-1 shrink-0" />
                  <span>
                    <span className="font-heavy">SafeCare:</span> Helps parents
                    build skills to keep their children safe, healthy, and
                    thriving.
                  </span>
                </li>
              </ul>
            </div>
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
