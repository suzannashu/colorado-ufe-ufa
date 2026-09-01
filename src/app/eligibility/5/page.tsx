import { redirect } from "next/navigation";

/** Legacy route — care needs is now step 4. */
export default function EligibilityStep5Redirect() {
  redirect("/eligibility/4");
}
