"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { isLoggedOut } from "@/lib/dashboardAuth";

// Redirects to the login page when the user has logged out.
// Renders nothing itself; it wraps the dashboard content so a
// refresh after logout sends the user back to /dashboard/login.
export function DashboardAuthGuard({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    if (isLoggedOut()) {
      router.replace("/dashboard/login");
      return;
    }
    setChecked(true);
  }, [router]);

  if (!checked) return null;

  return <>{children}</>;
}
