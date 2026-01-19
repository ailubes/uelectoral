const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1920, height: 1080 } });
  
  await page.goto('http://localhost:3000');
  await page.waitForTimeout(2000);
  
  // Take screenshot focused on navbar-hero junction
  await page.screenshot({ path: '/tmp/test-navbar-hero-junction.png', clip: { x: 0, y: 0, width: 1920, height: 400 } });
  
  await browser.close();
})();
