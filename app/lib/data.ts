/**
 * Data Layer Utilities
 *
 * Type-safe accessor functions for the electoral survey data.
 * Provides clean API for accessing bilingual data, time series, and election results.
 */

import data from "@/data/uelectoral-data.json";
import { Locale } from "@/types/locale";
import type {
  UelectoralData,
  BilingualText,
  Meta,
  Methodology,
  Survey,
  CountryDirection,
  TimeSeriesDataPoint,
  Presidential,
  Parliamentary,
  Candidate,
  Party,
  PresidentialOtherOption,
  ParliamentaryOtherOption,
  UI,
  Theme,
} from "@/types/data";

// ============================================================================
// RAW DATA EXPORT
// ============================================================================

/**
 * Export the raw survey data
 * Type-cast to ensure proper TypeScript typing
 */
export const surveyData = data as UelectoralData;

// ============================================================================
// BILINGUAL TEXT HELPERS
// ============================================================================

/**
 * Get bilingual text based on current locale
 *
 * @param text - Bilingual text object with uk and en properties
 * @param locale - Current locale (uk or en)
 * @returns The text in the specified language
 *
 * @example
 * const title = getBilingualText({ uk: "Головна", en: "Home" }, "uk");
 * // Returns: "Головна"
 */
export function getBilingualText(
  text: BilingualText,
  locale: Locale
): string {
  return text[locale];
}

// ============================================================================
// METADATA ACCESSORS
// ============================================================================

/**
 * Get project metadata
 *
 * @returns Complete metadata object
 */
export function getMetadata(): Meta {
  return surveyData.meta;
}

/**
 * Get current survey ID (YYYY-MM format)
 *
 * @returns Current survey period identifier
 *
 * @example
 * getCurrentSurveyId(); // Returns: "2025-12"
 */
export function getCurrentSurveyId(): string {
  return surveyData.meta.currentSurvey;
}

/**
 * Get previous survey ID (YYYY-MM format)
 *
 * @returns Previous survey period identifier
 *
 * @example
 * getPreviousSurveyId(); // Returns: "2025-11"
 */
export function getPreviousSurveyId(): string {
  return surveyData.meta.previousSurvey;
}

/**
 * Get current survey data
 *
 * @returns Survey object with date, period, and display information
 */
export function getCurrentSurvey(): Survey {
  const surveyId = getCurrentSurveyId();
  const survey = surveyData.surveys[surveyId];

  if (!survey) {
    throw new Error(`Current survey data not found for period: ${surveyId}`);
  }

  return survey;
}

/**
 * Get previous survey data
 *
 * @returns Survey object with date, period, and display information
 */
export function getPreviousSurvey(): Survey {
  const surveyId = getPreviousSurveyId();
  const survey = surveyData.surveys[surveyId];

  if (!survey) {
    throw new Error(`Previous survey data not found for period: ${surveyId}`);
  }

  return survey;
}

/**
 * Get survey data by period ID
 *
 * @param surveyId - Survey period in YYYY-MM format
 * @returns Survey object or undefined if not found
 *
 * @example
 * getSurveyById("2025-10"); // Returns October 2025 survey data
 */
export function getSurveyById(surveyId: string): Survey | undefined {
  return surveyData.surveys[surveyId];
}

/**
 * Get project title
 *
 * @param locale - Current locale
 * @returns Project name in the specified language
 */
export function getProjectTitle(locale: Locale): string {
  return getBilingualText(surveyData.meta.project.name, locale);
}

/**
 * Get full project title
 *
 * @param locale - Current locale
 * @returns Full project title in the specified language
 */
export function getProjectFullTitle(locale: Locale): string {
  return getBilingualText(surveyData.meta.project.fullTitle, locale);
}

/**
 * Get "Prepared by" text
 *
 * @param locale - Current locale
 * @returns Prepared by text in the specified language
 */
export function getPreparedByText(locale: Locale): string {
  return getBilingualText(surveyData.meta.preparedBy, locale);
}

// ============================================================================
// METHODOLOGY ACCESSORS
// ============================================================================

