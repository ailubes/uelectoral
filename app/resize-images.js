const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const imageDir = path.join(__dirname, 'public', 'images');

async function resizeImages() {
  try {
    // Resize logos to 512px width
    console.log('Resizing logos...');
    for (const logo of ['logo-dark.png', 'logo-light.png']) {
      const logoPath = path.join(imageDir, logo);
      const tempPath = path.join(imageDir, `${logo}.tmp`);
      if (fs.existsSync(logoPath)) {
        await sharp(logoPath)
          .resize(512, 256, { fit: 'inside', withoutEnlargement: true })
          .toFile(tempPath);
        fs.renameSync(tempPath, logoPath);
        const size = fs.statSync(logoPath).size;
        console.log(`✓ ${logo}: ${(size / 1024).toFixed(2)} KB`);
      }
    }

    // Resize favicon to 64x64
    console.log('\nResizing favicon...');
    const faviconPath = path.join(__dirname, 'public', 'favicon.png');
    const faviconTempPath = path.join(__dirname, 'public', 'favicon.png.tmp');
    if (fs.existsSync(faviconPath)) {
      await sharp(faviconPath)
        .resize(64, 64, { fit: 'contain', background: { r: 255, g: 255, b: 255, alpha: 1 } })
        .toFile(faviconTempPath);
      fs.renameSync(faviconTempPath, faviconPath);
      const size = fs.statSync(faviconPath).size;
      console.log(`✓ favicon.png: ${(size / 1024).toFixed(2)} KB`);
    }

    // Resize hero backgrounds to 1920px width max
    console.log('\nResizing hero backgrounds...');
    for (const bg of ['hero-bg.png', 'hero-bg-v2.png', 'hero-bg-v3.png']) {
      const bgPath = path.join(imageDir, bg);
      const tempPath = path.join(imageDir, `${bg}.tmp`);
      if (fs.existsSync(bgPath)) {
        await sharp(bgPath)
          .resize(1920, 1080, { fit: 'inside', withoutEnlargement: true })
          .png({ quality: 80, progressive: true })
          .toFile(tempPath);
        fs.renameSync(tempPath, bgPath);
        const size = fs.statSync(bgPath).size;
        console.log(`✓ ${bg}: ${(size / 1024).toFixed(2)} KB`);
      }
    }

    console.log('\n✅ All images resized successfully!');
  } catch (error) {
    console.error('Error resizing images:', error);
    process.exit(1);
  }
}

resizeImages();
