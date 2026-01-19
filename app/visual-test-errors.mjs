import { chromium } from '@playwright/test';

(async () => {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    viewport: { width: 1920, height: 1080 }
  });
  const page = await context.newPage();

  console.log('Checking for Console Errors and Network Issues...\n');

  const consoleErrors = [];
  const networkErrors = [];

  page.on('console', msg => {
    if (msg.type() === 'error') {
      consoleErrors.push(msg.text());
    }
  });

  page.on('pageerror', error => {
    consoleErrors.push('Page Error: ' + error.message);
  });

  page.on('requestfailed', request => {
    const url = request.url();
    const errorText = request.failure().errorText;
    networkErrors.push('Failed: ' + url + ' - ' + errorText);
  });

  try {
    await page.goto('http://localhost:3000', { waitUntil: 'networkidle' });
    await page.waitForTimeout(3000);

    await page.evaluate(() => window.scrollBy(0, 800));
    await page.waitForTimeout(1000);
    await page.evaluate(() => window.scrollBy(0, 800));
    await page.waitForTimeout(1000);
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    await page.waitForTimeout(2000);

    console.log('Console Errors:', consoleErrors.length);
    if (consoleErrors.length > 0) {
      consoleErrors.forEach(error => console.log('  - ' + error));
    } else {
      console.log('  No console errors found!');
    }

    console.log('\nNetwork Errors:', networkErrors.length);
    if (networkErrors.length > 0) {
      networkErrors.forEach(error => console.log('  - ' + error));
    } else {
      console.log('  No network errors found!');
    }

    console.log('\nElement Checks:');
    
    const h1Count = await page.locator('h1').count();
    console.log('  H1 elements:', h1Count);
    
    const navLinks = await page.locator('nav a').count();
    console.log('  Navigation links:', navLinks);
    
    const buttons = await page.locator('button').count();
    console.log('  Buttons:', buttons);
    
    const sections = await page.locator('section').count();
    console.log('  Sections:', sections);

  } catch (error) {
    console.error('Error during testing:', error.message);
    throw error;
  } finally {
    await browser.close();
  }
})();
