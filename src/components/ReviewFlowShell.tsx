import { ReactNode } from "react";
import { PageShell } from "@/components/SiteChrome";
import { Button } from "@/components/ui";

export function ReviewFlowShell({
  children,
  progress,
  title,
  subtitle,
  backHref,
  continueHref,
  backLabel = "Edit my info",
  continueLabel = "Save and continue",
}: {
  children?: ReactNode;
  progress: number;
  title: string;
  subtitle?: string;
  backHref: string;
  continueHref: string;
  backLabel?: string;
  continueLabel?: string;
}) {
  return (
    <PageShell borderedHeader className="bg-white">
      <section className="flex flex-col items-center py-10">
        <div className="flex w-full max-w-[790px] flex-col gap-6">
          <div className="h-1 w-full overflow-hidden rounded-full bg-[#e0e0e0]">
            <div
              className="h-full bg-[#205c6f]"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="flex flex-col gap-3">
            <h1 className="font-heavy text-[28px] leading-10 text-black">
              {title}
            </h1>
            {subtitle ? (
              <p className="text-lg leading-6 text-black">{subtitle}</p>
            ) : null}
          </div>
          {children}
          <div className="flex items-center justify-between py-10">
            <Button href={backHref} variant="secondary">
              {backLabel}
            </Button>
            <Button href={continueHref}>{continueLabel}</Button>
          </div>
        </div>
      </section>
    </PageShell>
  );
}

export function ReadonlyField({
  label,
  value,
  required,
  className = "",
}: {
  label: string;
  value?: string;
  required?: boolean;
  className?: string;
}) {
  return (
    <label className={`flex w-full flex-col gap-2 opacity-50 ${className}`}>
      <span className="text-lg text-[#1d1d1d]">
        {label}
        {required ? <span className="text-[#d32f2f]"> *</span> : null}
      </span>
      <div className="flex h-10 items-center border-b border-[#9e9e9e] bg-[#eee] px-4 py-2">
        <span className="text-base text-[#1d1d1d]">{value ?? ""}</span>
      </div>
    </label>
  );
}
