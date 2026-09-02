import { ReadonlyField, ReviewFlowShell } from "@/components/ReviewFlowShell";
import { Icon } from "@/components/ui";

export default function ReviewAddressPage() {
  return (
    <ReviewFlowShell
      progress={32}
      title="Is this still your address?"
      backHref="/dashboard/review"
      continueHref="/dashboard/review/children"
    >
      <ReadonlyField label="Address" value="4505 S Peck Dr" required />
      <div className="flex gap-4">
        <ReadonlyField label="City" value="Longmont" required />
        <label className="flex w-full flex-col gap-2 opacity-50">
          <span className="text-lg text-[#1d1d1d]">State</span>
          <div className="flex h-10 items-center justify-between border-b border-[#9e9e9e] bg-[#eee] px-4 py-2">
            <span className="text-base text-[#1d1d1d]">Colorado</span>
            <Icon name="icon-chevron-down-field.svg" size={24} />
          </div>
        </label>
        <ReadonlyField label="Zip" value="80503" required />
      </div>
      <label className="flex items-center gap-2 opacity-50">
        <span className="flex size-6 items-center justify-center rounded border border-[#9e9e9e] bg-white" />
        <span className="text-base text-[#1d1d1d]">
          We are currently in temporary housing, in a shelter, or living with
          relatives.
        </span>
      </label>
    </ReviewFlowShell>
  );
}
