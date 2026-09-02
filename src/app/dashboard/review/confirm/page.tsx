import { PageShell } from "@/components/SiteChrome";
import { Button, Icon } from "@/components/ui";

export default function ReviewConfirmPage() {
  return (
    <PageShell borderedHeader className="bg-white">
      <section className="flex flex-col items-center py-10">
        <div className="flex w-full max-w-[790px] flex-col items-center gap-6 text-center">
          <Icon name="icon-check-circle-success.svg" size={120} />
          <div className="flex flex-col gap-3">
            <h1 className="font-heavy text-[28px] leading-10 text-black">
              Thank for verifying your information, Karla!
            </h1>
            <p className="text-lg leading-6 text-black">
              Let’s continue with your application.
            </p>
          </div>
          <div className="flex w-full items-center justify-between py-10">
            <Button href="/dashboard/review/income" variant="secondary">
              Back
            </Button>
            <Button href="/apply/programs">Continue to application</Button>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
