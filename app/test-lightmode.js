const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  
  // Navigate to homepage
  await page.goto('http://localhost:3000');
  await page.waitForTimeout(2000);
  
  // Try to find theme toggle - it might be a dropdown trigger
  try {
    // Look for theme icon/button in the header navigation
    const themeDropdown = await page.locator('[role="button"]:has-text("System")').or(page.locator('button:has([class*="sun"])').or(page.locator('button:has([class*="moon"])')));
    await themeDropdown.first().click({ timeout: 5000 });
    await page.waitForTimeout(1000);
    
    // Click on "Light" option
    await page.locator('text=Light').first().click({ timeout: 5000 });
    await page.waitForTimeout(2000);
  } catch (e) {
    console.log('Theme toggle error:', e.message);
  }
  
  // Take screenshots
  await page.screenshot({ path: '/tmp/test-lightmode-full.png', fullPage: true });
  await page.screenshot({ path: '/tmp/test-lightmode-hero.png' });
  
  await browser.close();
})();
