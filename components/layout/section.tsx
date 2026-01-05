import { cn } from "@/lib/utils";
import { HTMLAttributes, forwardRef } from "react";
import { PageContainer } from "./page-container";

interface SectionProps extends HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  id?: string;
  minHeight?: "screen" | "auto" | "none";
  background?: "gradient-hero" | "gradient-section" | "default" | "none";
  contained?: boolean; // Whether to wrap content in PageContainer
}

export const Section = forwardRef<HTMLElement, SectionProps>(
  (
    {
      children,
      id,
      minHeight = "auto",
      background = "default",
      contained = true,
      className,
      ...props
    },
    ref
  ) => {
    const minHeightClass =
      minHeight === "screen"
        ? "min-h-screen"
        : minHeight === "auto"
        ? "min-h-fit"
        : "";

    const backgroundClass = {
      "gradient-hero": "bg-gradient-to-b from-[var(--gradient-hero-start)] to-[var(--gradient-hero-end)]",
      "gradient-section": "bg-gradient-to-b from-[var(--gradient-section-start)] to-[var(--gradient-section-end)]",
      default: "bg-[var(--background)]",
      none: "",
    }[background];

    const content = contained ? (
      <PageContainer>{children}</PageContainer>
    ) : (
      children
    );

    return (
      <section
        ref={ref}
        id={id}
        className={cn(
          "py-12 sm:py-16 md:py-20 lg:py-24",
          minHeightClass,
          backgroundClass,
          className
        )}
        {...props}
      >
        {content}
      </section>
    );
  }
);

Section.displayName = "Section";
