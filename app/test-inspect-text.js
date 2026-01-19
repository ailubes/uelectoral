const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  
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
  
  // Scroll to about section and inspect text styles
  await page.evaluate(() => window.scrollTo(0, 800));
  await page.waitForTimeout(1000);
  
  // Get computed styles for various text elements
  const styles = await page.evaluate(() => {
    const results = {};
    
    // Try to find About section paragraph
    const aboutP = document.querySelector('section p, .container p, main p');
    if (aboutP) {
      const style = window.getComputedStyle(aboutP);
      results.aboutParagraph = {
        color: style.color,
        backgroundColor: style.backgroundColor,
        display: style.display,
        visibility: style.visibility,
        opacity: style.opacity,
        text: aboutP.textContent.substring(0, 100)
      };
    }
    
    return results;
  });
  
  console.log('Text styles:', JSON.stringify(styles, null, 2));
  
  await browser.close();
})();
