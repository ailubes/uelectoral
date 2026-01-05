/**
 * Central export point for all U Electoral Data types
 *
 * Usage:
 *   import { UelectoralData, Candidate, BilingualText } from '@/types';
 *   import { getLocalizedText, sortCandidatesByValue } from '@/types';
 */

// Re-export all types
export type {
  // Core types
  BilingualText,
  Language,
  ThemeMode,

  // Meta types
  Meta,
  ProjectInfo,
  Source,
  Commissioner,

  // Methodology types
  Methodology,
  MethodologyField,
  SampleField,
  MarginOfErrorField,

  // Survey types
  Survey,
  SurveyPeriod,
  Surveys,
  SurveyPeriodId,

  // Country Direction types
  CountryDirection,
  CountryDirectionSeries,
  CountryDirectionSeriesConfig,
  TimeSeriesDataPoint,
  CurrentValues,
  DirectionSeriesType,

  // Election types
  ElectionResult,
  ElectionResults,

  // Presidential types
  Candidate,
  PresidentialOtherOption,
  Presidential,
  PresidentialOtherOptionType,

  // Parliamentary types
  Party,
  ParliamentaryOtherOption,
  Parliamentary,
  ParliamentaryOtherOptionType,

  // UI types
  UI,
  NavigationLabels,
  UILabels,
  MonthNames,
  MonthNumber,

  // Theme types
  Theme,
  ThemeColors,
  ThemeColorModes,
  ThemeGradients,

  // Root type
  UelectoralData
} from './data';

// Re-export type guards and helpers
export {
  isLanguage,
  isThemeMode,
  hasElectionValue
} from './data';
