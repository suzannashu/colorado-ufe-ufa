import Link from "next/link";
import { FullBleed, PageShell } from "@/components/SiteChrome";
import { Button, Icon } from "@/components/ui";

export default function ReferralSubmittedPage() {
  return (
    <PageShell active="refer" className="bg-[#f3f6fa]">
      <FullBleed
        className="bg-[#d2dee2]"
        innerClassName="flex flex-col items-start gap-3 px-32 py-10"
      >
        <Link
          href="/refer"
          className="inline-flex items-center gap-2 text-base text-[#205c6f]"
        >
          ← Back to programs
        </Link>
        <h1 className="font-heavy text-[40px] leading-tight text-[#1d1d1d]">
          Referral intake form
        </h1>
        <p className="max-w-[720px] text-lg text-[#1d1d1d]">
          Share the details below and a state child care specialist will contact
          the family to help them enroll in a home visiting program.
        </p>
      </FullBleed>

      <section className="flex flex-col items-center py-16">
        <div className="flex w-full max-w-[720px] flex-col items-center gap-6 rounded-2xl border border-[#e0e0e0] bg-white p-12 text-center">
          <Icon name="icon-check-circle-success.svg" size={64} />
          <h2 className="font-heavy text-[28px] leading-10 text-[#1d1d1d]">
            Referral received
          </h2>
          <p className="text-lg text-[#1d1d1d]">
            Thank you. A state child care specialist will review this referral
            and reach out to the family directly to help them enroll in a home
            visiting program. You&apos;ll get a confirmation copy by email.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <Button href="/refer" variant="secondary">
              ← Back to Refer a family
            </Button>
            <Button href="/refer/form">Refer another family</Button>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
