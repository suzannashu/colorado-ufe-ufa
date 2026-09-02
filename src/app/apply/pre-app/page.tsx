import { ApplicationFlowShell } from "@/components/ApplicationFlowShell";

export default function PreAppPage() {
  return (
    <ApplicationFlowShell
      progress={25}
      title="Pre-app screener"
      subtitle="Lorem ipsum"
      backHref="/apply/before-you-apply"
      continueHref="/apply/programs"
    >
      <div className="flex h-[308px] items-center justify-center rounded border border-[#e0e0e0] bg-[#f3f6fa] px-8 text-center">
        <p className="text-lg text-[#1d1d1d]">
          Pre-application screener questions
          <br />
          XX total questions
        </p>
      </div>
    </ApplicationFlowShell>
  );
}
