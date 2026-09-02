import { ReviewFlowShell } from "@/components/ReviewFlowShell";

export default function ReviewWelcomePage() {
  return (
    <ReviewFlowShell
      progress={16}
      title="Welcome back, Karla"
      subtitle="Before we get started, let’s check some of the information we have about you and your family. You’ll be able to edit any information that’s out of date."
      backHref="/dashboard/applications"
      continueHref="/dashboard/review/address"
      backLabel="Back"
      continueLabel="Continue"
    />
  );
}
