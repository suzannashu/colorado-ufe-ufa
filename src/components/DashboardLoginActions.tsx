"use client";

import { useRouter } from "next/navigation";
import { logIn } from "@/lib/dashboardAuth";
import { Button, Icon } from "./ui";

// Login controls for the dashboard login page. Clears the prototype's
// logged-out flag before navigating back into the dashboard.
export function DashboardLoginActions() {
  const router = useRouter();

  function handleLogin() {
    logIn();
    router.push("/dashboard");
  }

  return (
    <>
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
        <Button onClick={handleLogin} className="w-full justify-center">
          Log in
        </Button>
      </div>

      <hr className="border-[#e0e0e0]" />

      <div className="mx-auto flex w-full max-w-[334px] flex-col gap-[18px]">
        <Button
          onClick={handleLogin}
          variant="secondary"
          className="w-full justify-center"
        >
          Request a one-time login code
        </Button>
        <button
          type="button"
          onClick={handleLogin}
          className="flex h-14 w-full items-center justify-center gap-3 rounded border border-[#9e9e9e] bg-white px-6 py-3 text-base text-[#424242]"
        >
          <Icon name="icon-google.svg" size={16} />
          Sign in with Google
        </button>
      </div>
    </>
  );
}
