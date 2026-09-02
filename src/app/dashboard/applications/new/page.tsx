import Link from "next/link";
import { FamilyDashboardShell } from "@/components/FamilyDashboardShell";
import { Button, Icon } from "@/components/ui";

export default function NewApplicationModalPage() {
  return (
    <div className="relative">
      <FamilyDashboardShell active="applications" pageIcon="icon-assignment.svg">
        <div className="flex max-w-[1152px] items-start justify-between gap-8 opacity-40">
          <div className="max-w-[700px]">
            <h1 className="font-heavy text-[28px] leading-10 text-[#1d1d1d]">
              My applications
            </h1>
            <p className="mt-2 text-base text-[#1d1d1d]">
              To review your application, click on the name. To see other programs
              you might qualify for, or to find a new program to apply for, please
              check the Programs page to learn more.
            </p>
          </div>
          <Button size="sm" className="shrink-0">
            <Icon name="icon-add.svg" size={16} className="brightness-0 invert" />
            New application
          </Button>
        </div>
      </FamilyDashboardShell>

      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4">
        <div className="w-full max-w-[560px] rounded bg-white p-8 shadow-lg">
          <div className="flex items-start justify-between gap-4">
            <h2 className="font-heavy text-2xl text-[#1d1d1d]">
              Start a new application
            </h2>
            <Link href="/dashboard/applications" aria-label="Close">
              <Icon name="icon-cancel.svg" size={24} />
            </Link>
          </div>
          <p className="mt-4 text-base leading-6 text-[#1d1d1d]">
            We&apos;ll check your eligibility requirements whenever you start a new
            application. You may also visit the{" "}
            <Link href="/browse" className="text-[#205c6f] underline">
              Programs
            </Link>{" "}
            page to learn more about the programs included in this application.
          </p>
          <div className="mt-8 flex items-center justify-end gap-4">
            <Button href="/eligibility" variant="secondary" size="sm">
              Check my eligibility
            </Button>
            <Button href="/dashboard/review" size="sm">
              Quick apply
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
