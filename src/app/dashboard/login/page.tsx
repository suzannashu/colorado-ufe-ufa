import Link from "next/link";
import { PageShell } from "@/components/SiteChrome";
import { Button, Icon } from "@/components/ui";

export default function DashboardLoginPage() {
  return (
    <PageShell borderedHeader className="bg-[#f3f6fa]">
      <div className="flex justify-center px-4 py-10">
        <div className="flex w-full max-w-[692px] flex-col gap-10 bg-white p-10">
          <div className="flex flex-col gap-3">
            <h1 className="text-[32px] leading-10 text-[#424242]">
              Welcome to Raising Colorado Kids
            </h1>
            <p className="text-lg text-[#424242]">
              Log in to your account. Don&apos;t have an account?{" "}
              <Link href="/apply/register" className="text-[#205c6f] underline">
                Create one here
              </Link>
            </p>
          </div>

          <div className="flex flex-col gap-6">
            <label className="flex flex-col gap-2.5">
              <span className="text-lg text-[#1d1d1d]">Email</span>
              <input
                type="email"
                className="h-14 w-full border-b border-[#9e9e9e] bg-[#eee] p-4 text-base text-[#1d1d1d] outline-none"
              />
            </label>
            <label className="flex flex-col gap-2.5">
              <span className="text-lg text-[#1d1d1d]">Password</span>
              <div className="flex h-14 items-center justify-between border-b border-[#9e9e9e] bg-[#eee] p-4">
                <input
                  type="password"
                  className="w-full bg-transparent text-base text-[#1d1d1d] outline-none"
                />
                <Icon name="icon-visibility-off.svg" size={24} />
              </div>
            </label>
            <p className="text-right text-base text-[#205c6f] underline">
              Forgot password?
            </p>
            <Button href="/dashboard" className="w-full justify-center">
              Log in
            </Button>
          </div>

          <hr className="border-[#e0e0e0]" />

          <div className="mx-auto flex w-full max-w-[334px] flex-col gap-[18px]">
            <Button
              href="/dashboard"
              variant="secondary"
              className="w-full justify-center"
            >
              Request a one-time login code
            </Button>
            <Link
              href="/dashboard"
              className="flex h-14 w-full items-center justify-center gap-3 rounded border border-[#9e9e9e] bg-white px-6 py-3 text-base text-[#424242]"
            >
              <Icon name="icon-google.svg" size={16} />
              Sign in with Google
            </Link>
          </div>
        </div>
      </div>
    </PageShell>
  );
}
