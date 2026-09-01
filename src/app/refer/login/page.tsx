import Link from "next/link";
import { ReferLoginChrome } from "@/components/ReferLoginChrome";
import { Button, Icon } from "@/components/ui";

export default function ReferLoginPage() {
  return (
    <div className="min-h-screen bg-[#f3f6fa]">
      <ReferLoginChrome />
      <div className="flex justify-center px-4 py-10">
        <div className="flex w-full max-w-[692px] flex-col gap-10 bg-white p-10">
          <div className="flex flex-col gap-3">
            <h1 className="text-[32px] leading-10 text-[#424242]">
              Welcome to Raising CO Kids
            </h1>
            <p className="text-lg text-[#424242]">
              Log in to your account. Don&apos;t have an account?{" "}
              <Link href="/refer/login" className="text-[#205c6f] underline">
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
            <Button href="/refer/admin-forms-index" className="w-full justify-center">
              Log in
            </Button>
          </div>

          <hr className="border-[#e0e0e0]" />

          <div className="mx-auto flex w-full max-w-[334px] flex-col gap-[18px]">
            <Button href="/refer/admin-forms-index" variant="secondary" className="w-full justify-center">
              Request a one-time login code
            </Button>
            <SsoButton icon="icon-google.svg" label="Sign in with Google" />
            <SsoButton icon="icon-microsoft.svg" label="Sign in with Microsoft" />
            <SsoButton icon="icon-logingov.svg" label="Sign in with Login.gov" />
          </div>
        </div>
      </div>
    </div>
  );
}

function SsoButton({ icon, label }: { icon: string; label: string }) {
  return (
    <Link
      href="/refer/admin-forms-index"
      className="flex h-14 w-full items-center justify-center gap-3 rounded border border-[#9e9e9e] bg-white px-6 py-3 text-base text-[#424242]"
    >
      <Icon name={icon} size={16} />
      {label}
    </Link>
  );
}
