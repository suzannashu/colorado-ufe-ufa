import { ReactNode } from "react";
import { PageShell } from "@/components/SiteChrome";
import { Button } from "@/components/ui";

export function ApplicationFlowShell({
  children,
  progress,
  title,
  subtitle,
  backHref,
  continueHref,
  continueLabel = "Continue",
  showBack = true,
}: {
  children: ReactNode;
  progress?: number;
  title: string;
  subtitle?: string;
  backHref?: string;
  continueHref?: string;
  continueLabel?: string;
  showBack?: boolean;
}) {
  return (
    <PageShell borderedHeader className="bg-white">
      <section className="flex flex-col items-center py-10">
        <div className="flex w-full max-w-[853px] flex-col gap-6">
          {progress !== undefined ? (
            <div className="h-1 w-full overflow-hidden rounded-full bg-[#e0e0e0]">
              <div
                className="h-full bg-[#205c6f] transition-all"
                style={{ width: `${progress}%` }}
              />
            </div>
          ) : null}
          <div className="flex flex-col gap-3">
            <h1 className="font-heavy text-[28px] leading-10 text-black">
              {title}
            </h1>
            {subtitle ? (
              <p className="text-lg leading-6 text-black">{subtitle}</p>
            ) : null}
          </div>
          {children}
          {(backHref || continueHref) && (
            <div className="flex items-center justify-between py-10">
              {showBack && backHref ? (
                <Button href={backHref} variant="secondary">
                  Back
                </Button>
              ) : (
                <span />
              )}
              {continueHref ? (
                <Button href={continueHref}>{continueLabel}</Button>
              ) : null}
            </div>
          )}
        </div>
      </section>
    </PageShell>
  );
}
