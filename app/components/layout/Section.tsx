import { cn } from "@/lib/utils";
import { HTMLAttributes, forwardRef } from "react";
import { PageContainer } from "./page-container";

interface SectionProps extends HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  id?: string;
  minHeight?: "screen" | "auto" | "none";
  background?: "gradient-hero" | "gradient-section" | "graph-paper" | "topo" | "default" | "none";
  contained?: boolean; // Whether to wrap content in PageContainer
  showRadialOverlay?: boolean;
}

export const Section = forwardRef<HTMLElement, SectionProps>(
  (
    {
      children,
      id,
      minHeight = "auto",
      background = "default",
      contained = true,
      showRadialOverlay = false,
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
      "graph-paper": "bg-[var(--background)] pattern-graph-paper",
      "topo": "bg-[var(--background)]",
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
          "py-12 sm:py-16 md:py-20 lg:py-24 relative overflow-hidden",
          minHeightClass,
          backgroundClass,
          className
        )}
        {...props}
      >
        {background === "topo" && (
          <div
            className="absolute inset-0 z-0 opacity-[0.02] pointer-events-none"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M10 50 Q 25 30, 50 50 T 90 50' fill='none' stroke='%2393E5D6' stroke-width='0.5'/%3E%3Cpath d='M10 70 Q 35 50, 60 70 T 100 70' fill='none' stroke='%2393E5D6' stroke-width='0.5'/%3E%3Cpath d='M0 30 Q 20 10, 40 30 T 80 30' fill='none' stroke='%2393E5D6' stroke-width='0.5'/%3E%3C/svg%3E")`,
              backgroundSize: '200px 200px'
            }}
          />
        )}
        {showRadialOverlay && (
          <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(5,32,37,0.4)_100%)] pointer-events-none"></div>
        )}
        <div className="relative z-10">
          {content}
        </div>
      </section>
    );
  }
);

Section.displayName = "Section";