/**
 * Get methodology data
 *
 * @returns Complete methodology object
 */
export function getMethodology(): Methodology {
  return surveyData.methodology;
}

/**
 * Get sample size
 *
 * @returns Number of respondents
 */
export function getSampleSize(): number {
  return surveyData.methodology.sample.size;
}

/**
 * Get margin of error
 *
 * @returns Margin of error value
 */
export function getMarginOfError(): number {
  return surveyData.methodology.marginOfError.value;
}

/**
 * Get confidence level
 *
 * @returns Confidence level (e.g., 0.95)
 */
export function getConfidenceLevel(): number {
  return surveyData.methodology.marginOfError.confidenceLevel;
}

// ============================================================================
// COUNTRY DIRECTION ACCESSORS
// ============================================================================

/**
 * Get country direction data
 *
 * @returns Complete country direction object
 */
export function getCountryDirection(): CountryDirection {
  return surveyData.countryDirection;
}

/**
 * Get country direction time series data
 *
 * @returns Array of time series data points
 */
export function getCountryDirectionTimeSeries(): TimeSeriesDataPoint[] {
  return surveyData.countryDirection.timeSeries;
}

/**
 * Get current country direction values
 *
 * @returns Current values for wrong direction, right direction, and hard to say
 */
export function getCurrentCountryDirectionValues() {
  return surveyData.countryDirection.currentValues;
}

/**
 * Get country direction question
 *
 * @param locale - Current locale
 * @returns Question text in the specified language
 */
export function getCountryDirectionQuestion(locale: Locale): string {
  return getBilingualText(surveyData.countryDirection.question, locale);
}

// ============================================================================
// PRESIDENTIAL ELECTION ACCESSORS
// ============================================================================

/**
 * Get presidential election data
 *
 * @returns Complete presidential election object
 */
export function getPresidentialData(): Presidential {
  return surveyData.presidential;
}

/**
 * Get all presidential candidates
 *
 * @returns Array of candidates
 */
export function getPresidentialCandidates(): Candidate[] {
  return surveyData.presidential.candidates;
}

/**
 * Get presidential candidate by ID
 *
 * @param candidateId - Candidate identifier
 * @returns Candidate object or undefined if not found
 *
 * @example
 * getPresidentialCandidateById("zelenskyy");
 */
export function getPresidentialCandidateById(candidateId: string): Candidate | undefined {
  return surveyData.presidential.candidates.find(c => c.id === candidateId);
}

/**
 * Get presidential "other" options (Would not vote, Hard to say, etc.)
 *
 * @returns Array of other options
 */
export function getPresidentialOtherOptions(): PresidentialOtherOption[] {
  return surveyData.presidential.otherOptions;
}

/**
 * Get presidential question
 *
 * @param locale - Current locale
 * @returns Question text in the specified language
 */
export function getPresidentialQuestion(locale: Locale): string {
  return getBilingualText(surveyData.presidential.question, locale);
}

// ============================================================================
// PARLIAMENTARY ELECTION ACCESSORS
// ============================================================================

/**
 * Get parliamentary election data
 *
 * @returns Complete parliamentary election object
 */
export function getParliamentaryData(): Parliamentary {
  return surveyData.parliamentary;
}

/**
 * Get all parliamentary parties
 *
 * @returns Array of parties
 */
export function getParliamentaryParties(): Party[] {
  return surveyData.parliamentary.parties;
}

/**
 * Get parliamentary party by ID
 *
 * @param partyId - Party identifier
 * @returns Party object or undefined if not found
 *
 * @example
 * getParliamentaryPartyById("zelenskyy-party");
 */
export function getParliamentaryPartyById(partyId: string): Party | undefined {
  return surveyData.parliamentary.parties.find(p => p.id === partyId);
}

/**
 * Get parliamentary "other" options
 *
 * @returns Array of other options
 */
export function getParliamentaryOtherOptions(): ParliamentaryOtherOption[] {
  return surveyData.parliamentary.otherOptions;
}

