/**
 * Excel to JSON Conversion Script for U Electoral Data Project
 *
 * This script parses 3 Excel files from the docs/ directory and updates
 * the JSON data file with real survey results.
 *
 * Usage:
 *   npx tsx scripts/convert-excel-to-json.ts
 *
 * Input Files:
 *   - docs/Chart in Microsoft PowerPoint.xlsx (Country Direction time series)
 *   - docs/Chart 2 in Microsoft PowerPoint.xlsx (Parliamentary election data)
 *   - docs/Chart 3 in Microsoft PowerPoint.xlsx (Presidential election data)
 *
 * Output:
 *   - app/data/uelectoral-data.json (updated with Excel data)
 *
 * The script:
 *   - Converts decimal values to percentages
 *   - Normalizes Ukrainian names (handles curly quotes)
 *   - Calculates statistical significance (|change| > 3.1%)
 *   - Preserves all existing JSON structure (meta, methodology, ui, theme)
 *   - Is idempotent (can be run multiple times safely)
 */

import * as XLSX from 'xlsx';
import * as fs from 'fs';
import * as path from 'path';

// File paths
const DOCS_DIR = '/mnt/g/www/uelectoral.data/docs';
const JSON_FILE = '/mnt/g/www/uelectoral.data/app/data/uelectoral-data.json';
const CHART1_FILE = path.join(DOCS_DIR, 'Chart in Microsoft PowerPoint.xlsx');
const CHART2_FILE = path.join(DOCS_DIR, 'Chart 2 in Microsoft PowerPoint.xlsx');
const CHART3_FILE = path.join(DOCS_DIR, 'Chart 3 in Microsoft PowerPoint.xlsx');

// Name mappings
const PRESIDENTIAL_NAME_MAP: Record<string, string> = {
  'Володимир Зеленський': 'zelenskyy',
  'Валерій Залужний': 'zaluzhnyi',
  'Петро Порошенко': 'poroshenko',
  'Кирило Буданов': 'budanov',
  'Дмитро Разумков': 'razumkov',
  'Дмитро Разумков ': 'razumkov', // With trailing space
  'Андрій Білецький': 'biletskyi',
  'Юлія Тимошенко': 'tymoshenko',
  'Юлія Тимошенко ': 'tymoshenko', // With trailing space
  'Денис Прокопенко/Редіс': 'prokopenko',
  'Денис Прокопенко (Редіс)': 'prokopenko',
  'Олександр Усик': 'usyk',
  'Сергій Притула': 'prytula',
  'Cергій Притула': 'prytula', // Typo with Cyrillic C
  'Юрій Бойко': 'boyko',
  'Володимир Гройсман': 'hroysman',
  'Олег Ляшко': 'liashko',
  'Олексій Гончаренко': 'honcharenko',
  'Віталій Кличко': 'klychko',
  'Інший': 'other',
  'Зіпсую бюлетень': 'spoil-ballot',
  'Зіпсую бюлетень/Залишу бюлетень пустим': 'spoil-ballot',
  'Не піду на вибори': 'wont-vote',
  'Важко сказати': 'undecided',
  'Важко відповісти': 'undecided',
  'Важко сказати/Відмова': 'undecided',
  'Bажко сказати / Відмова': 'undecided', // Typo with Latin B
  'Важко сказати / Відмова': 'undecided', // With spaces
};

