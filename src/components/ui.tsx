import Link from "next/link";
import { ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost" | "link";

const styles: Record<Variant, string> = {
  primary:
    "bg-[#205c6f] text-white hover:bg-[#1a4d5c] border border-transparent",
  secondary:
    "bg-white text-[#205c6f] border border-[#205c6f] hover:bg-[#f3f6fa]",
  ghost: "bg-white text-[#205c6f] border-0 hover:bg-[#f3f6fa]",
  link: "bg-transparent text-[#205c6f] border-0 p-0 h-auto",
};

export function Button({
  href,
  children,
  variant = "primary",
  className = "",
  size = "md",
  type = "button",
  onClick,
}: {
  href?: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
  size?: "sm" | "md" | "lg";
  type?: "button" | "submit";
  onClick?: () => void;
}) {
  const sizes = {
    sm: "px-4 py-2.5 text-sm gap-2",
    md: "px-8 py-[18px] text-base gap-2 h-14",
    lg: "px-8 py-[18px] text-base gap-2 h-14",
  };
  const cls = `inline-flex items-center justify-center rounded-[4px] font-medium transition-colors ${styles[variant]} ${variant === "link" ? "" : sizes[size]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={cls}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={cls} onClick={onClick}>
      {children}
    </button>
  );
}

export function Icon({
  name,
  size = 20,
  className = "",
  alt = "",
}: {
  name: string;
  size?: number;
  className?: string;
  alt?: string;
}) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={`/assets/${name}`}
      alt={alt}
      width={size}
      height={size}
      className={`shrink-0 ${className}`}
      style={{ width: size, height: size }}
    />
  );
}

export function ImgPlaceholder({
  className = "w-[415px] h-[215px]",
}: {
  className?: string;
}) {
  return (
    <div
      className={`bg-[#d9d9d9] relative flex flex-col items-center justify-center gap-2 ${className}`}
    >
      <Icon name="icon-img-fpo.svg" size={60} />
      <span className="text-lg text-black">IMG</span>
    </div>
  );
}

export function Chip({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex w-fit shrink-0 items-center rounded-full bg-[rgba(32,92,111,0.12)] px-2 py-1 text-sm text-[#205c6f]">
      {children}
    </span>
  );
}

export function TextField({
  label,
  value,
  hint,
  prefix,
  className = "",
}: {
  label: string;
  value?: string;
  hint?: string;
  prefix?: ReactNode;
  className?: string;
}) {
  return (
    <label className={`flex w-full flex-col gap-2 ${className}`}>
      <span className="text-lg text-[#1d1d1d]">{label}</span>
      <div className="flex items-center gap-2.5 border-b border-[#9e9e9e] bg-[#eee] p-4">
        {prefix}
        <input
          defaultValue={value}
          className="w-full bg-transparent text-base text-[#1d1d1d] outline-none"
        />
      </div>
      {hint ? <span className="text-base text-black">{hint}</span> : null}
    </label>
  );
}

export function Counter({ value = 2 }: { value?: number }) {
  return (
    <div className="flex items-center gap-6">
      <button
        type="button"
        className="flex size-6 items-center justify-center rounded-full bg-[#205c6f]"
        aria-label="Decrease"
      >
        <Icon name="icon-remove.svg" size={16} />
      </button>
      <div className="flex size-10 items-center justify-center rounded-full border border-[#e0e0e0] text-[23px] text-[#1d1d1d]">
        {value}
      </div>
      <button
        type="button"
        className="flex size-6 items-center justify-center rounded-full bg-[#205c6f]"
        aria-label="Increase"
      >
        <Icon name="icon-add.svg" size={16} />
      </button>
    </div>
  );
}
