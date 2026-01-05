import { cn } from "@/lib/utils";
import { forwardRef, HTMLAttributes } from "react";

interface PageContainerProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export const PageContainer = forwardRef<HTMLDivElement, PageContainerProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "w-full max-w-[1120px] mx-auto px-4 sm:px-6 lg:px-8",
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

PageContainer.displayName = "PageContainer";
