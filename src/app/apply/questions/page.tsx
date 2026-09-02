import { ApplicationFlowShell } from "@/components/ApplicationFlowShell";

export default function ApplyQuestionsPage() {
  return (
    <ApplicationFlowShell
      progress={75}
      title="Application questions"
      subtitle="Lorem ipsum"
      backHref="/apply/programs"
      continueHref="/apply/confirmation"
    >
      <div className="flex h-[308px] items-center justify-center rounded border border-[#e0e0e0] bg-[#f3f6fa] px-8 text-center">
        <p className="text-lg text-[#1d1d1d]">
          Application questions
          <br />
          <br />
          Depending on the programs opted into, different sets of questions will
          be shown to the family.
        </p>
      </div>
    </ApplicationFlowShell>
  );
}