const PARLIAMENTARY_NAME_MAP: Record<string, string> = {
  'Партія Валерія Залужного': 'zaluzhnyi-party',
  'Партія Володимира Зеленського': 'zelenskyy-party',
  'Європейська Солідарність': 'european-solidarity',
  'Європейська Солідарність (Петро Порошенко)': 'european-solidarity',
  'Партія Кирила Буданова': 'budanov-party',
  'Азов': 'azov',
  'Азов (Денис Прокопенко (Редіс))': 'azov',
  'Розумна політика': 'smart-politics',
  'Розумна політика Дмитра Разумкова': 'smart-politics',
  'Партія Олександра Усика': 'usyk-party',
  'Батьківщина': 'batkivshchyna',
  'Всеукраїнське об\'єднання "Батьківщина" (Юлія Тимошенко)': 'batkivshchyna',
  "Всеукраїнське об'єднання \"Батьківщина\" (Юлія Тимошенко)": 'batkivshchyna',
  'Третій корпус': 'third-corps',
  'Партія Андрія Білецького': 'third-corps',
  'Партія Андрія Білецького (Третій корпус)': 'third-corps',
  'Хартія': 'khartia',
  'Партія Хартія (Сергій Жадан, Юрій Бутусов, Павло Шеремета)': 'khartia',
  'Партія Сергія Притули': 'prytula-party',
  'Радикальна партія': 'radical-party',
  'Радикальна партія Олега Ляшка': 'radical-party',
  'Українська Стратегія': 'ukrainian-strategy',
  'Українська Стратегія Гройсмана': 'ukrainian-strategy',
  'Удар': 'udar',
  'Партія «Удар» (Віталій Кличко)': 'udar',
  'Свобода': 'svoboda',
  'Всеукраїнське об\'єднання "Свобода" (Олег Тягнибок)': 'svoboda',
  "Всеукраїнське об'єднання \"Свобода\" (Олег Тягнибок)": 'svoboda',
  'Партія Сергія Тігіпка': 'tigipko-party',
  'Партія Сергія Тігіпко': 'tigipko-party',
  'Голос': 'holos',
  'Голос (Кіра Рудик)': 'holos',
  'Інша партія': 'other-party',
  'Зіпсую бюлетень': 'spoil-ballot-parliament',
  'Зіпсую бюлетень/Лишив бюлетень пустим': 'spoil-ballot-parliament',
  'Не піду на вибори': 'wont-vote-parliament',
  'Важко сказати': 'undecided-parliament',
  'Важко сказати/Відмова': 'undecided-parliament',
};

// Margin of error for significance calculation
const MARGIN_OF_ERROR = 3.1;

// Helper function to normalize names (handle curly quotes and extra spaces)
function normalizeName(name: string): string {
  return name
    .replace(/\u2019/g, "'") // Replace right single quotation mark (') with straight quote
    .replace(/\u2018/g, "'") // Replace left single quotation mark (') with straight quote
    .replace(/\u201D/g, '"') // Replace right double quotation mark (") with straight quote
    .replace(/\u201C/g, '"') // Replace left double quotation mark (") with straight quote
    .trim(); // Remove leading/trailing spaces
}

// Helper function to check if change is significant
function isSignificant(currentValue: number | null, previousValue: number | null): boolean {
  if (currentValue === null || previousValue === null) return false;
  return Math.abs(currentValue - previousValue) > MARGIN_OF_ERROR;
}

// Helper function to find candidate/party by ID
function findById(array: any[], id: string): any {
  return array.find((item: any) => item.id === id);
}

