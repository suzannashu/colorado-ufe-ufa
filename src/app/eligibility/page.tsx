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
              Tell us a little about yourself
            </h1>
          </div>
          <div className="flex gap-6">
            <TextField
              label="First name"
              className="flex-1 basis-0"
            />
            <TextField
              label="Last name"
              className="flex-1 basis-0"
            />
          </div>
          <div className="flex gap-6">
            <TextField
              label="Zip code"
              className="flex-1 basis-0"
            />
            <span className="flex-1 basis-0" />
          </div>
          <div className="flex items-center justify-between pt-2">
            <span />
            <Button href="/eligibility/2">Continue</Button>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
