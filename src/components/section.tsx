import { cn } from "@/lib/utils";

interface SectionProps {
  children: React.ReactNode;
  variant: "dark" | "mid";
  className?: string;
  id?: string;
}

export default function Section({ children, variant, className, id }: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "w-full",
        "py-16 md:py-20 lg:py-28",
        variant === "dark" ? "bg-[var(--bg-base)]" : "bg-[var(--bg-surface)]",
        className
      )}
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
}
