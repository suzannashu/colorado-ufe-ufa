import { Counter } from "@/components/ui";
import { ReviewFlowShell } from "@/components/ReviewFlowShell";

export default function ReviewHouseholdPage() {
  return (
    <ReviewFlowShell
      progress={64}
      title="You have 3 household members. Is that still correct?"
      subtitle="A household member could be a spouse or partner, child, or other adult living in the home."
      backHref="/dashboard/review/children"
      continueHref="/dashboard/review/income"
    >
      <div className="opacity-50">
        <p className="mb-3 text-lg text-[#1d1d1d]">
          Number of people in your household <span className="text-[#d32f2f]">*</span>
        </p>
        <Counter value={3} />
      </div>
    </ReviewFlowShell>
  );
}
