const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

(async () => {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    viewport: { width: 1440, height: 900 }
  });
  const page = await context.newPage();
  
  const screenshotsDir = '/mnt/g/www/uelectoral.data/screenshots/real-data-tests';
  if (!fs.existsSync(screenshotsDir)) {
    fs.mkdirSync(screenshotsDir, { recursive: true });
  }

  console.log('Testing Electoral Data Charts with Real Data\n');

  try {
    console.log('Navigating to http://localhost:3000...');
    await page.goto('http://localhost:3000', { waitUntil: 'networkidle', timeout: 30000 });
    await page.waitForTimeout(3000);
    
    await page.screenshot({ path: path.join(screenshotsDir, '00-full-page.png'), fullPage: true });
    console.log('Full page screenshot: 00-full-page.png\n');
    
    console.log('='.repeat(60));
    console.log('TEST 1: Country Direction Line Chart (Вектор руху)');
    console.log('='.repeat(60));
    
    const countryDirectionHeading = await page.locator('text=/Вектор руху|Country Direction/i').first();
    await countryDirectionHeading.scrollIntoViewIfNeeded();
    await page.waitForTimeout(2000);
    
    const countrySection = await page.locator('section').filter({ hasText: /Вектор руху|Country Direction/ }).first();
    await countrySection.screenshot({ path: path.join(screenshotsDir, '01-country-direction-chart.png') });
    console.log('Screenshot: 01-country-direction-chart.png');
    
    const allSvgs = await page.locator('svg').all();
    console.log('Total SVG charts found:', allSvgs.length);
    
    if (allSvgs.length > 0) {
      const svgText = await page.locator('svg').first().locator('text').allTextContents();
      console.log('SVG text elements:', svgText.length);
      console.log('Sample values:', svgText.slice(0, 15).join(', '));
      
      const hasPercentages = svgText.some(text => text.includes('%'));
      const hasDates = svgText.some(text => /202[2-5]/.test(text) || /бер|кві|тра|чер|лип|сер|вер|жов|лис|гру/i.test(text));
      console.log('Contains percentages:', hasPercentages);
      console.log('Contains date labels:', hasDates);
    }
    
    console.log('\n' + '='.repeat(60));
    console.log('TEST 2: Presidential Election Bar Chart (Президент)');
    console.log('='.repeat(60));
    
    const presidentialHeading = await page.locator('text=/Президент|Presidential/i').first();
    await presidentialHeading.scrollIntoViewIfNeeded();
    await page.waitForTimeout(2000);
    
    const presSection = await page.locator('section').filter({ hasText: /Президент|Presidential/ }).first();
    await presSection.screenshot({ path: path.join(screenshotsDir, '02-presidential-chart.png') });
    console.log('Screenshot: 02-presidential-chart.png');
    
    const presText = await presSection.allTextContents();
    const presFullText = presText.join(' ');
    
    console.log('Contains Zelenskyy:', /Зеленськ|Zelensky/i.test(presFullText));
    console.log('Contains Zaluzhnyi:', /Залужн|Zaluzhn/i.test(presFullText));
    
    const presPercentages = presFullText.match(/\d+\.?\d*%/g);
    if (presPercentages) {
      console.log('Percentages found:', presPercentages.length);
      console.log('Top 5 values:', presPercentages.slice(0, 5).join(', '));
      
      const hasExpectedZelenskyy = presPercentages.some(p => /23\.|24\.|22\./.test(p));
      const hasExpectedZaluzhnyi = presPercentages.some(p => /17\.|16\.|18\./.test(p));
      console.log('Has ~23% (Zelenskyy expected):', hasExpectedZelenskyy);
      console.log('Has ~17% (Zaluzhnyi expected):', hasExpectedZaluzhnyi);
      
      const hasMockData = presPercentages.some(p => p === '50%' || p === '25%' || p === '12.5%');
      console.log('Contains mock data (50%, 25%, 12.5%):', hasMockData ? 'YES - PROBLEM!' : 'NO - Good');
    }
    
    console.log('\n' + '='.repeat(60));
    console.log('TEST 3: Parliamentary Election Bar Chart (Парламент)');
    console.log('='.repeat(60));
    
    const parliamentaryHeading = await page.locator('text=/Парламент|Parliamentary/i').first();
    await parliamentaryHeading.scrollIntoViewIfNeeded();
    await page.waitForTimeout(2000);
    
    const parlSection = await page.locator('section').filter({ hasText: /Парламент|Parliamentary/ }).first();
    await parlSection.screenshot({ path: path.join(screenshotsDir, '03-parliamentary-chart.png') });
    console.log('Screenshot: 03-parliamentary-chart.png');
    
    const parlText = await parlSection.allTextContents();
    const parlFullText = parlText.join(' ');
    
    const parlPercentages = parlFullText.match(/\d+\.?\d*%/g);
    if (parlPercentages) {
      console.log('Percentages found:', parlPercentages.length);
      console.log('Top 5 values:', parlPercentages.slice(0, 5).join(', '));
      
      const hasExpectedZaluzhnyiParty = parlPercentages.some(p => /18\.|17\.|19\./.test(p));
      const hasExpectedZelenskyyParty = parlPercentages.some(p => /16\.|15\.|17\./.test(p));
      console.log('Has ~18% (Zaluzhnyi Party expected):', hasExpectedZaluzhnyiParty);
      console.log('Has ~16% (Zelenskyy Party expected):', hasExpectedZelenskyyParty);
      
      const hasMockData = parlPercentages.some(p => p === '50%' || p === '25%' || p === '12.5%');
      console.log('Contains mock data:', hasMockData ? 'YES - PROBLEM!' : 'NO - Good');
    }
    
    console.log('\n' + '='.repeat(60));
    console.log('TESTING COMPLETE');
    console.log('='.repeat(60));
    console.log('\nAll screenshots saved to:', screenshotsDir);
    console.log('\nPlease review screenshots to verify:');
    console.log('- Charts are rendering correctly');
    console.log('- Real data is displayed (not mock data)');
    console.log('- Values match expected ranges');
    
  } catch (error) {
    console.error('\nERROR:', error.message);
    await page.screenshot({ path: path.join(screenshotsDir, 'error-state.png'), fullPage: true });
    console.log('Error screenshot: error-state.png');
    process.exit(1);
  } finally {
    await browser.close();
  }
})();
