import Link from "next/link";
import { SpecialistShell } from "@/components/SpecialistShell";
import { Button, Icon } from "@/components/ui";

type Referral = {
  name: string;
  id: string;
  referrer: string;
  email: string;
  assignedTo: string;
  status: string;
  stage: string;
};

const referrals: Referral[] = [
  { name: "Greg Aaronson", id: "5578773", referrer: "Jeff Smith", email: "email@email.com", assignedTo: "NFP Intake Team", status: "In progress", stage: "Awaiting documents" },
  { name: "Jennifer Arlen", id: "7383617", referrer: "Cynthia Hastings", email: "email@email.com", assignedTo: "Follow-up Team", status: "In progress", stage: "Contact family" },
  { name: "Erizku Awol", id: "2937019", referrer: "Robert Davis", email: "email@email.com", assignedTo: "NFP Intake Team", status: "Submitted", stage: "" },
  { name: "Carl Banks", id: "4386775", referrer: "Amanda Martinez", email: "email@email.com", assignedTo: "Follow-up Team", status: "Submitted", stage: "Enrolled" },
  { name: "Lily Batacan", id: "6487846", referrer: "Elena Kaczynski", email: "email@email.com", assignedTo: "NFP Intake Team", status: "In progress", stage: "Contact family" },
  { name: "Absame Bilan", id: "1863692", referrer: "Camila Gonzales", email: "email@email.com", assignedTo: "NFP Intake Team", status: "Submitted", stage: "" },
  { name: "Reginald Brown", id: "1863692", referrer: "Isabella Torres", email: "email@email.com", assignedTo: "Follow-up Team", status: "Submitted", stage: "Enrolled" },
  { name: "Desiree Campilongo", id: "2418488", referrer: "Jenna Avery", email: "email@email.com", assignedTo: "Follow-up Team", status: "In progress", stage: "Contact family" },
  { name: "Min-Jun Cheong", id: "7981334", referrer: "Karen O’Connor", email: "email@email.com", assignedTo: "NFP Intake Team", status: "Submitted", stage: "" },
  { name: "Erika Diaz Guzman", id: "2896711", referrer: "Denny Miller", email: "email@email.com", assignedTo: "NFP Intake Team", status: "In progress", stage: "Awaiting documents" },
  { name: "Noah Domingo", id: "4593779", referrer: "Ashley White", email: "email@email.com", assignedTo: "Follow-up Team", status: "Submitted", stage: "Enrolled" },
  { name: "Cherie Ellis Thomas", id: "3857201", referrer: "Leo Jacobo", email: "email@email.com", assignedTo: "NFP Intake Team", status: "Submitted", stage: "" },
  { name: "Fares Feghali", id: "4520957", referrer: "Chloe Tomlinson", email: "email@email.com", assignedTo: "NFP Intake Team", status: "Submitted", stage: "" },
  { name: "Landra Furness", id: "6613037", referrer: "Sofia Watson-Lopez", email: "email@email.com", assignedTo: "NFP Intake Team", status: "Submitted", stage: "" },
];

const columns = [
  "Referral name",
  "ID",
  "Referrer",
  "Referrer email",
  "Assigned to",
  "Status",
  "Stage",
];

const filterChips = ["Assignee", "Date", "Status"];

export default function ReferFormsPage() {
  return (
    <SpecialistShell>
      <div className="flex flex-col gap-3 border-b border-[#e0e0e0] bg-white px-5 py-3">
        <div className="flex items-center justify-between gap-3">
          <h1 className="font-heavy text-[28px] text-[#1d1d1d]">Forms</h1>
          <Button href="/refer/admin-forms-index/form-detail" size="sm">
            <Icon name="icon-add.svg" size={16} className="brightness-0 invert" />
            New form
          </Button>
        </div>

        <div className="flex flex-wrap items-center gap-6">
          <button
            type="button"
            className="flex h-10 w-[358px] items-center justify-between border-b border-[#9e9e9e] bg-[#eee] px-4 text-left"
          >
            <span className="text-base text-[#1d1d1d]">
              Nurse-Family Partnership Intake Form
            </span>
            <Icon name="icon-chevron-down-field.svg" size={24} />
          </button>

          <form role="search" className="flex">
            <label className="flex h-10 w-[344px] items-center gap-2 border-b border-[#9e9e9e] bg-[#eef0f1] px-4">
              <Icon name="icon-search.svg" size={24} />
              <span className="sr-only">Search by name</span>
              <input
                type="search"
                placeholder="Search by name"
                className="w-full bg-transparent text-base text-[#1d1d1d] outline-none placeholder:text-[#9e9e9e]"
              />
            </label>
            <Button type="submit" size="sm" className="h-10 rounded-l-none">
              Search
            </Button>
          </form>
        </div>

        <div className="flex flex-wrap items-center gap-4">
          {filterChips.map((chip) => (
            <button
              key={chip}
              type="button"
              className="flex h-10 items-center gap-1 rounded-full border border-[#e0e0e0] bg-white pl-4 pr-3 text-base text-[#1d1d1d] hover:bg-[#f3f6fa]"
            >
              {chip}
              <Icon name="icon-chevron-down-chip.svg" size={20} />
            </button>
          ))}
        </div>
      </div>

      <div className="p-4">
        <div className="overflow-x-auto border border-[#e0e0e0] bg-white">
          <table className="w-full min-w-[960px] border-collapse text-left text-base text-[#1d1d1d]">
            <thead>
              <tr className="border-b border-[#e4e4e4]">
                {columns.map((col) => (
                  <th
                    key={col}
                    scope="col"
                    className="h-12 whitespace-nowrap px-3 font-heavy"
                  >
                    {col}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {referrals.map((r) => (
                <tr
                  key={`${r.name}-${r.id}`}
                  className="h-12 border-b border-[#e4e4e4] last:border-b-0"
                >
                  <td className="whitespace-nowrap px-3">
                    <Link
                      href="/refer/admin-forms-index/form-detail"
                      className="text-[#205c6f] underline underline-offset-2"
                    >
                      {r.name}
                    </Link>
                  </td>
                  <td className="whitespace-nowrap px-3">{r.id}</td>
                  <td className="whitespace-nowrap px-3">{r.referrer}</td>
                  <td className="whitespace-nowrap px-3">{r.email}</td>
                  <td className="whitespace-nowrap px-3">{r.assignedTo}</td>
                  <td className="whitespace-nowrap px-3">{r.status}</td>
                  <td className="whitespace-nowrap px-3">{r.stage}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="flex items-center justify-end gap-6 border-t border-[#e4e4e4] px-4 py-6 text-sm text-[#1d1d1d]">
            <span>1-15 of 198</span>
            <div className="flex items-center gap-4">
              <button
                type="button"
                aria-label="Previous page"
                disabled
                className="opacity-30"
              >
                <Icon name="icon-chevron-right.svg" size={20} className="rotate-180 brightness-0" />
              </button>
              <button type="button" aria-label="Next page" className="opacity-60 hover:opacity-100">
                <Icon name="icon-chevron-right.svg" size={20} className="brightness-0" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </SpecialistShell>
  );
}
