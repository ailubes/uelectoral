const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

(async () => {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext();
  const page = await context.newPage();

  const screenshotsDir = '/mnt/g/www/uelectoral.data/screenshots';
  if (!fs.existsSync(screenshotsDir)) {
    fs.mkdirSync(screenshotsDir, { recursive: true });
  }

  console.log('🔍 Testing Country Direction Chart Labels...\n');

  try {
    // Navigate to the application
    console.log('📍 Navigating to http://localhost:3000...');
    await page.goto('http://localhost:3000', { waitUntil: 'networkidle' });
    await page.waitForTimeout(3000); // Wait for charts to render

    // Scroll to Country Direction section
    console.log('📊 Scrolling to Country Direction chart...');
    await page.locator('text=/напрямку країни|Country Direction/').first().scrollIntoViewIfNeeded();
    await page.waitForTimeout(2000);

    // Take a screenshot of the chart
    const chartLocator = await page.locator('text=/напрямку країни|Country Direction/').first().locator('..').locator('..');
    await page.screenshot({
      path: path.join(screenshotsDir, 'chart-labels-test-ukrainian.png'),
      fullPage: false
    });
    console.log('✅ Screenshot taken: chart-labels-test-ukrainian.png');

    // Check for X-axis labels
    console.log('\n🔎 Checking X-axis labels...');
    const xAxisLabels = await page.locator('.recharts-xAxis .recharts-text').allTextContents();
    console.log(`   Found ${xAxisLabels.length} X-axis labels`);
    console.log(`   Sample labels: ${xAxisLabels.slice(0, 5).join(', ')}...`);

    // Check if any label contains "undefined"
    const hasUndefined = xAxisLabels.some(label => label.includes('undefined'));
    if (hasUndefined) {
      console.log('❌ ERROR: X-axis contains "undefined" labels!');
      console.log(`   Labels with undefined: ${xAxisLabels.filter(l => l.includes('undefined')).join(', ')}`);
    } else {
      console.log('✅ SUCCESS: No "undefined" labels found!');
    }

    // Verify labels have proper format (e.g., "Бер'22" or "Mar'22")
    const properFormat = xAxisLabels.every(label => {
      return label.match(/^[А-Яа-яA-Za-z]{3}'?\d{2,4}$/) || label.trim() === '';
    });

    if (properFormat) {
      console.log('✅ SUCCESS: Labels have proper format!');
    } else {
      console.log('⚠️  WARNING: Some labels may have improper format');
      console.log(`   All labels: ${xAxisLabels.join(', ')}`);
    }

    // Test language switch
    console.log('\n🌐 Testing language switch...');
    try {
      const langToggle = await page.locator('button:has-text("EN"), button:has-text("UA")').first();
      await langToggle.click();
      await page.waitForTimeout(2000);

      await page.locator('text=/напрямку країни|Country Direction/').first().scrollIntoViewIfNeeded();
      await page.waitForTimeout(1000);

      await page.screenshot({
        path: path.join(screenshotsDir, 'chart-labels-test-english.png'),
        fullPage: false
      });
      console.log('✅ Screenshot taken: chart-labels-test-english.png');

      const xAxisLabelsEN = await page.locator('.recharts-xAxis .recharts-text').allTextContents();
      console.log(`   English labels sample: ${xAxisLabelsEN.slice(0, 5).join(', ')}...`);

      const hasUndefinedEN = xAxisLabelsEN.some(label => label.includes('undefined'));
      if (hasUndefinedEN) {
        console.log('❌ ERROR: English X-axis contains "undefined" labels!');
      } else {
        console.log('✅ SUCCESS: English labels are working correctly!');
      }
    } catch (e) {
      console.log('⚠️  Could not test language switch:', e.message);
    }

    console.log('\n✅ CHART LABELS TEST COMPLETE!');
    console.log(`📸 Screenshots saved to: ${screenshotsDir}`);

  } catch (error) {
    console.error('\n❌ ERROR during testing:', error.message);
    console.error(error.stack);
    await page.screenshot({
      path: path.join(screenshotsDir, 'chart-labels-error.png'),
      fullPage: true
    });
  } finally {
    await browser.close();
  }
})();
