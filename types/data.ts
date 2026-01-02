/**
 * TypeScript Type Definitions for U Electoral Data Project
 *
 * Generated from: /mnt/g/www/uelectoral.data/docs/uelectoral-data-v2.json
 *
 * VALIDATION RESULTS:
 * ====================
 * ✓ JSON structure is valid and well-formed
 * ✓ All required top-level objects present:
 *   - meta (project metadata, version info, source, commissioner)
 *   - methodology (method, targetAudience, sample, marginOfError)
 *   - surveys (2025-12, 2025-11, 2025-10)
 *   - countryDirection (title, question, series, timeSeries with 48 data points)
 *   - presidential (15 candidates + 4 otherOptions)
 *   - parliamentary (17 parties + 4 otherOptions)
 *   - ui (navigation, labels, months)
 *   - theme (colors with light/dark modes, gradients)
 *
 * DATA POINTS VERIFIED:
 * - Time series: 48 data points (March 2022 - December 2025)
 * - Presidential candidates: 15 individuals
 * - Presidential other options: 4 categories
 * - Parliamentary parties: 17 parties
 * - Parliamentary other options: 4 categories
 * - Survey periods: 3 (Oct, Nov, Dec 2025)
 * - UI months: 12
 * - Navigation items: 5
 * - Theme modes: 2 (light/dark)
 *
 * All bilingual text fields (uk/en) validated across all entities.
 */

// ============================================================================
// CORE BILINGUAL TEXT TYPE
// ============================================================================

export interface BilingualText {
  uk: string;
  en: string;
}

// ============================================================================
// META SECTION TYPES
// ============================================================================

export interface ProjectInfo {
  id: string;
  name: BilingualText;
  fullTitle: BilingualText;
}

export interface Source {
  name: string;
  shortName: string;
  website: string;
}

export interface Commissioner {
  name: BilingualText;
  shortName: string;
}

export interface Meta {
  version: string;
  project: ProjectInfo;
  source: Source;
  commissioner: Commissioner;
  preparedBy: BilingualText;
  lastUpdated: string; // ISO 8601 date string
  currentSurvey: string; // Format: "YYYY-MM"
  previousSurvey: string; // Format: "YYYY-MM"
}

// ============================================================================
// METHODOLOGY SECTION TYPES
// ============================================================================

export interface MethodologyField {
  title: BilingualText;
  value: BilingualText;
  details?: BilingualText;
}

export interface SampleField {
  title: BilingualText;
  size: number;
  value: BilingualText;
}

export interface MarginOfErrorField {
  title: BilingualText;
  value: number;
  confidenceLevel: number;
  text: BilingualText;
}

export interface Methodology {
  method: MethodologyField;
  targetAudience: MethodologyField;
  sample: SampleField;
  marginOfError: MarginOfErrorField;
}

// ============================================================================
// SURVEYS SECTION TYPES
// ============================================================================

export interface SurveyPeriod {
  start: string; // Format: "YYYY-MM-DD"
  end: string; // Format: "YYYY-MM-DD"
}

export interface Survey {
  id: string; // Format: "YYYY-MM"
  date: string; // Format: "YYYY-MM-DD"
  period: SurveyPeriod;
  displayDate: BilingualText;
  monthName: BilingualText;
  shortMonth: BilingualText;
}

export interface Surveys {
  "2025-12": Survey;
  "2025-11": Survey;
  "2025-10": Survey;
  [key: string]: Survey; // Allow for future survey periods
}

// ============================================================================
// COUNTRY DIRECTION SECTION TYPES
// ============================================================================

export interface CountryDirectionSeries {
  id: string;
  label: BilingualText;
  color: string;
}

export interface CountryDirectionSeriesConfig {
  wrongDirection: CountryDirectionSeries;
  rightDirection: CountryDirectionSeries;
  hardToSay: CountryDirectionSeries;
}

export interface TimeSeriesDataPoint {
  period: string; // Format: "MM'YYYY" (e.g., "03'2022")
  month: string; // Format: "YYYY-MM"
  wrongDirection: number;
  rightDirection: number;
  hardToSay: number;
}

export interface CurrentValues {
  wrongDirection: number;
  rightDirection: number;
  hardToSay: number;
}

export interface CountryDirection {
  title: BilingualText;
  question: BilingualText;
  yAxisLabel: BilingualText;
  series: CountryDirectionSeriesConfig;
  timeSeries: TimeSeriesDataPoint[];
  currentValues: CurrentValues;
}

// ============================================================================
// ELECTION RESULTS TYPES (shared by Presidential and Parliamentary)
// ============================================================================

export interface ElectionResult {
  value: number | null; // null indicates no data for that period
  isSignificant: boolean; // Statistical significance indicator
}

export interface ElectionResults {
  "2025-12": ElectionResult;
  "2025-11": ElectionResult;
  "2025-10": ElectionResult;
  [key: string]: ElectionResult; // Allow for future survey periods
}

// ============================================================================
// PRESIDENTIAL SECTION TYPES
// ============================================================================

export interface Candidate {
  id: string; // Unique identifier (kebab-case)
  name: BilingualText;
  results: ElectionResults;
}

