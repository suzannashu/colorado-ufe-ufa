"use client";

import { FormEvent } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FullBleed, PageShell } from "@/components/SiteChrome";
import { Button, Icon, TextField } from "@/components/ui";

const programOptions = [
  "Parents as Teachers (PAT) - Early childhood development",
  "Home Instruction for Parents of Preschool Youngsters (HIPPY) - School readiness",
  "Nurse-Family Partnership (NFP) - Maternal & infant health",
  "Child First - Family mental health",
  "SafeCare - Safe & nurturing homes",
];

export default function ReferralFormPage() {
  const router = useRouter();

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    router.push("/refer/submitted");
  }

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

      <section className="flex flex-col items-center py-10">
        <form
          onSubmit={onSubmit}
          className="flex w-full max-w-[958px] flex-col gap-10 rounded-2xl border border-[#e0e0e0] bg-white p-10"
        >
          <section className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <Icon name="referral-icon-about-you.svg" size={28} />
              <h2 className="font-heavy text-xl text-[#1d1d1d]">About you</h2>
            </div>
            <p className="text-base text-[#1d1d1d]">
              The professional making this referral
            </p>
            <div className="grid grid-cols-2 gap-6">
              <TextField label="First name" value="Jordan" />
              <TextField label="Last name" value="Lee" />
              <TextField label="Organization" value="Denver Health" />
              <TextField
                label="Role or title"
                value="e.g. Nurse or social worker"
              />
              <TextField label="Work email" value="jordan.lee@example.org" />
              <TextField label="Phone" value="(303) 555-0142" />
            </div>
          </section>

          <section className="flex flex-col gap-4 border-t border-[#e0e0e0] pt-8">
            <div className="flex items-center gap-3">
              <Icon name="referral-icon-about-family.svg" size={28} />
              <h2 className="font-heavy text-xl text-[#1d1d1d]">
                About the family
              </h2>
            </div>
            <p className="text-base text-[#1d1d1d]">
              Enough for a specialist to contact them. Only share what the
              family has agreed to.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <TextField label="Parent / guardian name" value="Alex Rivera" />
              <TextField label="Phone" value="(720) 555-0198" />
              <TextField label="Email (optional)" value="alex.rivera@example.com" />
              <label className="flex w-full flex-col gap-2">
                <span className="text-lg text-[#1d1d1d]">County</span>
                <select className="w-full border-b border-[#9e9e9e] bg-[#eee] p-4 text-base text-[#1d1d1d] outline-none">
                  <option>Denver</option>
                  <option>Adams</option>
                  <option>Arapahoe</option>
                  <option>Jefferson</option>
                </select>
              </label>
              <TextField label="Zip code" value="80205" />
              <label className="flex w-full flex-col gap-2">
                <span className="text-lg text-[#1d1d1d]">Preferred language</span>
                <select className="w-full border-b border-[#9e9e9e] bg-[#eee] p-4 text-base text-[#1d1d1d] outline-none">
                  <option>English</option>
                  <option>Spanish</option>
                </select>
              </label>
              <TextField label="Best time to reach them" value="No preference" />
              <TextField
                label="Children’s ages"
                value="e.g. Pregnant, 2 years"
              />
            </div>
          </section>

          <section className="flex flex-col gap-4 border-t border-[#e0e0e0] pt-8">
            <div className="flex items-center gap-3">
              <Icon name="referral-icon-program-interest.svg" size={28} />
              <h2 className="font-heavy text-xl text-[#1d1d1d]">
                Program interest
              </h2>
            </div>
            <p className="text-base text-[#1d1d1d]">
              Select any that fit. Not sure? Leave them blank and a specialist
              will help the family choose.
            </p>
            <div className="flex flex-col gap-3">
              {programOptions.map((option, i) => (
                <label
                  key={option}
                  className="flex items-center gap-3 text-base text-[#1d1d1d]"
                >
                  <input
                    type="checkbox"
                    defaultChecked={i < 2}
                    className="size-5 accent-[#205c6f]"
                  />
                  {option}
                </label>
              ))}
            </div>
          </section>

          <section className="flex flex-col gap-4 border-t border-[#e0e0e0] pt-8">
            <div className="flex items-center gap-3">
              <Icon name="referral-icon-more-info.svg" size={28} />
              <h2 className="font-heavy text-xl text-[#1d1d1d]">
                Anything else to share?
              </h2>
            </div>
            <p className="text-base text-[#1d1d1d]">
              Optional context that would help a specialist support this family.
            </p>
            <textarea
              className="min-h-28 w-full border-b border-[#9e9e9e] bg-[#eee] p-4 text-base text-[#1d1d1d] outline-none"
              defaultValue="e.g. Family speaks mostly Spanish; new to the area and looking for parenting support"
            />
          </section>

          <label className="flex items-start gap-3 text-base text-[#1d1d1d]">
            <input
              type="checkbox"
              defaultChecked
              className="mt-1 size-5 accent-[#205c6f]"
              required
            />
            I confirm the family has agreed to be contacted about home visiting
            programs, and that the information above is accurate to the best of
            my knowledge.
          </label>

          <div className="flex justify-end">
            <Button type="submit">
              Submit referral
              <Icon name="icon-send.svg" size={20} />
            </Button>
          </div>
        </form>
      </section>
    </PageShell>
  );
}
