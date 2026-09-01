const steps = [
  { n: 1, label: "Your household" },
  { n: 2, label: "Children" },
  { n: 3, label: "Care needs" },
] as const;

export function Stepper({ current }: { current: 1 | 2 | 3 }) {
  return (
    <div className="relative mb-6 h-[109px] w-full max-w-[870px]">
      <div className="absolute left-[70px] right-[70px] top-[30px] flex items-center">
        {[0, 1].map((i) => (
          <div key={i} className="h-px flex-1 bg-[#e0e0e0]" />
        ))}
      </div>
      <div className="relative z-10 flex justify-between px-[58px] pt-[18px]">
        {steps.map((step) => {
          const done = step.n < current;
          const active = step.n === current;
          return (
            <div key={step.n} className="flex w-24 flex-col items-center">
              <div
                className={`flex size-6 items-center justify-center rounded-full text-sm text-white ${
                  done
                    ? "bg-[#43a047]"
                    : active
                      ? "bg-[#205c6f]"
                      : "bg-[#bdbdbd]"
                }`}
              >
                {done ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src="/assets/icon-check.svg" alt="" className="size-4" />
                ) : (
                  step.n
                )}
              </div>
              <p className="mt-3 text-center text-sm text-[#1d1d1d]">
                {step.label}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
