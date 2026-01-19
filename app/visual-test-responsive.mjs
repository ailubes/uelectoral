import { chromium } from '@playwright/test';
import { mkdirSync } from 'fs';
import { join } from 'path';

const screenshotDir = '/tmp/screenshots';
mkdirSync(screenshotDir, { recursive: true });

(async () => {
  const browser = await chromium.launch({ headless: true });

  console.log('Testing Responsive Design...\n');

  try {
    // Test Mobile (375x667 - iPhone SE)
    console.log('1. Testing Mobile View (375x667)...');
    const mobileContext = await browser.newContext({
      viewport: { width: 375, height: 667 }
    });
    const mobilePage = await mobileContext.newPage();
    await mobilePage.goto('http://localhost:3000', { waitUntil: 'networkidle' });
    await mobilePage.waitForTimeout(2000);
    
    await mobilePage.screenshot({ 
      path: join(screenshotDir, '11-mobile-hero.png'),
      fullPage: false 
    });
    console.log('   Screenshot saved: 11-mobile-hero.png');

    await mobilePage.evaluate(() => window.scrollBy(0, 600));
    await mobilePage.waitForTimeout(500);
    await mobilePage.screenshot({ 
      path: join(screenshotDir, '12-mobile-about.png'),
      fullPage: false 
    });
    console.log('   Screenshot saved: 12-mobile-about.png');
    
    await mobileContext.close();

    // Test Tablet (768x1024 - iPad)
    console.log('\n2. Testing Tablet View (768x1024)...');
    const tabletContext = await browser.newContext({
      viewport: { width: 768, height: 1024 }
    });
    const tabletPage = await tabletContext.newPage();
    await tabletPage.goto('http://localhost:3000', { waitUntil: 'networkidle' });
    await tabletPage.waitForTimeout(2000);
    
    await tabletPage.screenshot({ 
      path: join(screenshotDir, '13-tablet-hero.png'),
      fullPage: false 
    });
    console.log('   Screenshot saved: 13-tablet-hero.png');

    await tabletPage.evaluate(() => window.scrollBy(0, 800));
    await tabletPage.waitForTimeout(500);
    await tabletPage.screenshot({ 
      path: join(screenshotDir, '14-tablet-about.png'),
      fullPage: false 
    });
    console.log('   Screenshot saved: 14-tablet-about.png');
    
    await tabletContext.close();

    console.log('\nResponsive design test complete!');

  } catch (error) {
    console.error('Error during testing:', error.message);
    throw error;
  } finally {
    await browser.close();
  }
})();
