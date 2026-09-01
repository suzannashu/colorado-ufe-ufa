import { PageShell } from "@/components/SiteChrome";
import { Stepper } from "@/components/Stepper";
import { Button, Icon } from "@/components/ui";

function ChildRow({ label }: { label: string }) {
  return (
    <div className="flex items-center justify-between border border-[#e0e0e0] p-4">
      <div className="flex items-center gap-6">
        <span className="font-heavy text-lg text-black">{label}</span>
        <div className="relative flex h-14 w-[220px] flex-col justify-center border-b border-[#9e9e9e] bg-[#eee] px-4 py-2">
          <span className="text-xs text-[#1d1d1d]">Age</span>
          <select
            defaultValue="3 years"
            className="w-full appearance-none bg-transparent pr-8 text-base text-[#1d1d1d] outline-none"
          >
            {Array.from({ length: 13 }, (_, i) => `${i} year${i === 1 ? "" : "s"}`).map(
              (age) => (
                <option key={age} value={age}>
                  {age}
                </option>
              ),
            )}
          </select>
          <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2">
            <Icon name="icon-chevron-down-field.svg" size={24} />
          </span>
        </div>
      </div>
      <button
        type="button"
        className="flex size-6 items-center justify-center rounded-full bg-[#9e9e9e]"
        aria-label="Remove child"
      >
        <Icon name="icon-cancel.svg" size={16} />
      </button>
    </div>
  );
}

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
          <ChildRow label="Child 1" />
          <ChildRow label="Child 2" />
          <Button variant="ghost" size="sm" className="self-start bg-[#f3f6fa]">
            <Icon name="icon-add-teal.svg" size={16} />
            Add a child
          </Button>
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
