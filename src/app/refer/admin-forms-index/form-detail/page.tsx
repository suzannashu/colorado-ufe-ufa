"use client";

import { FormEvent } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { SpecialistShell } from "@/components/SpecialistShell";
import { Button, Icon, SelectField, TextField } from "@/components/ui";

const programOptions = [
  "Parents as Teachers (PAT) - Early childhood development",
  "Home Instruction for Parents of Preschool Youngsters (HIPPY) - School readiness",
  "Nurse-Family Partnership (NFP) - Maternal & infant health",
  "Child First - Family mental health",
  "SafeCare - Safe & nurturing homes",
];

export default function HomeVisitingReferralFormPage() {
  const router = useRouter();

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    router.push("/refer/submitted");
  }

  return (
    <SpecialistShell>
      <div className="border-b border-[#e0e0e0] bg-white px-5 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link href="/refer/admin-forms-index" aria-label="Back to forms">
              <Icon name="icon-back-circle.svg" size={48} />
            </Link>
            <h1 className="font-heavy text-2xl text-[#1d1d1d]">
              Nurse-Family Partnership Intake Form
            </h1>
          </div>
        </div>
      </div>

      <div className="flex justify-end border border-[#e0e0e0] bg-white">
        <button type="button" className="p-3">
          <Icon name="icon-assignment.svg" size={24} />
        </button>
        <button type="button" className="p-3">
          <Icon name="icon-question-answer.svg" size={24} />
        </button>
        <button type="button" className="p-3">
          <Icon name="icon-folder-open.svg" size={24} />
        </button>
        <button type="button" className="p-3">
          <Icon name="icon-more-vert.svg" size={24} />
        </button>
      </div>

      <form onSubmit={onSubmit} className="m-4 border border-[#e0e0e0] bg-white">
        <div className="border-b border-[#e0e0e0] px-6 py-4">
          <h2 className="font-heavy text-2xl text-[#1d1d1d]">Details</h2>
        </div>

        <div className="flex flex-col gap-10 p-4">
          <section className="flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <h3 className="font-heavy text-lg text-[#1d1d1d]">
                About the family
              </h3>
              <Icon name="icon-emergency.svg" size={24} />
            </div>
            <div className="grid grid-cols-2 items-start gap-10">
              <TextField
                label="Parent / guardian name"
                value="Greg Aaronson"
              />
              <TextField label="Phone" value="(303) 555-8765" />
              <TextField
                label="Email (optional)"
                value="email@email.com"
              />
              <SelectField label="County" value="Arapahoe" />
              <TextField label="Zip code" value="80015" />
              <SelectField
                label="Preferred language"
                value="English"
                options={[
                  "English",
                  "Chinese",
                  "Hindi",
                  "Korean",
                  "Russian",
                  "Spanish",
                  "Tagalog",
                  "Tamil",
                  "Vietnamese",
                ]}
              />
              <SelectField
                label="Best time to reach them"
                value="No preference"
                options={["No preference", "Morning", "Afternoon", "Evening"]}
              />
              <TextField
                label="Children’s ages"
                value="2, 7"
                hint="e.g. Pregnant, 2 years"
              />
            </div>
          </section>

          <section className="flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <h3 className="font-heavy text-lg text-[#1d1d1d]">
                Program interest
              </h3>
              <Icon name="icon-emergency.svg" size={24} />
            </div>
            <div className="flex flex-col gap-2 opacity-60">
              {programOptions.map((option) => {
                const checked = option.startsWith("Nurse-Family Partnership");
                return (
                  <div
                    key={option}
                    role="checkbox"
                    aria-checked={checked}
                    aria-readonly="true"
                    className="flex items-center gap-2 bg-[#f3f6fa] px-3 py-2"
                  >
                    <Icon
                      name={
                        checked ? "icon-checkbox-checked.svg" : "icon-checkbox.svg"
                      }
                      size={24}
                    />
                    <span className="text-base text-[#1d1d1d]">{option}</span>
                  </div>
                );
              })}
            </div>
          </section>

          <section className="flex flex-col gap-3 opacity-60">
            <h3 className="font-heavy text-lg text-[#1d1d1d]">
              Additional notes
            </h3>
            <textarea
              readOnly
              className="min-h-[127px] w-full cursor-default border-b border-[#9e9e9e] bg-[#eee] p-4 text-base text-[#1d1d1d] outline-none"
              placeholder="e.g. Family speaks mostly Spanish; new to the area and looking for parenting support"
            />
          </section>

          <div
            role="checkbox"
            aria-checked="true"
            aria-readonly="true"
            className="flex items-start gap-4 py-4 opacity-60"
          >
            <Icon
              name="icon-checkbox-checked.svg"
              size={24}
              className="mt-0.5 shrink-0"
            />
            <span className="text-base text-[#1d1d1d]">
              I confirm the family has agreed to be contacted about home visiting
              programs, and that the information above is accurate to the best of
              my knowledge.
            </span>
          </div>

          <div className="text-sm text-[#1d1d1d]">
            <p>
              <span className="font-heavy">ID:</span>{" "}
              6372A796-9C9B-4C0C-8B09-A7F9AA94EED0
            </p>
            <p>
              <span className="font-heavy">Created by:</span> Margarita Zapata
              Audley
            </p>
            <p>
              <span className="font-heavy">Created:</span> August 14, 2026 at
              9:43 AM
            </p>
          </div>

          <div className="flex items-center justify-between pb-4">
            <Link
              href="/refer"
              className="text-sm text-[#205c6f] underline underline-offset-2"
            >
              Back to landing page
            </Link>
            <Button type="submit" size="sm">
              Create application from form
            </Button>
          </div>
        </div>
      </form>
    </SpecialistShell>
  );
}
