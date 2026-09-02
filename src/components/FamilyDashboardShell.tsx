import Link from "next/link";
import { ReactNode } from "react";
import { Icon } from "./ui";

const navItems = [
  { href: "/dashboard", label: "To do", icon: "checklist-dark.svg", key: "todo" },
  {
    href: "/dashboard/applications",
    label: "Applications",
    icon: "icon-feed.svg",
    key: "applications",
  },
  {
    href: "/dashboard/household",
    label: "Household",
    icon: "people_alt.svg",
    key: "household",
  },
  {
    href: "/dashboard/documents",
    label: "Documents",
    icon: "icon-folder-open.svg",
    key: "documents",
  },
  {
    href: "/dashboard/messages",
    label: "Messages",
    icon: "icon-question-answer.svg",
    key: "messages",
    badge: 2,
  },
  {
    href: "/dashboard/programs",
    label: "Programs",
    icon: "person_heart.svg",
    key: "programs",
  },
] as const;

export function FamilyDashboardShell({
  children,
  active = "todo",
  pageIcon = "icon-assignment.svg",
}: {
  children: ReactNode;
  active?: (typeof navItems)[number]["key"];
  pageIcon?: string;
}) {
  return (
    <div className="flex min-h-screen bg-[#f3f6fa]">
      <aside className="flex w-[240px] shrink-0 flex-col border-r border-[#e0e0e0] bg-white">
        <div className="p-2">
          <Link href="/dashboard" className="block px-1 py-2">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/assets/bc-logo.svg"
              alt="BridgeCare"
              className="h-7 w-[145px] object-contain object-left"
            />
          </Link>
        </div>
        <nav className="mt-4 flex flex-1 flex-col justify-between">
          <div className="flex flex-col gap-8 px-4">
            {navItems.map((item) => {
              const isActive = item.key === active;
              return (
                <Link
                  key={item.key}
                  href={item.href}
                  className={`flex items-center justify-between gap-4 text-base text-[#1d1d1d] ${
                    isActive ? "font-heavy" : ""
                  }`}
                >
                  <span className="flex items-center gap-4">
                    <Icon name={item.icon} size={24} />
                    {item.label}
                  </span>
                  {"badge" in item && item.badge ? (
                    <span className="rounded-full bg-[#f57c00] px-1 py-0.5 text-center text-sm font-heavy text-white">
                      {item.badge}
                    </span>
                  ) : null}
                </Link>
              );
            })}
          </div>
          <div className="flex flex-col gap-8 border-t border-[#e0e0e0] px-4 py-8">
            <button
              type="button"
              className="flex w-full items-center justify-between text-base text-[#1d1d1d]"
            >
              <span className="flex items-center gap-4">
                <Icon name="icon-account-circle.svg" size={24} />
                Profile
              </span>
              <Icon name="icon-chevron-right.svg" size={24} />
            </button>
            <button
              type="button"
              className="flex w-full items-center justify-between text-base text-[#1d1d1d]"
            >
              <span className="flex items-center gap-4">
                <Icon name="icon-settings.svg" size={24} />
                Settings
              </span>
              <Icon name="icon-chevron-right.svg" size={24} />
            </button>
          </div>
        </nav>
      </aside>

      <main className="relative min-w-0 flex-1">
        <div className="relative h-[200px] overflow-hidden bg-[#f4c9b8]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/assets/dashboard-banner.png"
            alt=""
            className="absolute inset-0 size-full object-cover"
          />
        </div>
        {/* Aligns the row's bottom with the bottom of the 100px page icon
            (banner 200px - icon overlap 48px + icon 100px = 252px). */}
        <div className="absolute right-5 top-[252px] flex -translate-y-full items-center gap-6">
          <div className="flex items-center gap-2 rounded p-2">
            <Icon name="icon-language.svg" size={20} />
            <span className="text-[15px] text-[#344054]">English</span>
            <Icon name="icon-chevron-down.svg" size={20} />
          </div>
          <div className="flex items-center gap-3">
            <div className="flex size-9 items-center justify-center rounded-full bg-[#205c6f] text-sm font-heavy text-white">
              KA
            </div>
            <span className="text-sm text-[#1d1d1d]">Karla Abrams</span>
          </div>
        </div>
        <div className="relative -mt-12 px-6 pb-16">
          <div className="mb-6 flex size-[100px] items-center justify-center rounded-full bg-[#205c6f] shadow-sm">
            <Icon name={pageIcon} size={48} className="brightness-0 invert" />
          </div>
          {children}
        </div>
      </main>
    </div>
  );
}
