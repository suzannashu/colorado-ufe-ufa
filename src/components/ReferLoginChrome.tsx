import Link from "next/link";
import { Icon } from "./ui";

export function ReferLoginChrome() {
  return (
    <header className="flex h-[65px] w-full items-center border-b border-[#e4e7ec] bg-white">
      <div className="flex flex-1 items-center px-4">
        <Link href="/" className="relative h-[33px] w-[171px] shrink-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/assets/logo-bridgecare.svg"
            alt="BridgeCare"
            className="h-full w-full object-contain object-left"
          />
        </Link>
      </div>
      <div className="flex items-center gap-2 px-2 py-4">
        <div className="flex items-center gap-2 rounded p-2">
          <Icon name="icon-language.svg" size={20} />
          <span className="text-[15px] text-[#344054]">English</span>
          <Icon name="icon-chevron-down.svg" size={20} />
        </div>
      </div>
      <div className="flex items-center px-9">
        <Icon name="icon-menu.svg" size={24} />
      </div>
    </header>
  );
}