/**
 * Get parliamentary question
 *
 * @param locale - Current locale
 * @returns Question text in the specified language
 */
export function getParliamentaryQuestion(locale: Locale): string {
  return getBilingualText(surveyData.parliamentary.question, locale);
}

// ============================================================================
// UI & THEME ACCESSORS
// ============================================================================

/**
 * Get UI labels and navigation text
 *
 * @returns Complete UI object
 */
export function getUI(): UI {
  return surveyData.ui;
}

/**
 * Get theme configuration
 *
 * @returns Complete theme object
 */
export function getTheme(): Theme {
  return surveyData.theme;
}

/**
 * Get navigation labels
 *
 * @param locale - Current locale
 * @returns Object with navigation labels in the specified language
 */
export function getNavigationLabels(locale: Locale) {
  const nav = surveyData.ui.navigation;
  return {
    home: getBilingualText(nav.home, locale),
    methodology: getBilingualText(nav.methodology, locale),
    direction: getBilingualText(nav.direction, locale),
    presidential: getBilingualText(nav.presidential, locale),
    parliamentary: getBilingualText(nav.parliamentary, locale),
  };
}

/**
 * Get UI label by key
 *
 * @param key - Label key
 * @param locale - Current locale
 * @returns Label text in the specified language
 *
 * @example
 * getUILabel("showAll", "uk"); // Returns: "Показати всіх"
 */
export function getUILabel(
  key: keyof UI["labels"],
  locale: Locale
): string {
  return getBilingualText(surveyData.ui.labels[key], locale);
}

/**
 * Get month name by number
 *
 * @param monthNumber - Month number (01-12)
 * @param locale - Current locale
 * @returns Month name in the specified language
 *
 * @example
 * getMonthName("12", "uk"); // Returns: "Грудень"
 */
export function getMonthName(
  monthNumber: keyof UI["months"],
  locale: Locale
): string {
  const monthNames = surveyData.ui.months;
  if (!monthNames[monthNumber]) {
    throw new Error(`Invalid month number: ${monthNumber}`);
  }
  return getBilingualText(monthNames[monthNumber], locale);
}

// ============================================================================
// PERIOD FORMATTING HELPERS
// ============================================================================

/**
 * Format period string for display (e.g., "2025-12" -> "Грудень 2025" / "December 2025")
 *
 * @param period - Period in YYYY-MM format
 * @param locale - Current locale
 * @returns Formatted period string
 *
 * @example
 * formatPeriod("2025-12", "uk"); // Returns: "Грудень 2025"
 * formatPeriod("2025-12", "en"); // Returns: "December 2025"
 */
export function formatPeriod(period: string, locale: Locale): string {
  const [year, month] = period.split("-");

  if (!year || !month) {
    throw new Error(`Invalid period format: ${period}. Expected YYYY-MM`);
  }

  const monthName = getMonthName(month as keyof UI["months"], locale);

  return `${monthName} ${year}`;
}

/**
 * Get current period string (YYYY-MM format)
 *
 * @returns Current period identifier
 */
export function getCurrentPeriod(): string {
  return getCurrentSurveyId();
}

/**
 * Get previous period string (YYYY-MM format)
 *
 * @returns Previous period identifier
 */
export function getPreviousPeriod(): string {
  return getPreviousSurveyId();
}

/**
 * Format display date for current survey
 *
 * @param locale - Current locale
 * @returns Formatted display date
 *
 * @example
 * getCurrentDisplayDate("uk"); // Returns: "26 грудня 2025"
 */
export function getCurrentDisplayDate(locale: Locale): string {
  return getBilingualText(getCurrentSurvey().displayDate, locale);
}

/**
 * Format month name for current survey
 *
 * @param locale - Current locale
 * @returns Formatted month name with year
 *
 * @example
 * getCurrentMonthName("uk"); // Returns: "Грудень 2025"
 */
export function getCurrentMonthName(locale: Locale): string {
  return getBilingualText(getCurrentSurvey().monthName, locale);
}

// ============================================================================
// DATA TRANSFORMATION HELPERS
// ============================================================================

