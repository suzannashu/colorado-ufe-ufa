const steps = [
  { n: 1, label: "About you" },
  { n: 2, label: "Your household" },
  { n: 3, label: "Children" },
  { n: 4, label: "Sign & submit" },
] as const;

export function ApplicationSubmitStepper() {
  return (
    <div className="relative mb-6 h-[109px] w-full max-w-[870px]">
      <div className="absolute left-[70px] right-[70px] top-[30px] flex items-center">
        {[0, 1, 2].map((i) => (
          <div key={i} className="h-px flex-1 bg-[#43a047]" />
        ))}
      </div>
      <div className="relative z-10 flex justify-between px-[58px] pt-[18px]">
        {steps.map((step) => (
          <div key={step.n} className="flex w-24 flex-col items-center">
            <div className="flex size-6 items-center justify-center rounded-full bg-[#43a047] text-sm text-white">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/assets/icon-check.svg" alt="" className="size-4" />
            </div>
            <p className="mt-3 text-center text-sm text-[#1d1d1d]">
              {step.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
