const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

(async () => {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext();
  const page = await context.newPage();
  
  const screenshotsDir = '/mnt/g/www/uelectoral.data/screenshots';
  if (!fs.existsSync(screenshotsDir)) {
    fs.mkdirSync(screenshotsDir, { recursive: true });
  }

  console.log('🚀 Starting visual testing of Uelectoral.data application...\n');

  try {
    // Navigate to the application
    console.log('📍 Navigating to http://localhost:3000...');
    await page.goto('http://localhost:3000', { waitUntil: 'networkidle' });
    await page.waitForTimeout(2000); // Wait for animations
    
    // Test 1: Hero Section
    console.log('\n✅ TEST 1: Hero Section');
    await page.screenshot({ path: path.join(screenshotsDir, '01-hero-section.png'), fullPage: false });
    console.log('   - Screenshot taken: 01-hero-section.png');
    
    // Check hero elements
    const heroTitle = await page.locator('h1').first().isVisible();
    const heroDate = await page.locator('text=/2025/').first().isVisible();
    console.log(`   - Hero title visible: ${heroTitle}`);
    console.log(`   - Date visible: ${heroDate}`);
    
    // Test 2: Methodology Section
    console.log('\n✅ TEST 2: Methodology Section');
    await page.locator('text=/Методологія|Methodology/').first().scrollIntoViewIfNeeded();
    await page.waitForTimeout(1000);
    await page.screenshot({ path: path.join(screenshotsDir, '02-methodology-section.png') });
    console.log('   - Screenshot taken: 02-methodology-section.png');
    
    // Test 3: Country Direction Section with Line Chart
    console.log('\n✅ TEST 3: Country Direction Section (Line Chart)');
    await page.locator('text=/напрямку країни|Country Direction/').first().scrollIntoViewIfNeeded();
    await page.waitForTimeout(1000);
    await page.screenshot({ path: path.join(screenshotsDir, '03-country-direction-chart.png') });
    console.log('   - Screenshot taken: 03-country-direction-chart.png');
    
    // Test 4: Presidential Election Section
    console.log('\n✅ TEST 4: Presidential Election Section (Bar Chart)');
    await page.locator('text=/Президентські вибори|Presidential Election/').first().scrollIntoViewIfNeeded();
    await page.waitForTimeout(1000);
    await page.screenshot({ path: path.join(screenshotsDir, '04-presidential-section.png') });
    console.log('   - Screenshot taken: 04-presidential-section.png');
    
    // Test expand/collapse for Presidential
    try {
      const showAllButton = await page.locator('button:has-text("Показати всі"), button:has-text("Show all")').first();
      const isShowAllVisible = await showAllButton.isVisible();
      console.log(`   - "Show all" button visible: ${isShowAllVisible}`);
      
      if (isShowAllVisible) {
        await showAllButton.click();
        await page.waitForTimeout(1000);
        await page.screenshot({ path: path.join(screenshotsDir, '04b-presidential-expanded.png') });
        console.log('   - Screenshot taken: 04b-presidential-expanded.png');
        
        const showLessButton = await page.locator('button:has-text("Показати менше"), button:has-text("Show less")').first();
        await showLessButton.click();
        await page.waitForTimeout(1000);
        console.log('   - Collapse tested successfully');
      }
    } catch (e) {
      console.log('   - Expand/collapse not available or error:', e.message);
    }
    
    // Test 5: Parliamentary Election Section
    console.log('\n✅ TEST 5: Parliamentary Election Section (Bar Chart)');
    await page.locator('text=/Парламентські вибори|Parliamentary Election/').first().scrollIntoViewIfNeeded();
    await page.waitForTimeout(1000);
    await page.screenshot({ path: path.join(screenshotsDir, '05-parliamentary-section.png') });
    console.log('   - Screenshot taken: 05-parliamentary-section.png');
    
    // Test expand/collapse for Parliamentary
    try {
      const parlShowAllButton = await page.locator('button:has-text("Показати всі"), button:has-text("Show all")').nth(1);
      const isParlShowAllVisible = await parlShowAllButton.isVisible();
      console.log(`   - "Show all" button visible: ${isParlShowAllVisible}`);
      
      if (isParlShowAllVisible) {
        await parlShowAllButton.click();
        await page.waitForTimeout(1000);
        await page.screenshot({ path: path.join(screenshotsDir, '05b-parliamentary-expanded.png') });
        console.log('   - Screenshot taken: 05b-parliamentary-expanded.png');
        
        const parlShowLessButton = await page.locator('button:has-text("Показати менше"), button:has-text("Show less")').nth(1);
        await parlShowLessButton.click();
        await page.waitForTimeout(1000);
        console.log('   - Collapse tested successfully');
      }
    } catch (e) {
      console.log('   - Expand/collapse not available or error:', e.message);
    }
    
    // Test 6: Thank You Section
    console.log('\n✅ TEST 6: Thank You Section');
    await page.locator('text=/Дякуємо|Thank You/').first().scrollIntoViewIfNeeded();
    await page.waitForTimeout(1000);
    await page.screenshot({ path: path.join(screenshotsDir, '06-thankyou-section.png') });
    console.log('   - Screenshot taken: 06-thankyou-section.png');
    
    // Test 7: Theme Switching
    console.log('\n✅ TEST 7: Theme Switching');
    await page.goto('http://localhost:3000', { waitUntil: 'networkidle' });
    await page.waitForTimeout(1000);
    
    // Find and click theme toggle
    try {
      const themeToggle = await page.locator('button[aria-label*="theme"], button[aria-label*="toggle"], button:has-text("☀️"), button:has-text("🌙")').first();
      await themeToggle.click();
      await page.waitForTimeout(1000);
      await page.screenshot({ path: path.join(screenshotsDir, '07-theme-light.png'), fullPage: true });
      console.log('   - Screenshot taken: 07-theme-light.png');
      
      await themeToggle.click();
      await page.waitForTimeout(1000);
      await page.screenshot({ path: path.join(screenshotsDir, '07b-theme-dark.png'), fullPage: true });
      console.log('   - Screenshot taken: 07b-theme-dark.png');
    } catch (e) {
      console.log('   - Theme toggle not found or error:', e.message);
    }
    
    // Test 8: Language Toggle
    console.log('\n✅ TEST 8: Language Toggle');
    try {
      const langToggle = await page.locator('button:has-text("EN"), button:has-text("UA"), button:has-text("🇺🇦"), button:has-text("🇬🇧")').first();
      await langToggle.click();
      await page.waitForTimeout(1000);
      await page.screenshot({ path: path.join(screenshotsDir, '08-language-english.png'), fullPage: true });
      console.log('   - Screenshot taken: 08-language-english.png');
      
      await langToggle.click();
      await page.waitForTimeout(1000);
      await page.screenshot({ path: path.join(screenshotsDir, '08b-language-ukrainian.png'), fullPage: true });
      console.log('   - Screenshot taken: 08b-language-ukrainian.png');
    } catch (e) {
      console.log('   - Language toggle not found or error:', e.message);
    }
    
    // Test 9: Navigation Links
    console.log('\n✅ TEST 9: Navigation Links');
    const navLinks = await page.locator('nav a, header a').count();
    console.log(`   - Navigation links found: ${navLinks}`);
    
    // Test 10: Responsive Layouts
    console.log('\n✅ TEST 10: Responsive Layouts');
    
    // Desktop
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.goto('http://localhost:3000', { waitUntil: 'networkidle' });
    await page.waitForTimeout(2000);
    await page.screenshot({ path: path.join(screenshotsDir, '09-desktop-1440px.png'), fullPage: true });
    console.log('   - Screenshot taken: 09-desktop-1440px.png');
    
    // Tablet
    await page.setViewportSize({ width: 768, height: 1024 });
    await page.goto('http://localhost:3000', { waitUntil: 'networkidle' });
    await page.waitForTimeout(2000);
    await page.screenshot({ path: path.join(screenshotsDir, '10-tablet-768px.png'), fullPage: true });
    console.log('   - Screenshot taken: 10-tablet-768px.png');
    
    // Mobile
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('http://localhost:3000', { waitUntil: 'networkidle' });
    await page.waitForTimeout(2000);
    await page.screenshot({ path: path.join(screenshotsDir, '11-mobile-375px.png'), fullPage: true });
    console.log('   - Screenshot taken: 11-mobile-375px.png');
    
    // Test mobile menu
    try {
      const mobileMenuButton = await page.locator('button[aria-label*="menu"], button:has-text("☰"), nav button').first();
      if (await mobileMenuButton.isVisible()) {
        await mobileMenuButton.click();
        await page.waitForTimeout(500);
        await page.screenshot({ path: path.join(screenshotsDir, '11b-mobile-menu-open.png') });
        console.log('   - Screenshot taken: 11b-mobile-menu-open.png');
      }
    } catch (e) {
      console.log('   - Mobile menu not available or error:', e.message);
    }
    
    // Test 11: Chart Interactions (Desktop view for better interaction)
    console.log('\n✅ TEST 11: Chart Interactions');
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.goto('http://localhost:3000', { waitUntil: 'networkidle' });
    await page.waitForTimeout(2000);
    
    // Scroll to line chart and hover
    await page.locator('text=/напрямку країни|Country Direction/').first().scrollIntoViewIfNeeded();
    await page.waitForTimeout(1000);
    
    // Try to find chart elements
    const chartElements = await page.locator('svg').count();
    console.log(`   - SVG chart elements found: ${chartElements}`);
    
    console.log('\n✅ TESTING COMPLETE!');
    console.log(`📸 All screenshots saved to: ${screenshotsDir}`);
    
  } catch (error) {
    console.error('\n❌ ERROR during testing:', error.message);
    await page.screenshot({ path: path.join(screenshotsDir, 'error-state.png'), fullPage: true });
    console.log('Error screenshot saved: error-state.png');
  } finally {
    await browser.close();
  }
})();
