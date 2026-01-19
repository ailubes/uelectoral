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
  
  // Find and scroll to About section
  const aboutSection = await page.locator('section:has-text("Про проект"), section:has-text("About"), h2:has-text("Про проект")').first();
  await aboutSection.scrollIntoViewIfNeeded();
  await page.waitForTimeout(1000);
  
  // Take screenshot of about section area
  await page.screenshot({ path: '/tmp/test-about-section.png' });
  
  // Also get a screenshot showing the about section specifically
  const aboutBox = await aboutSection.boundingBox();
  if (aboutBox) {
    await page.screenshot({ 
      path: '/tmp/test-about-section-focused.png',
      clip: {
        x: 0,
        y: aboutBox.y - 100,
        width: page.viewportSize().width,
        height: 600
      }
    });
  }
  
  await browser.close();
})();