/**
 * Chart data point interface for transformed time series
 */
export interface ChartDataPoint {
  period: string;
  wrongDirection: number;
  rightDirection: number;
  hardToSay: number;
}

/**
 * Transform country direction time series data for charts
 *
 * @returns Array of chart-ready data points
 *
 * @example
 * const chartData = transformCountryDirectionForChart();
 * // Use with chart libraries like Recharts, Chart.js, etc.
 */
export function transformCountryDirectionForChart(): ChartDataPoint[] {
  return surveyData.countryDirection.timeSeries.map((point) => ({
    period: point.period,
    wrongDirection: point.wrongDirection,
    rightDirection: point.rightDirection,
    hardToSay: point.hardToSay,
  }));
}

/**
 * Get the most recent N data points from time series
 *
 * @param count - Number of data points to return
 * @returns Array of recent time series data points
 *
 * @example
 * getRecentTimeSeriesData(12); // Returns last 12 months of data
 */
export function getRecentTimeSeriesData(count: number): TimeSeriesDataPoint[] {
  const timeSeries = surveyData.countryDirection.timeSeries;
  return timeSeries.slice(-count);
}

/**
 * Get time series data for a specific date range
 *
 * @param startPeriod - Start period in YYYY-MM format
 * @param endPeriod - End period in YYYY-MM format
 * @returns Array of time series data points in the range
 *
 * @example
 * getTimeSeriesRange("2024-01", "2024-12"); // Returns 2024 data
 */
export function getTimeSeriesRange(
  startPeriod: string,
  endPeriod: string
): TimeSeriesDataPoint[] {
  return surveyData.countryDirection.timeSeries.filter((point) => {
    return point.month >= startPeriod && point.month <= endPeriod;
  });
}

// ============================================================================
// ELECTION RESULT HELPERS
// ============================================================================

/**
 * Get election result for a specific period
 *
 * @param results - Election results object
 * @param period - Survey period (YYYY-MM format)
 * @returns Election result or undefined if not found
 */
export function getResultForPeriod(
  results: Record<string, { value: number | null; isSignificant: boolean }>,
  period: string
) {
  return results[period];
}

/**
 * Check if a result has a valid value (not null)
 *
 * @param result - Election result object
 * @returns True if value is not null
 */
export function hasValidResult(
  result: { value: number | null; isSignificant: boolean } | undefined
): result is { value: number; isSignificant: boolean } {
  return result !== undefined && result.value !== null;
}

/**
 * Get top N candidates by current period value
 *
 * @param count - Number of top candidates to return
 * @returns Array of top candidates sorted by current period value
 */
export function getTopPresidentialCandidates(count: number): Candidate[] {
  const currentPeriod = getCurrentSurveyId();

  return [...surveyData.presidential.candidates]
    .filter((candidate) => {
      const result = getResultForPeriod(candidate.results, currentPeriod);
      return hasValidResult(result);
    })
    .sort((a, b) => {
      const aValue = a.results[currentPeriod].value || 0;
      const bValue = b.results[currentPeriod].value || 0;
      return bValue - aValue;
    })
    .slice(0, count);
}

/**
 * Get top N parties by current period value
 *
 * @param count - Number of top parties to return
 * @returns Array of top parties sorted by current period value
 */
export function getTopParliamentaryParties(count: number): Party[] {
  const currentPeriod = getCurrentSurveyId();

  return [...surveyData.parliamentary.parties]
    .filter((party) => {
      const result = getResultForPeriod(party.results, currentPeriod);
      return hasValidResult(result);
    })
    .sort((a, b) => {
      const aValue = a.results[currentPeriod].value || 0;
      const bValue = b.results[currentPeriod].value || 0;
      return bValue - aValue;
    })
    .slice(0, count);
}

// ============================================================================
// STATISTICAL HELPERS
// ============================================================================

/**
 * Get all candidates/parties with statistically significant changes
 *
 * @param type - Election type ("presidential" or "parliamentary")
 * @returns Array of IDs with significant changes in current period
 */
