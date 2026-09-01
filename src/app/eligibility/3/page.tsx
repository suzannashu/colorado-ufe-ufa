import { PageShell } from "@/components/SiteChrome";
import { Stepper } from "@/components/Stepper";
import { Button } from "@/components/ui";
import { ChildrenList } from "@/components/ChildrenList";

export default function EligibilityStep3() {
  return (
    <PageShell active="eligibility" borderedHeader className="bg-white">
      <section className="flex flex-col items-center py-10">
        <div className="flex w-full max-w-[853px] flex-col gap-6">
          <Stepper current={3} />
          <div className="flex flex-col gap-3">
            <h1 className="font-heavy text-[28px] leading-10 text-black">
              Add your children
            </h1>
            <p className="text-lg leading-6 text-black">
              Many programs depend on a child&apos;s age, so add each child in
              your care.
            </p>
          </div>
          <ChildrenList />
          <div className="flex items-center justify-between py-10">
            <Button href="/eligibility/2" variant="secondary">
              Back
            </Button>
            <Button href="/eligibility/4">Continue</Button>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
