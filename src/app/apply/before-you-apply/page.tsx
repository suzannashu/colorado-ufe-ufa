import { ApplicationFlowShell } from "@/components/ApplicationFlowShell";
import { Icon } from "@/components/ui";

const documents = [
  {
    title: "Child's Information",
    icon: "face.svg",
    lead: "For example:",
    items: ["Proof of age (e.g., birth certificate, passport, hospital records)"],
  },
  {
    title: "Household Income",
    icon: "paid.svg",
    lead: "For example:",
    items: [
      "Recent pay stubs (typically from the last 30 days)",
      "Tax return (most recent federal or state)",
      "W-2 forms",
      "Social Security income statements (if applicable)",
      "Unemployment benefits documentation (if applicable)",
      "Self-employment income documentation (e.g., 1099 forms, profit/loss statements)",
    ],
  },
  {
    title: "Residency or Guardianship",
    icon: "description.svg",
    lead: "For example:",
    items: [
      "Proof of Colorado residency (e.g., utility bill, lease agreement, driver's license)",
      "Legal guardianship or custody documents (if the applicant is not the parent)",
    ],
  },
  {
    title: "Other Qualifying Factors",
    icon: "note_add.svg",
    lead: "You may also be asked to document any of the following if they apply to your child:",
    items: [
      "Individualized Education Program (IEP)",
      "Homelessness or housing insecurity",
      "Foster care or kinship care",
      "Language or developmental delays",
    ],
  },
];

export default function BeforeYouApplyPage() {
  return (
    <ApplicationFlowShell
      title="Before you apply"
      subtitle="Different programs require different types of documents. If applying for Universal Pre-K and/or Colorado Child Care Assistance Program (CCCAP), you may be asked to share some documents to confirm your family's and/or child's eligibility. Here are examples of documents you may be asked to provide. We'll let you know which documents, if any, you need to submit with your application."
      backHref="/apply/register"
      continueHref="/apply/pre-app"
      continueLabel="Continue"
    >
      <div className="flex flex-col gap-4">
        {documents.map((doc) => (
          <div
            key={doc.title}
            className="flex gap-4 rounded border border-[#e0e0e0] bg-white p-4"
          >
            <div className="flex size-8 shrink-0 items-center justify-center rounded-full bg-[#f3f6fa]">
              <Icon name={doc.icon} size={24} alt="" />
            </div>
            <div className="text-lg text-[#1d1d1d]">
              <p className="font-heavy">{doc.title}</p>
              <p className="mt-1">{doc.lead}</p>
              <ul className="mt-1 list-disc pl-5">
                {doc.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </ApplicationFlowShell>
  );
}
