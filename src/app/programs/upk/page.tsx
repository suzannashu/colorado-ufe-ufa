import Link from "next/link";
import { Button, Icon } from "@/components/ui";

const docs = [
  {
    icon: "upk-icon-child-info.svg",
    title: "Child’s Information",
    bullets: [
      "Proof of age (e.g., birth certificate, passport, hospital records)",
    ],
  },
  {
    icon: "upk-icon-income.svg",
    title: "Household Income",
    bullets: [
      "Recent pay stubs (typically from the last 30 days)",
      "Tax return (most recent federal or state)",
      "W-2 forms",
      "SSI, unemployment, or self-employment documentation if applicable",
    ],
  },
  {
    icon: "upk-icon-assets.svg",
    title: "Household Assets (may be required for specific programs)",
    bullets: [
      "Bank statements",
      "Investment account summaries",
      "Property ownership documents",
    ],
  },
  {
    icon: "upk-icon-residency.svg",
    title: "Residency or Guardianship",
    bullets: [
      "Proof of Colorado residency (e.g., utility bill, lease agreement, driver’s license)",
      "Legal guardianship or custody documents if applicable",
    ],
  },
  {
    icon: "upk-icon-other-factors.svg",
    title: "Other Qualifying Factors",
    bullets: [
      "Individualized Education Program (IEP)",
      "Documentation of homelessness, foster/kinship care, or language/developmental delays if they apply",
    ],
  },
];

export default function UpkPage() {
  return (
    <div className="min-h-screen w-full bg-[#f3f6fa]">
      <main className="flex flex-col items-center py-12">
        <div className="flex w-full max-w-[692px] flex-col gap-8 rounded-2xl border border-[#e0e0e0] bg-white p-10">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/assets/upk-logo.png"
            alt="Colorado Universal Preschool"
            className="mx-auto h-16 w-auto object-contain"
          />

          <div>
            <h1 className="font-heavy text-[28px] leading-10 text-[#1d1d1d]">
              Getting Started
            </h1>
            <p className="mt-3 text-base text-[#1d1d1d]">
              New to{" "}
              <a
                href="https://cdec.colorado.gov/colorado-universal-preschool"
                target="_blank"
                rel="noreferrer"
                className="text-[#3b4171] underline"
              >
                Colorado’s Universal Preschool
              </a>{" "}
              program? You may be asked to share a few documents to confirm your
              child’s eligibility.
            </p>
            <p className="mt-3 text-base text-[#1d1d1d]">
              You can exit at any time and return later. Your progress will be
              saved automatically.
            </p>
          </div>

          <div className="flex flex-col gap-6">
            {docs.map((doc) => (
              <div
                key={doc.title}
                className="flex gap-4 border-t border-[#e0e0e0] pt-6"
              >
                <Icon name={doc.icon} size={40} />
                <div>
                  <h2 className="font-heavy text-lg text-[#1d1d1d]">
                    {doc.title}
                  </h2>
                  <ul className="mt-2 list-disc space-y-1 pl-5 text-base text-[#1d1d1d]">
                    {doc.bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col items-center gap-4 pt-4">
            <Button
              href="/eligibility"
              className="!bg-[#9e1679] hover:!bg-[#85135f]"
            >
              Start application
              <Icon name="icon-east-white.svg" size={20} />
            </Button>
            <Link href="/" className="text-base text-[#1d1d1d] underline">
              Back to home
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
