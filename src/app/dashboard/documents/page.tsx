import { FamilyDashboardShell } from "@/components/FamilyDashboardShell";
import { Button, Icon } from "@/components/ui";

type DocRow = {
  name: string;
  meta: string;
  status?: "Documents needed" | "In progress" | "Submitted" | "Signed";
  action: "Continue" | "View";
};

const rows: DocRow[] = [
  {
    name: "Form: Change of address",
    meta: "Created September 24, 2025 at 12:44 PM",
    status: "Documents needed",
    action: "Continue",
  },
  {
    name: "Form: Add or remove household member",
    meta: "Created September 23, 2025 at 8:59 AM",
    status: "In progress",
    action: "Continue",
  },
  {
    name: "Form: Change in employment status",
    meta: "Submitted September 24, 2025 at 1:09 PM",
    status: "Submitted",
    action: "View",
  },
  {
    name: "Form: Add or remove household member",
    meta: "Submitted July 12, 2025 at 7:36 AM",
    status: "Submitted",
    action: "View",
  },
  {
    name: "Agreement: Parent/Family",
    meta: "Submitted July 12, 2025 at 7:36 AM",
    status: "Signed",
    action: "View",
  },
  {
    name: "policy-document.pdf",
    meta: "Submitted January 17, 2025 at 7:36 PM",
    action: "View",
  },
  {
    name: "Form: Update child's personal information",
    meta: "Submitted February 7, 2025 at 9:23 PM",
    status: "Submitted",
    action: "View",
  },
];

function StatusBadge({ status }: { status: NonNullable<DocRow["status"]> }) {
  if (status === "Documents needed") {
    return (
      <span className="rounded-full bg-[rgba(103,58,183,0.12)] px-3 py-1 text-sm text-[#673ab7]">
        {status}
      </span>
    );
  }
  if (status === "In progress") {
    return (
      <span className="rounded-full bg-[rgba(32,92,111,0.12)] px-3 py-1 text-sm text-[#205c6f]">
        {status}
      </span>
    );
  }
  return <span className="text-base text-[#1d1d1d]">{status}</span>;
}

export default function DashboardDocumentsPage() {
  return (
    <FamilyDashboardShell active="documents" pageIcon="icon-folder-open.svg">
      <div className="flex max-w-[1152px] flex-col gap-8">
        <h1 className="font-heavy text-[28px] leading-10 text-[#1d1d1d]">
          Documents &amp; forms
        </h1>

        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <button
              type="button"
              className="flex h-10 min-w-[220px] items-center justify-between border-b border-[#9e9e9e] bg-[#eee] px-4 text-base text-[#1d1d1d]"
            >
              Filter by document type
              <Icon name="icon-chevron-down-field.svg" size={24} />
            </button>
            <div className="flex h-10 w-[280px] items-center gap-2 rounded-md bg-[#eee] px-4">
              <Icon name="icon-search.svg" size={24} />
              <span className="text-base text-[#9e9e9e]">Search by name</span>
            </div>
          </div>
          <Button size="sm">
            <Icon name="icon-add.svg" size={16} className="brightness-0 invert" />
            New
          </Button>
        </div>

        <div className="overflow-hidden border border-[#e0e0e0] bg-white">
          <table className="w-full text-left text-base text-[#1d1d1d]">
            <thead className="border-b border-[#e0e0e0] bg-[#f3f6fa]">
              <tr>
                <th className="px-4 py-3 font-heavy">Form name</th>
                <th className="px-4 py-3 font-heavy">Status</th>
                <th className="px-4 py-3 font-heavy">Details</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={`${row.name}-${row.meta}`} className="border-b border-[#e0e0e0]">
                  <td className="px-4 py-4">
                    <p className="font-heavy">{row.name}</p>
                    <p className="text-sm text-[#616161]">{row.meta}</p>
                  </td>
                  <td className="px-4 py-4">
                    {row.status ? <StatusBadge status={row.status} /> : null}
                  </td>
                  <td className="px-4 py-4">
                    {row.action === "Continue" ? (
                      <Button size="sm">Continue</Button>
                    ) : (
                      <Button size="sm" variant="secondary">
                        View
                      </Button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex items-center justify-center gap-2">
          <button type="button" className="px-2 text-[#1d1d1d]" aria-label="Previous page">
            ‹
          </button>
          <span className="flex size-8 items-center justify-center bg-[#205c6f] text-white">
            1
          </span>
          <span className="flex size-8 items-center justify-center text-[#1d1d1d]">2</span>
          <span className="flex size-8 items-center justify-center text-[#1d1d1d]">3</span>
          <button type="button" className="px-2 text-[#1d1d1d]" aria-label="Next page">
            ›
          </button>
        </div>
      </div>
    </FamilyDashboardShell>
  );
}
