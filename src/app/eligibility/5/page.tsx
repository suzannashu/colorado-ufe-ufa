import { CareNeedsForm } from "@/components/CareNeedsForm";

/** Screener-5: care-needs with “Help me decide” selected. */
export default function EligibilityStep5() {
  return (
    <CareNeedsForm
      initialSelected={["Help me decide"]}
      backHref="/eligibility/4"
      nextHref="/eligibility/6"
    />
  );
}
