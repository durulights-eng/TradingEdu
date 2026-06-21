import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const storeAssetsDir = path.resolve('store_assets');

if (!fs.existsSync(storeAssetsDir)) {
  fs.mkdirSync(storeAssetsDir, { recursive: true });
}

async function renderAssets() {
  try {
    console.log('Rendering app_icon.png (512x512) from resources/icon.svg...');
    await sharp('resources/icon.svg')
      .resize(512, 512)
      .png()
      .toFile(path.join(storeAssetsDir, 'app_icon.png'));
    console.log('Successfully generated store_assets/app_icon.png');

    console.log('Rendering feature_graphic.png (1024x500) from resources/feature_graphic.svg...');
    await sharp('resources/feature_graphic.svg')
      .resize(1024, 500)
      .png()
      .toFile(path.join(storeAssetsDir, 'feature_graphic.png'));
    console.log('Successfully generated store_assets/feature_graphic.png');
    
    console.log('All vector assets rendered successfully!');
  } catch (error) {
    console.error('Error rendering SVG assets:', error);
    process.exit(1);
  }
}

renderAssets();
