import { ReadonlyField, ReviewFlowShell } from "@/components/ReviewFlowShell";
import { Icon } from "@/components/ui";

function ChildBlock({
  name,
  first,
  last,
  year,
}: {
  name: string;
  first: string;
  last: string;
  year: string;
}) {
  return (
    <div className="flex flex-col gap-4">
      <p className="text-xl text-black">{name}</p>
      <div className="flex gap-4">
        <ReadonlyField label="First name" value={first} required />
        <ReadonlyField label="Middle name" />
        <ReadonlyField label="Last name" value={last} required />
      </div>
      <p className="text-lg text-black">
        Date of birth <span className="text-[#d32f2f]">*</span>
      </p>
      <div className="flex gap-4 opacity-50">
        {[
          ["Birth month", "January"],
          ["Birth day", "1"],
          ["Birth year", year],
        ].map(([label, value]) => (
          <div
            key={label}
            className="flex flex-1 items-center justify-between border-b border-[#9e9e9e] bg-[#eee] px-4 pb-0.5 pt-1.5"
          >
            <div>
              <p className="text-xs text-[#1d1d1d]">{label}</p>
              <p className="text-base text-[#1d1d1d]">{value}</p>
            </div>
            <div className="flex items-center gap-1">
              <Icon name="icon-chevron-down-field.svg" size={24} />
              <Icon name="icon-lock.svg" size={24} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function ReviewChildrenPage() {
  return (
    <ReviewFlowShell
      progress={48}
      title="Are the children listed below still living in your household?"
      backHref="/dashboard/review/address"
      continueHref="/dashboard/review/household"
    >
      <ChildBlock
        name="Kayleigh Abrams"
        first="Kayleigh"
        last="Abrams"
        year="2022"
      />
      <ChildBlock
        name="Kristopher Abrams"
        first="Kristopher"
        last="Abrams"
        year="2023"
      />
    </ReviewFlowShell>
  );
}
