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

  try {
    await page.goto('http://localhost:3000', { waitUntil: 'networkidle' });
    await page.waitForTimeout(3000);
    
    console.log('DETAILED VALUE VERIFICATION\n');
    
    // Presidential Section
    const presSection = await page.locator('section').filter({ hasText: /Президент/ }).first();
    const presText = await presSection.textContent();
    
    console.log('PRESIDENTIAL CHART VALUES:');
    const presLines = presText.split('\n').filter(line => line.trim());
    presLines.forEach(line => {
      if (/Зеленськ|Залужн|Порошенко|Буданов|Разумков/.test(line)) {
        console.log('  ', line.trim());
      }
    });
    
    // Parliamentary Section
    const parlSection = await page.locator('section').filter({ hasText: /Парламент/ }).first();
    const parlText = await parlSection.textContent();
    
    console.log('\nPARLIAMENTARY CHART VALUES:');
    const parlLines = parlText.split('\n').filter(line => line.trim());
    parlLines.forEach(line => {
      if (/Партія|Європейська|Азов|Розумна/.test(line)) {
        console.log('  ', line.trim());
      }
    });
    
    // Hover on Presidential bars to see exact values
    await presSection.scrollIntoViewIfNeeded();
    await page.waitForTimeout(1000);
    
    // Take close-up of top candidates
    const topCandidatesBox = await presSection.locator('text=Володимир Зеленський').boundingBox();
    if (topCandidatesBox) {
      await page.screenshot({ 
        path: path.join(screenshotsDir, '02b-presidential-top-candidates-closeup.png'),
        clip: {
          x: topCandidatesBox.x - 50,
          y: topCandidatesBox.y - 50,
          width: 900,
          height: 300
        }
      });
      console.log('\nCloseup screenshot: 02b-presidential-top-candidates-closeup.png');
    }
    
  } catch (error) {
    console.error('ERROR:', error.message);
  } finally {
    await browser.close();
  }
})();
