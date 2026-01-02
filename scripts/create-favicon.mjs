import sharp from 'sharp';

const input = 'C:/Users/morgz/Downloads/Gemini_Generated_Image_89ye6589ye6589ye.png';

// Create a 32x32 favicon - just crop the center where the icon is
const image = sharp(input);
const metadata = await image.metadata();

// The icon is roughly centered, crop to just the icon area
const size = Math.min(metadata.width, metadata.height);
const iconSize = Math.floor(size * 0.6); // The actual icon takes ~60% of the image
const left = Math.floor((metadata.width - iconSize) / 2);
const top = Math.floor((metadata.height - iconSize) / 2);

await sharp(input)
  .extract({ left, top, width: iconSize, height: iconSize })
  .resize(192, 192) // Good size for favicons
  .png()
  .toFile('./public/favicon.png');

console.log('Favicon created at ./public/favicon.png');
