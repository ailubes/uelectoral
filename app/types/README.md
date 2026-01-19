# U Electoral Data - TypeScript Types

This directory contains comprehensive TypeScript type definitions for the U Electoral Data project.

## Files Overview

### `data.ts`
**Main type definitions file** - Contains all TypeScript interfaces and types for the electoral data structure.

**Key Features:**
- 40+ TypeScript interfaces covering all data structures
- Complete bilingual text support (Ukrainian/English)
- Election results with statistical significance tracking
- Time series data types (48 months coverage)
- Theme system with light/dark mode support
- Type guards for runtime validation

**Size:** ~400 lines of fully documented TypeScript

### `index.ts`
**Central export point** - Re-exports all types and utilities for easy importing.

**Usage:**
```typescript
import { UelectoralData, Candidate, getLocalizedText } from '@/types';
```

### `usage-example.ts`
**Practical usage examples** - Demonstrates how to use the types in real React components and functions.

**Includes examples for:**
- Loading and typing JSON data
- Working with bilingual text
- Filtering and sorting candidates/parties
- Time series data manipulation
- React component type usage
- Theme color management

### `data.test.ts`
**Type verification tests** - Ensures types work correctly with mock data.

### `VALIDATION_SUMMARY.md`
**Complete validation report** - Detailed documentation of JSON structure validation and type generation.

## Quick Start

### 1. Import Types in Your Components

```typescript
import type { Candidate, BilingualText, Language } from '@/types';
import { getLocalizedText } from '@/types';

interface Props {
  candidate: Candidate;
  language: Language;
}

export function CandidateCard({ candidate, language }: Props) {
  const name = getLocalizedText(candidate.name, language);
  return <h3>{name}</h3>;
}
```

### 2. Use with Data Import

```typescript
import data from '@/data/uelectoral-data-v2.json';
import type { UelectoralData } from '@/types';

// TypeScript automatically knows the type
const candidates = data.presidential.candidates;
```

### 3. Type Guards for Safe Access

```typescript
import { hasElectionValue } from '@/types';

const result = candidate.results['2025-12'];

if (hasElectionValue(result)) {
  // TypeScript knows result.value is number (not null)
  console.log(`Value: ${result.value}%`);
}
```

## Type Categories

### Core Types
- `BilingualText` - Ukrainian/English text pairs
- `Language` - Language code type ("uk" | "en")
- `ThemeMode` - Theme mode type ("light" | "dark" | "system")

### Data Structure Types
- `UelectoralData` - Root data type
- `Meta` - Project metadata
- `Methodology` - Survey methodology details
- `Surveys` - Survey period information

### Election Types
- `Candidate` - Presidential candidate data
- `Party` - Parliamentary party data
- `ElectionResult` - Individual result with significance
- `ElectionResults` - Results across all periods

### Visualization Types
- `CountryDirection` - Country direction sentiment data
- `TimeSeriesDataPoint` - Individual time series data point
- `Theme` - Theme configuration (colors, gradients)

### UI Types
- `UI` - All UI labels and navigation
- `NavigationLabels` - Navigation menu items
- `MonthNames` - Localized month names

## Utility Functions

### `getLocalizedText(text, language)`
Get text in specified language from bilingual text object.

```typescript
const title = getLocalizedText(data.presidential.title, 'uk');
```

### `sortCandidatesByValue(candidates, period, descending?)`
Sort candidates by their results for a specific period.

```typescript
const topCandidates = sortCandidatesByValue(
  data.presidential.candidates,
  '2025-12'
).slice(0, 5);
```

### `getSignificantCandidates(candidates, period)`
Filter candidates showing statistically significant changes.

```typescript
const significant = getSignificantCandidates(
  data.presidential.candidates,
  '2025-12'
);
```

### `calculateValidVotePercentage(candidates, otherOptions, period)`
Calculate total percentage excluding "undecided" responses.

```typescript
const validVotes = calculateValidVotePercentage(
  data.presidential.candidates,
  data.presidential.otherOptions,
  '2025-12'
);
```

## Type Guards

### `isLanguage(value)`
Checks if a string is a valid Language type.

```typescript
if (isLanguage(userInput)) {
  // userInput is type Language
}
```

### `isThemeMode(value)`
Checks if a string is a valid ThemeMode type.

```typescript
if (isThemeMode(userTheme)) {
  // userTheme is type ThemeMode
}
```

### `hasElectionValue(result)`
Checks if an election result has a non-null value.

```typescript
if (hasElectionValue(result)) {
  // result.value is type number (not null)
}
```

## Data Validation

All types have been validated against the actual JSON data:

✓ **48** time series data points (March 2022 - December 2025)
✓ **15** presidential candidates
✓ **17** parliamentary parties
✓ **3** survey periods (Oct, Nov, Dec 2025)
✓ **150+** bilingual text fields
✓ **120** election data points
✓ **2** theme modes (light/dark)

See `VALIDATION_SUMMARY.md` for complete validation details.

## TypeScript Compilation

All types compile without errors:

```bash
npx tsc --noEmit types/data.ts          # ✓ 0 errors
npx tsc --noEmit types/data.test.ts     # ✓ 0 errors
npx tsc --noEmit types/usage-example.ts # ✓ 0 errors
npx tsc --noEmit types/index.ts         # ✓ 0 errors
```

## Best Practices

### 1. Always Use Type Imports for Types

```typescript
// ✓ Good
import type { Candidate } from '@/types';

// ✗ Avoid (increases bundle size)
import { Candidate } from '@/types';
```

### 2. Use Type Guards for Null Checks

```typescript
// ✓ Good - Type-safe
if (hasElectionValue(result)) {
  return result.value;
}

// ✗ Avoid - Needs manual type assertion
if (result.value !== null) {
  return result.value!;
}
```

### 3. Leverage Bilingual Text Helper

```typescript
// ✓ Good - Type-safe and reusable
const name = getLocalizedText(candidate.name, language);

// ✗ Avoid - Repetitive and error-prone
const name = language === 'uk' ? candidate.name.uk : candidate.name.en;
```

### 4. Use Specific Types Over Generic Ones

```typescript
// ✓ Good - Explicit and self-documenting
const candidates: Candidate[] = data.presidential.candidates;

// ✗ Avoid - Loses type information
const candidates: any[] = data.presidential.candidates;
```

## Integration with Next.js

### In Server Components

```typescript
import data from '@/data/uelectoral-data-v2.json';
import type { Language } from '@/types';
import { getLocalizedText } from '@/types';

export default function Page({
  params
}: {
  params: { lang: Language }
}) {
  const title = getLocalizedText(data.presidential.title, params.lang);
  return <h1>{title}</h1>;
}
```

### In Client Components

```typescript
'use client';

import { useState } from 'react';
import type { Candidate, Language } from '@/types';
import { sortCandidatesByValue } from '@/types';

export function CandidateList({
  candidates
}: {
  candidates: Candidate[]
}) {
  const [period, setPeriod] = useState<string>('2025-12');
  const sorted = sortCandidatesByValue(candidates, period);

  return (/* ... */);
}
```

## Support

For issues or questions about the types, refer to:
- `VALIDATION_SUMMARY.md` - Complete validation report
- `usage-example.ts` - Practical usage patterns
- Source JSON: `/mnt/g/www/uelectoral.data/docs/uelectoral-data-v2.json`

---

**Generated:** December 31, 2025
**Version:** 2.0.0
