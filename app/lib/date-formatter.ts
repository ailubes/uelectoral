/**
 * Date Formatting Utilities
 *
 * Provides bilingual date formatting for chart labels and other date displays.
 * Handles both "MM'YYYY" and "YYYY-MM" period formats.
 */

export const MONTH_NAMES = {
  uk: [
    'Січ', 'Лют', 'Бер', 'Кві', 'Тра', 'Чер',
    'Лип', 'Сер', 'Вер', 'Жов', 'Лис', 'Гру'
  ],
  en: [
    'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
  ]
};

/**
 * Format period string for chart display
 *
 * Handles multiple input formats:
 * - "03'2022" -> "Бер'2022" (Ukrainian) or "Mar'2022" (English)
 * - "2022-03" -> "Бер'2022" (Ukrainian) or "Mar'2022" (English)
 *
 * @param period - Period string in "MM'YYYY" or "YYYY-MM" format
 * @param locale - Locale for month names ('uk' or 'en')
 * @returns Formatted period string like "Бер'2022" or "Mar'2022"
 *
 * @example
 * formatChartPeriod("03'2022", "uk"); // Returns: "Бер'2022"
 * formatChartPeriod("2022-03", "en"); // Returns: "Mar'2022"
 * formatChartPeriod("12'2025", "uk"); // Returns: "Гру'2025"
 */
export function formatChartPeriod(period: string, locale: 'uk' | 'en' = 'uk'): string {
  // Handle different input formats
  let month: number;
  let year: string;

  if (period.includes('-')) {
    // Format: "2022-03" or "2022-3"
    const [y, m] = period.split('-');
    year = y;
    month = parseInt(m, 10) - 1; // Zero-indexed for array lookup
  } else if (period.includes("'")) {
    // Format: "03'2022"
    const [m, y] = period.split("'");
    month = parseInt(m, 10) - 1; // Zero-indexed for array lookup
    year = y;
  } else {
    // Unknown format, return as-is
    console.warn(`Unknown period format: ${period}`);
    return period;
  }

  // Validate month index
  if (isNaN(month) || month < 0 || month > 11) {
    console.warn(`Invalid month in period: ${period}, parsed month: ${month}`);
    return period;
  }

  // Get month abbreviation in the requested locale
  const monthName = MONTH_NAMES[locale][month];

  return `${monthName}'${year}`;
}

/**
 * Format full month name with year
 *
 * @param period - Period string in "MM'YYYY" or "YYYY-MM" format
 * @param locale - Locale for month names ('uk' or 'en')
 * @returns Full month name with year
 *
 * @example
 * formatFullPeriod("03'2022", "uk"); // Returns: "Березень 2022"
 */
export function formatFullPeriod(period: string, locale: 'uk' | 'en' = 'uk'): string {
  const FULL_MONTH_NAMES = {
    uk: [
      'Січень', 'Лютий', 'Березень', 'Квітень', 'Травень', 'Червень',
      'Липень', 'Серпень', 'Вересень', 'Жовтень', 'Листопад', 'Грудень'
    ],
    en: [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ]
  };

  // Parse period
  let month: number;
  let year: string;

  if (period.includes('-')) {
    const [y, m] = period.split('-');
    year = y;
    month = parseInt(m, 10) - 1;
  } else if (period.includes("'")) {
    const [m, y] = period.split("'");
    month = parseInt(m, 10) - 1;
    year = y;
  } else {
    return period;
  }

  // Validate
  if (isNaN(month) || month < 0 || month > 11) {
    return period;
  }

  const monthName = FULL_MONTH_NAMES[locale][month];
  return `${monthName} ${year}`;
}
