import { ReviewFlowShell } from "@/components/ReviewFlowShell";

const options = [
  { label: "$0.00 - $36,579.96", selected: false },
  { label: "$36,579.96 - $98,765.80", selected: true },
  { label: "$98,765.80 or more", selected: false },
];

export default function ReviewIncomePage() {
  return (
    <ReviewFlowShell
      progress={80}
      title="Is this still your yearly household income range?"
      subtitle="Include any payroll income, or from self-employment, disability, unemployment benefits, or other sources."
      backHref="/dashboard/review/household"
      continueHref="/dashboard/review/confirm"
    >
      <div className="flex flex-col gap-2 opacity-50">
        {options.map((option) => (
          <div
            key={option.label}
            className="flex items-center gap-2 bg-[#f3f6fa] px-3 py-2"
          >
            <span
              className={`flex size-5 items-center justify-center rounded-full border-2 ${
                option.selected
                  ? "border-[#205c6f]"
                  : "border-[#9e9e9e]"
              }`}
            >
              {option.selected ? (
                <span className="size-2.5 rounded-full bg-[#205c6f]" />
              ) : null}
            </span>
            <span className="text-base text-[#1d1d1d]">{option.label}</span>
          </div>
        ))}
      </div>
    </ReviewFlowShell>
  );
}
