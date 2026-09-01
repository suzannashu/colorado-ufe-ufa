import Link from "next/link";
import { Icon } from "./ui";

const links = [
  { href: "/browse", label: "Browse programs", key: "browse" },
  { href: "/eligibility", label: "Check eligibility", key: "eligibility" },
  { href: "/refer", label: "Refer a family", key: "refer" },
] as const;

export function SiteHeader({
  active,
  bordered = false,
}: {
  active?: "browse" | "eligibility" | "refer";
  bordered?: boolean;
}) {
  return (
    <header
      className={`w-full bg-white ${bordered ? "border-b border-[#e0e0e0]" : ""}`}
    >
      <div className="mx-auto flex h-20 w-full max-w-[1440px] items-center justify-between px-6">
        <Link href="/" className="relative h-[60px] w-[130px] shrink-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/assets/logo-raising-co-kids.png"
            alt="Raising CO Kids"
            className="h-full w-full object-contain"
          />
        </Link>

        <div className="flex min-w-0 flex-1 items-center justify-end gap-10 pl-8 lg:justify-between lg:pl-16">
          <nav className="hidden items-center gap-10 text-base text-black md:flex">
            {links.map((link) =>
              active === link.key ? (
                <span
                  key={link.href}
                  className="rounded-2xl bg-[rgba(32,92,111,0.2)] px-3 py-2"
                >
                  {link.label}
                </span>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className="hover:underline"
                >
                  {link.label}
                </Link>
              ),
            )}
              <Link href="/refer/login" className="hover:underline">
                Sign in
              </Link>
          </nav>

          <div className="flex shrink-0 items-center gap-6">
            <Link
              href="/apply"
              className="rounded-[4px] bg-[#205c6f] px-4 py-2.5 text-sm text-white"
            >
              Quick apply
            </Link>
            <button
              type="button"
              className="flex items-center gap-2 rounded-[4px] p-2 text-[15px] text-[#1d1d1d]"
            >
              <Icon name="icon-language.svg" size={20} />
              English
              <Icon name="icon-chevron-down.svg" size={20} />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="w-full bg-[#205c6f] text-white">
      <div className="mx-auto flex w-full max-w-[1440px] items-end justify-between p-[60px]">
        <div className="flex w-[296px] flex-col gap-4 text-base">
          <p className="font-heavy">EXPLORE</p>
          <Link href="/browse" className="hover:underline">
            All programs
          </Link>
          <Link href="/eligibility" className="hover:underline">
            Check eligibility
          </Link>
          <Link href="/refer" className="hover:underline">
            Refer a family
          </Link>
          <span>Sign in</span>
        </div>

        <div className="flex flex-col items-end gap-6">
          <div className="flex w-[165px] flex-col items-end gap-1.5">
            <p className="w-full text-right text-base tracking-[3.36px]">
              POWERED BY
            </p>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/assets/logo-bridgecare.svg"
              alt="BridgeCare"
              className="h-[31px] w-[165px]"
            />
          </div>
          <div className="flex items-center gap-3 text-sm">
            <span>Terms of service</span>
            <span className="text-base">|</span>
            <span>Privacy Policy</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

/** Full-bleed band (hero, etc.) — background spans 100% viewport width. */
export function FullBleed({
  children,
  className = "",
  innerClassName = "flex items-center justify-between px-32 py-[30px]",
}: {
  children: React.ReactNode;
  className?: string;
  innerClassName?: string;
}) {
  return (
    <section className={`w-full ${className}`}>
      <div className={`mx-auto w-full max-w-[1440px] ${innerClassName}`}>
        {children}
      </div>
    </section>
  );
}

export function PageShell({
  children,
  active,
  borderedHeader = false,
  className = "bg-[#f3f6fa]",
}: {
  children: React.ReactNode;
  active?: "browse" | "eligibility" | "refer";
  borderedHeader?: boolean;
  className?: string;
}) {
  return (
    <div className={`flex min-h-screen w-full flex-col ${className}`}>
      <SiteHeader active={active} bordered={borderedHeader} />
      <main className="w-full flex-1">{children}</main>
      <SiteFooter />
    </div>
  );
}
