import Link from "next/link";
import { PageShell } from "@/components/SiteChrome";
import { DashboardLoginActions } from "@/components/DashboardLoginActions";

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

          <DashboardLoginActions />
        </div>
      </div>
    </PageShell>
  );
}
