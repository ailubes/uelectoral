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

  console.log('Starting visual test of U Electoral Data website...\n');

  try {
    // Navigate and check hero section
    console.log('1. Testing Hero Section...');
    await page.goto('http://localhost:3000', { waitUntil: 'networkidle' });
    await page.waitForTimeout(2000);
    
    await page.screenshot({ 
      path: join(screenshotDir, '01-hero-section.png'),
      fullPage: false 
    });
    console.log('   Screenshot saved: 01-hero-section.png');

    const heroHeadline = await page.locator('text=/U electoral|data\\./i').first();
    const headlineVisible = await heroHeadline.isVisible();
    console.log('   Hero headline visible:', headlineVisible);

    const heroSection = page.locator('section').first();
    const heroHeight = await heroSection.evaluate(el => el.offsetHeight);
    const viewportSize = page.viewportSize();
    console.log('   Hero height:', heroHeight, 'px (viewport:', viewportSize.height, 'px)');

    // Typography check
    console.log('\n2. Testing Typography...');
    const headlineFont = await page.evaluate(() => {
      const h1 = document.querySelector('h1');
      return h1 ? window.getComputedStyle(h1).fontFamily : 'not found';
    });
    console.log('   Font family on h1:', headlineFont);

    const ukrainianText = await page.locator('text=/Проєкт|Методологія|Дякуємо/i').first();
    const ukrainianVisible = await ukrainianText.isVisible().catch(() => false);
    console.log('   Ukrainian text visible:', ukrainianVisible);

    // Scroll and check sections
    console.log('\n3. Testing Scroll and Sections...');
    await page.evaluate(() => window.scrollBy(0, 800));
    await page.waitForTimeout(1000);
    await page.screenshot({ 
      path: join(screenshotDir, '02-about-section.png'),
      fullPage: false 
    });
    console.log('   Screenshot saved: 02-about-section.png');

    await page.evaluate(() => window.scrollBy(0, 800));
    await page.waitForTimeout(1000);
    await page.screenshot({ 
      path: join(screenshotDir, '03-methodology-section.png'),
      fullPage: false 
    });
    console.log('   Screenshot saved: 03-methodology-section.png');

    // Language toggle
    console.log('\n4. Testing Language Toggle...');
    await page.evaluate(() => window.scrollTo(0, 0));
    await page.waitForTimeout(500);
    
    const langToggle = page.locator('button').filter({ hasText: /EN|UA|English|Українська/i }).first();
    const toggleExists = await langToggle.count() > 0;
    console.log('   Language toggle found:', toggleExists);

    if (toggleExists) {
      await langToggle.click();
      await page.waitForTimeout(1000);
      await page.screenshot({ 
        path: join(screenshotDir, '04-language-toggle-english.png'),
        fullPage: false 
      });
      console.log('   Screenshot saved: 04-language-toggle-english.png');
    }

    // Thank You section
    console.log('\n5. Testing Thank You Section...');
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    await page.waitForTimeout(2000);
    await page.screenshot({ 
      path: join(screenshotDir, '05-thank-you-section.png'),
      fullPage: false 
    });
    console.log('   Screenshot saved: 05-thank-you-section.png');

    // Full page screenshot
    console.log('\nTaking full page screenshot...');
    await page.evaluate(() => window.scrollTo(0, 0));
    await page.waitForTimeout(500);
    await page.screenshot({ 
      path: join(screenshotDir, '06-full-page.png'),
      fullPage: true 
    });
    console.log('   Screenshot saved: 06-full-page.png');

    console.log('\nVisual testing complete! Screenshots saved to /tmp/screenshots/');

  } catch (error) {
    console.error('Error during testing:', error.message);
    console.error(error.stack);
    throw error;
  } finally {
    await browser.close();
  }
})();
