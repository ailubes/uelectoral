# Uelectoral.data — Complete Product Requirements Document

**Version:** 2.0  
**Date:** December 2025  
**Status:** Ready for Development  
**Last Updated:** December 31, 2025

---

## Table of Contents

1. [Executive Summary](#1-executive-summary)
2. [Product Vision & Goals](#2-product-vision--goals)
3. [Target Audience](#3-target-audience)
4. [Brand Identity](#4-brand-identity)
5. [Design System](#5-design-system)
6. [Color Palette & Theming](#6-color-palette--theming)
7. [Typography](#7-typography)
8. [Iconography & Graphics](#8-iconography--graphics)
9. [Data Visualization Standards](#9-data-visualization-standards)
10. [Component Library](#10-component-library)
11. [Page Structure & Layout](#11-page-structure--layout)
12. [Navigation & Information Architecture](#12-navigation--information-architecture)
13. [Content Sections Specification](#13-content-sections-specification)
14. [Data Architecture](#14-data-architecture)
15. [Internationalization (i18n)](#15-internationalization-i18n)
16. [Features & Functionality](#16-features--functionality)
17. [Technical Requirements](#17-technical-requirements)
18. [Accessibility](#18-accessibility)
19. [SEO Requirements](#19-seo-requirements)
20. [Performance Requirements](#20-performance-requirements)
21. [Analytics & Tracking](#21-analytics--tracking)
22. [Development Roadmap](#22-development-roadmap)
23. [Appendices](#23-appendices)

---

## 1. Executive Summary

### 1.1 Product Overview

**Uelectoral.data** is a comprehensive Ukrainian electoral research and polling data visualization platform. The platform presents sociological research data on electoral sentiments, political preferences, and public opinion trends in Ukraine, prepared by Info Sapiens on commission from the Public Policy Development Office (PPDO).

### 1.2 Problem Statement

Currently, electoral polling data in Ukraine is:
- Scattered across multiple sources
- Presented in static PDF reports
- Lacks interactive exploration capabilities
- Not accessible in multiple languages
- Difficult to share and embed

### 1.3 Solution

A modern, responsive web application that:
- Visualizes electoral polling data in an interactive, accessible format
- Maintains the professional credibility of traditional research reports
- Provides historical trend analysis and comparison tools
- Supports both Ukrainian and English languages
- Offers light and dark themes for user preference
- Enables data export and embedding capabilities
- Works beautifully on all devices

### 1.4 Key Differentiators

| Feature | Traditional PDF Reports | Uelectoral.data |
|---------|------------------------|-----------------|
| Format | Static PDF | Interactive Web App |
| Updates | Monthly releases | Real-time updates |
| Comparison | Manual side-by-side | Built-in tools |
| Languages | Ukrainian only | Ukrainian + English |
| Themes | Fixed design | Light + Dark modes |
| Mobile | Poor experience | Fully responsive |
| Sharing | File sharing | Direct links, embeds |
| Accessibility | Limited | WCAG 2.1 AA compliant |

---

## 2. Product Vision & Goals

### 2.1 Vision Statement

> "To be the most trusted and accessible source for Ukrainian electoral data, empowering citizens, researchers, and policymakers with transparent, interactive insights into public opinion."

### 2.2 Mission

Democratize access to high-quality electoral research data through modern visualization and user-friendly interfaces while maintaining the rigorous standards of academic sociological research.

### 2.3 Strategic Goals

| Goal | Metric | Target |
|------|--------|--------|
| **Accessibility** | Monthly unique visitors | 50,000+ |
| **Engagement** | Avg. session duration | 4+ minutes |
| **Trust** | Return visitor rate | 40%+ |
| **Reach** | Media citations | 100+ per quarter |
| **International** | Non-Ukrainian visitors | 20%+ |

### 2.4 Success Criteria

| Phase | Timeline | Deliverables |
|-------|----------|--------------|
| MVP | Month 1-2 | Core platform with latest data, UA/EN, themes |
| Growth | Month 3-4 | Historical archive, candidate pages, API |
| Expansion | Month 5-6 | Embeds, comparisons, regional data |

---

## 3. Target Audience

### 3.1 Primary Users

#### A. Journalists & Media Professionals
- **Needs:** Quick access to latest polls, embeddable charts, quotable statistics
- **Pain Points:** Deadline pressure, need for visual assets, verification
- **Usage Pattern:** Spikes around political events

#### B. Political Analysts & Researchers
- **Needs:** Historical data, trend analysis, methodology transparency, data export
- **Pain Points:** Data scattered, inconsistent formats
- **Usage Pattern:** Regular deep-dive sessions

#### C. Policy Makers & Political Staff
- **Needs:** Quick overviews, constituent sentiment, trend alerts
- **Pain Points:** Information overload
- **Usage Pattern:** Brief daily check-ins

### 3.2 Secondary Users

#### D. International Observers
- **Needs:** English language access, Ukraine political context
- **Pain Points:** Language barriers, lack of background
- **Usage Pattern:** Event-driven

#### E. Engaged Citizens
- **Needs:** Understanding political landscape, trusted information
- **Pain Points:** Complex data presentation
- **Usage Pattern:** Periodic visits during events

### 3.3 User Personas

```
┌─────────────────────────────────────────────────────────────┐
│  PERSONA: Olena — Political Journalist (Kyiv)               │
├─────────────────────────────────────────────────────────────┤
│  Age: 32 | Language: Ukrainian | Device: Desktop + Mobile   │
│                                                             │
│  Goals:                                                     │
│  • Find latest polling data in under 2 minutes              │
│  • Embed charts directly into articles                      │
│  • Compare current vs previous month quickly                │
│                                                             │
│  Frustrations:                                              │
│  • PDFs are impossible to work with on deadline             │
│  • Have to manually recreate charts                         │
│  • Can't easily share specific data points                  │
│                                                             │
│  Quote: "I need data I can trust and use in 5 minutes."     │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│  PERSONA: James — Think Tank Researcher (Washington DC)     │
├─────────────────────────────────────────────────────────────┤
│  Age: 45 | Language: English | Device: Desktop              │
│                                                             │
│  Goals:                                                     │
│  • Access Ukraine polling data in English                   │
│  • Download raw data for analysis                           │
│  • Understand methodology for citations                     │
│                                                             │
│  Frustrations:                                              │
│  • Can't read Ukrainian source materials                    │
│  • Limited international accessibility                      │
│  • Hard to verify data sources                              │
│                                                             │
│  Quote: "I need reliable data I can cite in policy briefs." │
└─────────────────────────────────────────────────────────────┘
```

---

## 4. Brand Identity

### 4.1 Brand Positioning

**Category:** Electoral Research & Data Platform  
**Positioning:** The trusted, modern interface for Ukrainian electoral data

### 4.2 Brand Attributes

| Attribute | Description | Visual Expression |
|-----------|-------------|-------------------|
| **Trustworthy** | Credible, verified | Institutional colors, clear sourcing |
| **Analytical** | Data-driven, precise | Clean charts, detailed breakdowns |
| **Transparent** | Open methodology | Visible sources, methodology sections |
| **Modern** | Digital-first | Responsive, smooth interactions |
| **Ukrainian** | National identity | Color hints, bilingual |

### 4.3 Brand Voice & Tone

| Context | Tone | Example |
|---------|------|---------|
| Data presentation | Factual, neutral | "35.8% believe the country is moving in the right direction" |
| Methodology | Technical, precise | "Theoretical sampling error does not exceed 3.1%" |
| Navigation | Helpful, clear | "Select period to compare" |
| Errors | Apologetic | "Data temporarily unavailable. Please refresh." |

### 4.4 Logo Specifications

**Primary Logo:**
- logo image is here G:\www\uelectoral.data\public\images\Uelectoral-data-logo.png 
- Wordmark: "Uelectoral.data"
- The "U" incorporates data visualization element (rising bars)
- Dot before "data" emphasizes technical nature

**Logo Variations:**
1. **Full color** — Teal wordmark on light background
2. **Reversed** — White wordmark on teal/dark background
3. **Monochrome** — Single color for limited applications
4. **Icon only** — Stylized "U" for favicons, app icons

**Partner Branding:**
- **PPDO** (Public Policy Development Office) — Top right of headers
- **Info Sapiens (IS)** — Research agency badge

---

## 5. Design System

### 5.1 Design Principles

1. **Clarity First** — Data immediately understandable, minimal decoration
2. **Consistency** — Same data types visualized identically
3. **Trust Through Transparency** — Always show methodology and sources
4. **Progressive Disclosure** — Summary first, details on demand
5. **Accessibility** — WCAG 2.1 AA minimum, color-blind friendly
6. **Theme Adaptability** — Beautiful in both light and dark modes

### 5.2 Grid System

**Desktop (1280px+):**
```
┌──────────────────────────────────────────────────────────────┐
│  ← 80px →│← ─────────── 1120px max-width ─────────── →│← 80px →│
│          │                                            │        │
│  Margin  │  12-column grid, 24px gutters              │ Margin │
└──────────────────────────────────────────────────────────────┘
```

**Tablet (768px - 1279px):**
- 8-column grid, 20px gutters, 40px margins

**Mobile (< 768px):**
- 4-column grid, 16px gutters, 16px margins

### 5.3 Spacing Scale (Based on 4px)

| Token | Value | CSS Variable | Usage |
|-------|-------|--------------|-------|
| `space-0` | 0px | `--spacing-0` | None |
| `space-1` | 4px | `--spacing-1` | Tight, inline |
| `space-2` | 8px | `--spacing-2` | Related elements |
| `space-3` | 12px | `--spacing-3` | List items |
| `space-4` | 16px | `--spacing-4` | Standard paragraph |
| `space-5` | 20px | `--spacing-5` | Medium gaps |
| `space-6` | 24px | `--spacing-6` | Card padding |
| `space-8` | 32px | `--spacing-8` | Section padding |
| `space-10` | 40px | `--spacing-10` | Large gaps |
| `space-12` | 48px | `--spacing-12` | Section separators |
| `space-16` | 64px | `--spacing-16` | Hero padding |
| `space-24` | 96px | `--spacing-24` | Major sections |

### 5.4 Border Radius

| Token | Value | Usage |
|-------|-------|-------|
| `radius-none` | 0px | Tables, data grids |
| `radius-sm` | 4px | Buttons, inputs, tags |
| `radius-md` | 8px | Cards, containers |
| `radius-lg` | 12px | Modals, featured cards |
| `radius-xl` | 16px | Hero cards |
| `radius-full` | 9999px | Pills, avatars |

### 5.5 Shadows

| Token | Light Mode | Dark Mode | Usage |
|-------|------------|-----------|-------|
| `shadow-sm` | `0 1px 2px rgba(0,0,0,0.05)` | `0 1px 2px rgba(0,0,0,0.3)` | Subtle lift |
| `shadow-md` | `0 4px 6px rgba(0,0,0,0.07)` | `0 4px 6px rgba(0,0,0,0.4)` | Cards |
| `shadow-lg` | `0 10px 25px rgba(0,0,0,0.1)` | `0 10px 25px rgba(0,0,0,0.5)` | Modals |
| `shadow-xl` | `0 20px 40px rgba(0,0,0,0.15)` | `0 20px 40px rgba(0,0,0,0.6)` | Popovers |

---

## 6. Color Palette & Theming

### 6.1 Brand Colors (Theme-Independent)

| Name | Hex | RGB | Usage |
|------|-----|-----|-------|
| **Teal Primary** | `#0D7377` | rgb(13, 115, 119) | Primary brand, positive data |
| **Teal Light** | `#1A9BA0` | rgb(26, 155, 160) | Hover states |
| **Teal Dark** | `#095456` | rgb(9, 84, 86) | Active states |
| **Magenta Primary** | `#C41E3A` | rgb(196, 30, 58) | Accent, negative data |
| **Magenta Light** | `#D94A5E` | rgb(217, 74, 94) | Hover states |
| **Magenta Dark** | `#9C1830` | rgb(156, 24, 48) | Active states |

### 6.2 Light Theme

```css
:root[data-theme="light"] {
  /* Backgrounds */
  --background: #FFFFFF;
  --background-secondary: #F5F5F5;
  --background-tertiary: #EBEBEB;
  --background-card: #FFFFFF;
  
  /* Foreground / Text */
  --foreground: #1A1A1A;
  --foreground-secondary: #4A4A4A;
  --foreground-tertiary: #6B6B6B;
  --foreground-muted: #9A9A9A;
  
  /* Borders */
  --border: #E5E5E5;
  --border-secondary: #CCCCCC;
  
  /* Brand Colors */
  --primary: #0D7377;
  --primary-foreground: #FFFFFF;
  --accent: #C41E3A;
  --accent-foreground: #FFFFFF;
  
  /* Semantic */
  --success: #0D7377;
  --warning: #D97706;
  --error: #C41E3A;
  --info: #2563EB;
  
  /* Chart Colors */
  --chart-primary: #0D7377;
  --chart-secondary: #C41E3A;
  --chart-tertiary: #808080;
  --chart-grid: #E5E5E5;
}
```

### 6.3 Dark Theme

```css
:root[data-theme="dark"] {
  /* Backgrounds - Deep Teal Gradient Base */
  --background: #0A1A1D;
  --background-secondary: #0F2528;
  --background-tertiary: #143033;
  --background-card: #0F2528;
  
  /* Alternative: Pure Dark */
  /* --background: #09090B; */
  /* --background-secondary: #18181B; */
  
  /* Foreground / Text */
  --foreground: #FAFAFA;
  --foreground-secondary: #E0E0E0;
  --foreground-tertiary: #A0A0A0;
  --foreground-muted: #6B6B6B;
  
  /* Borders */
  --border: #1E3A3D;
  --border-secondary: #2A4A4D;
  
  /* Brand Colors (Adjusted for dark) */
  --primary: #1A9BA0;
  --primary-foreground: #FFFFFF;
  --accent: #E8475E;
  --accent-foreground: #FFFFFF;
  
  /* Semantic */
  --success: #1A9BA0;
  --warning: #FBBF24;
  --error: #E8475E;
  --info: #60A5FA;
  
  /* Chart Colors */
  --chart-primary: #2AB5BA;
  --chart-secondary: #E8475E;
  --chart-tertiary: #A8A8A8;
  --chart-grid: #1E3A3D;
}
```

### 6.4 Gradient Backgrounds (Dark Theme Hero)

```css
/* Deep Teal Gradient for Hero Sections */
.hero-gradient {
  background: linear-gradient(
    180deg,
    #0F4C5C 0%,    /* Dark Cyan/Teal */
    #0A2A30 50%,   /* Mid transition */
    #052025 100%   /* Darker Navy/Teal */
  );
}

/* Alternative gradient */
.hero-gradient-alt {
  background: linear-gradient(
    135deg,
    #0D7377 0%,
    #064850 50%,
    #032830 100%
  );
}
```

### 6.5 Data Visualization Colors

| Purpose | Light Theme | Dark Theme | CSS Variable |
|---------|-------------|------------|--------------|
| Current Period (Teal) | `#0D7377` | `#2AB5BA` | `--chart-current` |
| Previous Period (Magenta) | `#C41E3A` | `#E8475E` | `--chart-previous` |
| Right Direction | `#0D7377` | `#2AB5BA` | `--chart-positive` |
| Wrong Direction | `#C41E3A` | `#E8475E` | `--chart-negative` |
| Hard to Say / Neutral | `#808080` | `#A8A8A8` | `--chart-neutral` |
| Grid Lines | `#E5E5E5` | `#1E3A3D` | `--chart-grid` |

### 6.6 Extended Chart Palette (Multi-Series)

For charts requiring more than 3 colors:

```javascript
const chartPalette = {
  light: [
    '#0D7377', // Teal
    '#C41E3A', // Magenta
    '#2563EB', // Blue
    '#D97706', // Amber
    '#7C3AED', // Purple
    '#059669', // Emerald
    '#DC2626', // Red
    '#0891B2', // Cyan
  ],
  dark: [
    '#2AB5BA', // Teal Light
    '#E8475E', // Magenta Light
    '#60A5FA', // Blue Light
    '#FBBF24', // Amber Light
    '#A78BFA', // Purple Light
    '#34D399', // Emerald Light
    '#F87171', // Red Light
    '#22D3EE', // Cyan Light
  ]
};
```

### 6.7 Color Accessibility

All combinations meet WCAG 2.1 AA (4.5:1 for normal text, 3:1 for large text):

| Combination | Light Mode | Dark Mode |
|-------------|------------|-----------|
| Primary on Background | ✅ 7.2:1 | ✅ 5.8:1 |
| Accent on Background | ✅ 5.8:1 | ✅ 5.2:1 |
| Text on Background | ✅ 12.6:1 | ✅ 15.3:1 |
| Text on Cards | ✅ 12.6:1 | ✅ 13.1:1 |

---

## 7. Typography

### 7.1 Font Selection

**Primary Font: Inter**
- Modern, highly legible sans-serif
- Excellent Cyrillic support for Ukrainian
- Open source (Google Fonts / Fontsource)
- Variable font support for performance

```css
font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif;
```

**Monospace Font (Data/Code):**
```css
font-family: 'JetBrains Mono', 'Fira Code', 'SF Mono', Consolas, monospace;
```

### 7.2 Type Scale

| Level | Size | Weight | Line Height | Tracking | Usage |
|-------|------|--------|-------------|----------|-------|
| `display-xl` | 56px / 3.5rem | 700 | 1.1 | -0.02em | Hero headlines |
| `display-lg` | 48px / 3rem | 700 | 1.15 | -0.02em | Page titles |
| `display-md` | 36px / 2.25rem | 700 | 1.2 | -0.01em | Section headers |
| `h1` | 30px / 1.875rem | 700 | 1.25 | -0.01em | Card titles |
| `h2` | 24px / 1.5rem | 600 | 1.3 | 0 | Subsections |
| `h3` | 20px / 1.25rem | 600 | 1.35 | 0 | Small headers |
| `h4` | 18px / 1.125rem | 600 | 1.4 | 0 | Labels |
| `body-lg` | 18px / 1.125rem | 400 | 1.6 | 0 | Lead paragraphs |
| `body` | 16px / 1rem | 400 | 1.6 | 0 | Body text |
| `body-sm` | 14px / 0.875rem | 400 | 1.5 | 0 | Secondary text |
| `caption` | 12px / 0.75rem | 400 | 1.4 | 0.01em | Captions, labels |
| `overline` | 11px / 0.6875rem | 600 | 1.3 | 0.05em | Category labels |
| `data-xl` | 48px / 3rem | 700 | 1.1 | -0.02em | Hero statistics |
| `data-lg` | 36px / 2.25rem | 700 | 1.1 | -0.01em | Large statistics |
| `data-md` | 24px / 1.5rem | 600 | 1.2 | 0 | Medium statistics |
| `data-sm` | 14px / 0.875rem | 500 | 1.3 | 0 | Chart labels |

### 7.3 Responsive Typography

```css
/* Mobile-first, scales up */
html {
  font-size: 14px; /* Mobile */
}

@media (min-width: 640px) {
  html { font-size: 15px; } /* Tablet */
}

@media (min-width: 1024px) {
  html { font-size: 16px; } /* Desktop */
}

@media (min-width: 1440px) {
  html { font-size: 17px; } /* Large desktop */
}
```

### 7.4 Text Colors by Theme

| Purpose | Light Mode | Dark Mode | Variable |
|---------|------------|-----------|----------|
| Primary text | `#1A1A1A` | `#FAFAFA` | `--foreground` |
| Secondary text | `#4A4A4A` | `#E0E0E0` | `--foreground-secondary` |
| Tertiary text | `#6B6B6B` | `#A0A0A0` | `--foreground-tertiary` |
| Muted/Disabled | `#9A9A9A` | `#6B6B6B` | `--foreground-muted` |
| Link text | `#0D7377` | `#2AB5BA` | `--primary` |
| Positive data | `#0D7377` | `#2AB5BA` | `--chart-positive` |
| Negative data | `#C41E3A` | `#E8475E` | `--chart-negative` |

---

## 8. Iconography & Graphics

### 8.1 Icon Library

**Primary:** Lucide React (lucide.dev)
- 24px default size
- 1.5px stroke weight
- Rounded caps and joins
- Perfect for both themes

**Alternative:** Radix Icons (via shadcn/ui)

### 8.2 Icon Sizes

| Size | Pixels | Tailwind | Usage |
|------|--------|----------|-------|
| `xs` | 14px | `w-3.5 h-3.5` | Inline small text |
| `sm` | 16px | `w-4 h-4` | Buttons, tags |
| `md` | 20px | `w-5 h-5` | Standard UI |
| `lg` | 24px | `w-6 h-6` | Navigation |
| `xl` | 32px | `w-8 h-8` | Feature highlights |
| `2xl` | 48px | `w-12 h-12` | Methodology cards |

### 8.3 Icon Categories

**Navigation:**
- `Home`, `Menu`, `X`, `ChevronDown`, `ChevronUp`, `ArrowLeft`, `ArrowRight`, `ExternalLink`

**Data & Charts:**
- `BarChart3`, `LineChart`, `TrendingUp`, `TrendingDown`, `Minus`, `Percent`

**Actions:**
- `Download`, `Share2`, `Copy`, `Filter`, `Settings`, `Search`, `RefreshCw`

**Content:**
- `FileText`, `Calendar`, `Clock`, `MapPin`, `Users`, `Hash`, `Info`, `HelpCircle`

**Theme:**
- `Sun`, `Moon`, `Monitor` (for system theme)

**Language:**
- `Globe`, `Languages`

### 8.4 Methodology Section Icons

Custom illustrated icons with themed backgrounds:

| Icon | Purpose | Light BG | Dark BG |
|------|---------|----------|---------|
| 📋 Clipboard/Survey | Method | `bg-primary/10` | `bg-primary/20` |
| 🗺️ Map/Ukraine | Audience | `bg-accent/10` | `bg-accent/20` |
| # Hashtag | Sample Size | `bg-accent/10` | `bg-accent/20` |
| 📊 Chart | Statistics | `bg-primary/10` | `bg-primary/20` |

---

## 9. Data Visualization Standards

### 9.1 Chart Library

**Primary:** Recharts
- React-native, composable
- Good TypeScript support
- Responsive by default
- Theme-aware

**Alternative:** Chart.js with react-chartjs-2

### 9.2 Chart Types & Usage

| Chart Type | Use Case | Data Example |
|------------|----------|--------------|
| **Horizontal Bar (Grouped)** | Candidate/party rankings | Presidential polls |
| **Line Chart** | Time series trends | Country direction |
| **Area Chart** | Cumulative proportions | Historical trends |
| **Donut Chart** | Part-to-whole | Voter engagement |

### 9.3 Horizontal Bar Chart Specifications

**Primary chart for electoral rankings:**

```
┌─────────────────────────────────────────────────────────────────┐
│  Володимир Зеленський   ████████████████████████│ 23.9% ↑      │
│                         ████████████████████│ 20.2%            │
│                                                                 │
│  Валерій Залужний       █████████████████│ 17.1% ↓             │
│                         ███████████████████│ 19.4%              │
└─────────────────────────────────────────────────────────────────┘
```

**Specifications:**
- Label column: 200-280px (responsive)
- Bar height: 14px per series
- Gap between series: 2px
- Gap between items: 12px
- Current period: `--chart-current` (Teal)
- Previous period: `--chart-previous` (Magenta)
- Value labels: Right of bar, 12px font
- Change indicators: ↑ (teal) ↓ (magenta) for significant changes
- Border radius on bars: 2px right side only

### 9.4 Line Chart Specifications

**For time series (Country Direction):**

```
100% ┤
 90% ┤
 80% ┤         ╭───╮
 70% ┤    ╭────╯   ╰────╮
 60% ┤───╯               ╰───╮
 50% ┤                        ╰──── Wrong Direction (Magenta)
 40% ┤          ╭────────────────── Right Direction (Teal)
 30% ┤     ╭────╯
 20% ┤─────╯
 10% ┤──────────────────────────── Hard to Say (Gray)
  0% ┼────┬────┬────┬────┬────┬────
     03'22 06'22 09'22 12'22 03'23 ...
```

**Specifications:**
- Line width: 2.5px primary, 2px secondary
- No data point dots (clean lines)
- Smooth curves (`type="monotone"`)
- Grid: Dashed, `--chart-grid` color
- Y-axis: 0-100%, 10% intervals
- X-axis: Month labels (03'2022 format)
- Legend: Top-right, horizontal with line samples
- Current values: Bold labels at line endpoints
- Tooltip: Card style with all 3 values

### 9.5 Interactive Features

**Hover States:**
- Bars: Slight brightness increase, tooltip appears
- Lines: Point marker appears, crosshair optional

**Tooltips:**
```
┌──────────────────────────┐
│ Грудень 2025             │
│ ─────────────────────    │
│ Зеленський               │
│ 23.9%                    │
│ Зміна: +3.7% ↑           │
└──────────────────────────┘
```

**Legend Interaction:**
- Click to toggle series visibility
- Hover to highlight series

### 9.6 Responsive Chart Behavior

| Breakpoint | Behavior |
|------------|----------|
| Desktop (1024px+) | Full chart, all labels visible |
| Tablet (768-1023px) | Compressed labels, smaller fonts |
| Mobile (<768px) | Stacked legend below, horizontal scroll if needed |

### 9.7 Animation

- Initial load: Bars grow from 0, lines draw in
- Duration: 600-800ms
- Easing: `ease-out`
- Respect `prefers-reduced-motion`

---

## 10. Component Library

### 10.1 Base Components (shadcn/ui)

Use the latest shadcn/ui components with custom theming:

```bash
# Core components to install
npx shadcn@latest add button
npx shadcn@latest add card
npx shadcn@latest add dropdown-menu
npx shadcn@latest add select
npx shadcn@latest add tabs
npx shadcn@latest add tooltip
npx shadcn@latest add sheet        # Mobile nav
npx shadcn@latest add separator
npx shadcn@latest add badge
npx shadcn@latest add skeleton     # Loading states
npx shadcn@latest add toggle-group # Period selector
```

### 10.2 Custom Components

#### Theme Toggle
```tsx
// components/theme-toggle.tsx
// Three options: Light, Dark, System
// Uses next-themes
// Icons: Sun, Moon, Monitor
```

#### Language Selector
```tsx
// components/language-selector.tsx
// Dropdown with flags/text
// UA | EN toggle
// Persists preference
```

#### Section Card
```tsx
// components/section-card.tsx
<SectionCard>
  <SectionHeader 
    title="Голосування на президентських виборах"
    subtitle="Question text..."
    badge={<PartnerLogos />}
  />
  <SectionContent>
    {children}
  </SectionContent>
  <SectionFooter>
    <StatisticalNote />
  </SectionFooter>
</SectionCard>
```

#### Stat Card
```tsx
// components/stat-card.tsx
<StatCard
  value="35.8%"
  label="Right direction"
  change={+4.1}
  trend="up"
/>
```

#### Candidate/Party Bar
```tsx
// components/poll-bar.tsx
<PollBar
  name="Володимир Зеленський"
  current={23.9}
  previous={20.2}
  maxValue={25}
  showChange
/>
```

#### Methodology Item
```tsx
// components/methodology-item.tsx
<MethodologyItem
  icon={FileText}
  title="Метод"
  description="Телефонне інтерв'ю CATI..."
  variant="primary" // or "accent"
/>
```

### 10.3 Layout Components

#### Page Container
```tsx
<PageContainer>
  {/* Max-width: 1120px, centered, responsive padding */}
</PageContainer>
```

#### Section (Full-height slide)
```tsx
<Section id="methodology" className="min-h-screen">
  {/* Section content */}
</Section>
```

#### Hero Section
```tsx
<HeroSection gradient="teal">
  <HeroContent>
    <HeroTitle />
    <HeroSubtitle />
    <HeroDate />
  </HeroContent>
  <PartnerLogos position="top-right" />
</HeroSection>
```

---

## 11. Page Structure & Layout

### 11.1 Overall Structure

```
┌─────────────────────────────────────────────────────────────┐
│  [Sticky Navigation Bar]                                    │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  [Section 1: Hero / Cover]                     min-h-screen │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  [Section 2: Methodology]                                   │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  [Section 3: Country Direction - Line Chart]   min-h-screen │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  [Section 4: Presidential - Bar Chart]         min-h-screen │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  [Section 5: Parliamentary - Bar Chart]        min-h-screen │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  [Section 6: Thank You / CTA]                               │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│  [Footer]                                                   │
└─────────────────────────────────────────────────────────────┘
```

### 11.2 Responsive Layouts

**Desktop (1024px+):**
- Navigation: Full horizontal menu
- Content: Max-width container, generous whitespace
- Charts: Full size with all labels

**Tablet (768-1023px):**
- Navigation: Condensed menu, may use dropdown
- Content: Slightly reduced padding
- Charts: Responsive, may truncate labels

**Mobile (<768px):**
- Navigation: Hamburger menu with sheet overlay
- Content: Full-width cards, stacked
- Charts: Horizontal scroll or simplified view

---

## 12. Navigation & Information Architecture

### 12.1 Primary Navigation

```tsx
const navigation = {
  uk: [
    { href: '#hero', label: 'Головна' },
    { href: '#methodology', label: 'Методологія' },
    { href: '#direction', label: 'Вектор руху' },
    { href: '#presidential', label: 'Президент' },
    { href: '#parliamentary', label: 'Парламент' },
  ],
  en: [
    { href: '#hero', label: 'Home' },
    { href: '#methodology', label: 'Methodology' },
    { href: '#direction', label: 'Direction' },
    { href: '#presidential', label: 'President' },
    { href: '#parliamentary', label: 'Parliament' },
  ]
};
```

### 12.2 Navigation Bar

```
┌─────────────────────────────────────────────────────────────────┐
│ [Logo: PPDO | IS]  │  Links...  │  [🌐 UA/EN] [🌓 Theme] │
└─────────────────────────────────────────────────────────────────┘

Height: 64px (desktop), 56px (mobile)
Position: Sticky top
Background: 
  - Light: white/95 with backdrop-blur
  - Dark: background/95 with backdrop-blur
Shadow: Appears on scroll
```

### 12.3 Mobile Navigation

- Hamburger icon (right side)
- Full-screen sheet overlay
- Large touch targets (48px min)
- Language/Theme toggles at bottom

---

## 13. Content Sections Specification

### 13.1 Section 1: Hero (Cover)

**Purpose:** Introduce the report, establish credibility

**Content:**
```yaml
title:
  uk: "Результати дослідження електоральних настроїв в рамках U electoral data project"
  en: "Results of Electoral Sentiment Research within U Electoral Data Project"

subtitle:
  uk: "Підготовлено Info Sapiens на замовлення Public policy development office"
  en: "Prepared by Info Sapiens commissioned by Public Policy Development Office"

date:
  uk: "26 грудня 2025"
  en: "December 26, 2025"
```

**Design:**
- Full viewport height (`min-h-screen`)
- Dark theme: Teal gradient background
- Light theme: White background with teal accents
- Large, bold typography (display-xl)
- Partner logos top-right
- Date in accent color (magenta)
- Scroll indicator at bottom

### 13.2 Section 2: Methodology

**Purpose:** Establish research credibility and transparency

**Content:**
```yaml
title:
  uk: "Методологія"
  en: "Methodology"

items:
  - icon: FileText
    title:
      uk: "Метод"
      en: "Method"
    content:
      uk: "Телефонне інтерв'ю CATI (Computer Assisted Telephone Interviewing). Омнібус, 17-26 грудня 2025 року. Електоральний Омнібус проводиться з 2007 року щомісячно."
      en: "CATI Telephone Interview (Computer Assisted Telephone Interviewing). Omnibus, December 17-26, 2025. Electoral Omnibus has been conducted monthly since 2007."
    variant: primary

  - icon: MapPin
    title:
      uk: "Цільова аудиторія"
      en: "Target Audience"
    content:
      uk: "Чоловіки/жінки віком 18+ років"
      en: "Men/Women aged 18+ years"
    variant: accent

  - icon: Hash
    title:
      uk: "Вибірка"
      en: "Sample"
    content:
      uk: "1000 респондентів. Вибірка репрезентативна для населення (віком 18 років і старше) за статтю, віком, розміром населеного пункту, областю (згідно даним Державної служби статистики станом на 1.01.2022)"
      en: "1000 respondents. Sample is representative of the population (aged 18 and older) by gender, age, settlement size, and region (according to State Statistics Service data as of 01.01.2022)"
    variant: accent

  - icon: null
    title: null
    content:
      uk: "Теоретична похибка вибірки не перевищує 3,1% з вірогідністю 0.95%."
      en: "Theoretical sampling error does not exceed 3.1% with 0.95 probability."
    variant: note
```

**Design:**
- Card-based layout
- Icon + text format
- Partner logos in header
- Comfortable padding

### 13.3 Section 3: Country Direction

**Purpose:** Show sentiment trends over time

**Content:**
```yaml
title:
  uk: "Вектор руху країни"
  en: "Country Direction"

question:
  uk: "Як ви думаєте, справи в Україні в цілому розвиваються у правильному напрямку чи вам здається, що країна рухається неправильним шляхом?"
  en: "Do you think things in Ukraine are generally developing in the right direction, or do you feel the country is moving in the wrong direction?"

yAxisLabel:
  uk: "% респондентів"
  en: "% of respondents"

legend:
  wrongDirection:
    uk: "Неправильним шляхом"
    en: "Wrong direction"
  rightDirection:
    uk: "У правильному напрямку"
    en: "Right direction"
  hardToSay:
    uk: "Важко відповісти"
    en: "Hard to say"

currentValues:
  wrongDirection: 49.0
  rightDirection: 35.8
  hardToSay: 15.3
```

**Design:**
- Full section card
- Line chart with 3 series
- Current values highlighted at endpoints
- Legend with line samples
- Interactive tooltips

### 13.4 Section 4: Presidential Election

**Purpose:** Show candidate rankings and changes

**Content:**
```yaml
title:
  uk: "Голосування на президентських виборах"
  en: "Presidential Election Voting"

question:
  uk: "Скажіть, будь ласка, за кого б ви проголосували на майбутніх президентських виборах?"
  en: "Please tell us, who would you vote for in the upcoming presidential elections?"

legend:
  current:
    uk: "Грудень 2025"
    en: "December 2025"
  previous:
    uk: "Листопад 2025"
    en: "November 2025"

statisticalNote:
  uk: "↑ ↓ статистично значущі відмінності"
  en: "↑ ↓ statistically significant differences"
```

**Data (December 2025):**
| Candidate | Dec 2025 | Nov 2025 | Change |
|-----------|----------|----------|--------|
| Володимир Зеленський | 23.9% | 20.2% | ↑ |
| Валерій Залужний | 17.1% | 19.4% | ↓ |
| Петро Порошенко | 4.3% | 4.6% | - |
| Кирило Буданов | 4.2% | 5.2% | ↓ |
| Дмитро Разумков | 3.6% | 2.6% | ↑ |
| Андрій Білецький | 3.3% | 3.3% | - |
| Юлія Тимошенко | 2.9% | 1.5% | ↑ |
| Денис Прокопенко (Редіс) | 1.8% | 1.2% | ↑ |
| Олександр Усик | 1.7% | 3.5% | ↓ |
| Сергій Притула | 1.4% | 1.3% | - |
| Юрій Бойко | 1.4% | 0.8% | ↑ |
| Володимир Гройсман | 0.9% | 1.2% | - |
| Олег Ляшко | 0.8% | 1.0% | - |
| Олексій Гончаренко | 0.8% | 1.3% | - |
| Віталій Кличко | 0.5% | 0.4% | - |
| Інший | 1.6% | 3.1% | ↓ |
| Зіпсую бюлетень/Залишу пустим | 3.2% | 1.5% | ↑ |
| Не піду на вибори | 5.5% | 2.4% | ↑ |
| Важко сказати / Відмова | 21.2% | 23.4% | - |

**Design:**
- Horizontal grouped bar chart
- Expandable (show top 10, "Show all" for rest)
- Change indicators on significant differences
- Responsive label truncation

### 13.5 Section 5: Parliamentary Election

**Purpose:** Show party rankings and changes

**Content:**
```yaml
title:
  uk: "Голосування на виборах до Верховної ради"
  en: "Parliamentary Election Voting"

question:
  uk: "За яку партію з цього списку ви б проголосували на майбутніх парламентських виборах?"
  en: "Which party from this list would you vote for in the upcoming parliamentary elections?"
```

**Data (December 2025):**
| Party | Dec 2025 | Nov 2025 | Change |
|-------|----------|----------|--------|
| Партія Валерія Залужного | 18.4% | 22.1% | ↓ |
| Партія Володимира Зеленського | 16.1% | 11.6% | ↑ |
| Європейська Солідарність | 6.1% | 6.9% | - |
| Партія Кирила Буданова | 6.0% | 7.3% | ↓ |
| Азов (Денис Прокопенко) | 5.5% | 5.7% | - |
| Розумна політика Дмитра Разумкова | 5.3% | 5.0% | - |
| Партія Олександра Усика | 4.6% | 4.7% | - |
| Батьківщина | 3.8% | 2.1% | ↑ |
| Партія Андрія Білецького (Третій корпус) | 3.5% | 3.9% | - |
| Партія Хартія | 2.3% | 3.1% | - |
| Партія Сергія Притули | 2.1% | 1.5% | ↑ |
| Радикальна партія Олега Ляшка | 2.1% | 0.7% | ↑ |
| Українська Стратегія Гройсмана | 1.3% | 0.6% | ↑ |
| Партія «Удар» (Віталій Кличко) | 0.9% | 1.6% | ↓ |
| Всеукраїнське об'єднання "Свобода" | 0.5% | 0.0% | ↑ |
| Партія Сергія Тігіпка | 0.5% | - | new |
| Голос (Кіра Рудик) | 0.2% | 0.0% | - |
| Інша партія | 0.5% | 0.6% | - |
| Зіпсую бюлетень/Лишив пустим | 2.6% | 0.2% | ↑ |
| Не піду на вибори | 4.5% | 0.8% | ↑ |
| Важко сказати/Відмова | 13.0% | 16.1% | ↓ |

### 13.6 Section 6: Thank You / Footer

**Content:**
```yaml
title:
  uk: "Дякуємо!"
  en: "Thank you!"

subtitle:
  uk: "Результати дослідження електоральних настроїв в рамках U electoral data project"
  en: "Results of electoral sentiment research within U Electoral Data Project"
```

**Design:**
- Gradient background (matches hero)
- Large "Дякуємо!" in accent color
- Partner logos
- Optional: Social share buttons, download links

---

## 14. Data Architecture

### 14.1 File Structure

```
/data
├── surveys/
│   ├── 2025-12.json      # December 2025 data
│   ├── 2025-11.json      # November 2025 data
│   └── ...
├── time-series/
│   └── direction.json    # Historical direction data
├── meta/
│   └── methodology.json  # Survey methodology
└── index.json            # Master index
```

### 14.2 JSON Schema

See complete JSON data file: `uelectoral-data.json`

Key structures:
- `meta` - Project metadata
- `methodology` - Survey details (bilingual)
- `surveys[]` - Survey instances with dates
- `countryDirection.timeSeries[]` - Historical trend data
- `presidential.candidates[]` - Candidate data with results by period
- `parliamentary.parties[]` - Party data with results by period
- `ui.labels` - All UI text in both languages

### 14.3 Data Loading Strategy

```tsx
// Load static JSON at build time
export async function getStaticProps() {
  const data = await import('@/data/uelectoral-data.json');
  return { props: { data } };
}

// Or use SWR for client-side with revalidation
const { data } = useSWR('/api/data', fetcher, {
  revalidateOnFocus: false,
  revalidateOnReconnect: false,
});
```

---

## 15. Internationalization (i18n)

### 15.1 Supported Languages

| Language | Code | Default | Status |
|----------|------|---------|--------|
| Ukrainian | `uk` | ✅ Yes | Primary |
| English | `en` | No | Secondary |

### 15.2 Implementation

**Library:** next-intl or next-i18next

**URL Structure:**
```
/uk/...  (Ukrainian - default)
/en/...  (English)
```

**Or with cookie/header detection:**
```
/ → Auto-detect, fallback to UK
/en → Force English
```

### 15.3 Translation Files

```
/messages
├── uk.json
└── en.json
```

**Structure:**
```json
{
  "nav": {
    "home": "Головна",
    "methodology": "Методологія",
    ...
  },
  "hero": {
    "title": "Результати дослідження...",
    ...
  },
  ...
}
```

### 15.4 Content Localization

| Content Type | Strategy |
|--------------|----------|
| UI labels | Translation files |
| Candidate names | Transliteration in JSON data |
| Party names | Full translation in JSON data |
| Dates | `Intl.DateTimeFormat` |
| Numbers | `Intl.NumberFormat` |
| Percentages | Locale-aware formatting |

### 15.5 Language Selector

- Dropdown in navigation
- Shows current language code (UA/EN)
- Persists preference in cookie
- Respects `Accept-Language` header on first visit

---

## 16. Features & Functionality

### 16.1 MVP Features (Phase 1)

| Feature | Priority | Description |
|---------|----------|-------------|
| Report View | P0 | Display latest survey as scrollable report |
| Line Chart (Direction) | P0 | Interactive time series chart |
| Bar Charts (Elections) | P0 | Horizontal grouped bar charts |
| Period Comparison | P0 | Dec vs Nov in charts |
| Ukrainian Language | P0 | Primary language |
| English Language | P0 | Full translation |
| Light Theme | P0 | Default light mode |
| Dark Theme | P0 | Full dark mode support |
| Theme Toggle | P0 | User preference |
| Language Toggle | P0 | Switch UI language |
| Responsive Design | P0 | Mobile-first |
| Methodology Section | P0 | Survey transparency |
| Anchor Navigation | P0 | Jump to sections |

### 16.2 Phase 2 Features

| Feature | Priority | Description |
|---------|----------|-------------|
| Historical Archive | P1 | Access past surveys |
| Candidate Detail | P1 | Individual trend pages |
| Party Detail | P1 | Individual party pages |
| Data Download | P1 | CSV/JSON export |
| Social Sharing | P1 | OG tags, share buttons |
| Print Stylesheet | P1 | Print-friendly layout |
| Search | P1 | Find candidates/parties |

### 16.3 Phase 3 Features

| Feature | Priority | Description |
|---------|----------|-------------|
| Embed Generator | P2 | Embeddable widgets |
| Public API | P2 | REST API for developers |
| Comparison Tool | P2 | Multi-period analysis |
| Email Alerts | P2 | Subscribe to updates |
| PWA | P2 | Offline support |

### 16.4 User Interactions

**Navigation:**
- Smooth scroll to anchor sections
- Active section highlight in nav
- Keyboard navigation support

**Charts:**
- Hover for tooltips
- Click legend to toggle series
- Touch-friendly on mobile

**Controls:**
- "Show all" / "Show less" for long lists
- Theme toggle with system detection
- Language switch with persistence

**Animations:**
- Page load: Staggered fade-in
- Charts: Draw-in on scroll into view
- Theme switch: Smooth transition
- Respect `prefers-reduced-motion`

---

## 17. Technical Requirements

### 17.1 Technology Stack

| Layer | Technology | Version |
|-------|------------|---------|
| Framework | Next.js | 14+ (App Router) |
| Language | TypeScript | 5.x |
| Styling | Tailwind CSS | 3.4+ |
| Components | shadcn/ui | Latest |
| Charts | Recharts | 2.x |
| Theming | next-themes | 0.2+ |
| i18n | next-intl | 3.x |
| Icons | Lucide React | Latest |
| Fonts | @fontsource/inter | Latest |

### 17.2 Project Structure

```
/app
├── [locale]/
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── components/
│   ├── ui/              # shadcn components
│   ├── charts/          # Chart components
│   ├── sections/        # Page sections
│   ├── navigation/      # Nav components
│   └── ...
├── data/
│   └── uelectoral-data.json
├── lib/
│   ├── utils.ts
│   └── i18n.ts
├── messages/
│   ├── uk.json
│   └── en.json
├── hooks/
│   └── use-scroll-spy.ts
└── types/
    └── data.ts
```

### 17.3 Key Dependencies

```json
{
  "dependencies": {
    "next": "^14.0.0",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "next-themes": "^0.2.1",
    "next-intl": "^3.0.0",
    "recharts": "^2.10.0",
    "lucide-react": "^0.300.0",
    "@fontsource/inter": "^5.0.0",
    "class-variance-authority": "^0.7.0",
    "clsx": "^2.0.0",
    "tailwind-merge": "^2.0.0"
  },
  "devDependencies": {
    "typescript": "^5.0.0",
    "tailwindcss": "^3.4.0",
    "@types/react": "^18.2.0",
    "@types/node": "^20.0.0"
  }
}
```

### 17.4 Tailwind Configuration

```js
// tailwind.config.js
module.exports = {
  darkMode: 'class',
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Custom colors mapped to CSS variables
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        // ... more
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
```

### 17.5 Environment Variables

```env
# .env.local
NEXT_PUBLIC_SITE_URL=https://uelectoral.data
NEXT_PUBLIC_DEFAULT_LOCALE=uk
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX  # Optional analytics
```

---

## 18. Accessibility

### 18.1 Standards

**Target:** WCAG 2.1 Level AA

### 18.2 Requirements

| Category | Requirements |
|----------|--------------|
| **Color** | 4.5:1 contrast for text, 3:1 for UI |
| **Color Independence** | Info not conveyed by color alone |
| **Keyboard** | All interactive elements accessible |
| **Focus** | Visible focus indicators |
| **Screen Readers** | ARIA labels, semantic HTML |
| **Motion** | Respect `prefers-reduced-motion` |
| **Text Resize** | Functional up to 200% zoom |
| **Language** | `lang` attribute on HTML |

### 18.3 Chart Accessibility

- Provide data tables as alternative
- ARIA labels describing chart content
- High contrast mode patterns
- Keyboard navigation within charts
- Screen reader announcements for data

### 18.4 Testing

- Automated: axe-core, Lighthouse
- Manual: Keyboard-only navigation
- Screen reader: VoiceOver, NVDA
- Color blindness: Sim Daltonism

---

## 19. SEO Requirements

### 19.1 Technical SEO

| Element | Implementation |
|---------|----------------|
| Meta titles | Unique per page, 50-60 chars |
| Meta descriptions | 150-160 chars |
| Canonical URLs | Self-referencing |
| Sitemap | Auto-generated XML |
| robots.txt | Allow all |
| Structured data | Organization, Dataset |
| Open Graph | Full tags |
| Twitter Cards | Summary large image |
| hreflang | `uk` and `en` alternates |

### 19.2 Meta Tags Example

```tsx
// app/[locale]/page.tsx
export const metadata: Metadata = {
  title: 'Uelectoral.data — Ukrainian Electoral Research',
  description: 'Interactive visualization of Ukrainian electoral polling data...',
  openGraph: {
    title: 'Uelectoral.data',
    description: '...',
    images: ['/og-image.png'],
    locale: 'uk_UA',
    alternateLocale: 'en_US',
  },
};
```

---

## 20. Performance Requirements

### 20.1 Core Web Vitals Targets

| Metric | Target | Tool |
|--------|--------|------|
| LCP (Largest Contentful Paint) | < 2.5s | Lighthouse |
| FID (First Input Delay) | < 100ms | Lighthouse |
| CLS (Cumulative Layout Shift) | < 0.1 | Lighthouse |
| TTFB (Time to First Byte) | < 600ms | WebPageTest |
| Performance Score | > 90 | Lighthouse |

### 20.2 Optimization Strategies

- Static generation (SSG) for all pages
- Image optimization with next/image
- Font preloading, font-display: swap
- Code splitting by route
- Chart lazy loading (on scroll)
- CSS purging with Tailwind
- Compression (gzip/brotli)

---

## 21. Analytics & Tracking

### 21.1 Privacy-First Approach

- Use privacy-focused analytics (Plausible, Umami)
- No cookies for analytics
- GDPR compliant by default
- No personal data collection

### 21.2 Metrics to Track

**Engagement:**
- Page views, unique visitors
- Session duration, scroll depth
- Section visibility time
- Chart interactions

**Content:**
- Most viewed sections
- Language preference distribution
- Theme preference distribution
- Download/share counts

**Technical:**
- Device/browser types
- Geographic distribution
- Referral sources
- Performance metrics

---

## 22. Development Roadmap

### 22.1 Phase 1: MVP (Weeks 1-3)

**Week 1: Foundation**
- [ ] Next.js project setup
- [ ] Tailwind + shadcn/ui configuration
- [ ] Theme system (light/dark)
- [ ] i18n setup (UK/EN)
- [ ] JSON data structure

**Week 2: Core UI**
- [ ] Navigation component
- [ ] Hero section
- [ ] Methodology section
- [ ] Section card component
- [ ] Responsive layouts

**Week 3: Charts & Polish**
- [ ] Line chart (direction)
- [ ] Bar charts (elections)
- [ ] Interactive features
- [ ] Animation
- [ ] Testing & deployment

### 22.2 Phase 2: Enhancement (Weeks 4-6)

- [ ] Historical data archive
- [ ] Candidate/party detail pages
- [ ] Data download feature
- [ ] Social sharing
- [ ] Print styles
- [ ] Performance optimization

### 22.3 Phase 3: Expansion (Weeks 7-9)

- [ ] Embed widget generator
- [ ] Public API
- [ ] Comparison tools
- [ ] PWA support
- [ ] Email subscriptions

---

## 23. Appendices

### Appendix A: Complete Color Tokens

```css
:root {
  /* Brand */
  --teal-50: #E7F5F5;
  --teal-100: #C3E8E9;
  --teal-200: #9BDADB;
  --teal-300: #6FC9CA;
  --teal-400: #4DBCBD;
  --teal-500: #2AAFB0;
  --teal-600: #1A9BA0;
  --teal-700: #0D7377;
  --teal-800: #095456;
  --teal-900: #053537;
  
  --magenta-50: #FDF2F4;
  --magenta-100: #FCE8EB;
  --magenta-200: #F9C5CC;
  --magenta-300: #F49AA7;
  --magenta-400: #E8677A;
  --magenta-500: #D6334B;
  --magenta-600: #C41E3A;
  --magenta-700: #A31830;
  --magenta-800: #861427;
  --magenta-900: #6E1122;
}
```

### Appendix B: Component Examples

See separate component specification document.

### Appendix C: Testing Checklist

**Functionality:**
- [ ] All sections render correctly
- [ ] Charts display accurate data
- [ ] Navigation works (desktop + mobile)
- [ ] Theme toggle works
- [ ] Language toggle works
- [ ] "Show all" expands correctly
- [ ] Tooltips display on hover

**Responsive:**
- [ ] Desktop (1440px)
- [ ] Laptop (1024px)
- [ ] Tablet (768px)
- [ ] Mobile (375px)

**Accessibility:**
- [ ] Keyboard navigation
- [ ] Screen reader compatible
- [ ] Color contrast passes
- [ ] Focus states visible

**Performance:**
- [ ] Lighthouse > 90
- [ ] LCP < 2.5s
- [ ] CLS < 0.1

**Cross-browser:**
- [ ] Chrome
- [ ] Firefox
- [ ] Safari
- [ ] Edge

---

**Document Control**

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0 | Dec 2025 | Product Team | Initial PRD |
| 2.0 | Dec 2025 | Product Team | Enhanced with full specs, theming, i18n |

---

*End of Document*
