import Link from "next/link";
import { ReactNode } from "react";
import { Icon } from "./ui";

export function SpecialistShell({
  children,
  active = "forms",
}: {
  children: ReactNode;
  active?: "forms" | "settings";
}) {
  return (
    <div className="flex min-h-screen bg-[#f3f6fa]">
      <aside className="flex w-[255px] shrink-0 flex-col justify-between border-r border-[#e0e0e0] bg-white">
        <div className="flex flex-col gap-6">
          <div className="border-b border-[#e0e0e0] px-2 py-3">
            <Link href="/refer/forms" className="block px-1 py-2">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/assets/logo-bridgecare.svg"
                alt="BridgeCare"
                className="h-7 w-[145px] object-contain object-left"
              />
            </Link>
          </div>
          <nav className="relative flex flex-col gap-6 px-4">
            {active === "forms" ? (
              <div className="absolute left-0 top-[38px] h-12 w-[239px] rounded-r-full bg-[#205c6f] opacity-10" />
            ) : null}
            <Link
              href="/refer/forms"
              className="relative z-10 flex items-center gap-3 text-base text-[#1d1d1d]"
            >
              <Icon name="icon-feed.svg" size={24} />
              Forms
            </Link>
            <button
              type="button"
              className="relative z-10 flex w-full items-center justify-between text-base text-[#1d1d1d]"
            >
              <span className="flex items-center gap-3">
                <Icon name="icon-settings.svg" size={24} />
                Settings
              </span>
              <Icon name="icon-chevron-down-field.svg" size={24} />
            </button>
          </nav>
        </div>
        <div className="border-t border-[#e0e0e0] px-4 py-8">
          <button
            type="button"
            className="mb-6 flex items-center gap-3 text-base text-[#1d1d1d]"
          >
            <Icon name="icon-account-circle.svg" size={24} />
            My account
          </button>
          <Link
            href="/refer/login"
            className="flex items-center gap-3 text-base text-[#1d1d1d]"
          >
            <Icon name="icon-logout.svg" size={24} />
            Sign out
          </Link>
        </div>
      </aside>
      <main className="min-w-0 flex-1">{children}</main>
    </div>
  );
}
