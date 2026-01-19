"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ThemeToggle } from "@/components/theme/theme-toggle";
import { LanguageSelector } from "@/components/i18n/language-selector";
import { useScrollSpy } from "@/hooks/use-scroll-spy";
import { useI18n } from "@/lib/i18n-context";
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";

// Navigation section IDs (will be updated when real sections are created)
const NAVIGATION_SECTIONS = [
  { id: "home", labelKey: "nav.home" },
  { id: "about", labelKey: "nav.about" },
  { id: "methodology", labelKey: "nav.methodology" },
  { id: "countryDirection", labelKey: "nav.countryDirection" },
  { id: "president", labelKey: "nav.president" },
  { id: "parliament", labelKey: "nav.parliament" },
];

export function Navbar() {
  const { t } = useI18n();
  const { resolvedTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);

  const sectionIds = NAVIGATION_SECTIONS.map((s) => s.id);
  const activeSection = useScrollSpy(sectionIds);

  // Ensure we're mounted before checking theme
  useEffect(() => {
    setMounted(true);
  }, []);

  // Detect scroll for background opacity
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when section is clicked
  const handleMobileNavClick = () => {
    setMobileMenuOpen(false);
  };

  // Determine which logo to use based on theme
  const logoSrc = mounted && resolvedTheme === "dark"
    ? "/images/logo-dark.png"
    : "/images/logo-light.png";

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "glass-nav shadow-lg"
          : "bg-transparent"
      )}
    >
      <div className="max-w-[1120px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo / Brand */}
          <div className="flex items-center gap-2 min-w-0">
            <a
              href="#home"
              className="flex items-center h-8 sm:h-10 md:h-12"
            >
              <Image
                src={logoSrc}
                alt="Uelectoral.data Logo"
                width={512}
                height={100}
                priority
                className="w-auto h-full"
              />
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {NAVIGATION_SECTIONS.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary",
                  activeSection === section.id
                    ? "text-primary"
                    : "text-muted-foreground"
                )}
              >
                {t(section.labelKey)}
              </a>
            ))}
          </nav>

          {/* Desktop Controls */}
          <div className="hidden md:flex items-center gap-2">
            <LanguageSelector />
            <ThemeToggle />
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <LanguageSelector />
            <ThemeToggle />
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="h-11 w-11" aria-label="Toggle menu">
                  {mobileMenuOpen ? (
                    <X className="h-5 w-5" />
                  ) : (
                    <Menu className="h-5 w-5" />
                  )}
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[280px]">
                <nav className="flex flex-col gap-4 mt-8">
                  {NAVIGATION_SECTIONS.map((section) => (
                    <a
                      key={section.id}
                      href={`#${section.id}`}
                      onClick={handleMobileNavClick}
                      className={cn(
                        "text-lg font-medium transition-colors hover:text-primary px-4 py-2 rounded-md",
                        activeSection === section.id
                          ? "text-primary bg-primary/10"
                          : "text-foreground"
                      )}
                    >
                      {t(section.labelKey)}
                    </a>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
