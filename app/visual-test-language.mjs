import { chromium } from '@playwright/test';
import { mkdirSync } from 'fs';
import { join } from 'path';

const screenshotDir = '/tmp/screenshots';
mkdirSync(screenshotDir, { recursive: true });

(async () => {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    viewport: { width: 1920, height: 1080 }
  });
  const page = await context.newPage();

  console.log('Testing Language Toggle...\n');

  try {
    await page.goto('http://localhost:3000', { waitUntil: 'networkidle' });
    await page.waitForTimeout(1000);

    // Look for language selector button (with Languages icon) - use first()
    const langButton = page.locator('button[aria-label="Select language"]').first();
    const buttonExists = await langButton.count() > 0;
    console.log('Language selector button found:', buttonExists);

    if (buttonExists) {
      // Take screenshot before clicking
      await page.screenshot({ 
        path: join(screenshotDir, '07-before-language-change.png'),
        fullPage: false 
      });
      console.log('Screenshot saved: 07-before-language-change.png');

      // Click the language selector button
      await langButton.click();
      await page.waitForTimeout(500);

      // Take screenshot of dropdown
      await page.screenshot({ 
        path: join(screenshotDir, '08-language-dropdown.png'),
        fullPage: false 
      });
      console.log('Screenshot saved: 08-language-dropdown.png');

      // Click on English option
      const englishOption = page.getByText('English').first();
      const englishExists = await englishOption.count() > 0;
      console.log('English option found:', englishExists);

      if (englishExists) {
        await englishOption.click();
        await page.waitForTimeout(1000);

        // Take screenshot after language change
        await page.screenshot({ 
          path: join(screenshotDir, '09-after-english-selected.png'),
          fullPage: false 
        });
        console.log('Screenshot saved: 09-after-english-selected.png');

        // Verify text changed - scroll to About section
        await page.evaluate(() => window.scrollBy(0, 800));
        await page.waitForTimeout(500);
        
        await page.screenshot({ 
          path: join(screenshotDir, '10-english-about-section.png'),
          fullPage: false 
        });
        console.log('Screenshot saved: 10-english-about-section.png');
      }
    }

    console.log('\nLanguage toggle test complete!');

  } catch (error) {
    console.error('Error during testing:', error.message);
    throw error;
  } finally {
    await browser.close();
  }
})();