export function getSignificantChanges(
  type: "presidential" | "parliamentary"
): string[] {
  const currentPeriod = getCurrentSurveyId();

  if (type === "presidential") {
    return [
      ...surveyData.presidential.candidates,
      ...surveyData.presidential.otherOptions,
    ]
      .filter((item) => {
        const result = getResultForPeriod(item.results, currentPeriod);
        return result?.isSignificant === true;
      })
      .map((item) => item.id);
  } else {
    return [
      ...surveyData.parliamentary.parties,
      ...surveyData.parliamentary.otherOptions,
    ]
      .filter((item) => {
        const result = getResultForPeriod(item.results, currentPeriod);
        return result?.isSignificant === true;
      })
      .map((item) => item.id);
  }
}

// ============================================================================
// PERIOD DISPLAY HELPERS
// ============================================================================

/**
 * Format display date for previous survey
 *
 * @param locale - Current locale
 * @returns Formatted display date
 *
 * @example
 * getPreviousDisplayDate("uk"); // Returns: "27 листопада 2025"
 */
export function getPreviousDisplayDate(locale: Locale): string {
  return getBilingualText(getPreviousSurvey().displayDate, locale);
}

// ============================================================================
// CHANGE CALCULATION HELPERS
// ============================================================================

/**
 * Calculate change between two periods
 */
export function calculateChange(current: number, previous: number): {
  change: number;
  direction: "up" | "down" | "neutral";
} {
  const change = current - previous;
  const direction = change > 0.1 ? "up" : change < -0.1 ? "down" : "neutral";
  return { change, direction };
}

/**
 * Format change with arrow indicator
 */
export function formatChangeIndicator(
  change: number,
  direction: "up" | "down" | "neutral",
  isSignificant: boolean
): string {
  if (!isSignificant || direction === "neutral") return "";
  const arrow = direction === "up" ? "↑" : "↓";
  return `${arrow} ${Math.abs(change).toFixed(1)}%`;
}

/**
 * Transform Presidential candidates for chart
 */
export function transformPresidentialForChart(locale: Locale) {
  const presidential = getPresidentialData();
  const currentPeriod = getCurrentPeriod();
  const previousPeriod = getPreviousPeriod();

  const candidates = presidential.candidates.map((candidate) => {
    const current = candidate.results[currentPeriod]?.value || 0;
    const previous = candidate.results[previousPeriod]?.value || 0;
    const isSignificant = candidate.results[currentPeriod]?.isSignificant || false;
    const { change, direction } = calculateChange(current, previous);

    const baseName = getBilingualText(candidate.name, locale);
    const displayName = isSignificant && direction !== "neutral"
      ? `${baseName} ${direction === "up" ? "↑" : "↓"}`
      : baseName;

    return {
      name: displayName,
      current,
      previous,
      change,
      direction,
      isSignificant,
      changeLabel: formatChangeIndicator(change, direction, isSignificant),
    };
  });

  // Sort by current value descending
  return candidates.sort((a, b) => b.current - a.current);
}

/**
 * Transform Parliamentary parties for chart
 */
export function transformParliamentaryForChart(locale: Locale) {
  const parliamentary = getParliamentaryData();
  const currentPeriod = getCurrentPeriod();
  const previousPeriod = getPreviousPeriod();

  const parties = parliamentary.parties.map((party) => {
    const current = party.results[currentPeriod]?.value || 0;
    const previous = party.results[previousPeriod]?.value || 0;
    const isSignificant = party.results[currentPeriod]?.isSignificant || false;
    const { change, direction } = calculateChange(current, previous);

    const baseName = getBilingualText(party.name, locale);
    const displayName = isSignificant && direction !== "neutral"
      ? `${baseName} ${direction === "up" ? "↑" : "↓"}`
      : baseName;

    return {
      name: displayName,
      current,
      previous,
      change,
      direction,
      isSignificant,
      changeLabel: formatChangeIndicator(change, direction, isSignificant),
    };
  });

  // Sort by current value descending
  return parties.sort((a, b) => b.current - a.current);
}
