import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const optimizeWebp = (icons, size = 480) => {
  for (const icon of icons) {
    const image = sharp(fs.readFileSync(path.resolve(__dirname, '../assets', icon)));
    const newIconName = icon.replace(/\.(png|jpg|webp)$/, `.webp`);
    image
      .resize(size, size)
      .webp()
      .toFile(path.resolve(__dirname, '../../packages/assets-logo/assets', newIconName));
    console.log(`✅ ${icon}`);
  }
};

export default optimizeWebp;
