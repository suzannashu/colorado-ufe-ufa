import Link from "next/link";
import { FamilyDashboardShell } from "@/components/FamilyDashboardShell";
import { Button, Icon } from "@/components/ui";

type Row = {
  program: string;
  applicant: string;
  eligible: boolean;
  updated: string;
  status: "Submitted" | "Continue";
  nested?: boolean;
};

const rows: Row[] = [
  {
    program: "Colorado Universal Pre-K",
    applicant: "Karla Abrams",
    eligible: true,
    updated: "May 15, 2026",
    status: "Submitted",
  },
  {
    program: "Colorado Universal Pre-K 2026-2027",
    applicant: "Kayleigh Abrams",
    eligible: true,
    updated: "May 15, 2026",
    status: "Submitted",
    nested: true,
  },
  {
    program: "Colorado Universal Pre-K 2026-2027",
    applicant: "Kristopher Abrams",
    eligible: false,
    updated: "May 15, 2026",
    status: "Submitted",
    nested: true,
  },
  {
    program: "Colorado Child Care Assistance Program (CCCAP)",
    applicant: "Karla Abrams",
    eligible: true,
    updated: "Aug 31, 2026",
    status: "Continue",
  },
  {
    program: "Home Instruction for Parents and Preschool Youngsters (HIPPY)",
    applicant: "Karla Abrams",
    eligible: false,
    updated: "Sep 8, 2024",
    status: "Submitted",
  },
  {
    program: "Colorado Child Care Assistance Program (CCCAP)",
    applicant: "Karla Abrams",
    eligible: false,
    updated: "Sep 2, 2024",
    status: "Submitted",
  },
];

export default function DashboardApplicationsPage() {
  return (
    <FamilyDashboardShell active="applications" pageIcon="icon-assignment.svg">
      <div className="max-w-[1152px]">
        <h1 className="font-heavy text-[28px] leading-10 text-[#1d1d1d]">
          My applications
        </h1>
        <p className="mt-2 text-base text-[#1d1d1d]">
          To review your application, click on the Program/subsidy name link. If
          you&apos;re not sure which program to apply for, please check the{" "}
          <Link href="/browse" className="text-[#205c6f] underline">
            Programs
          </Link>{" "}
          page to learn more.
        </p>
        <div className="mt-4 flex justify-end">
          <Button href="/dashboard/applications/new" size="sm" className="shrink-0">
            <Icon name="icon-add.svg" size={16} className="brightness-0 invert" />
            New application
          </Button>
        </div>
      </div>

      <div className="mt-8 max-w-[1152px] overflow-hidden border border-[#e0e0e0] bg-white">
        <table className="w-full text-left text-base text-[#1d1d1d]">
          <thead className="border-b border-[#e0e0e0] bg-white">
            <tr>
              <th className="px-4 py-3 font-heavy">Program / subsidy name</th>
              <th className="px-4 py-3 font-heavy">Applicant name</th>
              <th className="px-4 py-3 font-heavy">Eligibility</th>
              <th className="px-4 py-3 font-heavy">Updated</th>
              <th className="px-4 py-3 font-heavy">Status</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr key={`${row.program}-${row.applicant}-${i}`} className="border-b border-[#e0e0e0]">
                <td className="px-4 py-4">
                  <span className={`inline-flex items-center gap-2 ${row.nested ? "pl-6" : ""}`}>
                    {row.nested ? (
                      <span className="text-[#9e9e9e]">↳</span>
                    ) : null}
                    <Link href="/dashboard/review" className="text-[#205c6f] underline">
                      {row.program}
                    </Link>
                  </span>
                </td>
                <td className="px-4 py-4">{row.applicant}</td>
                <td className="px-4 py-4">
                  <Icon
                    name={
                      row.eligible
                        ? "icon-check-circle-success.svg"
                        : "icon-cancel.svg"
                    }
                    size={24}
                    className={
                      row.eligible
                        ? ""
                        : "[filter:brightness(0)_saturate(100%)_invert(27%)_sepia(75%)_saturate(2648%)_hue-rotate(353deg)_brightness(93%)_contrast(93%)]"
                    }
                  />
                </td>
                <td className="px-4 py-4">{row.updated}</td>
                <td className="px-4 py-4">
                  {row.status === "Continue" ? (
                    <Button href="/dashboard/review" size="sm" variant="secondary">
                      Continue
                    </Button>
                  ) : (
                    "Submitted"
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </FamilyDashboardShell>
  );
}
