import { PageShell } from "@/components/SiteChrome";
import { Stepper } from "@/components/Stepper";
import { Button, Counter, Icon, TextField } from "@/components/ui";

export default function EligibilityStep2() {
  return (
    <PageShell active="eligibility" borderedHeader className="bg-white">
      <section className="flex flex-col items-center py-10">
        <div className="flex w-full max-w-[853px] flex-col gap-6">
          <Stepper current={2} />
          <div className="flex flex-col gap-3">
            <h1 className="font-heavy text-[28px] leading-10 text-black">
              Tell us about your household
            </h1>
            <p className="text-lg leading-6 text-black">
              Include everyone who lives with you and shares income.
            </p>
          </div>
          <p className="text-lg text-black">
            People in your household (count all adults and children who live in
            the home)
          </p>
          <Counter value={2} />
          <TextField
            label="Total monthly household income (before taxes)"
            value="4,879"
            prefix={<Icon name="icon-money.svg" size={24} />}
            hint="A rough estimate is fine. Enter 0 if you have no income right now."
          />
          <div className="flex items-center justify-between pt-2">
            <Button href="/eligibility" variant="secondary">
              Back
            </Button>
            <Button href="/eligibility/3">Continue</Button>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
