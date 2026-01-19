const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  
  // Navigate to homepage
  await page.goto('http://localhost:3000');
  await page.waitForTimeout(2000);
  
  // Switch to light mode
  try {
    const themeDropdown = await page.locator('[role="button"]:has-text("System")').or(page.locator('button:has([class*="sun"])').or(page.locator('button:has([class*="moon"])')));
    await themeDropdown.first().click({ timeout: 5000 });
    await page.waitForTimeout(1000);
    await page.locator('text=Light').first().click({ timeout: 5000 });
    await page.waitForTimeout(2000);
  } catch (e) {
    console.log('Theme toggle:', e.message);
  }
  
  // Scroll down to about section (approximately)
  await page.evaluate(() => window.scrollTo(0, 800));
  await page.waitForTimeout(1000);
  await page.screenshot({ path: '/tmp/test-about-area.png' });
  
  // Scroll to methodology section
  await page.evaluate(() => window.scrollTo(0, 1500));
  await page.waitForTimeout(1000);
  await page.screenshot({ path: '/tmp/test-methodology-area.png' });
  
  // Scroll to movement section
  await page.evaluate(() => window.scrollTo(0, 2500));
  await page.waitForTimeout(1000);
  await page.screenshot({ path: '/tmp/test-movement-area.png' });
  
  await browser.close();
})();
