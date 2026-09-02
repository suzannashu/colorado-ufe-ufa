import { ReactNode } from "react";
import { PageShell } from "@/components/SiteChrome";
import { Button } from "@/components/ui";
import { EligibilityCard, type Criterion } from "@/components/EligibilityCard";

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

  const safeCareCriteria: Criterion[] = [
    { text: "At least one child age 5 or younger in the home.", met: true },
    {
      text: "Must live within an active SafeCare Colorado service area or participating county program.",
      met: true,
    },
  ];

  const loremCriteria: Criterion[] = [
    {
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      met: true,
    },
    {
      text: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      met: true,
    },
    {
      text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
      met: true,
    },
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
        criteria={safeCareCriteria}
      />
      <EligibilityCard
        title="Child First"
        beneficiary="Karla Abrams"
        role="Parent/Guardian"
        applyChecked={false}
        expanded={false}
        criteria={loremCriteria}
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
        criteria={loremCriteria}
      />
      <EligibilityCard
        title="HIPPY (Home Instruction for Parents of Preschool Youngsters)"
        beneficiary="Karla Abrams"
        role="Parent/Guardian"
        showApplyCheckbox={false}
        expanded={false}
        criteria={loremCriteria}
      />
      <EligibilityCard
        title="Nurse-Family Partnership (NFP)"
        beneficiary="Karla Abrams"
        role="Parent/Guardian"
        showApplyCheckbox={false}
        expanded={false}
        criteria={loremCriteria}
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
              Based on your answers, your family and/or children are eligible
              for the following programs.
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
