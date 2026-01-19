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

  console.log('Testing Dark Mode Toggle...\n');

  try {
    await page.goto('http://localhost:3000', { waitUntil: 'networkidle' });
    await page.waitForTimeout(1000);

    const themeToggle = page.locator('button').filter({ hasText: /Toggle theme|theme/i }).first();
    const toggleCount = await themeToggle.count();
    
    if (toggleCount === 0) {
      const allButtons = page.locator('button[aria-label*="theme"]');
      const themeButtonCount = await allButtons.count();
      console.log('Theme toggle buttons found:', themeButtonCount);
      
      if (themeButtonCount > 0) {
        const firstThemeButton = allButtons.first();
        await firstThemeButton.click();
        await page.waitForTimeout(1000);
        
        await page.screenshot({ 
          path: join(screenshotDir, '15-theme-toggled.png'),
          fullPage: false 
        });
        console.log('Screenshot saved: 15-theme-toggled.png');
      } else {
        console.log('No theme toggle found - dark mode may be default');
      }
    }

  } catch (error) {
    console.error('Error during testing:', error.message);
  } finally {
    await browser.close();
  }
})();
