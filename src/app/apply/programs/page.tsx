import { ReactNode } from "react";
import { PageShell } from "@/components/SiteChrome";
import { Button, Chip, Icon } from "@/components/ui";

type Criterion = { text: string; met: boolean };

function EligibilityCard({
  title,
  beneficiary,
  role,
  birthDate,
  applyChecked,
  showApplyCheckbox = true,
  expanded,
  criteria,
}: {
  title: string;
  beneficiary: string;
  role: string;
  birthDate?: string;
  applyChecked?: boolean;
  showApplyCheckbox?: boolean;
  expanded: boolean;
  criteria?: Criterion[];
}) {
  return (
    <article className="flex flex-col gap-3 rounded-2xl border border-[#e0e0e0] bg-white p-6">
      <div className="flex items-start justify-between gap-4">
        <h2 className="font-heavy text-lg text-[#1d1d1d]">{title}</h2>
        {showApplyCheckbox ? (
          <label className="flex shrink-0 items-center gap-3">
            <span className="text-sm text-black">Apply to this program</span>
            {applyChecked ? (
              <Icon name="icon-checkbox.svg" size={28} alt="" />
            ) : (
              <span className="size-7 rounded border-2 border-[#9e9e9e]" />
            )}
          </label>
        ) : null}
      </div>
      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-3">
          <span className="text-base text-black">{beneficiary}</span>
          <Chip>{role}</Chip>
        </div>
        {birthDate ? (
          <p className="text-sm text-black">{birthDate}</p>
        ) : null}
      </div>
      <hr className="border-[#e0e0e0]" />
      <div className="flex flex-col gap-3">
        <button
          type="button"
          className="flex items-center gap-2 text-base text-[#205c6f]"
        >
          View eligibility details
          <Icon
            name="icon-chevron-down.svg"
            size={24}
            className={expanded ? "rotate-180" : ""}
          />
        </button>
        {expanded && criteria ? (
          <div className="flex flex-col gap-2 rounded-lg bg-[#f3f6fa] p-3">
            {criteria.map((c) => (
              <div key={c.text} className="flex items-center gap-2">
                <Icon
                  name={c.met ? "icon-check-green.svg" : "icon-cancel.svg"}
                  size={24}
                />
                <p className="text-base text-[#1d1d1d]">{c.text}</p>
              </div>
            ))}
          </div>
        ) : null}
      </div>
    </article>
  );
}

export default function ApplyProgramsPage() {
  const upkCriteria: Criterion[] = [
    { text: "Family lives in Colorado", met: true },
    { text: "The child must be 4 on October 1, 2026", met: true },
    { text: "The child should not be 5 or older on May 1, 2026", met: true },
  ];

  const cccapCriteria: Criterion[] = [
    {
      text: "Household income falls below 130% of federal poverty line",
      met: true,
    },
    { text: "Verified state residency and identity", met: true },
  ];

  const notEligibleUpkCriteria: Criterion[] = [
    { text: "Family lives in Colorado", met: true },
    { text: "The child must be 4 on October 1, 2026", met: false },
    { text: "The child should not be 5 or older on May 1, 2026", met: false },
  ];

  return (
    <ApplyProgramsShell>
      <p className="text-lg text-[#1d1d1d]">
        If you do not wish to enroll in all the programs you are eligible for,
        uncheck &quot;Apply to this program&quot; before you continue.
      </p>

      <EligibilityCard
        title="Colorado Universal Pre-K (UPK)"
        beneficiary="Kayleigh Abrams"
        role="Child"
        birthDate="January 1, 2022"
        applyChecked
        expanded
        criteria={upkCriteria}
      />
      <EligibilityCard
        title="Colorado Child Care Assistance Program (CCCAP)"
        beneficiary="Karla Abrams"
        role="Parent/Guardian"
        applyChecked
        expanded
        criteria={cccapCriteria}
      />
      <EligibilityCard
        title="SafeCare"
        beneficiary="Karla Abrams"
        role="Parent/Guardian"
        applyChecked={false}
        expanded={false}
      />
      <EligibilityCard
        title="Child First"
        beneficiary="Karla Abrams"
        role="Parent/Guardian"
        applyChecked={false}
        expanded={false}
      />

      <div className="flex flex-col gap-2 pt-2">
        <h2 className="font-heavy text-xl text-[#1d1d1d]">
          You are not currently eligible for these programs
        </h2>
        <p className="text-base text-[#1d1d1d]">
          Changes in your child care or household situation could make you, your
          children, or other household members eligible later. If it does, we
          encourage you to apply again.
        </p>
      </div>

      <EligibilityCard
        title="Colorado Universal Pre-K (UPK)"
        beneficiary="Kristopher Abrams"
        role="Child"
        birthDate="January 1, 2024"
        showApplyCheckbox={false}
        expanded
        criteria={notEligibleUpkCriteria}
      />
      <EligibilityCard
        title="Parents as Teachers (PAT)"
        beneficiary="Karla Abrams"
        role="Parent/Guardian"
        showApplyCheckbox={false}
        expanded={false}
      />
      <EligibilityCard
        title="HIPPY (Home Instruction for Parents of Preschool Youngsters)"
        beneficiary="Karla Abrams"
        role="Parent/Guardian"
        showApplyCheckbox={false}
        expanded={false}
      />
      <EligibilityCard
        title="Nurse-Family Partnership (NFP)"
        beneficiary="Karla Abrams"
        role="Parent/Guardian"
        showApplyCheckbox={false}
        expanded={false}
      />
    </ApplyProgramsShell>
  );
}

function ApplyProgramsShell({ children }: { children: ReactNode }) {
  return (
    <PageShell borderedHeader className="bg-white">
      <section className="flex flex-col items-center py-10">
        <div className="flex w-full max-w-[853px] flex-col gap-6">
          <div className="flex flex-col gap-3">
            <h1 className="font-heavy text-[28px] leading-10 text-[#1d1d1d]">
              Cherie, based on your answers, your family and/or children are
              eligible for the following programs.
            </h1>
          </div>
          {children}
          <div className="flex items-center justify-between py-10">
            <Button href="/apply/pre-app" variant="secondary">
              Back
            </Button>
            <Button href="/apply/questions">Continue</Button>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
