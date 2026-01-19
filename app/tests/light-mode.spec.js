const { test, expect } = require('@playwright/test');

test.describe('Light Mode Visual Tests', () => {
  test('Test light mode fixes', async ({ page }) => {
    // Set viewport to desktop size
    await page.setViewportSize({ width: 1920, height: 1080 });

    console.log('Step 1: Navigate to homepage and check hero section gap');
    await page.goto('http://localhost:3000', { waitUntil: 'networkidle' });
    await page.waitForTimeout(2000);
    
    // Take screenshot of initial dark mode state
    await page.screenshot({ path: '/tmp/01-homepage-dark-mode.png', fullPage: false });
    console.log('Screenshot saved: 01-homepage-dark-mode.png');

    // Measure gap between navbar and hero
    const gap = await page.evaluate(() => {
      const navbar = document.querySelector('nav');
      const hero = document.querySelector('section');
      if (navbar && hero) {
        const navBottom = navbar.getBoundingClientRect().bottom;
        const heroTop = hero.getBoundingClientRect().top;
        return heroTop - navBottom;
      }
      return -1;
    });
    console.log(`Gap between navbar and hero: ${gap}px`);

    console.log('\nStep 2: Switch to Light Mode');
    // Try multiple selectors for theme toggle
    let clicked = false;
    
    // Try clicking button with theme-related text or icon
    const buttons = await page.locator('button').all();
    for (const button of buttons) {
      const text = await button.textContent();
      const ariaLabel = await button.getAttribute('aria-label');
      if (text?.includes('🌙') || text?.includes('☀') || ariaLabel?.toLowerCase().includes('theme')) {
        await button.click();
        clicked = true;
        break;
      }
    }
    
    if (clicked) {
      await page.waitForTimeout(1000);
      
      // Try to click on light mode option
      try {
        await page.click('text=/light/i', { timeout: 2000 });
        await page.waitForTimeout(1000);
      } catch (e) {
        console.log('Light mode option not found or already in light mode');
      }
      
      await page.screenshot({ path: '/tmp/02-homepage-light-mode.png', fullPage: false });
      console.log('Screenshot saved: 02-homepage-light-mode.png');
    } else {
      console.log('Theme toggle not found');
    }

    console.log('\nStep 3: Check About Section');
    await page.evaluate(() => {
      const sections = document.querySelectorAll('section');
      for (const section of sections) {
        if (section.textContent.includes('Про проєкт') || section.id === 'about') {
          section.scrollIntoView({ behavior: 'smooth' });
          break;
        }
      }
    });
    await page.waitForTimeout(2000);
    await page.screenshot({ path: '/tmp/03-about-section-light.png', fullPage: false });
    console.log('Screenshot saved: 03-about-section-light.png');

    const aboutTextColor = await page.evaluate(() => {
      const sections = document.querySelectorAll('section');
      for (const section of sections) {
        if (section.textContent.includes('Про проєкт') || section.id === 'about') {
          const p = section.querySelector('p');
          return p ? window.getComputedStyle(p).color : 'not found';
        }
      }
      return 'section not found';
    });
    console.log(`About section text color: ${aboutTextColor}`);

    console.log('\nStep 4: Check Methodology Section');
    await page.evaluate(() => {
      const sections = document.querySelectorAll('section');
      for (const section of sections) {
        if (section.textContent.includes('Методологія') || section.id === 'methodology') {
          section.scrollIntoView({ behavior: 'smooth' });
          break;
        }
      }
    });
    await page.waitForTimeout(2000);
    await page.screenshot({ path: '/tmp/04-methodology-section-light.png', fullPage: false });
    console.log('Screenshot saved: 04-methodology-section-light.png');

    const cardTextColor = await page.evaluate(() => {
      const cardText = document.querySelector('[class*="card"] p, [class*="Card"] p, [class*="method"] p');
      return cardText ? window.getComputedStyle(cardText).color : 'not found';
    });
    console.log(`Card text color: ${cardTextColor}`);

    console.log('\nStep 5: Check Chart Sections');
    await page.evaluate(() => {
      const sections = document.querySelectorAll('section');
      for (const section of sections) {
        if (section.textContent.includes('Напрям країни') || section.textContent.includes('Country Direction')) {
          section.scrollIntoView({ behavior: 'smooth' });
          break;
        }
      }
    });
    await page.waitForTimeout(2000);
    await page.screenshot({ path: '/tmp/05-chart-section-light.png', fullPage: false });
    console.log('Screenshot saved: 05-chart-section-light.png');

    console.log('\nStep 6: Check Thank You Section');
    await page.evaluate(() => {
      window.scrollTo(0, document.body.scrollHeight);
    });
    await page.waitForTimeout(2000);
    await page.screenshot({ path: '/tmp/06-thankyou-section.png', fullPage: false });
    console.log('Screenshot saved: 06-thankyou-section.png');

    const thankYouBg = await page.evaluate(() => {
      const sections = document.querySelectorAll('section');
      for (const section of sections) {
        if (section.textContent.includes('Дякуємо')) {
          return window.getComputedStyle(section).backgroundColor;
        }
      }
      const footer = document.querySelector('footer');
      return footer ? window.getComputedStyle(footer).backgroundColor : 'not found';
    });
    console.log(`Thank you section background: ${thankYouBg}`);

    console.log('\nTaking full page screenshot in light mode');
    await page.evaluate(() => window.scrollTo(0, 0));
    await page.waitForTimeout(1000);
    await page.screenshot({ path: '/tmp/07-fullpage-light-mode.png', fullPage: true });
    console.log('Screenshot saved: 07-fullpage-light-mode.png');

    console.log('\nAll tests completed!');
  });
});
