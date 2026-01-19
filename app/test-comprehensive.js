const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1920, height: 1080 } });
  
  await page.goto('http://localhost:3000');
  await page.waitForTimeout(2000);
  
  // Switch to light mode
  try {
    const themeDropdown = await page.locator('[role="button"]:has-text("System")').or(page.locator('button:has([class*="sun"])').or(page.locator('button:has([class*="moon"])')));
    await themeDropdown.first().click({ timeout: 5000 });
    await page.waitForTimeout(1000);
    await page.locator('text=Light').first().click({ timeout: 5000 });
    await page.waitForTimeout(2000);
  } catch (e) {}
  
  // Take full page screenshot in light mode
  await page.screenshot({ path: '/tmp/test-lightmode-comprehensive.png', fullPage: true });
  
  // Scroll to specific sections and capture
  await page.evaluate(() => window.scrollTo(0, 900));
  await page.waitForTimeout(500);
  await page.screenshot({ path: '/tmp/test-about-detailed.png' });
  
  await page.evaluate(() => window.scrollTo(0, 1600));
  await page.waitForTimeout(500);
  await page.screenshot({ path: '/tmp/test-methodology-detailed.png' });
  
  await browser.close();
})();
