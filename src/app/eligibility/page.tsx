import { PageShell } from "@/components/SiteChrome";
import { Stepper } from "@/components/Stepper";
import { Button, TextField } from "@/components/ui";

export default function EligibilityStep1() {
  return (
    <PageShell active="eligibility" borderedHeader className="bg-white">
      <section className="flex flex-col items-center py-10">
        <div className="flex w-full max-w-[853px] flex-col gap-6">
          <Stepper current={1} />
          <div className="flex flex-col gap-3">
            <h1 className="font-heavy text-[28px] leading-10 text-black">
              Let’s start with the basics
            </h1>
            <p className="text-lg leading-6 text-black">
              We only ask what we need to match you to programs.
            </p>
          </div>
          <TextField label="Your name" value="Cherie" />
          <TextField
            label="Zip code"
            value="80012"
            hint="Helps us tailor programs to your area"
          />
          <div className="flex items-center justify-between pt-2">
            <span />
            <Button href="/eligibility/2">Continue</Button>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
