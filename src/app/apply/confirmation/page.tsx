import { PageShell } from "@/components/SiteChrome";
import { ApplicationSubmitStepper } from "@/components/ApplicationSubmitStepper";
import { Button, Icon } from "@/components/ui";

export default function ApplyConfirmationPage() {
  return (
    <PageShell borderedHeader className="bg-white">
      <section className="flex flex-col items-center py-10">
        <div className="flex w-full max-w-[853px] flex-col items-center gap-6">
          <ApplicationSubmitStepper />
          <Icon name="icon-check-circle-success.svg" size={120} />
          <div className="flex flex-col gap-3 text-center">
            <h1 className="font-heavy text-[28px] leading-10 text-black">
              Thank you!
            </h1>
            <p className="text-lg leading-6 text-black">
              Your application has been successfully submitted. A state child care
              specialist will review your application in the next 4-5 business days.
              You can log into your account any time to check the progress of
              your application.
            </p>
          </div>
          <hr className="w-full border-[#e0e0e0]" />
          <Button href="/browse" className="my-10">
            Go to my dashboard
          </Button>
        </div>
      </section>
    </PageShell>
  );
}
