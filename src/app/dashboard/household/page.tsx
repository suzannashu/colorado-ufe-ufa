import { ReactNode } from "react";
import { FamilyDashboardShell } from "@/components/FamilyDashboardShell";
import { Button, Icon } from "@/components/ui";

function DataField({ label, value }: { label: string; value: string }) {
  return (
    <div className="min-w-0 flex-1">
      <p className="font-heavy text-base text-[#1d1d1d]">{label}</p>
      <p className="text-base text-[#1d1d1d]">{value}</p>
    </div>
  );
}

function Card({
  title,
  id,
  children,
}: {
  title: string;
  id?: string;
  children: ReactNode;
}) {
  return (
    <article className="flex w-full flex-col gap-6 rounded-md border border-[#e0e0e0] bg-white p-4">
      <div className="flex items-center gap-6">
        <h2 className="font-heavy text-lg text-[#1d1d1d]">{title}</h2>
        {id ? <span className="text-base text-[#1d1d1d]">{id}</span> : null}
      </div>
      {children}
    </article>
  );
}

export default function DashboardHouseholdPage() {
  return (
    <FamilyDashboardShell active="household" pageIcon="icon-account-circle.svg">
      <div className="flex max-w-[1153px] flex-col gap-4">
        <div>
          <h1 className="font-heavy text-[28px] leading-10 text-[#1d1d1d]">
            Household
          </h1>
          <p className="mt-2 text-lg text-[#1d1d1d]">
            If you need to make a change to an existing member of your household
            shown below, please contact{" "}
            <a href="mailto:info@childcare.gov" className="text-[#205c6f] underline">
              info@childcare.gov
            </a>
          </p>
        </div>

        <div className="flex justify-end">
          <Button size="sm">
            <Icon name="icon-add.svg" size={16} className="brightness-0 invert" />
            Add a child
          </Button>
        </div>

        <Card title="Home address">
          <div className="flex gap-0">
            <DataField label="Address" value="6650 Gifford Dr" />
            <DataField label="City" value="Commerce City" />
            <DataField label="State" value="Colorado" />
            <DataField label="Zip" value="80022" />
          </div>
        </Card>

        <Card title="Karla Abrams" id="#515380746">
          <div className="flex gap-0">
            <DataField label="Relationship" value="Primary parent / guardian" />
            <DataField label="Phone" value="(303) 555-9876" />
            <DataField label="Email" value="kabrams@foo.com" />
            <div className="flex-1" />
          </div>
        </Card>

        <Card title="Kayleigh Abrams" id="#348571006">
          <div className="flex gap-0">
            <DataField label="Relationship" value="Child" />
            <DataField label="DOB" value="Jan 1, 2022" />
            <div className="flex-1" />
            <div className="flex-1" />
          </div>
          <div className="flex gap-0">
            <DataField label="Active enrollment" value="Sunshine Children’s Center" />
            <DataField label="Start date" value="Jan 1, 2026" />
            <DataField label="Subsidy program" value="Colorado Universal Pre-K" />
            <DataField label="Monthly award amount" value="$600" />
          </div>
        </Card>

        <Card title="Kris Abrams" id="#672093395">
          <div className="flex gap-0">
            <DataField label="Relationship" value="Child" />
            <DataField label="DOB" value="Jan 1, 2023" />
            <div className="flex-1" />
            <div className="flex-1" />
          </div>
        </Card>
      </div>
    </FamilyDashboardShell>
  );
}