// Parse Chart 1 - Country Direction
function parseCountryDirection(workbook: XLSX.WorkBook): any {
  console.log('Parsing Chart 1: Country Direction...');
  const sheet = workbook.Sheets[workbook.SheetNames[0]];
  const data = XLSX.utils.sheet_to_json(sheet, { header: 1 }) as any[][];

  const timeSeries: any[] = [];
  const headerRow = data[0]; // Period headers (03'2022, 04'2022, etc.)

  // Process each column (skip column A which has labels)
  for (let col = 1; col < headerRow.length; col++) {
    const period = headerRow[col];
    if (!period) continue;

    // Parse period to month format
    const match = period.match(/(\d+)'(\d+)/);
    if (!match) continue;

    const month = match[1].padStart(2, '0');
    const year = match[2].length === 2 ? `20${match[2]}` : match[2];
    const monthId = `${year}-${month}`;

    const rightDirection = data[1]?.[col];
    const wrongDirection = data[2]?.[col];
    const hardToSay = data[3]?.[col];

    // Convert decimals to percentages and skip if no data
    const rightValue = typeof rightDirection === 'number' ? rightDirection * 100 : null;
    const wrongValue = typeof wrongDirection === 'number' ? wrongDirection * 100 : null;
    const hardValue = typeof hardToSay === 'number' ? hardToSay * 100 : null;

    // Only add entry if we have at least one value
    if (rightValue !== null || wrongValue !== null || hardValue !== null) {
      timeSeries.push({
        period,
        month: monthId,
        rightDirection: rightValue,
        wrongDirection: wrongValue,
        hardToSay: hardValue,
      });
    }
  }

  // Get latest values for currentValues
  const latest = timeSeries[timeSeries.length - 1];
  const currentValues = {
    rightDirection: latest.rightDirection,
    wrongDirection: latest.wrongDirection,
    hardToSay: latest.hardToSay,
  };

  console.log(`  Parsed ${timeSeries.length} time series entries`);
  console.log(`  Latest period: ${latest.period}`);
  console.log(`  Current values: Right=${currentValues.rightDirection}%, Wrong=${currentValues.wrongDirection}%, Hard=${currentValues.hardToSay}%`);

  return { timeSeries, currentValues };
}

// Parse Chart 2 - Parliamentary Elections
function parseParliamentary(workbook: XLSX.WorkBook, existingData: any): any {
  console.log('Parsing Chart 2: Parliamentary Elections...');
  const sheet = workbook.Sheets[workbook.SheetNames[0]];
  const data = XLSX.utils.sheet_to_json(sheet, { header: 1 }) as any[][];

  const updates: Record<string, any> = {};
  let matchedCount = 0;
  let unmatchedCount = 0;

  // Skip header row (row 0), start from row 1
  for (let row = 1; row < data.length; row++) {
    const partyName = data[row][0];
    const dec2025Value = data[row][1]; // Грудень 2025 (Column B)
    const nov2025Value = data[row][2]; // Листопад 2025 (Column C)

    if (!partyName) continue;

    // Normalize name and find matching ID
    const normalizedName = normalizeName(partyName);
    const partyId = PARLIAMENTARY_NAME_MAP[normalizedName];

    if (!partyId) {
      console.log(`  ⚠️  Unmatched party name: "${partyName}"`);
      unmatchedCount++;
      continue;
    }

    // Convert decimal to percentage (multiply by 100)
    const dec2025 = typeof dec2025Value === 'number' ? dec2025Value * 100 : null;
    const nov2025 = typeof nov2025Value === 'number' ? nov2025Value * 100 : null;

    updates[partyId] = {
      '2025-12': dec2025,
      '2025-11': nov2025,
    };

    matchedCount++;
  }

  console.log(`  Matched ${matchedCount} parties, ${unmatchedCount} unmatched`);

  // Update existing data
  existingData.parliamentary.parties.forEach((party: any) => {
    if (updates[party.id]) {
      const dec2025 = updates[party.id]['2025-12'];
      const nov2025 = updates[party.id]['2025-11'];

      party.results['2025-12'] = {
        value: dec2025,
        isSignificant: isSignificant(dec2025, nov2025),
      };
      party.results['2025-11'] = {
        value: nov2025,
        isSignificant: false, // Previous month is baseline
      };

      console.log(`  Updated ${party.id}: Dec=${dec2025}%, Nov=${nov2025}%`);
    }
  });

  existingData.parliamentary.otherOptions.forEach((option: any) => {
    if (updates[option.id]) {
      const dec2025 = updates[option.id]['2025-12'];
      const nov2025 = updates[option.id]['2025-11'];

      option.results['2025-12'] = {
        value: dec2025,
        isSignificant: isSignificant(dec2025, nov2025),
      };
      option.results['2025-11'] = {
        value: nov2025,
        isSignificant: false,
      };

      console.log(`  Updated ${option.id}: Dec=${dec2025}%, Nov=${nov2025}%`);
    }
  });

  return existingData;
}

// Parse Chart 3 - Presidential Elections
function parsePresidential(workbook: XLSX.WorkBook, existingData: any): any {
  console.log('Parsing Chart 3: Presidential Elections...');
  const sheet = workbook.Sheets[workbook.SheetNames[0]];
  const data = XLSX.utils.sheet_to_json(sheet, { header: 1 }) as any[][];

  const updates: Record<string, any> = {};
  let matchedCount = 0;
  let unmatchedCount = 0;

  // Skip header row (row 0), start from row 1
  for (let row = 1; row < data.length; row++) {
    const candidateName = data[row][0];
    const dec2025Value = data[row][1]; // Грудень 2025 (Column B)
    const nov2025Value = data[row][2]; // Листопад 2025 (Column C)

    if (!candidateName) continue;

    // Normalize name and find matching ID
    const normalizedName = normalizeName(candidateName);
    const candidateId = PRESIDENTIAL_NAME_MAP[normalizedName];

    if (!candidateId) {
      console.log(`  ⚠️  Unmatched candidate name: "${candidateName}"`);
      unmatchedCount++;
      continue;
    }

    // Convert decimal to percentage (multiply by 100)
    const dec2025 = typeof dec2025Value === 'number' ? dec2025Value * 100 : null;
    const nov2025 = typeof nov2025Value === 'number' ? nov2025Value * 100 : null;

    updates[candidateId] = {
      '2025-12': dec2025,
      '2025-11': nov2025,
    };

    matchedCount++;
  }

  console.log(`  Matched ${matchedCount} candidates, ${unmatchedCount} unmatched`);

  // Update existing data
  existingData.presidential.candidates.forEach((candidate: any) => {
    if (updates[candidate.id]) {
      const dec2025 = updates[candidate.id]['2025-12'];
      const nov2025 = updates[candidate.id]['2025-11'];

      candidate.results['2025-12'] = {
        value: dec2025,
        isSignificant: isSignificant(dec2025, nov2025),
      };
      candidate.results['2025-11'] = {
        value: nov2025,
        isSignificant: false, // Previous month is baseline
      };

      console.log(`  Updated ${candidate.id}: Dec=${dec2025}%, Nov=${nov2025}%`);
    }
  });

  existingData.presidential.otherOptions.forEach((option: any) => {
    if (updates[option.id]) {
      const dec2025 = updates[option.id]['2025-12'];
      const nov2025 = updates[option.id]['2025-11'];

      option.results['2025-12'] = {
        value: dec2025,
        isSignificant: isSignificant(dec2025, nov2025),
      };
      option.results['2025-11'] = {
        value: nov2025,
        isSignificant: false,
      };

      console.log(`  Updated ${option.id}: Dec=${dec2025}%, Nov=${nov2025}%`);
    }
  });

  return existingData;
}

// Main function
function main() {
  console.log('==========================================');
  console.log('Excel to JSON Conversion Script');
  console.log('==========================================\n');

  // Check if files exist
  if (!fs.existsSync(CHART1_FILE)) {
    console.error(`Error: Chart 1 file not found: ${CHART1_FILE}`);
    process.exit(1);
  }
  if (!fs.existsSync(CHART2_FILE)) {
    console.error(`Error: Chart 2 file not found: ${CHART2_FILE}`);
    process.exit(1);
  }
  if (!fs.existsSync(CHART3_FILE)) {
    console.error(`Error: Chart 3 file not found: ${CHART3_FILE}`);
    process.exit(1);
  }
  if (!fs.existsSync(JSON_FILE)) {
    console.error(`Error: JSON file not found: ${JSON_FILE}`);
    process.exit(1);
  }

  // Load existing JSON
  console.log('Loading existing JSON data...');
  const jsonData = JSON.parse(fs.readFileSync(JSON_FILE, 'utf-8'));
  console.log('  JSON loaded successfully\n');

  // Parse Chart 1 - Country Direction
  const wb1 = XLSX.readFile(CHART1_FILE);
  const countryDirectionData = parseCountryDirection(wb1);
  jsonData.countryDirection.timeSeries = countryDirectionData.timeSeries;
  jsonData.countryDirection.currentValues = countryDirectionData.currentValues;
  console.log('');

  // Parse Chart 2 - Parliamentary
  const wb2 = XLSX.readFile(CHART2_FILE);
  parseParliamentary(wb2, jsonData);
  console.log('');

  // Parse Chart 3 - Presidential
  const wb3 = XLSX.readFile(CHART3_FILE);
  parsePresidential(wb3, jsonData);
  console.log('');

  // Write updated JSON
  console.log('Writing updated JSON file...');
  fs.writeFileSync(JSON_FILE, JSON.stringify(jsonData, null, 2), 'utf-8');
  console.log('  JSON file updated successfully\n');

  console.log('==========================================');
  console.log('Conversion completed!');
  console.log('==========================================');
}

// Run the script
main();