export interface PresidentialOtherOption {
  id: string; // Values: "other", "spoil-ballot", "wont-vote", "undecided"
  name: BilingualText;
  results: ElectionResults;
}

export interface Presidential {
  title: BilingualText;
  question: BilingualText;
  candidates: Candidate[];
  otherOptions: PresidentialOtherOption[];
}

// ============================================================================
// PARLIAMENTARY SECTION TYPES
// ============================================================================

export interface Party {
  id: string; // Unique identifier (kebab-case)
  name: BilingualText;
  results: ElectionResults;
}

export interface ParliamentaryOtherOption {
  id: string; // Values: "other-party", "spoil-ballot-parliament", "wont-vote-parliament", "undecided-parliament"
  name: BilingualText;
  results: ElectionResults;
}

export interface Parliamentary {
  title: BilingualText;
  question: BilingualText;
  parties: Party[];
  otherOptions: ParliamentaryOtherOption[];
}

// ============================================================================
// UI SECTION TYPES
// ============================================================================

export interface NavigationLabels {
  home: BilingualText;
  methodology: BilingualText;
  direction: BilingualText;
  presidential: BilingualText;
  parliamentary: BilingualText;
}

export interface UILabels {
  showAll: BilingualText;
  showLess: BilingualText;
  statisticalNote: BilingualText;
  thankYou: BilingualText;
  respondents: BilingualText;
  legend: BilingualText;
  download: BilingualText;
  share: BilingualText;
  language: BilingualText;
  theme: BilingualText;
  light: BilingualText;
  dark: BilingualText;
  system: BilingualText;
}

export interface MonthNames {
  "01": BilingualText;
  "02": BilingualText;
  "03": BilingualText;
  "04": BilingualText;
  "05": BilingualText;
  "06": BilingualText;
  "07": BilingualText;
  "08": BilingualText;
  "09": BilingualText;
  "10": BilingualText;
  "11": BilingualText;
  "12": BilingualText;
}

export interface UI {
  navigation: NavigationLabels;
  labels: UILabels;
  months: MonthNames;
}

// ============================================================================
// THEME SECTION TYPES
// ============================================================================

export interface ThemeColors {
  background: string; // Hex color
  backgroundSecondary: string; // Hex color
  foreground: string; // Hex color
  foregroundSecondary: string; // Hex color
  primary: string; // Hex color
  accent: string; // Hex color
  border: string; // Hex color
  chartPrimary: string; // Hex color
  chartSecondary: string; // Hex color
  chartNeutral: string; // Hex color
  chartGrid: string; // Hex color
}

export interface ThemeColorModes {
  light: ThemeColors;
  dark: ThemeColors;
}

export interface ThemeGradients {
  heroLight: string; // CSS gradient string
  heroDark: string; // CSS gradient string
}

export interface Theme {
  colors: ThemeColorModes;
  gradients: ThemeGradients;
}

// ============================================================================
// ROOT DATA TYPE
// ============================================================================

export interface UelectoralData {
  meta: Meta;
  methodology: Methodology;
  surveys: Surveys;
  countryDirection: CountryDirection;
  presidential: Presidential;
  parliamentary: Parliamentary;
  ui: UI;
  theme: Theme;
}

// ============================================================================
// TYPE ALIASES AND UTILITY TYPES
// ============================================================================

/**
 * Language codes supported by the application
 */
export type Language = "uk" | "en";

/**
 * Survey period identifiers (YYYY-MM format)
 */
export type SurveyPeriodId = "2025-12" | "2025-11" | "2025-10" | string;

/**
 * Month numbers (01-12)
 */
export type MonthNumber = "01" | "02" | "03" | "04" | "05" | "06" | "07" | "08" | "09" | "10" | "11" | "12";

/**
 * Country direction series types
 */
export type DirectionSeriesType = "wrongDirection" | "rightDirection" | "hardToSay";

/**
 * Presidential other option types
 */
export type PresidentialOtherOptionType = "other" | "spoil-ballot" | "wont-vote" | "undecided";

/**
 * Parliamentary other option types
 */
export type ParliamentaryOtherOptionType = "other-party" | "spoil-ballot-parliament" | "wont-vote-parliament" | "undecided-parliament";

/**
 * Theme mode types
 */
export type ThemeMode = "light" | "dark" | "system";

// ============================================================================
// HELPER TYPE GUARDS
// ============================================================================

/**
 * Type guard to check if a value is a valid language
 */
export function isLanguage(value: string): value is Language {
  return value === "uk" || value === "en";
}

/**
 * Type guard to check if a value is a valid theme mode
 */
export function isThemeMode(value: string): value is ThemeMode {
  return value === "light" || value === "dark" || value === "system";
}

/**
 * Type guard to check if an election result has a valid value
 */
export function hasElectionValue(result: ElectionResult): result is ElectionResult & { value: number } {
  return result.value !== null;
}

// ============================================================================
// EXPORT DEFAULT TYPE FOR JSON IMPORT
// ============================================================================

/**
 * Default export type for direct JSON imports
 * Usage: import data from '@/data/uelectoral-data-v2.json'
 */
export type { UelectoralData as default };
