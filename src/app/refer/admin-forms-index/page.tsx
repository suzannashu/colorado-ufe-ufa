import Link from "next/link";
import { SpecialistShell } from "@/components/SpecialistShell";
import { Button, Icon } from "@/components/ui";

const columns = [
  "Referral name",
  "ID",
  "Referrer",
  "Referrer email",
  "Assigned to",
  "Status",
  "Stage",
];

const referrals = [
  { name: "Greg Aaronson", id: "5578773", referrer: "Margarita Zapata Audley", email: "email@email.com", assignedTo: "NFP Intake Team", status: "In progress", stage: "Stage 1 - Initial review" },
  { name: "Jennifer Arlen", id: "7383617", referrer: "Cynthia Hastings", email: "email@email.com", assignedTo: "Follow-up Team", status: "In progress", stage: "Stage 2 - Contact family" },
  { name: "Erizku Awol", id: "2937019", referrer: "Robert Davis", email: "email@email.com", assignedTo: "NFP Intake Team", status: "Submitted", stage: "Stage 3 - Complete" },
  { name: "Carl Banks", id: "4386775", referrer: "Amanda Martinez", email: "email@email.com", assignedTo: "Follow-up Team", status: "Submitted", stage: "Stage 3 - Complete" },
  { name: "Lily Batacan", id: "6487846", referrer: "Elena Kaczynski", email: "email@email.com", assignedTo: "NFP Intake Team", status: "In progress", stage: "Stage 1 - Initial review" },
  { name: "Absame Bilan", id: "1863692", referrer: "Camila Gonzales", email: "email@email.com", assignedTo: "NFP Intake Team", status: "Submitted", stage: "Stage 3 - Complete" },
  { name: "Reginald Brown", id: "1863692", referrer: "Isabella Torres", email: "email@email.com", assignedTo: "Follow-up Team", status: "Submitted", stage: "Stage 3 - Complete" },
  { name: "Desiree Campilongo", id: "2418488", referrer: "Jenna Avery", email: "email@email.com", assignedTo: "Follow-up Team", status: "In progress", stage: "Stage 2 - Contact family" },
  { name: "Min-Jun Cheong", id: "7981334", referrer: "Karen O'Connor", email: "email@email.com", assignedTo: "NFP Intake Team", status: "Submitted", stage: "Stage 3 - Complete" },
  { name: "Erika Diaz Guzman", id: "2896711", referrer: "Denny Miller", email: "email@email.com", assignedTo: "NFP Intake Team", status: "In progress", stage: "Stage 1 - Initial review" },
  { name: "Noah Domingo", id: "4593779", referrer: "Ashley White", email: "email@email.com", assignedTo: "Follow-up Team", status: "Submitted", stage: "Stage 3 - Complete" },
  { name: "Cherie Ellis Thomas", id: "3857201", referrer: "Leo Jacobo", email: "email@email.com", assignedTo: "NFP Intake Team", status: "In progress", stage: "Stage 2 - Contact family" },
  { name: "Fares Feghali", id: "4520957", referrer: "Chloe Tomlinson", email: "email@email.com", assignedTo: "NFP Intake Team", status: "In progress", stage: "Stage 2 - Contact family" },
  { name: "Landra Furness", id: "6613037", referrer: "Sofia Watson-Lopez", email: "email@email.com", assignedTo: "NFP Intake Team", status: "Submitted", stage: "Stage 3 - Complete" },
];

export default function ReferFormsPage() {
  return (
    <SpecialistShell>
      <div className="border-b border-[#e0e0e0] bg-white px-5 py-3">
        <div className="flex items-center justify-between">
          <h1 className="font-heavy text-[28px] text-[#1d1d1d]">Forms</h1>
          <Button href="/refer/admin-forms-index/form-detail" size="sm">
            <Icon name="icon-add.svg" size={16} className="brightness-0 invert" />
            New form
          </Button>
        </div>
        <div className="mt-3 flex flex-wrap items-center gap-6">
          <div className="flex w-[358px] items-center justify-between border-b border-[#9e9e9e] bg-[#eee] px-4 py-2">
            <span className="whitespace-nowrap text-base text-[#1d1d1d]">
              Nurse-Family Partnership Intake Form
            </span>
            <Icon name="icon-chevron-down-field.svg" size={24} />
          </div>
          <div className="flex">
            <div className="flex h-10 w-[344px] items-center gap-2 border-b border-[#9e9e9e] bg-[#eef0f1] px-4 py-2">
              <Icon name="icon-search.svg" size={24} />
              <span className="text-base text-[#9e9e9e]">Search by name</span>
            </div>
            <Button size="sm" className="h-10 rounded-l-none">
              Search
            </Button>
          </div>
        </div>
        <div className="mt-3 flex items-center gap-4">
          {["Assignee", "Date", "Status"].map((filter) => (
            <button
              key={filter}
              type="button"
              className="flex items-center gap-2 rounded-full border border-[#e4e4e4] bg-white px-4 py-2.5 text-sm leading-[18px] text-[#1d1d1d]"
            >
              {filter}
              <Icon name="icon-chevron-down.svg" size={20} />
            </button>
          ))}
        </div>
      </div>

      <div className="relative overflow-hidden p-4">
        <div className="overflow-x-auto border border-[#e0e0e0] bg-white">
          <table className="w-full min-w-[1200px] table-fixed text-left text-sm leading-[18px] text-[#1d1d1d]">
            <colgroup>
              <col className="w-[200px]" />
              <col className="w-[98px]" />
              <col className="w-[210px]" />
              <col className="w-[292px]" />
              <col className="w-[228px]" />
              <col />
              <col />
            </colgroup>
            <thead>
              <tr className="border-b border-[#e4e4e4]">
                {columns.map((column) => (
                  <th key={column} className="px-3 py-4 font-heavy">
                    {column}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {referrals.map((row, index) => (
                <tr key={row.name} className="border-b border-[#e4e4e4]">
                  <td className="px-3 py-4">
                    <Link
                      href={
                        index === 0
                          ? "/refer/admin-forms-index/form-detail"
                          : "/refer/admin-forms-index"
                      }
                      scroll={false}
                      className="text-[#205c6f] underline"
                    >
                      {row.name}
                    </Link>
                  </td>
                  <td className="px-3 py-4">{row.id}</td>
                  <td className="px-3 py-4">{row.referrer}</td>
                  <td className="px-3 py-4">{row.email}</td>
                  <td className="px-3 py-4">{row.assignedTo}</td>
                  <td className="px-3 py-4">{row.status}</td>
                  <td className="px-3 py-4">{row.stage}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="flex items-center justify-end py-1 text-sm leading-[18px] text-[#1d1d1d]">
            <p className="w-[132px] px-3 py-4 text-right">1-15 of 198</p>
            <div className="flex w-[109px] items-center justify-center gap-6 px-3 py-4">
              <button type="button" aria-label="Previous page" disabled>
                <Icon name="icon-chevron-left-pagination.svg" size={24} />
              </button>
              <button type="button" aria-label="Next page">
                <Icon name="icon-chevron-right-pagination.svg" size={24} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </SpecialistShell>
  );
}
