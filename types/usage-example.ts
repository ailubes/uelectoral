/**
 * Usage Example: How to use the UelectoralData types in your Next.js components
 *
 * This file demonstrates proper type usage patterns for the electoral data
 */

import type {
  UelectoralData,
  BilingualText,
  Candidate,
  Party,
  Language,
  ElectionResult,
  TimeSeriesDataPoint,
  PresidentialOtherOption
} from './data';
import {
  isLanguage,
  hasElectionValue
} from './data';

// ============================================================================
// EXAMPLE 1: Loading and typing the JSON data
// ============================================================================

/**
 * In your Next.js app, you can import the JSON directly:
 *
 * import data from '@/data/uelectoral-data-v2.json';
 *
 * TypeScript will automatically infer the type as UelectoralData
 */

// ============================================================================
// EXAMPLE 2: Working with bilingual text
// ============================================================================

function getLocalizedText(text: BilingualText, language: Language): string {
  return text[language];
}

// Usage:
// const title = getLocalizedText(data.presidential.title, 'uk');
// const titleEn = getLocalizedText(data.presidential.title, 'en');

// ============================================================================
// EXAMPLE 3: Getting candidate data
// ============================================================================

function getCandidateByPeriod(
  candidate: Candidate,
  period: string,
  language: Language
): {
  name: string;
  value: number | null;
  isSignificant: boolean;
} {
  const result = candidate.results[period];
  return {
    name: getLocalizedText(candidate.name, language),
    value: result.value,
    isSignificant: result.isSignificant
  };
}

// Usage:
// const zelenskyy = data.presidential.candidates.find(c => c.id === 'zelenskyy');
// if (zelenskyy) {
//   const result = getCandidateByPeriod(zelenskyy, '2025-12', 'uk');
//   console.log(result); // { name: "Володимир Зеленський", value: 23.9, isSignificant: true }
// }

// ============================================================================
// EXAMPLE 4: Filtering candidates with significant changes
// ============================================================================

function getSignificantCandidates(
  candidates: Candidate[],
  period: string
): Candidate[] {
  return candidates.filter(candidate => {
    const result = candidate.results[period];
    return result && result.isSignificant && result.value !== null;
  });
}

// Usage:
// const significant = getSignificantCandidates(data.presidential.candidates, '2025-12');

// ============================================================================
// EXAMPLE 5: Working with time series data
// ============================================================================

function getLatestTimeSeriesPoint(
  timeSeries: TimeSeriesDataPoint[]
): TimeSeriesDataPoint {
  return timeSeries[timeSeries.length - 1];
}

function getTimeSeriesByYear(
  timeSeries: TimeSeriesDataPoint[],
  year: number
): TimeSeriesDataPoint[] {
  return timeSeries.filter(point =>
    point.month.startsWith(year.toString())
  );
}

// Usage:
// const latest = getLatestTimeSeriesPoint(data.countryDirection.timeSeries);
// const data2025 = getTimeSeriesByYear(data.countryDirection.timeSeries, 2025);

// ============================================================================
// EXAMPLE 6: Using type guards
// ============================================================================

function safeGetLanguage(input: string): Language {
  if (isLanguage(input)) {
    return input;
  }
  // Fallback to Ukrainian if invalid
  return 'uk';
}

function getCandidateValue(result: ElectionResult): string {
  if (hasElectionValue(result)) {
    return `${result.value}%`;
  }
  return 'No data';
}

// Usage:
// const lang = safeGetLanguage(userInput);
// const value = getCandidateValue(candidate.results['2025-12']);

// ============================================================================
// EXAMPLE 7: React component type usage
// ============================================================================

/**
 * Example React component props with proper typing
 */
interface CandidateCardProps {
  candidate: Candidate;
  period: string;
  language: Language;
}

// In your component:
// export function CandidateCard({ candidate, period, language }: CandidateCardProps) {
//   const name = getLocalizedText(candidate.name, language);
//   const result = candidate.results[period];
//
//   return (
//     <div>
//       <h3>{name}</h3>
//       {hasElectionValue(result) && (
//         <p className={result.isSignificant ? 'font-bold' : ''}>
//           {result.value}%
//         </p>
//       )}
//     </div>
//   );
// }

// ============================================================================
// EXAMPLE 8: Sorting candidates by current results
// ============================================================================

function sortCandidatesByValue(
  candidates: Candidate[],
  period: string,
  descending = true
): Candidate[] {
  return [...candidates].sort((a, b) => {
    const aValue = a.results[period]?.value ?? -1;
    const bValue = b.results[period]?.value ?? -1;
    return descending ? bValue - aValue : aValue - bValue;
  });
}

// Usage:
// const topCandidates = sortCandidatesByValue(data.presidential.candidates, '2025-12')
//   .slice(0, 5); // Top 5

// ============================================================================
// EXAMPLE 9: Getting theme colors
// ============================================================================

function getThemeColor(
  theme: UelectoralData['theme'],
  mode: 'light' | 'dark',
  colorKey: keyof UelectoralData['theme']['colors']['light']
): string {
  return theme.colors[mode][colorKey];
}

// Usage:
// const primaryColor = getThemeColor(data.theme, 'dark', 'primary');

// ============================================================================
// EXAMPLE 10: Calculating percentages
// ============================================================================

function calculateValidVotePercentage(
  candidates: Candidate[],
  otherOptions: PresidentialOtherOption[],
  period: string
): number {
  const candidateTotal = candidates.reduce((sum, candidate) => {
    const value = candidate.results[period]?.value ?? 0;
    return sum + value;
  }, 0);

  const otherTotal = otherOptions
    .filter(opt => opt.id !== 'undecided') // Exclude undecided
    .reduce((sum, option) => {
      const value = option.results[period]?.value ?? 0;
      return sum + value;
    }, 0);

  return candidateTotal + otherTotal;
}

// Usage:
// const validVotes = calculateValidVotePercentage(
//   data.presidential.candidates,
//   data.presidential.otherOptions,
//   '2025-12'
// );

export type {
  CandidateCardProps
};

export {
  getLocalizedText,
  getCandidateByPeriod,
  getSignificantCandidates,
  getLatestTimeSeriesPoint,
  getTimeSeriesByYear,
  safeGetLanguage,
  getCandidateValue,
  sortCandidatesByValue,
  getThemeColor,
  calculateValidVotePercentage
};
