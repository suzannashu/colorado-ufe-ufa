import { PageShell } from "@/components/SiteChrome";
import { Button, Icon } from "@/components/ui";

function RequiredLabel({ children }: { children: string }) {
  return (
    <span className="text-lg text-[#1d1d1d]">
      {children} <span className="text-[#d32f2f]">*</span>
    </span>
  );
}

function FormField({
  label,
  type = "text",
  showVisibilityToggle = false,
}: {
  label: string;
  type?: string;
  showVisibilityToggle?: boolean;
}) {
  return (
    <label className="flex w-full flex-col gap-2.5">
      <RequiredLabel>{label}</RequiredLabel>
      <div
        className={`flex h-14 items-center border-b border-[#9e9e9e] bg-[#eee] p-4 ${
          showVisibilityToggle ? "justify-between" : ""
        }`}
      >
        <input
          type={type}
          className="w-full bg-transparent text-base text-[#1d1d1d] outline-none"
        />
        {showVisibilityToggle ? (
          <Icon name="icon-visibility-off.svg" size={24} />
        ) : null}
      </div>
    </label>
  );
}

export default function ApplyRegisterPage() {
  return (
    <PageShell borderedHeader className="bg-white">
      <section className="flex flex-col items-center py-10">
        <div className="flex w-full max-w-[854px] flex-col gap-6">
          <div className="flex flex-col gap-3">
            <h1 className="font-heavy text-[28px] leading-10 text-[#1d1d1d]">
              Create an account
            </h1>
            <p className="text-lg leading-6 text-[#1d1d1d]">
              Once you create your account, you can exit the application and come
              back later. We&apos;ll save your progress!
            </p>
          </div>

          <div className="flex gap-10">
            <FormField label="First name" />
            <FormField label="Last name" />
          </div>

          <FormField label="Email" type="email" />
          <FormField label="Re-enter email" type="email" />
          <FormField label="Password" type="password" showVisibilityToggle />
          <FormField
            label="Confirm password"
            type="password"
            showVisibilityToggle
          />

          <div className="text-sm leading-[18px] text-[#424242]">
            <p>
              Your password must be at least 8 characters long and include at
              least 3 of these 4 types:
            </p>
            <ul className="mt-1 list-disc pl-5">
              <li>Lowercase letters</li>
              <li>Uppercase letters</li>
              <li>Numbers</li>
              <li>Symbols</li>
            </ul>
          </div>

          <div className="flex flex-col items-center gap-4">
            <Button
              href="/apply/before-you-apply"
              className="w-[332px] justify-center"
            >
              Create my account
            </Button>
            <Button
              href="/apply/before-you-apply"
              variant="secondary"
              className="w-[332px] justify-center"
            >
              Log in if you already have an account
            </Button>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
