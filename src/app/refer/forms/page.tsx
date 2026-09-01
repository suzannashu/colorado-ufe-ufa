import { SpecialistShell } from "@/components/SpecialistShell";
import { Button, Icon } from "@/components/ui";

export default function ReferFormsPage() {
  return (
    <SpecialistShell>
      <div className="border-b border-[#e0e0e0] bg-white px-5 py-3">
        <div className="flex items-center justify-between">
          <h1 className="font-heavy text-[28px] text-[#1d1d1d]">Forms</h1>
          <Button href="/refer/forms/home-visiting" size="sm">
            <Icon name="icon-add.svg" size={16} className="brightness-0 invert" />
            New form
          </Button>
        </div>
        <div className="mt-3 flex flex-wrap items-center gap-6">
          <div className="flex w-[358px] items-center justify-between border-b border-[#9e9e9e] bg-[#eee] px-4 py-2">
            <span className="text-base text-[#1d1d1d]">
              Home visiting referral form
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
      </div>

      <div className="relative overflow-hidden p-4">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/assets/forms-index.png"
          alt="Table of referral form submissions"
          className="w-full max-w-none"
        />
      </div>
    </SpecialistShell>
  );
}
