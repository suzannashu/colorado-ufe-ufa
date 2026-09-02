import Link from "next/link";
import { FamilyDashboardShell } from "@/components/FamilyDashboardShell";
import { Icon } from "@/components/ui";

const todos = [
  {
    icon: "icon-assignment.svg",
    title: "You have 1 application in progress",
    cta: "My applications",
    href: "/dashboard/applications",
  },
  {
    icon: "icon-folder-open.svg",
    title: "You have new documents to review",
    cta: "My documents",
    href: "/dashboard",
  },
  {
    icon: "icon-question-answer.svg",
    title: "You have 2 unread messages",
    cta: "Messages",
    href: "/dashboard",
  },
];

export default function DashboardTodoPage() {
  return (
    <FamilyDashboardShell active="todo" pageIcon="checklist.svg">
      <h1 className="font-heavy text-[28px] leading-10 text-[#1d1d1d]">
        Welcome back, Karla!
      </h1>
      <h2 className="mt-8 font-heavy text-xl text-[#1d1d1d]">To do</h2>
      <div className="mt-6 flex max-w-[1152px] flex-col gap-6">
        {todos.map((item) => (
          <div
            key={item.title}
            className="flex items-center justify-between border border-[#e0e0e0] bg-white p-6"
          >
            <div className="flex items-center gap-4">
              <Icon name={item.icon} size={36} />
              <p className="text-lg text-[#1d1d1d]">{item.title}</p>
            </div>
            <Link
              href={item.href}
              className="inline-flex items-center gap-2 rounded border border-[#205c6f] px-4 py-2.5 text-sm text-[#205c6f]"
            >
              {item.cta}
              <Icon name="icon-chevron-right.svg" size={16} />
            </Link>
          </div>
        ))}
      </div>
    </FamilyDashboardShell>
  );
}
