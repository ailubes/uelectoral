"use client";

import { useEffect, useState } from "react";

interface UseScrollSpyOptions {
  /**
   * The threshold at which the section is considered "active"
   * 0.0 = as soon as 1px is visible
   * 0.5 = when 50% is visible
   * 1.0 = when 100% is visible
   */
  threshold?: number;
  /**
   * Root margin for the IntersectionObserver
   * Useful for offsetting the detection area (e.g., for fixed headers)
   * Example: "-100px 0px 0px 0px" starts detection 100px from the top
   */
  rootMargin?: string;
}

/**
 * Hook to track which section is currently in view for scroll spy navigation
 * @param sectionIds - Array of section IDs to observe (e.g., ["home", "methodology", "president"])
 * @param options - Configuration options
 * @returns The ID of the currently active section, or null if none are active
 */
export function useScrollSpy(
  sectionIds: string[],
  options: UseScrollSpyOptions = {}
): string | null {
  const { threshold = 0.3, rootMargin = "-100px 0px -66%" } = options;
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    // Create a map to track which sections are intersecting
    const intersectingEntries = new Map<string, IntersectionObserverEntry>();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = entry.target.getAttribute("id");
          if (!id) return;

          if (entry.isIntersecting) {
            intersectingEntries.set(id, entry);
          } else {
            intersectingEntries.delete(id);
          }
        });

        // Find the section with the highest intersection ratio
        let maxRatio = 0;
        let maxId: string | null = null;

        intersectingEntries.forEach((entry, id) => {
          if (entry.intersectionRatio > maxRatio) {
            maxRatio = entry.intersectionRatio;
            maxId = id;
          }
        });

        // If no section is intersecting but we have sections, default to first or last
        if (!maxId && sectionIds.length > 0) {
          // Check if we're near the top or bottom of the page
          const scrollPosition = window.scrollY;
          const documentHeight = document.documentElement.scrollHeight;
          const windowHeight = window.innerHeight;

          if (scrollPosition < 100) {
            maxId = sectionIds[0]; // Near top, select first section
          } else if (scrollPosition + windowHeight >= documentHeight - 100) {
            maxId = sectionIds[sectionIds.length - 1]; // Near bottom, select last
          }
        }

        setActiveId(maxId);
      },
      {
        threshold,
        rootMargin,
      }
    );

    // Observe all sections
    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    // Cleanup
    return () => {
      observer.disconnect();
    };
  }, [sectionIds, threshold, rootMargin]);

  return activeId;
}
