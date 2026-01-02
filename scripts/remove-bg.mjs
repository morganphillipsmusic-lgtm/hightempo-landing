import sharp from 'sharp';
import { readFileSync, writeFileSync } from 'fs';

const input = 'C:/Users/morgz/Downloads/Gemini_Generated_Image_89ye6589ye6589ye.png';
const output = './public/logo.png';

// Read image and make white/light gray pixels transparent
const image = sharp(input);
const { data, info } = await image.raw().ensureAlpha().toBuffer({ resolveWithObject: true });

// Process pixels - make light colors (near white) transparent
for (let i = 0; i < data.length; i += 4) {
  const r = data[i];
  const g = data[i + 1];
  const b = data[i + 2];

  // If pixel is light (close to white/light gray), make it transparent
  if (r > 200 && g > 200 && b > 200) {
    data[i + 3] = 0; // Set alpha to 0
  }
}

await sharp(data, { raw: { width: info.width, height: info.height, channels: 4 } })
  .png()
  .toFile(output);

console.log('Done! Saved to', output);
