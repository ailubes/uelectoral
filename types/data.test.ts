/**
 * Type verification test file
 * This file tests that the TypeScript types work correctly with the actual data
 */

import type {
  UelectoralData,
  BilingualText,
  Candidate,
  Party,
  TimeSeriesDataPoint,
  Language
} from './data';
import {
  isLanguage,
  isThemeMode,
  hasElectionValue
} from './data';

// Mock data to verify type compatibility
const mockBilingualText: BilingualText = {
  uk: "Тест",
  en: "Test"
};

const mockCandidate: Candidate = {
  id: "test-candidate",
  name: {
    uk: "Тестовий Кандидат",
    en: "Test Candidate"
  },
  results: {
    "2025-12": { value: 25.5, isSignificant: true },
    "2025-11": { value: 24.3, isSignificant: false },
    "2025-10": { value: null, isSignificant: false }
  }
};

const mockTimeSeriesPoint: TimeSeriesDataPoint = {
  period: "12'2025",
  month: "2025-12",
  wrongDirection: 49.0,
  rightDirection: 35.8,
  hardToSay: 15.3
};

// Type guard tests - verify type guards compile correctly
const testLang: string = "uk";
const _isValidLang = isLanguage(testLang);

const testTheme: string = "dark";
const _isValidTheme = isThemeMode(testTheme);

// Election result value check
const result = mockCandidate.results["2025-12"];
const _hasValue = hasElectionValue(result);

// Function to demonstrate type inference
function getTranslation(text: BilingualText, lang: Language): string {
  return text[lang];
}

// Verify function types work correctly
const _ukText = getTranslation(mockBilingualText, "uk");
const _enName = getTranslation(mockCandidate.name, "en");

export {};
